import React, { use,  } from 'react'
import CardBody from '../CardBody/CardBody';

const Cards = ({cardPromise}) => {
  const cards = use (cardPromise)

 return (
<div className="py-16 px-6 md:px-16 ">
{/* Heading */}
<div className="text-center mb-12">
<h2 className="text-[48px] font-extrabold text-[#101727] mb-4">
Explore Our Digital Products
</h2>
<p className="text-[#627382] font-sm text-[16px] max-w-xl mx-auto">
Choose from our curated collection of premium digital products designed
to boost your productivity and creativity.
</p>
</div>

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{cards.map((card) => (
<CardBody card={card}/>
))}
</div>
</div>
);
}
export default Cards