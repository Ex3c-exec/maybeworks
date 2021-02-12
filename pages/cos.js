import Cupon from "../components/cos/Cupon";
import Forma from "../components/cos/Forma";
import Tabel from "../components/cos/Tabel";
import Total from "../components/cos/Total";
import Navbar from "../components/layout/Navbar";
import ShopMenu from "../components/layout/ShopMenu";
import CosStyle from "../styles/CosStyle";
import React, {useEffect, useState} from 'react'
import fetchCart from "../utils/fetchCart";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import Swal from "sweetalert2";

export default function Cos({initialCart}){
    const [cart, setCart] = useState(initialCart);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=> {
        let _totalPrice = 0;
        cart.forEach(item => _totalPrice += item.pret * item.cantitate);
        setTotalPrice(_totalPrice)
    }, [cart])
    const router = useRouter()

    useEffect(()=> window.scrollTo({top:0, behavior: 'smooth' }), [])

    async function deleteItemFromCart(ID_STORAGE) {
        const cartId = Cookies.get("cart");
        const data = {
            id_storage: ID_STORAGE,
            id_cart: cartId === undefined || cartId === "undefined"  ? -1 : JSON.parse(cartId) 
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

    async function handleModifyCart(ID_STORAGE, CANTITATE){
        const cartId = Cookies.get("cart");
        
        const data = {
            id_storage: ID_STORAGE,
            cantitate: CANTITATE,
            id_cart: JSON.parse(cartId) 
        }

        if(CANTITATE < 1) {
            const response = await Swal.fire({
                text: 'Sigur vrei să ștergi acest produs din coș?',
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: `Da`,
                denyButtonText: `Nu`,
              })
              if(response.isConfirmed) deleteItemFromCart(ID_STORAGE)
        } else {
            const _cart = cart.map(item=> {
                if(item.id_storage === ID_STORAGE) return {
                    ...item,
                    cantitate: CANTITATE
                } 
                else return item
            })
            setCart(_cart)
            
            const response = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/cart/update`, {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })
            const res = await response.json();
        }
     
    }

    return (
        
        <React.Fragment>
        <ShopMenu cart={cart} totalPrice={totalPrice} handleDelete={deleteItemFromCart}/>
        <Navbar cart={cart} totalPrice={totalPrice}/>
        <div className="CONTAINER">
            <div className="CONTAINER-LEFT">
                <div className="TITLE">
                    <h1>Coșul meu</h1>
                    <div><img src="images/red-bag.png"/></div>
                </div>
                <button onClick={()=>router.push("/anvelope")}> <img src="images/arrow.png"/>Continuă cumpărăturile</button>
                <Tabel handleChange={handleModifyCart} handleDelete={deleteItemFromCart} cart={cart}/>
                <Cupon/>
                <Total totalPrice={totalPrice}/>
            </div>
            <div className="CONTAINER-RIGHT">
                <div className="TITLE-2">
                    <h1>Datele de facturare</h1>
                </div> 
                <Forma cart={cart}/>
            </div>
        </div>
        <CosStyle/>
        </React.Fragment>
    )
}

export async function getServerSideProps({ req }) {
    
    const initialCart = await fetchCart(req);
    return { props: { initialCart } }
  }
