import React from 'react'
import Kurti1 from "../public/1.jpg"
import Kurti2 from "../public/2.jpg"
import Kurti3 from "../public/3.jpg"
import Kurti4 from "../public/4.jpg"
import Kurti5 from "../public/1.webp"
import Kurti6 from "../public/2.webp"
import Kurti7 from "../public/3.webp"
import Kurti8 from "../public/4.webp"
import Image from 'next/image'
async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=cards`,{cache:"no-store"});
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function page() {
  const blogs = await getBlogs();
  console.log(blogs)
  return (
    <>
    <div className='bg-gray-700 grid grid-cols-4 p-5 gap-5'>
      {blogs.items.map((blog:any)=>(
      <div className='bg-white p-5' key={blog.sys.id}>
        {blogs.includes.Asset.map((Element:any)=>(
<div key={blog.fields.images.sys.id}>
  {blog.fields.images.sys.id == Element.sys.id ?
        <Image src={"https:" +  Element.fields.file.url} alt='kurti 1' width={250} height={250}></Image>:<div></div>}
</div>
        ))}
        <h1 className='text-3xl font-semibold'>{blog.fields.title}</h1>
        <p className='text-md'>{blog.fields.description}</p>
        <h2 className="font-bold">Rs:{blog.fields.price}</h2>   
      </div>
      ))}
    </div>

    
    </>
  )
}
