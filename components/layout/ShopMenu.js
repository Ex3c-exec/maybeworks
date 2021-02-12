import { useRouter } from 'next/router';

export default function ShopMenu({cart, totalPrice, handleDelete}) {
    const router = useRouter();

    function ItemHandleClick(id_anv){
      router.push(`/anvelope/${id_anv}`)
      document.getElementById('open-side-bar-menu').click()
    } 
    

    return (
        <div> 
        <input type="checkbox" type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>

        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
          <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div><i style={{fontSize:"30px", color:"gray"}} className="fa m-2">&#xf00d;</i></div>
          </label>

          <h2 className="text-center display-4" style={{fontSize:28}}>COȘ</h2>
          <hr className="my-4"/>
          {
            cart.length === 0 ? <h5 className="text-center">Niciun produs în coș.</h5> : (
              <div>
                  <ul className="list-group bg-transparent">
                  {
                    cart.map(item=>(
                    <li key={item.id_storage} className="list-group-item d-flex bg-transparent justify-content-between align-items-center border-0 p-2">
                        <img className="shadow border" width="60" src={`${process.env.NEXT_PUBLIC_IMG_URL}${item.imagine}`} alt="Cauciuc"/>
                        <div onClick={()=>ItemHandleClick(item.id_anvelopa)}>
                            <h6 style={{color:"gray", fontSize:"0.8rem"}}> Anvelope {item.latime}/{item.inaltime} {item.diametru}</h6>
                            <h6 style={{color:"gray", fontSize:"0.8rem"}}>{item.model} {item.sezon}</h6>
                            <h6 style={{color:"gray", fontSize:"0.8rem"}}>X {item.cantitate}</h6>
                        </div>
                        <div className="delete-item-x" onClick={()=>handleDelete(item.id_storage)}>X</div>
                    </li>
                    ))
                  }
                  </ul>
                  <div className="container">
                    <hr/><h5 style={{color:"gray", textAlign:"center"}}>Total: {totalPrice} lei</h5><hr/>
                    <button onClick={()=>document.getElementById('open-side-bar-menu').click()} className="btn btn-block btn-danger mt-3">Continuă cumpărăturile</button>
                    <button onClick={()=>router.push("/cos")} className="btn btn-block btn-danger mt-3">Vezi coșul</button>
                  </div>
              </div>
            )
          }
          </ul>
        </div>
        <div id='center' className="main center">
        </div>
        </div>
    )
}