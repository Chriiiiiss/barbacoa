import type { NextPage } from "next";
import styles from "./filterBar.module.css"
import Image from "next/image";

const FilterBar: NextPage = () => {
    return(
        <div className={styles.layout}>
            <div className={styles.filterBox}>
                <span className={styles.filterComp}>
                    Prix
                    <span className={styles.arrowImg}>
                        <Image
                            src="/down_arrow.svg"
                            alt="Down arrow"
                            width={15}
                            height={15}
                        />
                    </span>
                </span>
                <span className={styles.filterComp}>
                    Type
                    <span className={styles.arrowImg}>
                        <Image
                            src="/down_arrow.svg"
                            alt="Down arrow"
                            width={15}
                            height={15}
                        />
                    </span>
                </span>
                <span className={styles.filterComp}>
                    Plancha
                    <span className={styles.arrowImg}>
                        <Image
                            src="/down_arrow.svg"
                            alt="Down arrow"
                            width={15}
                            height={15}
                        />
                    </span>
                </span>
                <span className={styles.filterComp}>
                    Marque
                    <span className={styles.arrowImg}>
                        <Image
                            src="/down_arrow.svg"
                            alt="Down arrow"
                            width={15}
                            height={15}
                        />
                    </span>
                </span>
            </div>
            <p className={styles.reloadFilter}>Réinitialiser</p>
        </div>
    )
}

export default FilterBar