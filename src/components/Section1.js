import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import fetcher from "@/lib/fetcher";
import Error from "./_child/error";

const Section1 = () => {
  const { data, isLoading, isError } = fetcher("api/trending");
 
  if (isLoading) {
    return <div className="flex items-center justify-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      
    </div>
  </div>
  }
  if (isError) {
    return <Error/>
  }
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png')no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-36 lg:py-32" style={bg}>
      <div className="container mx-auto px-6 md:px-20">
        <h1 className="font-bold text-4xl text-center pb-12">Trending</h1>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          {data?.map((value,i)=>{
            return <SwiperSlide key={i}><Slide data={value} /></SwiperSlide>

          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;

function Slide({data}) {
 
 const {id,title,subtitle,category,img,published,author}=data
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`} legacyBehavior>
          <a>
            <Image
              src={img || "/images/img1.jpg"}
              alt="img"
              width={600}
              height={600}
            />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
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
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-500"
          >
            {title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {subtitle}
        </p>
        {author ?<Author author={author}/>:"" }
      </div>
    </div>
  );
}
