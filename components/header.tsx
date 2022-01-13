import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const BarbaHeader: NextPage = () => {

    const router = useRouter();

    return (
        <header className='headerBox'>
            <div className='logo'>
                <Link href="/" passHref>
                    <Image
                        src="/barbacoa_logo.svg"
                        alt="Barbacoa Logo"
                        width={191}
                        height={23}
                    />
                </Link>
            </div>
            <div className='navBar'>
                <Link href="/" passHref>
                    <a className={router.pathname == "/" ? "active menuText" : "menuText"}>Comparer</a>
                </Link>
                <Link href="/articles" passHref>
                    <a className={router.pathname == "/articles" ? "active menuText" : "menuText"}>Articles</a>
                </Link>
                <Link href="/about" passHref>
                    <a className={router.pathname == "/about" ? "active menuText" : "menuText"}>À propos</a>
                </Link>
                <Link href="/contact" passHref>
                    <a className={router.pathname == "/contact" ? "active menuText" : "menuText"}>Contact</a>
                </Link>
            </div>
        </header>
    )
}

export default BarbaHeader