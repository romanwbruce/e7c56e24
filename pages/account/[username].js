const axios = require('axios');
import { useEffect, useState } from 'react';
import LogoutButton from '../../libs/LogoutButton';
import Header from '../../libs/Header';
import Footer from '../../libs/Footer';
import AccountNav from '../../libs/AccountNav';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


export async function getServerSideProps({ req, res }) {
    var token = req.cookies.clientToken;
    var signedOn = req.cookies.signedOn;

    var isGithubAuthorized = false;

    await axios.get("http://localhost:3030/api/github/user?username="+req.cookies.signer).then(response =>{
       isGithubAuthorized = response.data.status;
    });


    if (token == null || token == undefined) {
        token = "INVALID";
        signedOn = "INVALID";
    }
    if (!req.cookies.loggedIn) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    let signer = req.cookies.signer;
    //Load user profile and send it along.
    return { props: { token, signedOn, signer, isGithubAuthorized } }
}


const AccountView = ({ token, signedOn, signer, isGithubAuthorized }) => {
    const router = useRouter();
    const [userApps, setApps] = useState([]);
    var moment = require('moment'); // require

    useEffect(() => {
        axios.get('http://localhost:3030/api/apps/user/?user=' + signer).then(function (response) {
            console.log(response.data.user_apps);
            setApps(response.data.user_apps);
        });
    }, []);

    const logout = () => {
        return function () {
            Cookies.remove('clientToken');
            Cookies.remove('loggedIn');
            Cookies.remove('signer');
            Cookies.remove('signedOn');
            router.push('/login');
        }
    }
    const apps = () => {
        return function () {
            router.push('./apps');
        }
    }
    return (
        <div>
            <Header></Header>
            <AccountNav></AccountNav>
            <br></br>
            <div style={{display: isGithubAuthorized ? 'none' : '' }}className='Card'>
                <a href={"localhost:3030/api/github/auth?username="+signer} className='Center'>Warning: You have not authorized github yet.</a>    
            </div>
            <div className='Landing ColMobile'>
                <div className='Card w-200px DisableMobile'>

                    <div className='SetupOption'>
                        <div className='DualOption'>
                            <div className='Option'>
                                <h1 className='TerminalGray'>ACCOUNT</h1>
                                <input value={signer} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>LAST LOGIN</h1>
                                <input value={ moment.unix(signedOn/1000).fromNow() } readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>CREDITS</h1>
                                <input value={"0.00"} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>SUPPORT PIN</h1>
                                <input value={token.substring(4, 8)} readOnly></input>
                            </div>
                        </div>
                        <br></br>
                        <a href="./settings" className='TerminalGray RunTimeBTN BG'><i className="bi bi-gear"></i> SETTINGS</a>

                    </div>
                    
                </div>
                <div className='Card w-100p'>
                    <div className='SetupOption'>
                        <div className='DualOption'>

                            <div className='Option'>
                                <h1 className='TerminalGray'>WEB APPLICATIONS</h1>
                                <div className='Together'>
                                    <a href='../apps/new' className='TerminalGray RunTimeBTN BG'><i class="bi bi-window-stack"></i> CREATE APP</a>
                                </div>
                                <br></br>
                                <table>
                                    <tr>
                                        <th>App</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                    </tr>
                                    {userApps.map( (item) => {
                                        return (<tr>
                                                    <td><a href={"../apps/view?id="+item.appID}>{item.appName}</a></td>
                                                    <td><a href={"../apps/view?id="+item.appID}>{item.status}</a></td>
                                                    <td><a href={"../apps/view?id="+item.appID}>{item.type}</a></td>
                                                </tr>
                                        )
                                    })}
                                </table>
                            </div>
                            <br></br>
                            <div className='Option'>                              
                                <h1 className='TerminalGray'>STORAGE</h1>
                                <div className='Together'>
                                    <a href='../storage/create-volume' className='TerminalGray RunTimeBTN BG'><i class="bi bi-hdd-stack"></i> NEW VOLUME</a>
                                </div>
                                <br></br>
                                <table>
                                    <tr>
                                        <th>Volume</th>
                                        <th>Storage Usage</th>
                                    </tr>
                                   
                                </table>
                                <p className='TerminalGray'>storage.[region].projectbox.host/[volumeID]/[action]</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AccountView