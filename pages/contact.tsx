import type { NextPage } from "next";
import Head from "next/head";
import BarbaHeader from "../components/header";
import BarbaFooter from "../components/footer";

const Contact: NextPage = () => {
    return(
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <BarbaHeader/>
            <BarbaFooter/>
        </>
    )
}

export default Contact;