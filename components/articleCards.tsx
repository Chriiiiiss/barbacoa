import type { NextPage } from "next";

import styles from "./articleCards.module.css"
import Image from "next/image";
import Link from "next/link";

const ArticleCards: NextPage = () => {
    return(
        <div className={styles.cardLayout}>
            <div className={styles.imageLayout}>
                <Image
                    src="/base/article_img.png"
                    alt="Image d'article barbecue"
                    width={309}
                    height={200}
                    layout="fixed"
                    priority
                />
            </div>
            <div className={styles.textLayout}>
                <h3 className={styles.articleTitle}>Grillades d’été végétariennes</h3>
                <Link href="https://stackoverflow.com/" passHref>
                    <a className={styles.callToAction}>Consulter</a>
                </Link>
                <p className={styles.dateStamp}>31/12/2021</p>
            </div>
        </div>
    )
}

export default ArticleCards;