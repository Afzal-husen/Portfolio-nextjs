import {icons} from "../utils/icons.js"
import styles from "../styles/Skills.module.css" 

const Skills = () => {

    return(
        <div className={styles.container}>
            {icons.map((icon) => (
                <div className={styles.wrapper} style={{color: icon.iconColor}} key={icon.id}>
                    <div className={`${styles.icon}`} >
                        {icon.icon}
                    </div>
                    <div className={styles.name}>
                        {icon.name}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skills