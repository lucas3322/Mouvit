import Head from 'next/head'
import { GetServerSideProps } from 'next';
import styles from '../styles/pages/home.module.css';
import {Profile} from '../components/Profile';
import {ExperienceBar} from '../components/ExperienceBar';
import {CompleteChallenges} from '../components/CompleteChallenges';
import {Countdow} from '../components/Countdow';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdowContext';
import { ChallengesProvider } from '../contexts/ChallengesContexts';



interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {
  
  return (

    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
        <div className={styles.container}>

          <Head>
            <title>Inicio | Move.it</title>
          </Head>
        <ExperienceBar />
        
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallenges />
                <Countdow />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
            </CountdownProvider>
      </div>
   </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  

  return {
    props:{
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
  }
}
}