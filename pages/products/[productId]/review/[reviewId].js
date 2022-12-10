import { useRouter } from "next/router";

const Products = () => {
    const router = useRouter()
    const {productId,reviewId}  = router.query
    console.log('review Id: ',router.query);

    return ( <>
                <h1>Review Id-{reviewId} for Product Id-{productId}</h1>
            </> );
}
 
export default Products;