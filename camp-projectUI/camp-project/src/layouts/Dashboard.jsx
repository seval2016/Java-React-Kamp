import React from 'react'
import Categories from './Categories'
import ProductList from './ProductList'

export default function Dashboard(){
  return (
    <div>
       <div className='pageMain'>
       <div className='categories'><Categories/></div> 
        <div className='productList'><ProductList/></div>
       </div>
        
    </div>
  )
}
