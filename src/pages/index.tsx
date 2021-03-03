import Head from 'next/head'
import styles from '../styles/pages/home.module.css';
import {Profile} from '../components/Profile';
import {ExperienceBar} from '../components/ExperienceBar';
import {CompleteChallenges} from '../components/CompleteChallenges';
import {Countdow} from '../components/Countdow';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | Move.it</title>
      </Head>
    <ExperienceBar />

    <section>
      <div>
        <Profile />
        <CompleteChallenges />
        <Countdow />
      </div>
      <div>
        
      </div>
    </section>
   
   </div>
  )
}
