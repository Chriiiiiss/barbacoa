import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const BarbaHeader: NextPage = () => {
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
                    <a className='menuText active'>Comparer</a>
                </Link>
                <Link href="/" passHref>
                    <a className='menuText'>Articles</a>
                </Link>
                <Link href="/" passHref>
                    <a className='menuText'>À propos</a>
                </Link>
                <Link href="/" passHref>
                    <a className='menuText'>Contact</a>
                </Link>
            </div>
        </header>
    )
}

export default BarbaHeader