import { createContext, useState, ReactNode, useEffect} from 'react';
import Challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;

}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startnewChallenge: () => void;
    resetChalenge: () => void;
    completeChallenge: () => void;
    experienceToNextLevel: number;
}

interface ChallengesProviderProps{
    children: ReactNode;
}


export const ChallengesContexts = createContext ({} as ChallengesContextData );

export function ChallengesProvider({ children } : ChallengesProviderProps ){

    const [ level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] =useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4 , 2)


    useEffect(() => {
        Notification.requestPermission
    }, [])

    function levelUp(){
        setLevel(level + 1);
        
      }

      function startnewChallenge (){

        const randomChallendeIndex = Math.floor(Math.random() * Challenges.length)
        const challenge = Challenges[randomChallendeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio 🎉', {
              body: `Valendo ${challenge.amount} de xp!`,
              
            });
          }
        }


      function resetChalenge() {
          setActiveChallenge(null)
      }

      function completeChallenge(){
          if(!activeChallenge){
              return;
          }

          const { amount } = activeChallenge;

          let finalExperience = currentExperience + amount;

          if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;    
            levelUp();
          }

          setCurrentExperience(finalExperience);
          setActiveChallenge(null);
          setChallengesCompleted(challengesCompleted + 1);
      }

    return(
        <ChallengesContexts.Provider value={{ 
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startnewChallenge,
            activeChallenge,
            resetChalenge,
            experienceToNextLevel,
            completeChallenge, }}>
            {children}
        </ChallengesContexts.Provider>
    );
}

