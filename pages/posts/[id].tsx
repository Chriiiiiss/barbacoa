import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import BarbaHeader from "../../components/header";
import LayoutReceipts from "../../components/layoutReceipts";
import BarbaFooter from "../../components/footer";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Image from "next/image";



type Params = {
    params: {
        id: string
    }
}

type PostData = {
    postData: {
        title: string,
        id: string,
        date: string,
        subtitle: string,
        imgInArticle: string,
        contentHtml: string,
        nbrPersonnes: string,
        ingredients: Array<string>
    }
}


const Posts: NextPage<PostData> = ({postData}) => {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <link
                    rel="preload"
                    href="fonts/OhnoFatfaceDemo-12Pt.otf"
                    as="font"
                    crossOrigin=""
                />
                <meta name="description" content="Articles, pensés et écrits par nos chefs cuisinier Alexandra, Inès et Chris" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <BarbaHeader/>
            <h3 className='h3Title'>{postData.title}</h3>
            <h3 className='subTitle'>{postData.subtitle}</h3>
            <LayoutReceipts article={false}>
                <div>
                    <p className={"textReceiptsContentNbr"}>{postData.nbrPersonnes}</p>
                    {postData.ingredients.map((ingredient: string, key: number) => {
                        return(<p key={key} className="textReceiptsContent">- {ingredient}</p>)
                    })}
                </div>
                <div className="stepsLayout">
                    <div>
                        <Image
                            src={postData.imgInArticle}
                            width={300}
                            height={400}
                            alt= "Image Article BBQ"
                            layout="fixed"
                            priority
                        />
                    </div>
                    <div>
                        <p className="subTitleReceipts">Recette:</p>
                        <div className={"textReceiptsSteps"} dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                    </div>
                </div>
            </LayoutReceipts>
            <BarbaFooter/>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(params: Params) {
    const postData = await getPostData(params.params.id)
    return {
        props: {
            postData
        }
    }
}

export default Posts

