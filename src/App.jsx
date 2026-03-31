
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Navber from './components/Navber/Navber'
import StatusBar from './components/StatusBar/StatusBar'

const getCards = async () =>{
  const res = await fetch("/cards.json")
  return res.json()
}
const cardPromise = getCards()
function App() {
const [activeTab,setactiveTab] = useState("Product")
console.log(activeTab)

 

  return (
    <>
    <Navber/>
    <Banner/>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 text-black font-sm text-[16px] " aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40  text-black  font-sm text-[16px]" aria-label="Cart"  />
  
</div>
    <Cards cardPromise={cardPromise}/>
    <Cart/>
    
    <StatusBar/>
    <Footer/>
    </>
  )
}

export default App
