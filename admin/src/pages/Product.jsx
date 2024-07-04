



export default function Product() {
   const products = [
     { id: 1, name: 'Product A', price: '$10', category: 'Category 1' },
     { id: 2, name: 'Product B', price: '$20', category: 'Category 2' },
     { id: 3, name: 'Product C', price: '$30', category: 'Category 3' },
   ];
 
   return (
     <div>
       <h1 className="blue-line">Product List</h1>
       <table>
         <thead>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Stok</th>
             <th>Status</th>
           </tr>
         </thead>
         <tbody>
           {products.map((product) => (
             <tr key={product.id}>
               <td>{product.id}</td>
               <td>{product.name}</td>
               <td>{product.price}</td>
               <td>{product.category}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 };
 