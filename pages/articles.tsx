import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

import BarbaHeader from "../components/header";
import LayoutContent from "../components/layoutContent";
import BarbaFooter from "../components/footer";
import ArticleCards from "../components/articleCards";
import { stringify } from "querystring";
import { getSortedPostsData } from "../lib/posts";

type LayoutProps = {
    article: Boolean;
}
interface ArticleProps {
    article: LayoutProps
    allPostsData: InferGetStaticPropsType<typeof getStaticProps>
}

interface Posts {
    title: string
    id: string
    date: string
    imgArticle: string
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const Articles: NextPage<ArticleProps> = ({article, allPostsData}) => {

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
                <link rel="icon" href="/favicon.png" />
            </Head>
            <BarbaHeader/>
            <h3 className='h3Title'>Nos articles</h3>
            <LayoutContent article={true}>
            {allPostsData.map(({id,title,date, imgArticle}: Posts) => (
                <ArticleCards key={id} title={title} date={date} imgArticle={imgArticle} id={id}/>
            ))}
            </LayoutContent>
            <BarbaFooter/>
        </>
    )
}

export default Articles