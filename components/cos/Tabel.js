import Image from 'next/image'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export default function Tabel({cart, handleDelete, handleChange}) {
  const router = useRouter()

  function onDelete(id){
    Swal.fire({
      text: 'Sigur vrei să ștergi acest produs din coș?',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: `Da`,
      denyButtonText: `Nu`,
    }).then(result => result.isConfirmed && handleDelete(id))
  }

    return (
        <div className="table-responsive-lg">
        <table className="table TABLE">
        <thead>
          <tr>
            <th scope="col">Produs</th>
            <th scope="col">Denumire</th>
            <th scope="col">Cantitate</th>
            <th scope="col">Preț unitar</th>
            <th scope="col">Total preț</th>
          </tr>
        </thead>

        <tbody>
          {
            cart.length ? (cart.map(item=>(
              <tr key={item.id_storage}>
              <th scope="row">
                <div className="PRODUS-IMAGINE">
                    <Image width={80} height={80} src={`${process.env.NEXT_PUBLIC_IMG_URL}${item.imagine}`} alt="Cauciuc"/>
                </div>
              </th>
              <td style={{cursor:"pointer"}} onClick={()=>router.push(`/anvelope/${item.id_anvelopa}`)}>{item.model} {item.sezon}<br/>
              {item.latime}/{item.inaltime} {item.diametru}</td>
              <td>
              <div className="input-group mb-3 GRUP-BUTOANE" style={{width: "100px"}}>
              <div className="input-group-prepend ">
              <span onClick={()=>handleChange(item.id_storage, item.cantitate - 1)} className="input-group-text">-</span>
              </div>
              <input maxLength="3" onChange={(e)=>handleChange(item.id_storage, Number(e.target.value))} type="text" className="form-control p-0 text-center" value={item.cantitate}/>
              <div className="input-group-append">
              <span onClick={()=>handleChange(item.id_storage, item.cantitate + 1)} className="input-group-text">+</span>
              </div>
              </div>
              </td>
              <td>{item.pret} lei</td>
              <td>{item.pret * item.cantitate} lei</td>
              <td><i onClick={()=>onDelete(item.id_storage)} style={{fontSize:"24px", cursor:"pointer"}} className="fa">&#xf00d;</i></td>
              </tr>
          ))) : (<tr><td colSpan={5}><h5 style={{textAlign:"center", margin:"20px"}}>Nu există produse în coș.</h5></td></tr>)
          }
        </tbody>
      </table>
     </div>
    )
}