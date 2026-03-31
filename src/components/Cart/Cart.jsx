import React from 'react'
import { toast } from 'react-toastify';




const Cart = ({ products,setProducts }) => {
  const total = products.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setProducts([])
    toast.success("Proceed to successful")
  };
  const handleDelete = (item) =>{
   const filteredArray = products.filter(c =>c.id !== item.id)
   setProducts(filteredArray)
   toast.success("Item remove from cart")
   }

  return (
    <div className="min-h-screen bg-[#f7f7f8] px-4 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Top Section */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-[#111827]">
            Premium Digital Tools
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

         
        </div>

        {/* Cart Box */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Your Cart</h2>
         

          <div className="space-y-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl bg-[#f6f7fb] px-4 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ececf3] overflow-hidden">
                    <img
                      className="h-8 w-8 object-contain"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-gray-800">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">${item.price}</p>
                  </div>
                </div>

                <button onClick={()=>handleDelete(item)} className="text-sm font-medium text-pink-500">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-5 flex items-center justify-between">
            <p className="font-bold text-[16px] text-black">Total:</p>
            <h3 className="text-3xl font-bold text-gray-900">${total}</h3>
          </div>

          {/* Button */}
          <button onClick={handlePayment} className="mt-4 w-full rounded-full bg-[#9514FA] py-2 text-sm font-medium text-white shadow-md">
            Proceed  To  Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
