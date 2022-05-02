// create your App component here
import React,{useEffect, useState} from 'react'



export default function App() {

    const [image, setImage] = useState("")
    //const [isLoaded, setIsLoaded] = useState(false)
    useEffect((()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((url) => {
            console.log(url.message)
            setImage(url.message)
          //  setIsLoaded(true)
        })
    }), [])
    if(image === null ) return <p>Loading..</p>

    return (
    <div>
        <img 
            src={image}
            alt='A Random Dog'
        />

    </div>
  )
}
