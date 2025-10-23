import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL= 'https://fakestoreapi.com/products'

const ProductDetail = ()=> { 

    const {id} = useParams()
    const [productId, setProductId] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async ()=>{
            try {
                const response = await fetch(`${URL}/${id}`);
                const data = await response.json();
                setProductId(data);
                setLoad(false);
            }catch (err) {
                setError(err.message);
                setLoad(false);
            }
            
        }
        fetchProduct()
    }, [id])

    if (load) return <h2>Cargando...</h2>;
    if(error) return <h2>Error... {error}</h2>
    return <>
    <div className="product-detail">
      <img src={productId.image} alt={productId.title} />
      <h2>{productId.title}</h2>
      <p><strong>Precio:</strong> ${productId.price}</p>
      <p>{productId.description}</p>
    </div>
    </>
}

export default ProductDetail;