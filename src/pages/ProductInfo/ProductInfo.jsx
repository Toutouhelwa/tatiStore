import { PRODUCTS } from "../../components/product"
import { Link, useParams } from "react-router-dom"
import './info.css'
import AddProduct from "../ProductInfo/InfoAddpart"
export  default function ProductInfo(){
    let {productId} = useParams()
    let product = PRODUCTS.find((item)=>item.id ===parseInt(productId))
    return(
        <div>
             <div className="allInfo">
            <div className="part1">
                <div className="main-iamge">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="images">
                   {product.images.map((current) => {
                    return (<div className="image">
                          <Link  to= {current}>
                          <img src={current}/>
                          </Link>
                    </div>)
                   })}
                </div>

            </div>
            <div className="part2">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span className="brand">Brand: {product.brand}</span>
                <h4 style={{color:"green"}}>En Stock : {product.stock}</h4>
                <ul style={{textAlign:"center",padding:"0"}}>
                    <h2 style={{padding:"10px",backgroundColor:"#e3e0e3"}}>Availability</h2>
                    <li style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>TatiSTORE Tunis:</p>
                    <h4 style={{color:"green"}}>En stock</h4>
                   </li>
                   <li style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>TatiSTORE Sousse:</p>
                    <h4 style={{color:"green"}}>En stock</h4>
                   </li>
                   <li style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>TatiSTORE Sfax:</p>
                    <h4 style={{color:"green"}}>En stock</h4>
                   </li>
                   <li style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>TatiSTORE Bizert:</p>
                    <h4 style={{color:"green"}}>En stock</h4>
                   </li>
                   <li style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>Commande en ligne :</p>
                    <h4 style={{color:"green"}}>En stock</h4>
                   </li>
                </ul>

            </div>
            <div className="part3">
                <div className="toAdd">
                    < AddProduct product={product}/>
                </div>

            </div>

        </div>
        <div className="productInfo-media">
            <AddProduct product={product}/>
        </div>

        </div>       
    )
    
}