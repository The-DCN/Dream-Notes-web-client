import { ReactComponentElement } from "react"
import styles from "../styles/footer.module.css"
import Link from "next/link"

const Footer = () => {

    return(
        <div className={styles.footer_container}>
            <div>
                <div className={styles.footer_text}>
                  <Link href="/contribute"><a>Contribute to our project</a></Link>
                </div>
            </div>
            <div>
                <div className={styles.footer_text} >
                    <Link href="/donate"><a>Buy us a coffee</a></Link>
                </div>
            </div>
        </div>
    )
} 
export default Footer;