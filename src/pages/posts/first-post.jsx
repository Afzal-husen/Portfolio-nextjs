import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "@/components/Layout"

const FirstPost = () => {
    return(<Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script 
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyonload"
        onLoad={() => console.log("The FB SDK is loaded")}
        />
        <h1>
            This is My First time using Next js
           <Link href="/">Go Back</Link>
        </h1>
           <Image
            src="/images/tower.jpg"
            width={500}
            height={500}
            alt="tower"
            /> 
        </Layout>
    )
}

export default FirstPost