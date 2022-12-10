const NewsHome = ({news}) => {
    return ( 
        <>
            <h1>News Home Page</h1>
            {news.map(x=>(
                <>
                    <h2> {x.title} </h2>
                    <h3> {x.description} </h3>
                    <h4> {x.category} </h4>
                    <hr />
                </>
            ))}
        </>
     );
}
 
export default NewsHome;

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()

    return{
        props:{
            news: data
        }
    }
}