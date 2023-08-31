import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

import axios from "axios";
 const Mypost = () => {
  const[blogss, setBlogs] = useState([])
  const localstrageusers  = localStorage.getItem('user')
  const user = JSON.parse(localstrageusers )
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/myblogs?email=${user?.email}`).then((res) => {
      setBlogs(res.data);
     ;
    });
  }, []);
console.log(blogss)

const deleteHandle =(id)=>{
  console.log(id)
  fetch(`${import.meta.env.VITE_URL}/myblogs/${id}`,{
      method:'DELETE'
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.deletedCount > 0) {
        
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Item deleted Succesfully',
              showConfirmButton: false,
              timer: 1500
            })
            window.location.reload()
      }
      
  })
}
  if(blogss?.length === 0 ){
    return <div><h2 className='text-4xl text-black text-center font-bold'>
      You Havent Post any blog
      </h2></div>
  }
  return (
    <div className='grid md:grid-cols-3 gap-5  lg:grid-cols-4 max-w-[1080px] mt-10 mx-auto'>{
      blogss.map(singleblog=>{
        return <div key={singleblog._id}>
          <img className='h-[150px]' src={singleblog.image} alt="image" />
          <div className='flex gap-5'><span
          className='cursor-pointer' 
          onClick={()=>deleteHandle(singleblog._id)}>Delete</span> 
          <span><Link to={`/update/${singleblog._id}`}>Update</Link></span></div>
        </div>
      })
      }</div>
  )
}
export default Mypost
