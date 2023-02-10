import React, { useState, useEffect } from "react";
import { ImFacebook2, ImYoutube, ImTwitter } from "react-icons/im";
import Link from "next/link";


const Header = () => {
  const [header, setHeader] = useState("header");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div>
      <header className={header}>
        <div className="xl:container xl:mx-auto flex  items-center sm:justify-start px-5  lg:justify-between py-3">
          <div className="md:flex-none w-96 order-1 lg:order-1   py-3 sm:py-0">
            <svg
              id="logo-38"
              width="78"
              height="32"
              viewBox="0 0 78 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
                class="ccustom"
                fill="#FF7A00"
              ></path>{" "}
              <path
                d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
                class="ccompli1"
                fill="#FF9736"
              ></path>{" "}
              <path
                d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
                class="ccompli2"
                fill="#FFBC7D"
              ></path>{" "}
            </svg>
          </div>
          <div className="shrink w-80 order-2  lg:order-2  text-center">
            <Link href="/" legacyBehavior>
              <a className="font-bold text-3xl uppercase ">
                <span className="text-red-500">Blog</span>Post
              </a>
            </Link>
          </div>
          <div className="w-96 order-3 hidden lg:flex justify-center " >
            <div className="flex gap-6">
              <Link href="https://www.facebook.com/" legacyBehavior>
                <a className="hover:text-blue-200">
                  <ImFacebook2 color="#888888" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/" legacyBehavior>
                <a>
                  <ImYoutube color="#888888" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/" legacyBehavior>
                <a>
                  <ImTwitter color="#888888" />
                </a>
              </Link>
            </div>
          </div>
        </div>
       <hr/>
      </header>
      
    </div>
  );
};

export default Header;
