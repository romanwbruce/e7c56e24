import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

export default function(){
    const router = useRouter();
    const [u, setU]  = useState('');

    useEffect(()=>{
        setU(Cookies.get('signer'))
    },[]);
    
    const logout = () =>{
        return function () {
            Cookies.remove('clientToken');
            Cookies.remove('loggedIn');
            Cookies.remove('signer');
            Cookies.remove('signedOn');
            router.push('/login');
        }
    }
    return (
        <div>
            <br></br>
            <div className='AccountNav'>
                 <a href="../login" className='TerminalGray'><i className="bi bi-house-door"></i> Home</a>
                <a onClick={logout()} className='TerminalGray'>Logout<i className="bi bi-arrow-right-short"></i></a>
            </div> 
        </div>
    )
}