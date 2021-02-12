export default function Total({totalPrice}){
    return (
        <>
            <h2>Subtotal: {totalPrice},00 lei</h2>
            <h2>Taxa livrare: 0,00 lei </h2>
            <h1 style={{borderTop:"1px solid #e1e1e1", paddingTop:"10px"}}>Total: {totalPrice},00 lei </h1>
        </>
    )
}