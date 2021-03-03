import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/diego3.png" alt="Diego Fernandes" />
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    level 1
                </p>
            </div>
        </div>
    );
}