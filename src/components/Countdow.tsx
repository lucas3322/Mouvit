import { useContext } from 'react';
import styles from '../styles/components/Countdow.module.css';
import {CountdownContext} from '../contexts/CountdowContext';



export function Countdow (){
    const { minutes, seconds, hasFineshed, isActive, startCountdow, resetCountdow } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    

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