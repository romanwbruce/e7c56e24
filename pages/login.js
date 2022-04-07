import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Header from '../libs/Header';
import Footer from "../libs/Footer";
const axios = require('axios');


export async function getServerSideProps( {req, res} ) {

    if (req.cookies.loggedIn) {
        return {
            redirect: {
                destination: '/account/'+req.cookies.signer,
                permanent: false,
            },
        }
    }

    return { props: { } }
}


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('Please login');
    const router = useRouter();

    function updateUsername(e){
        setUsername(e.target.value);
    }

    function updatePassword(e){
        setPassword(e.target.value);
    }

    async function verify(){
        if(6 > username.length ){
            setStatus('Invalid username.');
            return;
        }

        if(6 > password.length ){
            setStatus('Invalid password.');
            return;
        }

        axios.get('/api/login?username='+username+"&password="+password).then(resp => {
            setStatus(resp.data.response.statusMessage);
            if(resp.data.response.status){
                Cookies.set('clientToken', resp.data.response.clientToken);
                Cookies.set('loggedIn', resp.data.response.status);
                Cookies.set('signer', resp.data.response.signer);
                Cookies.set('signedOn', resp.data.response.signedOn);
                Cookies.set('email', resp.data.response.email);
                Cookies.set('joinedOn', resp.data.response.joinedOn);
                router.push('/account/'+resp.data.response.signer);
            }
            return;
        });
    }

    return (
        <div>
            <Header></Header>
            <div className='Login'>
                <div className='Center LoginColumn'>
                    <h1>Hello</h1>
                    <small className='TerminalGray'>{status}</small>

                    <input type="text" onChange={updateUsername} placeholder="Username"></input>
                    <input type="password" onChange={updatePassword} placeholder="Password"></input>
                    <a className="HeroButton" onClick={verify}>SECURELY SIGN IN</a>
                    <a className='TerminalGray'>Forgot password</a>
                    <a className='TerminalGray'>Create account</a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Login;