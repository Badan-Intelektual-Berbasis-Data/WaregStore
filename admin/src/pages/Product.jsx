export default function Product() {
 
  const products = [
    { id: 1, name: 'Product A', price: '$10', category: 'Category 1' },
    { id: 2, name: 'Product B', price: '$20', category: 'Category 2' },
    { id: 3, name: 'Product C', price: '$30', category: 'Category 3' },
  ];

  return (
    <div className="w-auto">
        <h1 className="text-2xl font-bold mb-5 text-center bg-red-500 text-white py-2 rounded" >Product List</h1>
        <table className=" bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};




 