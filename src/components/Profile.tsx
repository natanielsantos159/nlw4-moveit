import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'


export function Profile() {
    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFkYwXqNhYuIw/profile-displayphoto-shrink_200_200/0/1557528131310?e=1619654400&v=beta&t=m_biIJLxTpXH0FfbfGPS7-6MQiBnleZ24c4Ae_tvBtA" alt="Nataniel Santos"/>
            <div>
                <strong>Nataniel Santos</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}