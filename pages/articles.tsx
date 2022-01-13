import type { NextPage } from "next";
import Head from "next/head";

import BarbaHeader from "../components/header";
import LayoutContent from "../components/layoutContent";
import BarbaFooter from "../components/footer";
import ArticleCards from "../components/articleCards";

type LayoutProps = {
    article: Boolean;
}

const Articles: NextPage<LayoutProps> = (article: LayoutProps) => {

    return(
        <>
            <Head>
                <title>Nos articles</title>
                <link
                    rel="preload"
                    href="fonts/OhnoFatfaceDemo-12Pt.otf"
                    as="font"
                    crossOrigin=""
                />
                <meta name="description" content="Nos Articles, pensés et écrits par nos chefs cuisinier Alexandra, Inès et Chris" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BarbaHeader/>
            <h3 className='h3Title'>Nos articles</h3>
            <LayoutContent article={true}>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
            </LayoutContent>
            <BarbaFooter/>
        </>
    )
}

export default Articles