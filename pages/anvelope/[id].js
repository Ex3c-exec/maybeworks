import React,{ useState, useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import ShopMenu from '../../components/layout/ShopMenu'
import Cantitate from '../../components/productPresentation/Cantitate'
import Casete from '../../components/productPresentation/Casete'
import Date from '../../components/productPresentation/Date'
import Despre from '../../components/productPresentation/Despre'
import Recomandari from '../../components/productPresentation/MoreRecomandations'
import ProductPageStyle from '../../styles/ProductPageStyle'
import Cookies from 'js-cookie'
import fetchCart from '../../utils/fetchCart'
import Image from 'next/image'

export default function ProductPresenation({anvelopa, anvelopeSimilare, idAnvelopa, initialCart}){
    const [cantitate, setCantitate] = useState(1);
    const [cart, setCart] = useState(initialCart);

    useEffect(()=>{
        window.scrollTo({top:0, behavior: 'smooth' })
        setCantitate(1);
    }, [anvelopa])

    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=> {
        let _totalPrice = 0;
        cart.forEach(item => _totalPrice += item.pret * item.cantitate);
        setTotalPrice(_totalPrice)
    }, [cart])

    function handleChangeCantitate(inputType, option) {
        if(inputType === "button"){
            if(option === "decrease" && cantitate > 1) setCantitate(cantitate - 1);
            else if(option === "increase") setCantitate(cantitate + 1);
        } else if(inputType === "number") setCantitate(option) 
    }

    async function handleAddToCart(){
        const cartId = Cookies.get("cart");
        
        const data = {
            id_anvelopa: Number(idAnvelopa),
            cantitate,
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
        console
        
        const _cart = await fetchCart();
        setCart(_cart) 
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

    return (
        <div>
        <ShopMenu cart={cart} totalPrice={totalPrice} handleDelete={deleteItemFromCart}/>
        <Navbar cart={cart} totalPrice={totalPrice}/>
        <div className="PRODUCT-CONTAINER">
            <div className="LEFT-CONTAINER">
                <div className="IMAGE"><Image className="image-product" width={400} height={400} src={`${process.env.NEXT_PUBLIC_IMG_URL}${anvelopa.imagine}`}/></div>
                <Casete/>
            </div>
            <div className="PRODUCT-CONTAINER-RIGHT" >
                <Date anvelopa={anvelopa}/>
                <Cantitate stoc={anvelopa.stoc} handleAddToCart={handleAddToCart} cantitate={cantitate} handleChangeCantitate={handleChangeCantitate} pret4Bucati={anvelopa.pret * 4}/>
            </div>
        </div>
        <Despre anvelopa={anvelopa}/>
        <Recomandari handleAdd={handleAddToCart} anvelopeSimilare={anvelopeSimilare}/>
        
        <ProductPageStyle/>
        </div>
    )
}

export async function getServerSideProps({params, req}) {
    let data = {
        anvelopa: {},
        anvelopeSimilare: []
    }
    if(!isNaN(Number(params.id))){
        const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/${Number(params.id)}`)
        data = await res.json()
    }
    const initialCart = await fetchCart(req);

    return { props: { anvelopa:data.anvelopa, anvelopeSimilare: data.anvelopeSimilare, idAnvelopa: Number(params.id), initialCart  } }
  }
