import React from 'react'

export default function Footer() {
    return (
    <footer>
    <div className="GARANTIE">
    <div>
        <img src="/images/transport-green.png"/>
        Livrare Gratuită la Orice Comandă
    </div>
    
    <div>
        <img src="/images/retur.png"/>
        Retur Gratuit În 15 Zile
    </div>
    
    <div>
        <img src="/images/third.png"/>
        Garanție 3 ani
    </div>
    
    <div>
        <img src="/images/verificare.png"/>
        Verificarea coletului la livrare
    </div>
</div>
    <div className="FOOTER">
        <div className="title-footer">
            <h5>TYRESJOB</h5>
            <h6>Anvelope reconstruite</h6>
            <h6>Program:</h6>
            <h6>L-S 8:00-18:00</h6>
        </div>

        <div className="column">
        <h5>Comenzi și livrare</h5>
        <h6>Informații livrare</h6>
        <h6>Garanția produselor</h6>
        <h6>Condiții de returnare a produselor</h6>
        </div>

        <div className="column">
            <h5>Servicii pentru clienți</h5>
            <h6>Contact</h6>
            <h6>Program </h6>
        </div>

        <div className="column">
            <h5>TYRESJOB.ro</h5>
            <h6>Termeni și condiții</h6>
            <h6>Prelucrarea datelor cu caracter personal</h6>
            <h6>Politica de utilizare Cookie-uri</h6>
        </div>
    </div>

    <div className="COPYRIGHT">
        <h6>© Copyright 2020 TYRES JOB. Toate drepturile rezervate</h6>
        <h6>Design by Laura Calinciuc</h6>
    </div> 
</footer>
    )
}
