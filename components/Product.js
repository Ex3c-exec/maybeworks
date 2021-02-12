import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Product({anvelopa, handleAdd}) {
    const router = useRouter()

    return (
        <div data-aos="zoom-out" className="ANVELOPA">
        <span onClick={()=>router.push(`/anvelope/${anvelopa.id_anvelopa}`)}>
            <div>
                <Image width={300} height={300} src={`${process.env.NEXT_PUBLIC_IMG_URL}${anvelopa.imagine}`} alt="Cauciuc"/>
            </div>
            <h4> Anvelope {anvelopa.latime}/{anvelopa.inaltime} {anvelopa.diametru}</h4>
            <h4>{anvelopa.model} {anvelopa.sezon}</h4>
            <h2>{anvelopa.pret}.00 lei</h2>
        </span>
            <div className="ADD-TO-CART">
                <button onClick={()=>handleAdd(anvelopa.id_anvelopa)}><img src="/images/add.png"/>Adaugă în coș</button>
            </div>
        </div>
    )
}
