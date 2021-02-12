import React, {useState, useEffect} from 'react'

const LiStyle = {
  border:"2.9px solid #a80000",
  borderRadius:"50%",
  padding:"6px 13px",
  margin:"5px",
  boxShadow:"0 0 8px gray",
  fontWeight:"500",
  cursor:"pointer"
}

const LiStyleActiv = {
  ...LiStyle,
  backgroundColor:"#a80000",
  color:"white"
}

const UlStyle = {
  listStyleType:"none",
  display:"flex",
  justifyContent:"center",
  margin:"0",
  padding:"0",
  flexWrap:"wrap"
}

export default function Pagination({nrAnvelope, currentPage, changePage, setCurrentPage}) {
  const [pages, setPages] = useState(Math.ceil(nrAnvelope / 24))
  
  useEffect(()=>{
        setPages(Math.ceil(nrAnvelope / 24))
        setCurrentPage(1)
  }, [nrAnvelope])
  return (
    <ul style={UlStyle}>
      {
        [...Array(pages).keys()].map((number)=><li style={number + 1 === currentPage ? LiStyleActiv : LiStyle }
        onClick={()=>changePage(number + 1)} key={number}>{number + 1}</li>)
      }
    </ul>
  )
}
