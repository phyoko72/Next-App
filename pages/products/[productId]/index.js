import { useRouter } from "next/router";

const Products = () => {
    const router = useRouter()
    console.log('router: ',router.query);
    const productId = router.query.productId
    return ( <>
        <h1>Products Detail@ProductId Folder - {productId}</h1>
    </> );
}
 
export default Products;