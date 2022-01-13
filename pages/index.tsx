import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import BarbaHeader from '../components/header'
import LayoutContent from '../components/layoutContent'
import BarbaFooter from '../components/footer'
import FilterBar from '../components/filterBar'
import BbqCards from '../components/bbqCards'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Barbacoa</title>
        <link
          rel="preload"
          href="fonts/OhnoFatfaceDemo-12Pt.otf"
          as="font"
          crossOrigin=""
        />
        <meta name="description" content="Site de comparaison de barbecue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BarbaHeader/>
      <h3 className='h3Title'>Barbacoa,<br/>le comparateur de barbecues !</h3>
      <h4 className='subTitle'>Trouvez le barbecue parfait pour vos futurs repas estivaux !</h4>
      <FilterBar/>
      <LayoutContent article={false}>
        <BbqCards/>
        <BbqCards/>
        <BbqCards/>
      </LayoutContent>
      <BarbaFooter/>
    </>
  )
}

export default Home
