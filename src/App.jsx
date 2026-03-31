
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Navber from './components/Navber/Navber'
import StatusBar from './components/StatusBar/StatusBar'
import StartedPart from './components/StartedPart/StartedPart'
import PricingSection from './components/PricingSection/PricingSection'
import TransformSection from './components/TransformSection/TransformSection'

const getCards = async () =>{
  const res = await fetch("/cards.json")
  return res.json()
}
const cardPromise = getCards()

function App() {
const [activeTab,setactiveTab] = useState("Product")
const [products,setProducts] = useState([])



 

  return (
    <>
    <Navber cartCount={products.length}/>
    <Banner/>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 text-black font-sm text-[16px] " aria-label="Products" 
    onClick={()=>setactiveTab("Product")} defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40  text-black  font-sm text-[16px]" aria-label={`Cart (${products.length})`}
  onClick={()=>setactiveTab("Cart")}  />
  
</div>
   {activeTab==="Product" ? <Cards cardPromise={cardPromise} products={products} setProducts={setProducts} /> : null} 
   {activeTab ==="Cart" ? <Cart products={products} setProducts={setProducts}/> : null} 
    
    <StatusBar/>
    <StartedPart/>
    <PricingSection/>
    <TransformSection/>
    <Footer/>
    </>
  )
}

export default App
