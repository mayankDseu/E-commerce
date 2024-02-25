import { FaPlus } from "react-icons/fa";

type ProductsProps={
  productId:string;
  name:string;
  photo:string;
  price:number;
  stock:number;
  handler:()=>void;

}
const server="gutttt"

const ProductCard = ({productId,price,name,photo,stock,handler}:ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name}/>
    <p>{name}</p>
    <span>₹{price}</span>

    <div>
      <button onClick={()=>handler()}>
        <FaPlus/>
      </button>
    </div>
    </div>
  )
}

export default ProductCard