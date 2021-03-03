import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {

    const hasActiveChallenge = true;


    return (
        <div className={style.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={style.challengeActive}>
                    
                    <header>Ganhe 400 XP</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
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