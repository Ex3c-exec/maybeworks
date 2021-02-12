import Link from "next/link"
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import searchBarParams from "../../utils/searchBarParams";
import Image from 'next/image'

export default function Navbar({totalPrice}) {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [inputClass, setInputClass] = useState("form-control")
    const [anvelope, setAnvelope] = useState([])
    const [loading, setLoading] = useState(false)
    const [filterSearch, setFilterSearch] = useState({
        categorie:"null",
        latime: 0,
        inaltime: 0,
        diametru: "null",
        sezon:"null",
        pagina:1,
        order:0
    })

    function handleSearch(e) {
        let newWord = e.target.value[e.target.value.length - 1];
        if((e.target.value.length >= search.length) && (search.length === 3 || search.length === 6) && newWord !== " " && newWord !== "/") setSearch(search + " " + newWord);
        else setSearch(e.target.value)

        const searchParams = searchBarParams(e.target.value);
        if(isNaN(searchParams.latime) || isNaN(searchParams.inaltime)) setInputClass("form-control is-invalid")
        else {
             if(inputClass !== "form-control") setInputClass("form-control")
             handleOnChangeSearch(searchParams.latime, searchParams.inaltime, searchParams.diametru)
        }
    }

    function handleOnChangeSearch(_latime, _inaltime, _diametru){
        if(_latime === 0 && _inaltime === 0 && _diametru === "")
            setAnvelope([])
        else {
            setLoading(true)
            const _filterSearch = {
                    ...filterSearch,
                    latime: _latime,
                    inaltime: _inaltime,
                    diametru: _diametru !== "" ? _diametru : "null",
                }
                setFilterSearch(_filterSearch)
                
                fetch(process.env.NEXT_PUBLIC_API_ROUTE + `/anvelope/filtrat`, {
                    method:"POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(_filterSearch)
                }).then(response=>response.json())
                .then(data=>{
                    console.log(data.anvelope, filterSearch)
                    setAnvelope(data.anvelope)
                    setLoading(false)
                })
        }
    }

    function DOMInputSearch(){
        if(search.length === 0) return <React.Fragment></React.Fragment>
        else if(loading === true) return <div className="dropdown-content"><p>Se incarca...</p></div>
        else if(loading === false && anvelope.length === 0) return <div className="dropdown-content"><p>Niciun produs găsit.</p></div>
        else return <div className="dropdown-content">
        {
            anvelope.map(anvelopa=>(
                <div className="filter-search-product" key={anvelopa.id_anvelopa} onClick={()=>router.push(`/anvelope/${anvelopa.id_anvelopa}`)}>
                <Image className="filter-search-img" width={70} height={70} src={`${process.env.NEXT_PUBLIC_IMG_URL}${anvelopa.imagine}`}/>
                <div>
                    Anvelope {anvelopa.latime}/{anvelopa.inaltime} {anvelopa.diametru}
                    {anvelopa.model} {anvelopa.sezon}
                </div>
                <div>{anvelopa.pret} lei</div>
                </div>
            ))
        }
    </div> 
    }

    function handleSubmitFilterSearch(e) {
        e.preventDefault()
        if(search.length > 0){
            const options = Object.entries(filterSearch);
            let urlString = `/anvelope`;
            for (const opt of options) {
                if(opt[1] !== "null" && opt[1] !== 0 && opt[0] !== "pagina"){
                    if(urlString === `/anvelope`) urlString += `?${opt[0]}=${opt[1]}`
                    else urlString += `&${opt[0]}=${opt[1]}`;
                }
            }
            window.location.replace(urlString)
        }
    }

    return (
        <header>
            <div className="HEADER">
        
            <div className="LOGO-INPUT">
            <div onClick={()=>router.push("/")} className="LOGO"></div>
                            
                <form onSubmit={handleSubmitFilterSearch}>
                <div className="dropdown input-group mb-3">
                  
                        <input value={search.toUpperCase()} autoComplete="off" id="dropdown-input" onChange={handleSearch} type="text" className={inputClass} style={{textAlign: "left", paddingLeft: "10px"}} placeholder="Caută anvelope ex: 205/55 R16" />
                        <DOMInputSearch />
                    <div className="input-group-append" onClick={handleSubmitFilterSearch}>
                    <span className="input-group-text"></span>
                    </div>
                </div>
                </form>
            </div>   

           <a>
              <label id="open-side-bar-menu" htmlFor="openSidebarMenu" className="sidebarIconToggle COS">
                <h5 style={{fontSize: "1rem", marginLeft:"20px"}}>Pret:{totalPrice} lei</h5>
              </label>
            </a>
                

            </div>

            <nav className="navbar navbar-expand-lg navbar-light">
                <button  style={{backgroundColor:"transparent", border:"1px transparent"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ACTIVE">
                            <Link href="/"><a className="nav-link NAV-LINK HOME text-white ">HOME</a></Link>
                        </li>
                        <li className="nav-item">
                            <a  href="/anvelope" className="nav-link NAV-LINK text-white">AUTO</a>
                        </li>
                        <li className="nav-item">
                            <a href="/anvelope/?categorie=camioane" className="nav-link NAV-LINK text-white">CAMIOANE</a>
                        </li>
                        <li className="nav-item">
                            <Link href="/termeni"><a className="nav-link NAV-LINK text-white ">TERMENI</a></Link>
                        </li>
                            <div className="CONTACT">
                                <span className="phone2-img"><Image className="phone2-img" width={20} height={20} src="/images/phone2.png"/> </span>
                            <div>(0734) 277 500</div>
                            </div>
                    </ul>
                    </div>
            </nav>
        </header>
    )
}
