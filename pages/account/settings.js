const axios = require('axios');
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Cookies } from 'js-cookie'
import LogoutButton from '../../libs/LogoutButton';
import Link from 'next/link'
import Header from '../../libs/Header';
import AccountNav from '../../libs/AccountNav';
import Footer from '../../libs/Footer';

export async function getServerSideProps({ req, res }) {
    var token = req.cookies.clientToken;
    var signedOn = req.cookies.signedOn;

    var isGithubAuthorized = false;
    var githubUsername = "";

    await axios.get("http://localhost:3030/api/github/user?username=" + req.cookies.signer).then(response => {
        isGithubAuthorized = response.data.status;
        if(isGithubAuthorized){
            githubUsername = response.data.githubUser;
        }
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
    let email = req.cookies.email;
    let joinedOn = req.cookies.joinedOn;
    //Load user profile and send it along.
    return { props: { token, signedOn, signer, isGithubAuthorized, email, joinedOn, githubUsername } }
}

const AccountView = ({ token, signedOn, signer, isGithubAuthorized, email, joinedOn, githubUsername }) => {
    var moment = require('moment');
    const [show, setShowing] = useState(true);

    function show_token(r) {
        return function () {
            setShowing(true);
        }
    }

    return (
        <div>
            <Header></Header>
            <AccountNav></AccountNav>
            <br></br>
          
            <div className='Card w-100p'>
                <div className='Config SetupOption'>
                    <div className='DualOption'>
                        <div className='Option'>
                            <h1 className='TerminalGray'>SETTINGS</h1>
                            <div className='SetupOption'>
                                <div className='DualOption'>
                                    <div className='Option'>
                                        <h1 className='TerminalGray'>EMAIL</h1>
                                        <input style={{ width: '300px' }} value={email} readOnly></input>
                                    </div>
                                    <div className='Option'>
                                        <h1 className='TerminalGray'>ACCOUNT USERNAME</h1>
                                        <input value={signer} readOnly></input>
                                    </div>
                                    <div className='Option'>
                                        <h1 className='TerminalGray'>JOINED</h1>
                                        <input value={moment.unix(joinedOn / 1000).fromNow()} readOnly></input>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='SetupOption'>
                                <div className='DualOption'>
                                    <div className='Option'>
                                        <h1 className='TerminalGray'>CLIENT API TOKEN</h1>
                                        <a onClick={ show_token() } style={{ display: show ? '' : 'none'}} className='TerminalGray BG'>{token}</a>
                                        <br></br>
                                        <a className='TerminalGray BG'>GENERATE NEW API TOKEN</a>
                                    </div>
                                </div>
                            </div>

                            <div className='Card SetupOption GithubBG' style={{display: isGithubAuthorized ? '' : 'none'}}>
                                <div className='DualOption'>
                                    <div className='Option'>
                                        <h1 className='TerminalGray'>GITHUB ACCOUNT</h1>
                                        <input style={{ width: '300px' }} value={githubUsername} readOnly></input>
                                        <br></br>
                                        <a className='TerminalGray BG'>REVOKE GITHUB PERMISSIONS</a>
                                    </div>
                                </div>
                            </div>

                            <div className='Card SetupOption GithubBG' style={{display: isGithubAuthorized ? 'none' : ''}}>
                                <div className='DualOption'>
                                    <div className='Option'>
                                        <h1 className='TerminalGray'>GITHUB ACCOUNT</h1>
                                        <a className='TerminalGray BG'>AUTHORIZE GITHUB</a>
                                    </div>
                                </div>
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