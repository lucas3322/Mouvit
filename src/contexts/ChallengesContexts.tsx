import { createContext, useState, ReactNode} from 'react';
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
    experienceToNextLevel: number;
}

interface ChallengesProviderProps{
    children: ReactNode;
}


export const ChallengesContexts = createContext ({} as ChallengesContextData );

export function ChallengesProvider({ children } : ChallengesProviderProps ){

    const [ level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(52);
    const [challengesCompleted, setChallengesCompleted] =useState(2);

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4 , 2)


    function levelUp(){
        setLevel(level + 1);
        
      }

      function startnewChallenge (){
        const randomChallendeIndex = Math.floor(Math.random() * Challenges.length)
        const challenge = Challenges[randomChallendeIndex]

        setActiveChallenge(challenge)
      }


      function resetChalenge() {
          setActiveChallenge(null)
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
            experienceToNextLevel, }}>
            {children}
        </ChallengesContexts.Provider>
    );
}

