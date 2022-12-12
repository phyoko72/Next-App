import { useEffect, useState } from "react";

const Dashboard = () => {
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('http://localhost:4000/dashboard')
            .then(res=>res.json())
            .then(data=>{
                setData(data)
                setIsLoading(false)
            })
            .catch(err=>console.log(err))
    },[])

    return ( 
        <>  
            {isLoading && <h1>Loading . . . </h1> }

    
            <h1>Dashboard Page</h1>
            {data && 
            
            <>
                <h3>posts: {data.posts} </h3>
                <h3>likes: {data.likes} </h3>
                <h3>followers: {data.followers} </h3>
                <h3>following: {data.following} </h3>
            </>

            }

            
        </>
     );
}
 
export default Dashboard;