import {useDispatch} from 'react-redux'
import { addToCart } from '../cart/cartSlice.jsx'
import { useParams } from 'react-router-dom';

const products = [
    {id:101,name:"laptop",price:10000, image:"/images/food_2.png"},
    {id:102,name:"phone",price:20000 , image:'/images/food_3.png'},
    {id:103,name:"tablets",price:30000, image:'/images/food_4.png'},
];

function ProductList (){
    const dispatch = useDispatch();
    const { id } = useParams();
    return(
        <>
        <h1>product List</h1>
            {products.map((prod)=>(
                <div key={prod.id}>
                <h1>{prod.name}</h1>
                <h2>$ {prod.price}</h2>
                <img src={prod.image} alt={prod.name} />
                <button onClick={()=>dispatch(addToCart(prod))}>Add To Cart</button>
            </div>   
            ))}
        </>)
}

export default ProductList;