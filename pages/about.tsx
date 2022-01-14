import type { NextPage } from "next";
import Head from "next/head";

import BarbaHeader from "../components/header";
import BarbaFooter from "../components/footer";
import LayoutContent from "../components/layoutContent";

const About: NextPage = () => {
    return(
        <>
            <Head>
                <title>Qui sommes-nous ?</title>
                <link
                    rel="preload"
                    href="fonts/OhnoFatfaceDemo-12Pt.otf"
                    as="font"
                    crossOrigin=""
                />
                <meta name="description" content="Les créateurs de Barbacoa, Le meilleur comparateur de Barbecue" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <BarbaHeader/>
            <h3 className='h3Title'>Qui sommes-nous ?</h3>
            <LayoutContent article={false}>
                <p className="aboutText">
                Nous sommes une jeune entreprise de 3 associés spécialisée dans les outils comparatifs.<br/>
                Nous souhaitons offrir à nos clients le meilleur produit possible avec un comparateur complet<br/>
                qui les guidera selon leurs envies.<br/><br/>

                C’est lors d’une journée d’été de 2015 que l’idée nous est venue après une longue discussion sur<br/>
                le choix du barbecue à acheter pour les repas des vacances. De nombreuses recherches sur<br/>
                Internet et l’avis de plusieurs vendeurs en boutique nous ont paru trop longs dans le but de<br/>
                choisir un barbecue. Barbecue, plancha, gaz, charbon, électrique ? Que choisir ? Nous<br/>
                avons alors développé un service simple, rapide et efficace, et surtout gratuit.<br/><br/>

                Les utilisateurs apprécient nos services et sont satisfaits de l&apos;outil, c’est donc un pari gagnant<br/>
                pour nous !<br/><br/>

                Nous souhaitons transmettre des valeurs de partage, de bien-être et de légèreté tout en<br/>
                proposant un service de qualité et gratuit. Trouver le meilleur produit au meilleur prix est notre<br/>
                priorité, car le bonheur du client fait notre satisfaction.
                </p>
            </LayoutContent>
            <BarbaFooter/>
        </>
    )
}

export default About;