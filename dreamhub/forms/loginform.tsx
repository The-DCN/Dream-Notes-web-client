import {useForm, SubmitHandler} from "react-hook-form";
import styles from "../styles/forms/LoginForm.module.css";


interface LoginInputs {
    userOrEmail: string;
    password: string;
}

const LoginForm = () => {

    const {register, watch, formState: {errors}, handleSubmit} = useForm<LoginInputs>();

    const onSubmit = (data: LoginInputs) => {
        alert(JSON.stringify(data));
    } 
  

    return (
        <div>
             <form  onSubmit={handleSubmit(onSubmit)}>
            
            <div className={styles.login_form_container}>
               
               <div className={styles.form_item}>
                   <div className={styles.form_label}> <label>Username</label></div>
                    <div><input type="text" {...register("userOrEmail", {required:true})}/></div>
                </div>
              
                <div className={styles.form_item}>
                    <div className={styles.form_label}>
                        <label>Password</label>
                    </div>

                    <div>
                    <input type="password" {...register("password", {required: true})} />
                    </div>

                </div>
                <div>
                    <input className={styles.submit_button} type="submit" value="Login" />
                </div>
                </div>
            </form>

        </div>
    )
}
export default LoginForm;