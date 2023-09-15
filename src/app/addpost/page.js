"use client"

import React, { useState } from 'react'
import '../../style/addpost.css'

function Page() {
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [date,setDate]=useState("")
  const [category,setCategory]=useState("")
  const [content,setContent]=useState("")

  const handelSubmit=async(event)=>{
    event.preventDefault();
    console.log(title,author,date,category,content)
    let data=await fetch('http://localhost:3000/api',{
      method:"POST",
      body:JSON.stringify({title,author,date,category,content}),
      headers: {
        'Content-Type': 'application/json'
    }
    })
    
    data=await data.json()
    if(data.success){
      alert ("Data added successfully")
    }
  }
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Add new post.</h2>
        <form onSubmit={handelSubmit} >
          
          <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}  />
          <input type="text" placeholder='Author' value={author} onChange={e=>setAuthor(e.target.value)}  />
          <input type="date" placeholder='Date' value={date} onChange={e=>setDate(e.target.value)}  />
          <input type="text" placeholder='category' value={category} onChange={e=>setCategory(e.target.value)}  />
          <textarea type="textarea" placeholder='content' value={content} onChange={e=>setContent(e.target.value)}  />
          <button type='submit'>Add Blog</button>
        </form>

    </div>
  )
}

export default Page