export default function Product() {
 
  const products = [
    { id: 78374397, name: 'PUBG', price: '100', category: 'ok',
      idapp: 7837387766, nameapp: 'DANA', priceapp: '100.000.00', categoryapp: 'ok',
      idpulsa: 3873288, namepulsa: 'XL', pricepulsa: '100', categorypulsa: 'ok' },
    { id: 38836483, name: 'MOBILE LEGEND', price: '100', category: 'ok',
      idapp: 3887387766, nameapp: 'OVO', priceapp: '2.000.000.00', categoryapp: 'ok',
      idpulsa: 7873288, namepulsa: 'TELKOMSEL', pricepulsa: '100', categorypulsa: 'ok' },
    { id: 24572648, name: 'FIRE FIARE', price: '100', category: 'ok',
      idapp: 2457387766, nameapp: 'BRI', priceapp: '100.000.000.00', categoryapp: 'ok',
      idpulsa: 2873288, namepulsa: 'AXIS', pricepulsa: '100', categorypulsa: 'ok'
     },

    
    
  ];

  return (
    // GAME
    <div className="scroll-m-64 w-[88vw]">
      
      <div>
        <h1 className="text-2xl font-bold mb-5 text-center bg-indigo-600 text-white py-2 rounded" >Product List</h1>
        <h1 className="text-2xl font-bold mb-0 text-center bg-zinc-400 text-white py-2 rounded w-full" >GAME</h1>
        <table className="  border-gray-100 bg-gray-200 scroll-m-64 w-[88vw] border-separate  ">
          <thead>
            <tr className="bg-zinc-300 ">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="scroll-m-64 w-[88vw]">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{product.id}</td>
                <td className="py-2 px-4 border-b text-center">{product.name}</td>
                <td className="py-2 px-4 border-b text-center">{product.price}</td>
                <td className="py-2 px-4 border-b text-center">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        {/* APP */}
      <div>
        <h1 className="text-2xl font-bold mb-0 text-center bg-zinc-400 text-white py-2 rounded w-full" >APP</h1>
        <table className="  border-gray-100 bg-gray-200 scroll-m-64 w-[88vw] border-separate  ">
          <thead>
            <tr className="bg-zinc-300">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="scroll-m-64 w-[88vw]">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{product.idapp}</td>
                <td className="py-2 px-4 border-b text-center">{product.nameapp}</td>
                <td className="py-2 px-4 border-b text-center">{product.priceapp}</td>
                <td className="py-2 px-4 border-b text-center">{product.categoryapp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        {/* PULSA */}

      <div>
            <h1 className="text-2xl font-bold mb-0 text-center bg-zinc-400 text-white py-2 rounded w-full" >PULSA</h1>
        <table className="bg-gray-200 border-gray-100 scroll-m-64 w-[88vw] border-separate  ">
          <thead>
            <tr className="bg-zinc-300">
              <th className="py-2 px-4 border-b ">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="scroll-m-64 w-[88vw]">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{product.idpulsa}</td>
                <td className="py-2 px-4 border-b text-center">{product.namepulsa}</td>
                <td className="py-2 px-4 border-b text-center">{product.pricepulsa}</td>
                <td className="py-2 px-4 border-b text-center">{product.categorypulsa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        
    </div>
    
  );
}




 