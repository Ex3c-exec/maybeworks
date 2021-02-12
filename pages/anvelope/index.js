import React, { useState, useRef, useEffect } from 'react'
import Product from '../../components/Product'
import Filtru from '../../components/produse/Filtru'
import Pagination from '../../components/produse/Pagination'
import ProduseStyle from '../../styles/ProduseStyle'
import Navbar from '../../components/layout/Navbar'
import ShopMenu from '../../components/layout/ShopMenu'
import fetchCart from "../../utils/fetchCart";
import Cookies from 'js-cookie';

const FILTER_DATA = {
    categorie:"null",
    latime:0,
    inaltime:0,
    diametru:"null",
    sezon:"null"
}

function Produse({_anvelope, filtru, nr_anvelope, queryParams, initialCart}) {
    const [anvelope, setAnvelope] = useState(_anvelope)
    // 0 = fara, 1 = crescator, 2 = descrescator
    const [sortOrder, setSortOrder] = useState(0)
    const [filterSearch, setFilterSearch] = useState(queryParams)
    const [nrAnvelope, setNrAnvelope] = useState(nr_anvelope);
    const [DOMSearchHelper, setDOMSearchHelper] = useState(<span></span>)
    const [filtruList, setFiltruList] = useState(filtru)
    const [currentPage, setCurrentPage] = useState(1);
    const upperPageRef = useRef();
    const [cart, setCart] = useState(initialCart);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=> {
        let _totalPrice = 0;
        cart.forEach(item => _totalPrice += item.pret * item.cantitate);
        setTotalPrice(_totalPrice)
    }, [cart])
    
    useEffect(() => {
        if(window.location.search.length > 0) {
            FormatFoundAnvelope()
            console.log("FORMAT HAS RUN")
        }
    }, [])

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
    
    const FormatFoundAnvelope = () => {
        const {latime, inaltime, diametru, sezon} = filterSearch
        if(latime == 0 && inaltime == 0 && diametru == "null" && sezon == "null") 
            setDOMSearchHelper(<span></span>)
        else if((inaltime != 0 && latime == 0) || (latime != 0 && inaltime == 0)) setDOMSearchHelper(
            <span>
                pentru
                {latime != 0 && <span>&nbsp;{latime}/lățime</span>}
                {inaltime != 0 && <span>&nbsp;{inaltime}/înălțime </span>}
                {diametru != "null" && <span>&nbsp;{diametru}</span>} {sezon != "null" && <span>&nbsp;{sezon}</span>}
            </span>
        )
        else setDOMSearchHelper(
            <span>
                pentru
            {inaltime != 0 && latime != 0 && <span>&nbsp;{latime}/{inaltime} </span>}
            {diametru != "null" && <span>&nbsp;{diametru}</span>} {sezon != "null" && <span>&nbsp;{sezon}</span>}
            </span>
        )
    }

    function changePage(number) {
        if(number !== currentPage){
            setCurrentPage(number)
            handleSubmitFilterSearch(undefined, number)
        }
    }

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


    async function handleSubmitFilterSearch(e = undefined, pgNumber = 1){
        let _sortOrder;
        if(e !== undefined){
            _sortOrder = Number(e.target.value);
            setSortOrder(_sortOrder);
        } else _sortOrder = Number(sortOrder);

        const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/filtrat`, {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({...filterSearch, pagina:pgNumber, order:_sortOrder})
        })

        const data = await res.json()
        FormatFoundAnvelope()
        setAnvelope(data.anvelope)
        setNrAnvelope(data.nr_anvelope)
        upperPageRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
        <ShopMenu cart={cart} totalPrice={totalPrice} handleDelete={deleteItemFromCart}/>
        <Navbar cart={cart} totalPrice={totalPrice}/>
        <div className="BACKGROUND">
            <div data-aos="fade-up" data-aos-duration="3000">
            <h1>Descoperă noile anvelope TYRES JOB <br/>și bucură-te de un drum în siguranță!</h1>
            </div>
        </div>
    
        <div className="TITLU-CONTAINER">
            <div className="TITLU" data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="2000"><h1>HOME ANVELOPE&nbsp; 
                {
                    queryParams.categorie === "camioane" || queryParams.categorie === "auto" ? queryParams.categorie.toUpperCase() : "AUTO"
                }
            </h1></div>
        </div>
        <div className="PRODUCTS-CONTAINER">
            <Filtru defaultValues={queryParams} filtruInitial={filtru} handleChangeFilterSearch={handleChangeFilterSearch} filtru={filtruList} handleSubmitFilterSearch={handleSubmitFilterSearch}/>
            <div ref={upperPageRef} className="PRODUCTS-RIGHT">
                
                <div className="SORT"> 
                    <h5 style={{fontFamily: "'Poppins', sans-serif", lineHeight: "60px"}}>
                        {
                            nrAnvelope === 1 ? <span>{nrAnvelope} Produs găsit {DOMSearchHelper}</span> : 
                            <span>{nrAnvelope} Produse găsite {DOMSearchHelper}</span>
                        }
                    </h5>
                    <select onChange={(e)=>handleSubmitFilterSearch(e)}>
                        <option value={0}>Sortare după</option>
                        <option value={1}>Preț crescător</option>
                        <option value={2}>Preț descrescător</option>
                    </select>
                </div>

                <div className="PRODUCTS-ITEMS">
                {
                    anvelope.length > 0 ? anvelope.map(anvelopa=> <Product handleAdd={handleAddToCart} key={anvelopa.id_anvelopa} anvelopa={anvelopa}/>)
                    :
                    <h5 className="m-3 text-center">Nu au fost găsite produse conform selecției.</h5>
                }
                </div>

                <div className="d-flex justify-content-center mt-4 mb-4">
                {
                    anvelope.length > 0 && <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} changePage={changePage} nrAnvelope={nrAnvelope}/>
                }
                </div>
            </div>

        </div>
        <ProduseStyle/>
        </div>
    )
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

function CovertToNumber(searchData) {
    if(typeof(searchData.latime) !== "number") searchData.latime = Number(searchData.latime);
    if(typeof(searchData.inaltime) !== "number") searchData.inaltime = Number(searchData.inaltime);
    return searchData;
}

export async function getServerSideProps({query, req}) {
    let searchData = CovertToNumber({...FILTER_DATA, ...query});
    
    const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/filtrat`,
    {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({...searchData, pagina:1, order: 0})
    })
    const data = await res.json()
    const res2 = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/filtru`,
    {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({...searchData})
    })
    const data2 = await res2.json()
    const filtru = HandleFilterParams(data2.filtru)
    const initialCart = await fetchCart(req);
    
    return { props: { _anvelope: data.anvelope, nr_anvelope:data.nr_anvelope, filtru, queryParams:searchData, initialCart } }
  }

export default Produse;

