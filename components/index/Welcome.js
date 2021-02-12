import React from 'react'

export default function Welcome() {
    return (
<div className="BACKGROUND">
    <div className="CASETE ANIMATION-FADE">
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="3000">
        <img src="/images/logo.png" alt="Produse"/>
    <h6>
        Bine ai venit la TYRES JOB! Alege anvelopele potrivite mașinii tale și bucură-te de un drum în siguranță!
    </h6>
    </div>

    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="2000">
    <img src="/images/transport-green.png" alt="Transport"/>
        <h6>
            Echipa TYRES JOB îți oferă retur și transport gratuit la orice comandă.
        </h6>
    </div>

    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000"> 
        <img src="/images/third.png" alt="Calitate"/>
        <h6>
            Oferim garanția unor produse de înaltă calitate
        </h6>
    </div>
    </div>
</div>
    )
}
