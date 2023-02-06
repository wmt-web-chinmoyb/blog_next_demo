import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";


import Layout from "@/components/layout/layout";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
      <Layout>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </Layout>
        
      
    </>
  );
}
