import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Footer from "../libs/Footer";
import Header from '../libs/Header';

const axios = require('axios');


export async function getServerSideProps({ req, res }) {

    return { props: {} }
}


const Login = () => {
    const [status, setStatus] = useState('Please fill out all fields.');
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [password2, setPassword2]= useState('');
    const [email, setEmail]= useState('');
    
    const router = useRouter();

    function _setUsername(e){
        return (
            setUsername(e.target.value)
        )
    }

    function _setEmail(e){
        /*
         */
        return (
                setEmail(e.target.value)
               )
    }
    function _setPassword(e){
        return (
            setPassword(e.target.value)
        )
    }

    function _setPassword2(e){
        if(password2 != password){
            setStatus("Passwords don't match.");
        }
        return (
            setPassword2(e.target.value)
        )
    }

    

    async function signup() {
        //Validate... 
        if(8 > password.length){
            setStatus('Password must be 8 characters long.')
            return;
        }
        if(6 > username.length){
            setStatus('Username must be 6 characters long.')
            return;
        }
        if(password2 != password){
            setStatus('Passwords must match.')
            return;
        }
        axios.get("https://api.hunter.io/v2/email-verifier?email="+email+"&api_key=0b2a43883dc3cbb6f6a0dc7fcce6c5c2b6e1ada5").then( (resp)=>{
            setStatus('Creating account, please wait.');
            finish();
        }).catch(function (error) {
            if(error.response){
                setStatus("Invalid email address.");
            }
        });
      
        }
    function finish(){
        return(
            axios.get('http://localhost:3030/api/auth/signup?username=' + username + "&password=" + password+"&email="+email).then(resp => {
                setStatus(resp.data.statusMessage);
                return;
            })
        )    
    }
    return (
        <div>
            <Header></Header>
            <div className='Login'>
                <div className='Center LoginColumn'>
                    <h1>Welcome</h1>
                    <small className='TerminalGray'>{status}</small>
                
                    <input type="text" onChange={_setUsername} value={username} placeholder="Username"></input>
                    <input type="text" onChange={_setEmail} value={email} placeholder="Email"></input>
                    <input type="password" onChange={_setPassword} value={password} placeholder="Password" ></input>
                    <input type="password" onChange={_setPassword2} value={password2} placeholder="Password Again"></input>

                    <a className="HeroButton" onClick={signup}>SIGN UP</a>
                    <a href="./login" className='TerminalGray'>Login Instead</a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Login;