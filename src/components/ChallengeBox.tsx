import { useContext} from  'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {
    const { activeChallenge } = useContext(ChallengesContexts);

    


    return (
        <div className={style.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={style.challengeActive}>
                    
                    <header>Ganhe {activeChallenge.amount} XP</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type="button" 
                        className={style.challengeFailedButton}
                        >
                            Falhei
                        </button>

                        <button 
                        type="button" 
                        className={style.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                <div className={style.ChallengeNotActive}>
                 <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level UP" />
                        Avance de Level completando desafios !!
                    </p>  
                </div> 
            ) }
        </div>
    )
}