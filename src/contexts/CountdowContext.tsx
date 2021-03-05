import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContexts } from "./ChallengesContexts";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFineshed: boolean;
    isActive: boolean;
    startCountdow: () => void;
    resetCountdow: ()  => void;

}

interface CountdownProviderProps{
    children: ReactNode;
}

let countdowTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider ({ children } : CountdownProviderProps){
  const { startnewChallenge } = useContext(ChallengesContexts);

  const [time, setTime] = useState (25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFineshed, sethasFineshed] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  function startCountdow (){
    setIsActive(true);
}

function resetCountdow (){
    clearTimeout(countdowTimeout);
    setIsActive(false);
    setTime(25 * 60);
    sethasFineshed(false);
}
  


useEffect( () => {
    if(isActive && time > 0) {
        countdowTimeout = setTimeout(()=> {
            setTime(time - 1);
        },1000);
    } else if (isActive && time === 0) {
        sethasFineshed(true);
        setIsActive(false);
        startnewChallenge();
    }
}, [isActive, time])

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFineshed,
            isActive,
            startCountdow,
            resetCountdow,
        }}>
            { children }
        </CountdownContext.Provider>
    )
}