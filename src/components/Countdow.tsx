import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdow.module.css';

let countdowTimeout: NodeJS.Timeout;

export function Countdow (){
  const [time, setTime] = useState (0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFineshed, sethasFineshed] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    

  function startCountdow (){
      setIsActive(true);
  }

  function resetCountdow (){
      clearTimeout(countdowTimeout);
      setIsActive(false);
      setTime(0.05 * 60);
  }
    


  useEffect( () => {
      if(isActive && time > 0) {
          countdowTimeout = setTimeout(()=> {
              setTime(time - 1);
          },1000);
      } else if (isActive && time === 0) {
          sethasFineshed(true);
          setIsActive(false);
      }
  }, [isActive, time])



  return(
      <div>
          <div className={styles.countdowContainer}>
              <div>
                  <span>{minuteLeft}</span>
                  <span>{minuteRight}</span>
              </div>
              <span>:</span>
              <div>
                  <span>{secondsLeft}</span>
                  <span>{secondsRight}</span>
              </div>
          </div>

          {hasFineshed ? (
            
              <button 
              disabled
              className={styles.CountdowButtom}
              >
                  Ciclo encerado
              </button>
              ) : (
                  <>
                      {isActive ? (

                          <button 
                          type="button" 
                          className={`${styles.CountdowButtom} ${styles.CountdowButtomActive}`}
                          onClick={resetCountdow}
                          >
                              Abandonar Ciclo
                          </button>

                          ) : 
                          <button 
                          type="button" 
                          className={styles.CountdowButtom}
                          onClick={startCountdow}
                          >
                              Iniciar um Ciclo
                          </button>
                      }
                  </>
              )}
      </div>
  );
}