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
      {blogs.items.map((blog:any)=>{

      <div className='bg-white p-5' key={blog.sys.id}>
        <Image src={Kurti1} alt='kurti 1' width={250} height={250}></Image>
        <h1 className='text-3xl font-semibold '>{blog.fields.title}</h1>
        <p className='text-md'>{blog.fields.description}</p>
        <h2 className="font-bold">$50.00</h2>   
      </div>
      })}
      <div className='bg-white p-5'>
        <Image src={Kurti2} alt='' width={250} height={250}></Image>
        <h1 className='text-3xl font-semibold '>Female Kurti</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem. Veritatis nobis blanditiis explicabo est in, voluptates suscipit alias corporis doloribus vel quaerat itaque officiis optio. Dolore saepe magni aliquam.</p>
        <h2 className="font-bold">$50.00</h2>
      </div>
      <div className='bg-white p-5'>
        <Image src={Kurti3} alt='kurti 1' width={500} height={500}></Image>
        <h1 className='text-3xl font-semibold '>Female Kurti</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem. Veritatis nobis blanditiis explicabo est in, voluptates suscipit alias corporis doloribus vel quaerat itaque officiis optio. Dolore saepe magni aliquam.</p>
        <h2 className="font-bold">$50.00</h2>
      </div>
      <div className='bg-white p-5'>
        <Image src={Kurti4} alt='kurti 1' width={350} height={350}></Image>
        <h1 className='text-3xl font-semibold '>Female Kurti</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem. Veritatis nobis blanditiis explicabo est in, voluptates suscipit alias corporis doloribus vel quaerat itaque officiis optio. Dolore saepe magni aliquam.</p>
        <h2 className="font-bold">$50.00</h2>
      </div>
      <div className='bg-white p-5'>
        <Image src={Kurti5} alt='kurti 1' width={400} height={400}></Image>
        <h1 className='text-3xl font-semibold '>Female Kurti</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem. Veritatis nobis blanditiis explicabo est in, voluptates suscipit alias corporis doloribus vel quaerat itaque officiis optio. Dolore saepe magni aliquam.</p>
        <h2 className="font-bold">$50.00</h2>
      </div>
      <div className='bg-white p-5'>
        <Image src={Kurti6} alt='kurti 1' width={280} height={280}></Image>
        <h1 className='text-3xl font-semibold '>Female Kurti</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem. Veritatis nobis blanditiis explicabo est in, voluptates suscipit alias corporis doloribus vel quaerat itaque officiis optio. Dolore saepe magni aliquam.</p>
        <h2 className="font-bold">$50.00</h2>
      </div>
      <div className='bg-white p-5'>
        <Image src={Kurti7} alt='kurti 1' width={270} height={270}></Image>
        <h1 className='text-3xl font-semibold '>Female Kurti</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem. Veritatis nobis blanditiis explicabo est in, voluptates suscipit alias corporis doloribus vel quaerat itaque officiis optio. Dolore saepe magni aliquam.</p>
        <h2 className="font-bold">$50.00</h2>
      </div>
      <div className='bg-white p-5'>
        <Image src={Kurti8} alt='kurti 1' width={250} height={250}></Image>
        <h1 className='text-3xl font-semibold '>Female Kurti</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem. Veritatis nobis blanditiis explicabo est in, voluptates suscipit alias corporis doloribus vel quaerat itaque officiis optio. Dolore saepe magni aliquam.</p>
        <h2 className="font-bold">$50.00</h2>
      </div>
    </div>

    
    </>
  )
}
