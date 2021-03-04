import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile () {

    const { level } = useContext(ChallengesContexts);
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1041636002434084865/JDgOTCng_400x400.jpg" alt="Lucas" />
            <div>
                <strong>O brabo tem nome</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    level {level}
                </p>
            </div>
        </div>
    );
}