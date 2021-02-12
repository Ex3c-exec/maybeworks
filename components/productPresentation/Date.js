export default function Date({anvelopa}){
    return (
        <>
        <div data-aos="fade-right">
        <h1>Anvelope {anvelopa.model} {anvelopa.sezon}</h1>
        <h4>{anvelopa.latime}/{anvelopa.inaltime} {anvelopa.diametru}</h4>
        <h4>ANVELOPE RECONSTRUITE</h4>
        <div style={{display: "flex", flexDirection: "row"}}>    
        <h2>{anvelopa.stoc ? "Disponibil" : "Indisponibil"}:</h2><h5 style={{color:anvelopa.stoc ? "rgb(13, 141, 13)" : "red"}}>{anvelopa.stoc ? "ÎN STOC" : "STOC EPUIZAT"}</h5>
    
        </div>
        
        <h3>{anvelopa.pret} lei/buc</h3>
        </div>
        <div className="CHENAR" data-aos="fade-left" >
            <h5>DIMENSIUNE: {anvelopa.latime}/{anvelopa.inaltime} {anvelopa.diametru}</h5>
            <h5>Categorie: {anvelopa.categorie}</h5>
            <h5>Sezon: {anvelopa.sezon}</h5>
            <h5>Lățime: {anvelopa.latime}</h5>
            <h5>Înălțime: {anvelopa.inaltime} </h5>
            <h5>Diametru: {anvelopa.diametru} </h5>
        </div>
        </>
    )
}