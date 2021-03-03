import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar (){

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContexts);


    const percentTonextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar} >
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentTonextLevel}%`}}/>

                <span className={styles.currentExperience} style={{left: `${percentTonextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}