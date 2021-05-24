import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Dine() {
    //set state variables
    const [posts,setPosts] = useState([])
    
    //create our effect to fetch the data from the endpoint,useEffect accepts arrow function, within the function will empliment the URL
    
    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            //the get request, return a promise, which we blog the response inside it, as arrow function.

                .then(res => {
                    console.log(res)
                    //now we pass the response data to the setPosts(the method that will update the posts state variable),which make it render on the UI
                    setPosts(res.data)
                })
            // in catch we log the errors if any.
                .catch(err => {
                    console.log(err)
                    //on next line will specify empty dependency list to useEfeect,so the data will be fetched only one time, otherwise will be fetched infinitly
                    
                },[]) 
        }
    )
    return (
        //render a list of posts on the browser, will creat ul.
        <div>
            <ul>
                {
                   
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>

        
         
            
        </div>
    )
}

export default Dine

