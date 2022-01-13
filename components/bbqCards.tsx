import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./bbqCards.module.css"

const BbqCards: NextPage = () => {
    return(
        <div className={styles.layout}>
            <div className={styles.imgLayout}>
                <Image
                    src="/base/bbq_img.png"
                    alt="Image de barbecue"
                    width={191}
                    height={200}
                />
            </div>
            <div className={styles.textLayout}>
                <div className={styles.titleTextLayout}>
                    <h4 className={styles.bbqTitle}>Barbecue Alice&apos;s Garden</h4>
                    <h4 className={styles.bbqPrice}>249,99€</h4>
                </div>
                <div className={styles.textContent}>
                    <p>Barbecue au gaz RENO - 4 brûleurs avec thermomètre 14kW</p>
                    <p>Dimensions : Barbecue : L 138,5 x l 57 x H 109cm - Surface de cuisson : L 76 x l 41,5cm</p>
                </div>
                <Link href="https://stackoverflow.com/" passHref>
                    <a className={styles.callToAction}>Consulter</a>
                </Link>
            </div>
        </div>
    )
}

export default BbqCards;