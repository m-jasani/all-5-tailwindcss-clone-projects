import React from 'react'

export default function Tables() {
  return (
    <div className='bg-[#f6f9ff] py-4 px-3 my-0'>
       <div  className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 '>
        <div className="overflow-x-auto">
                <table className=' bg-white rounded-md  min-w-full'>
                    <thead>
                        <tr className=''>
                        <th className='p-3 text-left'> # </th>
                        <th className='p-3 text-left'>Customer</th>
                        <th className='p-3 text-left'>Product</th>
                        <th className='p-3 text-left'>Price</th>
                        <th className='p-3 text-left'>Status</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                    <tr className=''>
                        <td className='p-3 text-blue-600'>#2457</td>
                        <td className='p-3'>Brandon Jacob</td>
                        <td className='p-3 text-blue-600'>At praesentium minu</td>
                        <td className='p-3'>$64</td>
                        <td className='p-3'><button  className='bg-green-950 text-xs text-white font-bold p-0.5 rounded'>Approved</button></td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'>#2457</td>
                        <td className='p-3'>Brandon Jacob</td>
                        <td className='p-3 text-blue-600'>At praesentium minu</td>
                        <td className='p-3'>$64</td>
                        <td className='p-3'><button  className='bg-green-950 text-xs text-white font-bold p-0.5 rounded'>Approved</button></td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'>#2457</td>
                        <td className='p-3'>Brandon Jacob</td>
                        <td className='p-3 text-blue-600'>At praesentium minu</td>
                        <td className='p-3'>$64</td>
                        <td className='p-3'><button  className='bg-green-950 text-xs text-white font-bold p-0.5 rounded'>Approved</button></td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'>#2457</td>
                        <td className='p-3'>Brandon Jacob</td>
                        <td className='p-3 text-blue-600'>At praesentium minu</td>
                        <td className='p-3'>$64</td>
                        <td className='p-3'><button  className='bg-red-500 text-xs text-white font-bold p-0.5 rounded'>Approved</button></td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'>#2457</td>
                        <td className='p-3'>Brandon Jacob</td>
                        <td className='p-3 text-blue-600'>At praesentium minu</td>
                        <td className='p-3'>$64</td>
                        <td className='p-3'><button  className='bg-yellow-500 text-xs text-white font-bold p-0.5 rounded'>Approved</button></td>
                        </tr>
                    </tbody>
                    
                </table>
                </div>
                
            <div className='overflow-x-auto' >
                <table className='bg-white rounded-md min-w-full'>
                    <thead>
                        <tr className=''>
                        <th className='p-3 text-left'> Preview </th>
                        <th className='p-3 text-left'>Product</th>
                        <th className='p-3 text-left'>Price</th>
                        <th className='p-3 text-left'>Sold</th>
                        <th className='p-3 text-left'>Revenue</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                    <tr className=''>
                        <td className='p-3 '><img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/product-1.jpg" className='size-16 rounded-xl' alt="" /></td>
                        <td className='p-3 text-blue-600'>Ut inventore ipsa voluptas nulla</td>
                        <td className='p-3 '>$64</td>
                        <td className='p-3'>124</td>
                        <td className='p-3'>$5,828</td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'><img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/product-2.jpg" className='size-16 rounded-xl' alt="" /></td>
                        <td className='p-3 text-blue-600'>Ut inventore ipsa voluptas nulla</td>
                        <td className='p-3 '>$64</td>
                        <td className='p-3'>124</td>
                        <td className='p-3'>$5,828</td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'><img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/product-3.jpg" className='size-16 rounded-xl' alt="" /></td>
                        <td className='p-3 text-blue-600'>Ut inventore ipsa voluptas nulla</td>
                        <td className='p-3 '>$64</td>
                        <td className='p-3'>124</td>
                        <td className='p-3'>$5,828</td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'><img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/product-5.jpg" className='size-16 rounded-xl' alt="" /></td>
                        <td className='p-3 text-blue-600'>Ut inventore ipsa voluptas nulla</td>
                        <td className='p-3 '>$64</td>
                        <td className='p-3'>124</td>
                        <td className='p-3'>$5,828</td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-blue-600'><img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/product-4.jpg" className='size-16 rounded-xl' alt="" /></td>
                        <td className='p-3 text-blue-600'>Ut inventore ipsa voluptas nulla</td>
                        <td className='p-3 '>$64</td>
                        <td className='p-3'>124</td>
                        <td className='p-3'>$5,828</td>
                        </tr>
                    </tbody>
                   
                </table>
            </div>
        </div>
    </div>
  )
}
