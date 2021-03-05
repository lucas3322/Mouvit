import { createContext, useState, ReactNode, useEffect} from 'react';
import Challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

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
    experienceToNextLevel: number;
    levelUp: () => void;
    startnewChallenge: () => void;
    resetChalenge: () => void;
    completeChallenge: () => void;
    closeLevelupModal: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}




export const ChallengesContexts = createContext ({} as ChallengesContextData );

export function ChallengesProvider({ 
    children, 
    ...rest } : ChallengesProviderProps ) {

    const [ level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] =useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen, setisLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4 , 2)


    useEffect(() => {
        Notification.requestPermission
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [level, currentExperience, challengesCompleted])

    function levelUp(){
        setLevel(level + 1);
        setisLevelUpModalOpen(true)
        
      }

    function closeLevelupModal(){
        setisLevelUpModalOpen(false)
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
            closeLevelupModal,
            experienceToNextLevel,
            completeChallenge, }}>
            {children}
            { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContexts.Provider>
    );
}

