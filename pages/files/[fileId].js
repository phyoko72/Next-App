import { useRouter } from "next/router";

const FileId = ({product}) => {
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading . . .</h1>
    }

    return ( <>
        <h1> {product.title} </h1>
        <b> {product.price} </b>
        <p> {product.description} </p>
    </> );
}
 
export default FileId;

export async function getStaticPaths(){

    return{
        paths:[
            {params:{fileId:'1'}}
        ],
        fallback: true
    }
}

export async function getStaticProps(context){

    const {params} = context

    console.log('Generating File and context is: ',context);

    const res = await fetch(`http://localhost:4000/products/${params.fileId}`)
    const data = await res.json()

    return{
        props:{
            product:data
        },
        revalidate: 10
    }
}