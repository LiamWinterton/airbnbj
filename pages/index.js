import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div id="airbnbj">
      <Head>
        <title>Airbnbj | Travel, with a naughty twist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header__top}>
          <div className={styles.container}>
            <a href="#">Get the latest on our COVID-19 response</a>
          </div>
        </div>
        <div className={styles.header__bottom}>
          <div className={styles.container}>
            <Image src="/logo-white.png" layout="intrinsic" width={290} height={60} priority={true}/>
            <ul className={styles.header__nav}>
              <li className={styles.header__nav__active}><a href="#">Places to stay</a></li>
              <li><a href="#">Experiences</a></li>
              <li><a href="#">Online Experiences</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
