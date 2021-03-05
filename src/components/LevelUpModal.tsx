import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal (){

    const { level, closeLevelupModal } = useContext(ChallengesContexts)
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" 
                    onClick={closeLevelupModal}
                >
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}