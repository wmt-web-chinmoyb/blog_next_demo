import React from "react";
import Layout from "@/components/layout/layout";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";
import getPost from "../../lib/helper";
import fetcher from "@/lib/fetcher";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function Page({fallback}) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    );
  }
  return (
    <>
      <SWRConfig value={{fallback}}>
        <Article {...data} />
      </SWRConfig>
    </>
  );
}

const Article = ({
  id,
  category,
  title,
  img,
  published,
  description,
  subtitle,
  author,
}) => {
  return (
    <Layout>
      <section className="container mx-auto px-2 md:px-2 lg:py-16 py-32 lg:w-1/2 md:w-4/5 ">
        <div className="flex justify-center">
          {author && <Author author={author} />}
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-center text-3xl lg:text-4xl pb-5">
            {title}
          </h1>
          <p className="text-center px-8 text-gray-500 text-xl">{subtitle}</p>
          <div className="py-10">
            <Image src={img || "/images/img1.jpg"} width={900} height={600} />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description}
          </div>
        </div>
        <Related />
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts=await getPost()

  const paths=posts?.data.map(value=>{
    return {
      params:{
        postId:value.id.toString(),
      }
    }

  })
  return {
    paths,
    fallback:false
  }
}
export async function getStaticProps({params}) {
  const posts=await getPost(params.postId)
  return {
    props:{
      fallback:{
        'api/posts':posts
      }
    }
  }
}
