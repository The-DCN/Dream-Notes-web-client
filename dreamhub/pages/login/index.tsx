import styles from "../../styles/pages/Login.module.css"
import type {NextPage} from "next";
import LoginForm from '../../forms/loginform';
import RegisterForm from "../../forms/registerform";

const Login :NextPage = () => {

    return (
        <div className={styles.login_container}>
            <div className={styles.login_heading_box}>
                <h1 className={styles.login_heading}>Dream Notes</h1>
            </div>
            <div className={styles.login_heading_box}> <h1 className={styles.login_heading}>Sign In</h1> </div>
            <LoginForm/>
        </div>
    )
}
export default Login;