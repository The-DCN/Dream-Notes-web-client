import {useForm, SubmitHandler} from "react-hook-form";
import styles from "../styles/forms/RegisterForm.module.css";
import {passwordErrorMessages} from "../errors/password";
import {usernameErrorMessages} from "../errors/username";

interface RegisterInputs {
    firstName: string;
    lastName: string;
    emailAddress: string;
    confirmEmailAddress: string;
    username: string;
    password: string;
    confirmPassword: string;
};

const RegisterForm = () => {

    const {register, watch, formState: {errors}, handleSubmit} = useForm<RegisterInputs>();
    const onSubmit = (data: RegisterInputs) => {
        alert(JSON.stringify(data));
    }


    return (
        <div>
            
            <form  onSubmit={handleSubmit(onSubmit)}>
            
            <div className={styles.register_form_container}>
           
            <div className={styles.form_item}>

                <div className={styles.form_label}>
                    <label>First Name</label>
                </div>
                
                <div>
                    <input type="text"  {...register("firstName", {required:true})}/>
                </div>

            </div>
                
                <div className={styles.form_item}>
                    <div className={styles.form_label}>
                         <label className={styles.form_label}>Last Name</label>
                    </div>  
                    <div>
                        <input type="text" {...register("lastName", {required:true})}/>
                    </div>
                </div>
                
                <div className={styles.form_item}>
                   
                    <div className={styles.form_label}>
                        <label >Email Address</label>
                    </div>
                    
                    <div>
                        <input type="email" {...register("emailAddress", {required:true})} />
                    </div>
                </div>
                
                <div className={styles.form_item}>
                     
                     <div className={styles.form_label}>
                         <label className={styles.form_label}>
                             Confirm Email Address
                        </label>
                    </div>
                    
                    <div>
                        <input type="email" {...register("confirmEmailAddress", {required: true})}/>
                    </div>
                </div>
                
                <div className={styles.form_item}>
                    <div  className={styles.form_label}><label className={styles.form_label}>Username</label></div>
                    <div><input autoComplete="off" className={styles.form_input_lg} 
                    type="text" {...register("username", {required:true})} /></div>
                </div>
                
                <div className={styles.form_item}>
                    <div className={styles.form_label}><label className={styles.form_label}>Password</label></div>
                    <div>
                        <input type="password"{...register("password", {required:true, minLength:8})}/>
                    </div>
                </div>
                
                <div className={styles.form_item}>
                    <div className={styles.form_label}><label className={styles.form_label}>Confirm Password</label></div>
                    <div><input type="password" {...register("confirmPassword", {required:true})}/></div>
                </div>
                
                <div> 
                    <input className={styles.submit_button} 
                    type="submit" value="Register"/>
                </div>

                </div>
            </form> 
        </div>
    )
}
export default RegisterForm;