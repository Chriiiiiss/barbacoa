import type { NextPage } from "next";
import Head from "next/head";
import BarbaHeader from "../components/header";
import BarbaFooter from "../components/footer";

const About: NextPage = () => {
    return(
        <>
            <Head>
                <title>About</title>
            </Head>
            <BarbaHeader/>
            <BarbaFooter/>
        </>
    )
}

export default About;