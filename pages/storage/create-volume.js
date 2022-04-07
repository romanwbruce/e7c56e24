const axios = require('axios');
import { useEffect, useState } from 'react';
import LogoutButton from '../../libs/LogoutButton';
import Header from '../../libs/Header';
import Footer from '../../libs/Footer';
import AccountNav from '../../libs/AccountNav';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

import ConfigureApplication from '../../libs/setup/ConfigureApplication';
import Networking from '../../libs/setup/Networking';
import Deploy from '../../libs/setup/Deploy';

export async function getServerSideProps({ req, res }) {
    var isGithubAuthorized = false;

    var defaultAppName = req.cookies.signer;
    var repos = [];
    var g_user = "";

    await axios.get("http://localhost:3030/api/github/user?username=" + req.cookies.signer).then(response => {
        isGithubAuthorized = response.data.status;
        if (isGithubAuthorized) {
            repos = response.data.data;
            g_user = response.data.data[0].owner.login;
        }
    });
    let signer = req.cookies.signer;

    return { props: { isGithubAuthorized, defaultAppName, repos, g_user, signer } }
}
export default function ({ isGithubAuthorized, defaultAppName, repos, g_user, signer }) {

    return (
        <div>
            <Header></Header>
            <AccountNav></AccountNav>

            <div className='Step'>
                <h1 className='StepHeader'>
                    Create Volume
                </h1>
                <div className='ChooseSourceOptions'>
                    <div className='Card Config'>
                        <div className='SetupOption'>
                            <div className='Option'>
                                <h1 className='TerminalGray'>STORAGE CAPACITY</h1>
                                <select>
                                    <option>25 GB</option>
                                    <option>50 GB</option>
                                    <option>75 GB</option>
                                    <option>100 GB</option>
                                </select>
                            </div>
                        </div>

                        <div className='SetupOption'>
                            <h1 className='TerminalGray'>LOCATIONS</h1>
                            <div className='Regions'>
                                <div className='Card Region'>
                                    <img width='52px' src='/images/us.png'></img>
                                    <p className='TerminalGray'>New York</p>
                                </div>
                            </div>
                        </div>

                        <div className='Option'>
                            <h1 className='TerminalGray'>MONTHLY COST</h1>
                            <input readonly value='Free'></input>
                            <a className='HeroButton'>CREATE VOLUME</a>
                        </div>


                    </div>

                </div>

                <Footer></Footer>
            </div>
        </div>
    )
}