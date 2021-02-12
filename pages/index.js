import Welcome from "../components/index/Welcome";
import Filtru from "../components/index/Filtru";
import Recomandari from '../components/index/Recomandari'
import IndexStyle from '../styles/IndexStyle'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import ShopMenu from "../components/layout/ShopMenu";
import Navbar from "../components/layout/Navbar";
import fetchCart from "../utils/fetchCart";
import Cookies from 'js-cookie';
import ImagesShow from "../components/index/ImagesShow";

export default function Home({_anvelope, filtru, initialCart}) {
  const [filtruList, setFiltruList] = useState(filtru)
  const [filterSearch, setFilterSearch] = useState(FILTER_DATA)
  const [cart, setCart] = useState(initialCart);
  const router = useRouter()
  const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=> {
        let _totalPrice = 0;
        cart.forEach(item => _totalPrice += item.pret * item.cantitate);
        setTotalPrice(_totalPrice)
    }, [cart])

  async function handleChangeFilterSearch(e){
      let _filterSearch = {};
      if(e.target.name === "inaltime" || e.target.name === "latime") 
          _filterSearch = {...filterSearch, [e.target.name]: Number(e.target.value)}
      else _filterSearch = {...filterSearch, [e.target.name]: e.target.value}
      setFilterSearch(_filterSearch)

      const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/filtru`,
      {
      method:"POST",
      headers: {
          "Content-Type":"application/json"
      },
      body: JSON.stringify(_filterSearch)
      })
      const data = await res.json()
      const _filtruListSortat = HandleFilterParams(data.filtru);
      setFiltruList(_filtruListSortat)
  }

  async function deleteItemFromCart(ID_STORAGE) {
    const cartId = Cookies.get("cart");
    const data = {
        id_storage: ID_STORAGE,
        id_cart: cartId === undefined ? -1 : JSON.parse(cartId) 
    }
    
    const response = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/cart/delete`, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    const res = await response.json();
    const _cart = cart.filter(item=>item.id_storage !== ID_STORAGE)
    setCart(_cart) 
}

  function handleSubmitFilterSearch() {
      const options = Object.entries(filterSearch);
      let urlString = `/anvelope`;
      for (const opt of options) {
        if(opt[1] !== "null" && opt[1] !== 0){
          if(urlString === `/anvelope`) urlString += `?${opt[0]}=${opt[1]}`
          else urlString += `&${opt[0]}=${opt[1]}`;
        }
      }
      router.push(urlString)
  }

  async function handleAddToCart(idAnvelopa){
    const cartId = Cookies.get("cart");
    
    const data = {
        id_anvelopa: idAnvelopa,
        cantitate: 1,
        id_cart: cartId === undefined || cartId === "undefined"  ? -1 : JSON.parse(cartId) 
    }
    
    const response = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/cart/add`, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    const res = await response.json();
    Cookies.set("cart", JSON.stringify(res.id_cart))
    document.getElementById('open-side-bar-menu').click()
    const _cart = await fetchCart();
    setCart(_cart) 
}

  return (
    <div>
    <ShopMenu cart={cart} totalPrice={totalPrice} handleDelete={deleteItemFromCart}/>
    <Navbar cart={cart} totalPrice={totalPrice}/>
      <Welcome />
      <div style={{backgroundColor:"rgba(232, 229, 229, 0.47)"}}>
          <Filtru filtruInitial={filtru} handleChangeFilterSearch={handleChangeFilterSearch} filtru={filtruList} handleSubmitFilterSearch={handleSubmitFilterSearch}/>
          <Recomandari handleAdd={handleAddToCart} anvelope={_anvelope} />
      </div>
      <ImagesShow/>
      <IndexStyle/>
    </div>
  )
}

const FILTER_DATA = {
  categorie:"null",
  latime:0,
  inaltime:0,
  diametru:"null",
  sezon:"null"
}

function HandleFilterParams(filtru){
  let filtruParams = {
      diametru: [],
      inaltime:[],
      latime:[],
      sezon:[],
      categorie:[]
  }

  for (const param of filtru) {
      if(!filtruParams.diametru.includes(param.diametru)) filtruParams.diametru.push(param.diametru);
      if(!filtruParams.inaltime.includes(param.inaltime)) filtruParams.inaltime.push(param.inaltime);
      if(!filtruParams.latime.includes(param.latime)) filtruParams.latime.push(param.latime);
      if(!filtruParams.sezon.includes(param.sezon)) filtruParams.sezon.push(param.sezon);
      if(!filtruParams.categorie.includes(param.categorie)) filtruParams.categorie.push(param.categorie);
  }

  filtruParams.latime.sort(function(a,b){
      return a-b
  })

  filtruParams.inaltime.sort(function(a,b){
      return a-b
  })

  filtruParams.diametru.sort(function(a,b){
      return Number(a.slice(1))-Number(b.slice(1))
  })

  return filtruParams;
}

export async function getServerSideProps({req}) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/recomandate`)
    const data = await res.json()

    const res2 = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/filtru`,
    {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(FILTER_DATA)
    })
    const data2 = await res2.json()
    const filtru = HandleFilterParams(data2.filtru)

    const initialCart = await fetchCart(req);

    return { props: { _anvelope: data.anvelope, filtru, initialCart } }
  }

