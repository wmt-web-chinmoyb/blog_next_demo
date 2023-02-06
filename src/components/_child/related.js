import Author from './author'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import fetcher from '@/lib/fetcher'

const Related = () => {
  const { data, isLoading, isError } = fetcher("api/popular");
  return (
    <section className='pt-2'>
        <h1 className="font-bold text-3xl py-10">Related</h1>
        <div className='flex flex-col gap-10'>
          {data?.map((value,i)=>{
            return <Post data={value} key={i}/>
          })}
         
        </div>

    </section>
  )
}

export default Related

function Post({data}){
  const { id, category, title, img, published, subtitle, author } = data;
    return (
        <div className='flex gap-5'>
            <div className="image flex flex-col justify-start">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src={img || "/images/img1.jpg"}
              className="rounded"
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href="/" className="text-orange-500 hover:text-orange-700">
           {category}
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            ~{published}
          </Link>
        </div>
        <div className="title">
          <Link
            href="/"
            className=" text-xl font-bold text-gray-800 hover:text-gray-500"
          >
            {title}
          </Link>
        </div>
        {author && <Author author={author} />}
      </div>

        </div>
    )
}