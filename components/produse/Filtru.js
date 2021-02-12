import React from "react"

export default function Filtru({filtru, handleChangeFilterSearch, handleSubmitFilterSearch, filtruInitial, defaultValues}){
    return (
        <div className="FILTRU">
        <div className="imagine-filtru">
            <img src="./images/categorie-turism.jpg"/>
            <img src="./images/categorie-camion.jpg"/>
        </div> 
 
        <select defaultValue={defaultValues.categorie} onChange={handleChangeFilterSearch} name="categorie">
            <option value={"null"}>CATEGORIE</option>
            {filtruInitial.categorie.length && filtruInitial.categorie.map(param=><option key={param} value={param}>{param.toUpperCase()}</option>)}
        </select> 

        <select defaultValue={defaultValues.latime.toString()} onClick={handleChangeFilterSearch} name="latime">
            <option value="0">LĂȚIME</option>
            {filtru.latime.length && filtru.latime.map(param=><option key={param} value={param}>{param}</option>)}
        </select>  
        
        <select defaultValue={defaultValues.inaltime.toString()} onClick={handleChangeFilterSearch} name="inaltime">
            <option value="0">ÎNĂLȚIME</option>
            {filtru.inaltime.length && filtru.inaltime.map(param=><option key={param} value={param}>{param}</option>)}
        </select>
        
        
        <select defaultValue={defaultValues.diametru} onClick={handleChangeFilterSearch} name="diametru">
            <option value="null">DIAMETRU</option>
            {filtru.diametru.length && filtru.diametru.map(param=><option key={param} value={param}>{param}</option>)}
        </select>
        
        <select defaultValue={defaultValues.sezon} onClick={handleChangeFilterSearch} name="sezon">
            <option value="null">SEZON</option>
            {filtruInitial.sezon.length && filtruInitial.sezon.map(param=><option key={param} value={param}>{param}</option>)}
        </select> 

        <button onClick={handleSubmitFilterSearch}>CAUTĂ</button>
 
</div>
    )
}