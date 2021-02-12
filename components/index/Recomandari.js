import React from 'react'
import Product from '../Product'

export default function Recomandari({anvelope, handleAdd}) {
    return (
       <div>
            <div className="RECOMENDATION-TEXT">
                <h2>RECOMANDĂRI-ANVELOPE RECONSTRUITE</h2>
                <div style={{width: "100px", height: "5px", backgroundColor:"#a80000"}}></div>
            </div> 
        
            <div className="RECOMENDATION-ITEMS">
                {
                    anvelope.map(anvelopa=> <Product handleAdd={handleAdd} key={anvelopa.id_anvelopa} anvelopa={anvelopa}/>)
                }
            </div>
       </div>
    )
}
