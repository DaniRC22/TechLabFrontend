import { useEffect, useState } from "react"
import './List-Product.css'
import { Link } from "react-router-dom";
const URL= 'https://fakestoreapi.com/products'
function ListProducts({onAddToCart}) {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(URL);
            const data = await res.json();
            setProducts(data);
            setLoad(false)
            console.log(products);
        } catch (err) {
            setError(err.message);
            setLoad(false);
        }
    };
    fetchData();
}, []);

if(load) return <h2>Cargando...</h2>
if(error) return <h2>Error... {error}</h2>

    return (
    <div>
    <h2>Lista de productos</h2>
    <div className="products-wrapper">
      {products.map(product => (
        <div key={product.id} className="product-container">
          <Link to={`/product/${product.id}`}>
          
          <img src={product.image} alt={product.title} className="product-image" />
          </Link>
          <p className="product-price">Precio: ${product.price}</p>
          <p className="product-description">{product.description}</p>
            <button onClick={() => onAddToCart(product)} className="add-to-cart">
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  </div>
    )
}

export default ListProducts;