import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import '../styles/ourproducts.css'
import Pagination from '../components/Pagination'


function OurProductsPage() {
  const [search,setSearch]=useState({title:"",category:""})
  useEffect(()=>window.scrollTo(0, 0))
  return (
    <div className='our-products-page'>
        <Search search={search} setSearch={setSearch}/>
        <Pagination search={search}/>

    </div>
  )
}

export default OurProductsPage