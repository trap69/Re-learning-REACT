import React, { useState, useEffect} from 'react'

const Users = () => {

    const [resourceType, setResourceType] = useState('users');
    const [items, setItems] = useState ([]);
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(Response =>  Response.json())
        .then(json =>  setItems(json))

    }, [resourceType])


  return (
    <div>
        <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={()=> setResourceType('users')}>Posts</button>
        </div>
        <h1>{Users}</h1>
        <h3>{resourceType}</h3>
        <div>
        {items.map(item => {
            return <div>{JSON.stringify(item)}</div>
        })}
        </div>
        
    </div>
  )
}

export default Users