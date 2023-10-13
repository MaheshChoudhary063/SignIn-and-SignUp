import React from 'react'
import { signOut} from 'firebase/auth';
import { database } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Home.css';
const HomeScreen = () => {
    const history = useNavigate()
      
    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
  return (
    <>
        <h1>
            Home
        </h1>
        <button onClick={handleClick}>Sign Out</button>
    </>
  )
}

export default HomeScreen