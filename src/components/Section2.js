import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from "@/lib/fetcher";
import Error from "./_child/error";

const Section2 = () => {
 const {data,isLoading,isError}=fetcher('api/posts')
 if(isLoading){
 return <div className="flex items-center justify-center">
 <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
   
 </div>
</div>
 }
 if(isError){
  return <Error/>
 }
  return (
    <section className="container mx-auto px-6 md:px-20 py-10 ">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data?.map((value,i)=>{
         return <Post data={value} key={i}/>
        })}
        
        
        
        </div>
    </section>
  );
};

export default Section2;

function Post({data}) {
  const {id,category,title,img,published,subtitle,author}=data
  return (
    <div className="item shadow-lg">
      <div className="images">
        <Link href={`posts/${id}`} legacyBehavior>
          <a>
            <Image
              src={img || "/"}
              alt="img"
              className="rounded"
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-500 hover:text-orange-700">
            {category || "unknown"}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-500 hover:text-gray-700">
            ~{published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl  font-bold text-gray-800 hover:text-gray-500"
          >
            {title || "title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {subtitle}
        </p>
        {author && <Author author={author}/>}
      </div>
    </div>
  );
}


