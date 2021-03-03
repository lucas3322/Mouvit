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


    function levelUp(){
        setLevel(level + 1);
        
      }

      function startnewChallenge (){
        const randomChallendeIndex = Math.floor(Math.random() * Challenges.length)
        const challenge = Challenges[randomChallendeIndex]

        setActiveChallenge(challenge)
      }


    return(
        <ChallengesContexts.Provider value={{ 
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startnewChallenge,
            activeChallenge, }}>
            {children}
        </ChallengesContexts.Provider>
    );
}

