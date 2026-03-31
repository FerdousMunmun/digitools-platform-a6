import React, { useState } from 'react'
 

const CardBody = ({card}) => {
    const [buyNow, setbuyNow] = useState(false)
    const handlebuyNow = () =>{
        setbuyNow(true)

    }
  return (
    <div
key={card.id}
className="bg-white rounded-xl shadow-lg p-6 hover:shadow-lg transition border border-gray-200"
>
{/* Top */}
<div className="flex justify-between items-start mb-4">
<img
src={card.image}
alt={card.name}
className="w-12 h-12"
/>

{/* Tag */}
<span
className={`text-xs px-3 py-1 rounded-full font-medium ${
card.tagType === "popular"
? "bg-blue-100 text-blue-600"
: card.tagType === "best"
? "bg-yellow-100 text-yellow-600"
: "bg-green-100 text-green-600"
}`}
>
{card.tag}
</span>
</div>

{/* Title */}
<h3 className="text-lg font-semibold text-[#0b1b34] mb-2">
{card.name}
</h3>

{/* Description */}
<p className="text-sm text-[#627382] mb-4">
{card.description}
</p>



{/* Bottom */}
<div className="flex justify-between items-center mb-2">
<p className="text-xl font-bold text-[#0b1b34]">
${card.price}
<span className="text-sm text-gray-400 font-normal">
/{card.period}
</span>
</p>


</div>
{/* Features */}
<ul className="space-y-2 mb-6">
{card.features.map((f, i) => (
<li key={i} className="text-sm text-[#0b1b34] flex items-center">
<span className="text-blue-500 mr-2">✔</span> {f}
</li>
))}
</ul>
<button onClick={handlebuyNow} className="bg-[#9514FA] text-white px-20 py-2 rounded-lg text-sm hover:opacity-90 transition w-full">
{buyNow ? "Add To Cart" : "Buy Now"}
</button>
</div>
  )
}

export default CardBody