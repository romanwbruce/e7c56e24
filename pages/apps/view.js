const axios = require('axios');
import { useEffect, useState } from 'react';
import LogoutButton from '../../libs/LogoutButton';
import Header from '../../libs/Header';
import Footer from '../../libs/Footer';
import AccountNav from '../../libs/AccountNav';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

import AppPanel from  '../../libs/panels/AppPanel';
import ConsolePanel from  '../../libs/panels/ConsolePanel';
import BuildLogsPanel from  '../../libs/panels/BuildLogsPanel';

import ConfigPanel from  '../../libs/panels/ConfigPanel';

import LiveConsolePanel from  '../../libs/panels/LiveConsolePanel';

export async function getServerSideProps({ req, res, query}) {
    var token = req.cookies.clientToken;
    var signedOn = req.cookies.signedOn;
    var id = query.id;

    var app_data;
    
    await axios.get("http://localhost:3030/api/apps/get-data/?appID="+id).then(response =>{
        app_data = response.data.app;
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
    return { props: { token, signedOn, signer, id, app_data } }
}


const View = ({ token, signedOn, signer, id, app_data}) => {
    const router = useRouter();
    const[selected, setSelected] = useState('App');
    const [ID, setID] = useState('');

   
    function setSelection(r) {
        return function () {
            setSelected(r);
        }
    }

    const loadApplication = (ID) =>{
        console.log("Fetching server side application data: "+ID);
    }

 
    useEffect( ()=>{
        setID(router.query.id);
    }, []);
    
    return (
        <div>
            <Header></Header>
            <AccountNav></AccountNav>
            <div className='AppView'>
                <div className='AppViewHeader'>
                    <div>
                        <div className='FlexCenter'>
                            <h1>{app_data.appName}</h1>
                            <a className='TerminalGray Status'>{app_data.status}</a>
                        </div>
                        <a className='TerminalGray'>{app_data.liveURL}</a>
                    </div>
                    <div className='RunTimeOptions'>
                        <div className='Together'>
                            <a className='TerminalGray RunTimeBTN BG'><i className="bi bi-play-fill"></i> RUN</a>
                            <a className='TerminalGray RunTimeBTN BG'><i className="bi bi-stop"></i> STOP</a>
                            <a className='TerminalGray RunTimeBTN BG'><i className="bi bi-hammer"></i> REBUILD</a>
                        </div>
                    </div>
                </div>
                <div className='AppOptions'>
                    <div className='OptionSelector'>
                        <a className='Option BGSquare' onClick={setSelection("App")}>App</a>
                        <a className='Option BGSquare' onClick={setSelection("BuildLogs")} >Build Logs</a>
                        <a className='Option BGSquare' onClick={setSelection("Console")} >Deployment Logs</a>
                        <a className='Option BGSquare' onClick={setSelection("LiveConsole")} >Console</a>
                        <a className='Option BGSquare'  onClick={setSelection("Config")}>Settings</a>
                    </div>
                    <div className='OptionContainer'>
                        <AppPanel app={app_data} selected={selected}></AppPanel>
                        <BuildLogsPanel app={app_data} selected={selected}></BuildLogsPanel>
                        <ConsolePanel app={app_data} selected={selected}></ConsolePanel>
                        <ConfigPanel app={app_data} selected={selected}></ConfigPanel>
                        <LiveConsolePanel app={app_data} selected={selected}></LiveConsolePanel>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default View