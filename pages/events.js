import { useRouter } from "next/router";
import { useState } from "react";

const Events = ({events}) => {

    const [selectedCategory, setSelectedCategory] = useState(events);
    const router = useRouter()

    console.log('router: ',router);
    console.log('events: ',events);

    const fetchEvents = (e)=>{
        setTimeout(async() => {
            console.log("Input: ",e.target.value);
            const search = await fetch(`http://localhost:4000/events?category=${e.target.value}`)
            const result = await search.json()
            setSelectedCategory(result)
            router.push(`/events?category=${e.target.value}`,undefined,{shallow:true})
        }, 1000);

    }

    return ( 
        <>
            <h1>Events page</h1>
            <input onKeyUp={fetchEvents}  type="text" name="category" id="" placeholder="Choose Category"/><br />

            {selectedCategory.map(selected=>(
                <div key={selected.id}>
                    <h1>Selected Category Section</h1>
                    <h2>No.{selected.id}/ {selected.title} </h2>
                    <p> {selected.description} </p>
                    <b>Category: {selected.category} || Date: {selected.date}</b>
                    <hr />
                </div>
            ))}

        </>
     );
}
 
export default Events;

export async function getServerSideProps(context){
    const {query} = context
    console.log('QUERY: ',query);

    const {category} = query

    const queryString = category ? `category=${category}` : ''

    const res = await fetch('http://localhost:4000/events'+`?${queryString}`)
    const data = await res.json()

    return {
        props:{
            events:data
        }
    }
}