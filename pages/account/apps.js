const axios = require('axios');
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Cookies } from 'js-cookie'
import LogoutButton from '../../libs/LogoutButton';
import Link from 'next/link'
import Header from '../../libs/Header';
import Footer from '../../libs/Footer';
import AccountNav from '../../libs/AccountNav';

export function getServerSideProps({ req, res }) {
    var token = req.cookies.clientToken;
    var signedOn = req.cookies.signedOn;

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
    return { props: { token, signedOn, signer } }
}

export default function ({ token, signedOn, signer }) {
    //<a className='HeroButton'>MY APP<pre>Deployed 1min ago</pre></a>
    const [userApps, setApps] = useState([]);
    var moment = require('moment'); // require

    useEffect(() => {
        axios.get('http://localhost:3030/api/apps/user/?user=' + signer).then(function (response) {
            console.log(response.data.user_apps);
            setApps(response.data.user_apps);
        });
    }, []);

    return (
        <div>
            <Header></Header>
            <AccountNav></AccountNav>
            <div className='AccountPage'>
                <h1>Apps</h1>
                <div className='AppPage'>
                    <div className='ListApps'>
                    <div className='RunTimeOptions'>
                        <div className='Together'>
                            <a href='/apps/new' className='TerminalGray RunTimeBTN BG'><i class="bi bi-shuffle"></i> CREATE APP</a>
                        </div>
                    </div>
                    <br></br>
                        <table>
                            <tr>
                                <th>App</th>
                                <th>Live URL</th>
                                <th>Last Built</th>
                                <th>Status</th>
                            </tr>
                            {userApps.map( (item) => {
                                        return (<tr>
                                <td><a href={"../apps/view?id="+item.appID}>my-app</a></td>
                                <td><a href={'http://'+item.liveURL}>{item.liveURL}</a></td>
                                <td>{ moment.unix(item.lastBuilt/1000).fromNow()}</td>
                                <td><a className='BG'>{item.status}</a></td>
                                            </tr>)
                                    })} 
                        </table>
                    </div>
                </div>
             
            </div>
            <Footer></Footer>

        </div>
    )
}