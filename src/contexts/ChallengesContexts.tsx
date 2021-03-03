import { createContext, useState, ReactNode} from 'react';

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
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


    function levelUp(){
        setLevel(level + 1);
        
      }

      function startnewChallenge (){
          console.log('new Challenge');
      }


    return(
        <ChallengesContexts.Provider value={{ 
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startnewChallenge, }}>
            {children}
        </ChallengesContexts.Provider>
    );
}

