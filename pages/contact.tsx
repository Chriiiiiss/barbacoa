import type { NextPage } from "next";
import Head from "next/head";

import BarbaHeader from "../components/header";
import BarbaFooter from "../components/footer";
import LayoutContent from "../components/layoutContent";

const Contact: NextPage = () => {
    return(
        <>
            <Head>
                <title>Contactez-nous !</title>
            </Head>
            <BarbaHeader/>
            <h3 className='h3Title'>Contactez-nous !</h3>
            <LayoutContent>
                <span className="aboutText">
                Contactez-nous par e-mail, téléphone ou voie postale <br/><br/>

                <span className="underlined">Adresse</span>: 27 bis Rue du Progrès, Montreuil<br/>
                <span className="underlined">Numéro de téléphone</span> : 00 22 54 78 66<br/>
                <span className="underlined">Email</span> : xxxx@gmail.com
                </span>
            </LayoutContent>
            <BarbaFooter/>
        </>
    )
}

export default Contact;