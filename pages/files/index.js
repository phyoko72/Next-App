const Files = ({products}) => {
    return ( <>
        <h1>Files Page</h1>
        <hr />
        <ol>
            {products.map(x=>(
                <li>
                    <small> {x.title} </small> || 
                    <small> {x.price} </small>
                </li>
                
            ))}
        </ol>
        
    </> );
}
 
export default Files;

export async function getStaticProps(){
    const res = await fetch('http://localhost:4000/products')
    const data = await res.json()

    return{
        props:{
            products:data
        }
    }
}