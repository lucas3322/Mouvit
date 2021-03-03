import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges (){

    const { challengesCompleted } = useContext(ChallengesContexts);

    return(
        <div className={styles.completech}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}