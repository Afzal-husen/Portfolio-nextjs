import {icons} from "../utils/icons.js"
import styles from "../styles/Skills.module.css" 

const Skills = () => {
    return(
        <div className={styles.container}>
            {icons.map((icon) => (
                <div style={{color: icon.iconColor}} className={`${styles.icon}`} key={icon.id}>
                    <div className={styles.name}>
                        {icon.name}
                    </div>
                    {icon.icon}
                </div>
            ))}
        </div>
    )
}

export default Skills