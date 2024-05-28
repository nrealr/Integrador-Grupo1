import { useRef, useState, useEffect } from "react"
import { ROUTES } from "../../Constants";
import { Link } from "react-router-dom";


/**
 * 
 * @returns {React.Component} Login component, adding email and password. Connect into backend by axios
 */

export const Login=()=>{

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        setErrMsg('');
    }, [email, password]);


    return(
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign in</h1>
        
        <form>


            <label htmlFor="email">Email:</label>
            <input 
                type="text"
                id='email'
                ref={useRef}
                autoComplete="off"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                required
             />

            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                id='password'
                onChange={(e)=> setPassword(e.target.value)}
                value={email}
                required
             />

             <button>Sign in</button>

        </form>

        <p>
            Need and account? <br/>
            <span className="line">
                {/* <Link to={ROUTES.ADDUSER}>Sign Up</Link> */}
                <a href="#">Sign Up</a>
            </span>
        </p>
      </section>
    )
}