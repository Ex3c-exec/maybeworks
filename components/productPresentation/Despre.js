export default function Despre({anvelopa}){
    const TableRow =({denumire, valoare})=> (
        <tr>
            <th scope="row">{denumire}</th>
            <td>{valoare}</td>
        </tr>
    )

    return (
        <div>
            <div className="INFORMATION mb-4">
                <h4>SPECIFICAȚII</h4>
                <h4>&</h4>
                <h4>DESCRIERE</h4>
            </div>
            <div className="container">
            <p>{anvelopa.descriere}</p>

            <table className="table text-center mt-5">
            <tbody>
                <TableRow denumire="Categorie" valoare={anvelopa.categorie}/>
                <TableRow denumire="Dimensiune" valoare={`${anvelopa.latime}/${anvelopa.inaltime} ${anvelopa.diametru}`}/>
                <TableRow denumire="Sezon" valoare={anvelopa.sezon}/>
                <TableRow denumire="Latime" valoare={anvelopa.latime}/>
                <TableRow denumire="Inaltime" valoare={anvelopa.inaltime}/>
                <TableRow denumire="Diametru" valoare={anvelopa.diametru}/>
                <TableRow denumire="Marca" valoare={anvelopa.marca}/>
                <TableRow denumire="Model" valoare={anvelopa.model}/>
                <TableRow denumire="Indice viteza" valoare={anvelopa.indice_viteza}/>
                <TableRow denumire="Indice greutate" valoare={anvelopa.indice_greutate}/>
                <TableRow denumire="DOT" valoare={anvelopa.dot}/>
            </tbody>
            </table>
            </div>
        </div>
    )
}