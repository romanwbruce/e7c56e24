import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function LogoutButton(){
    const router = useRouter();
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
            <button onClick={logout()}>Logout</button>
        </div>
    )
}