export default function Cantitate({pret4Bucati, handleChangeCantitate, cantitate, handleAddToCart, stoc}) {
    return (
        <div>
        <div className="CANTITATE-ADAUGA">
          <div className="input-group mb-3 GRUP-BUTOANE" style={{width: "100px"}}>
              <div className="input-group-prepend ">
                <span onClick={()=>stoc && handleChangeCantitate("button", "decrease")} className="input-group-text">-</span>
              </div>
              <input readOnly={!stoc} maxLength="3" onChange={(e)=>handleChangeCantitate("number", Number(e.target.value))} type="text" className="form-control p-0 text-center" value={cantitate}/>
              <div className="input-group-append">
                <span onClick={()=>stoc && handleChangeCantitate("button", "increase")} className="input-group-text">+</span>
              </div>
          </div>
            <button disabled={!stoc} onClick={handleAddToCart}><img src="/images/adauga.png"/>
              {
                stoc === 1 ? "Adaugă în coș" : "Stoc epuizat."
              }
            </button>
      </div>
    <div className="PRET4">
    <h3>Pret pentru 4 anvelope: </h3>
    <h3>{pret4Bucati} lei</h3>
    </div>
        </div>
    )
}