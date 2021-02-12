import { useState } from "react"
import Swal from 'sweetalert2'

export default function Forma({cart}) {
    const [acord, setAcord] = useState(false);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState({
        nume:"",
        prenume:"",
        nume_companie:"",
        judet: "",
        localitate: "",
        strada:"",
        numar:"",
        cod_postal:"",
        telefon:"",
        cui:"",
        detalii:""
    })

    const HandleChange = (e) => setDate({...date, [e.target.name]:e.target.value})

    const HandleSubmit = () => {
        const {nume, prenume, judet, localitate, numar, telefon} = date;
        if(!cart.length) Swal.fire({text:"Vă rugăm să adăugați ceva în coș înaine de a trimite o comandă.", icon:"warning"})
        else if(!nume.length) Swal.fire({text:"Vă rugăm să completați câmpul cu numele dumneavoastră.", icon:"warning"})
        else if(!prenume.length) Swal.fire({text:"Vă rugăm să completați câmpul cu prenumele dumneavoastră.", icon:"warning"})
        else if(!judet.length) Swal.fire({text:"Vă rugăm să completați câmpul cu județul dumneavoastră.", icon:"warning"})
        else if(!localitate.length) Swal.fire({text:"Vă rugăm să completați câmpul cu orașul dumneavoastră.", icon:"warning"})
        else if(!numar.length) Swal.fire({text:"Vă rugăm să completați câmpul cu numărul locuinței dumneavoastră.", icon:"warning"})
        else if(!telefon.length) Swal.fire({text:"Vă rugăm să completați câmpul cu numărul dumneavoastră de telefon.", icon:"warning"})
        else if(!acord) Swal.fire({text:"Vă rugăm să acceptați termenii și condițiile.", icon:"warning"})
        else {
            setLoading(true)
            Swal.fire({title:"Se trimite comanda...", icon:"info", showConfirmButton:false})
            fetch(process.env.NEXT_PUBLIC_API_ROUTE + "/mail/comanda", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...date, numar: Number(date.numar), cod_postal: Number(date.cod_postal), produse: cart})
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        text: "Comanda finalizată cu succes. Echipa TyresJob vă va contacta pentru livrarea comenzii!",
                    })
                })
                .catch(err => console.log(err))
                .finally(() => setLoading( false ))
        }
       
    }

    return (
    <>
    
    <div>
        <label>*Prenume</label><br/>
        <input name="prenume" onChange={HandleChange} value={date.prenume} required type="text" placeholder="*Prenume" style={{paddingLeft: "10px"}}/>
    </div>
    
    <div>
        <label>*Nume</label><br/>
        <input name="nume" onChange={HandleChange} value={date.nume} required type="text" placeholder="*Nume" style={{paddingLeft: "10px"}}/>
    </div>
    
    <div>
         <label>Nume companie (opțional)</label><br/>
         <input name="nume_companie" onChange={HandleChange} value={date.nume_companie} type="text" placeholder="*Nume" style={{paddingLeft: "10px"}}/>
       </div>

       
        <div>
            <label>*Județ</label><br/>
            <input name="judet" onChange={HandleChange} value={date.judet} required type="text" placeholder="*Județ" style={{paddingLeft: "10px"}}/>
        </div>

         <div>
           <label>*Oraș</label><br/>
           <input name="localitate" onChange={HandleChange} value={date.localitate} required type="text" placeholder="*Oraș" style={{paddingLeft: "10px"}}/>
        </div>

        <div>
            <label>Stradă</label><br/>
            <input name="strada" onChange={HandleChange} value={date.strada} type="text" placeholder="Stradă" style={{paddingLeft: "10px"}}/>
        </div>

       <div>
            <label>*Număr</label><br/>
            <input name="numar" onChange={HandleChange} value={date.numar} required type="number" placeholder="*Număr" style={{paddingLeft: "10px"}}/>
       </div>
     
                
       <div>
            <label>Cod poștal</label><br/>
            <input name="cod_postal" onChange={HandleChange} value={date.cod_postal} type="text" placeholder="Cod poștal" style={{paddingLeft: "10px"}}/>
       </div>

       <div>
            <label>*Telefon</label><br/>
            <input name="telefon" onChange={HandleChange} value={date.telefon} required type="text" placeholder="*Telefon" style={{paddingLeft: "10px"}}/>
       </div>
       
     
       <div>
         <label>CUI Companie (opțional)</label><br/>
         <input name="cui" onChange={HandleChange} value={date.cui} type="text" placeholder="CUI Companie" style={{paddingLeft: "10px"}}/>
       </div>

        <div>
           <label>Alte detalii (opțional)</label><br/>
           <input name="detalii" onChange={HandleChange} value={date.detalii} type="text" placeholder="Alte detalii" style={{paddingLeft: "10px"}}/>
        </div>

        <hr/>
            <div style={{display: "flex", flexDirection: "row"}}>
                <input readOnly checked={true} type="checkbox" style={{width: "15px", marginRight: "15px"}}/>
                <label>Numerar la livrare (Ramburs)<br/><span style={{fontSize:14}}>Plătește prin curier.</span></label>
            </div>
        <hr/>
   
        <div style={{display: "flex", flexDirection: "row", paddingRight:10}}>
            <input onChange={(e)=>setAcord(e.target.checked)} name="acord" value={acord} checked={acord} type="checkbox" style={{width: "15px", marginRight: "15px"}}/>
            <label>*Am citit termenii si conditiile site-ului si sunt de <br/> acord cu prelucrarea datelor cu caracter personal mai sus mentionate.</label>
        </div>
        <button disabled={loading} onClick={HandleSubmit}>TRIMITE COMANDA<img src="./images/trimite.png"/></button>
    </>
    )
}