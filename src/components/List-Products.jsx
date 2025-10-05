import { useEffect, useState } from "react"

const URL= 'https://657499a5b2fbb8f6509c68b4.mockapi.io/api/all/Articles'
function ListProducts() {
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
            {products.map(product => (
                <div key={product.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
                    <h3>{product.name}</h3>
                    <img src={product.img} alt={product.name} style={{width: '100px'}}/>
                    <p>Precio: ${product.price}</p>
                    <p>{product.details}</p>
                </div>
            ))}
        </div>
    )
}

export default ListProducts;