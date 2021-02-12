import Product from '../Product'

export default function Recomandari({anvelopeSimilare, handleAdd}){
    return (
        <>
            <div className="RECOMENDATION-TEXT">
                <h2>PRODUSE SIMILARE</h2>
                <div style={{width: "100px", height: "5px", backgroundColor: "var(--bg-red)"}}></div>
            </div> 
        
            <div className="RECOMENDATION-ITEMS mb-4">
            {
                anvelopeSimilare.map(anvelopa=> <Product handleAdd={handleAdd} key={anvelopa.id_anvelopa} anvelopa={anvelopa}/>)
            }
            </div>
        </>
    )
}