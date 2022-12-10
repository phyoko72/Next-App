const Cateogry = ({news}) => {
    console.log('Category: ',news);
    return ( 
        <>
            <h1>Category</h1>
            {news.map(x=>(
                <div key={x.id}>
                    <h2> {x.title} </h2>
                    <h3> {x.description} </h3>
                    <h4> {x.category} </h4>
                    <hr />
                </div>
            ))}
        </>
     );
}
 
export default Cateogry;

export async function getServerSideProps(context){
    const {params,res,req,query} = context

    console.log('\nWhat is params: ',params);
    console.log('\n\nWhat is query: ',query);

    const response = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const data = await response.json()

    return{
        props:{
            news: data
        }
    }
}