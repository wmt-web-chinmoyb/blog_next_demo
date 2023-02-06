import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import SwiperCore,{Autoplay} from 'swiper'
import fetcher from "@/lib/fetcher";

const Section4 = () => {
  const {data:travelData,isLoading:travelIsloading,isError:travelIserror,}=fetcher('api/popular')
  const { data:BuisnessData, isLoading:buisnessIsloading, isError:buisnessIserror } = fetcher("api/trending");

    SwiperCore.use([Autoplay])
  return (
    <section className="container mx-auto px-6 md:px-20 py-16">
      <div className="grid lg:grid-cols-2 ">
        <div className="item">
          <h1 className="font-bold text-3xl lg:text-4xl pb-12">Buisness</h1>
          <div className="flex flex-col gap-6">
            {BuisnessData?.map((value,i)=>{
              return <Post data={value} key={i}/>
            })}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-3xl lg:text-4xl pb-12">Travel</h1>
          <div className="flex flex-col gap-6">
          {travelData?.map((value,i)=>{
              return <Post data={value} key={i}/>
            })}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

function Post({data}) {
  const { id, category, title, img, published, subtitle, author } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`posts/${id}`} legacyBehavior>
          <a>
            <Image
              src={img || "/images/img1.jpg"}
              className="rounded"
              width={300}
              height={250}
              alt="img"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-500 hover:text-orange-700">
            {category}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-500 hover:text-gray-700">
            ~{published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className=" text-xl font-bold text-gray-800 hover:text-gray-500"
          >
            {title}
          </Link>
        </div>
        {author && <Author author={author}/>}
      </div>
      
    </div>
  );
}
