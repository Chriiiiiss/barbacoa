import type { NextPage } from "next";
import Head from "next/head";
import BarbaHeader from "../components/header";
import BarbaFooter from "../components/footer";

const Articles: NextPage = () => {
    return(
        <>
        <Head>
            <title>Articles</title>
        </Head>
        <BarbaHeader/>
        <BarbaFooter/>
        </>
    )
}

export default Articles