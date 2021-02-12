import { parseCookies } from "./parseCookie";

export default async function fetchCart(req) {
    const cookies = parseCookies(req)
    
    const id_cart = cookies?.cart === "undefined" || cookies.cart === undefined ? undefined : JSON.parse(cookies.cart);

    if(id_cart !== undefined){
        return await fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/cart/get`, {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({id_cart})
        }).then(response=>response.json())
          .then(res=> res.cart)
    } else return [];
        
    
}