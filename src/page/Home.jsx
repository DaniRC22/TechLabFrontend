import ListProducts from '../components/List-Products';  
import ShoppingCart from '../components/shoppingCart';
function Home({onAddToCart}) {  

    return (  
        <main style={{ padding: "20px" }}>  

           
               <ListProducts onAddToCart={onAddToCart}/>
   
        </main>  
    );  
}  
export default Home; 