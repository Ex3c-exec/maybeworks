import React, {useState, useEffect} from 'react'
import fetchCart from "../utils/fetchCart";
import ShopMenu from '../components/layout/ShopMenu'
import Navbar from '../components/layout/Navbar'

export default function Termeni({initialCart}) {
    const [cart, setCart] = useState(initialCart);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=> {
        let _totalPrice = 0;
        cart.forEach(item => _totalPrice += item.pret * item.cantitate);
        setTotalPrice(_totalPrice)
    }, [cart])

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

    return (
        <React.Fragment>
            <ShopMenu cart={cart} totalPrice={totalPrice} handleDelete={deleteItemFromCart}/>
            <Navbar cart={cart} totalPrice={totalPrice}/>
            
            <div>
            <h1>TERMENI</h1>
            </div>

        </React.Fragment>
    )
}

export async function getServerSideProps({ req }) {
    
    const initialCart = await fetchCart(req);
    return { props: { initialCart } }
  }
