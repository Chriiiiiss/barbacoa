import type { NextPage } from "next";

import styles from "./articleCards.module.css"
import Image from "next/image";
import Link from "next/link";

interface Article {
    title: string
    date: string
    imgArticle: string
}

const ArticleCards: NextPage<Article> = ({title, date, imgArticle}) => {
    return(
        <div className={styles.cardLayout}>
            <div className={styles.imageLayout}>
                <Image
                    src= {imgArticle}
                    alt= "Image d'article barbecue"
                    width={309}
                    height={200}
                    layout= "fixed"
                    priority
                />
            </div>
            <div className={styles.textLayout}>
                <h3 className={styles.articleTitle}>{title}</h3>
                <Link href="https://stackoverflow.com/" passHref>
                    <a className={styles.callToAction}>Consulter</a>
                </Link>
                <p className={styles.dateStamp}>{date}</p>
            </div>
        </div>
    )
}

export default ArticleCards;