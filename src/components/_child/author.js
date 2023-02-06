import React from "react";
import Image from "next/image";
import Link from "next/link";

const author = ({ author }) => {
  

  return (
    <>
    {author && <div className="author flex py-5">
      <Image
        src={author?.img}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"} className="text-md font-bold text-gray-800 ">
          {author?.name}
        </Link>
        <span className="text-gray-500">{author?.designation}</span>
      </div>
    </div>}
    </>
  );
};

export default author;
