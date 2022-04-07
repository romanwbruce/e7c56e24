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
import Source from '../../libs/setup/Source';
import Deploy from '../../libs/setup/Deploy';

export async function getServerSideProps({ req, res }) {
    
    var isGithubAuthorized = false;

    var defaultAppName = req.cookies.signer;
    var repos = [];
    var g_user = "";

    await axios.get("http://localhost:3030/api/github/user?username="+req.cookies.signer).then(response =>{
       isGithubAuthorized = response.data.status;
       if(isGithubAuthorized){
        repos = response.data.data;
        g_user = response.data.data[0].owner.login;
       }
    });
    let signer = req.cookies.signer;

    return { props: { isGithubAuthorized, defaultAppName, repos, g_user, signer } }
}
export default function ( { isGithubAuthorized, defaultAppName, repos, g_user, signer }) {
    const maxStep = 4;
    
    const [step, setStep] = useState(1);
    const [ready, setReady] = useState(false);

    // BUILD OPTIONS 
    const [source, setSource] = useState('');
    const [appName, setAppName] = useState(defaultAppName);
    const [region, setRegion] = useState('NA_NYC_1');

    const [build, setBuild] = useState('npm run build');
    const [run, setRun] = useState('npm run start');
    const [dir, setDir] = useState('/');

    var appUrl = '';

    // END: BUILD OPTIONS
    // CONFIGURE BUILD OPTIONS
    function setDirectory(r) {
        return function () {
            setDir(r.target.value);
        }
    }

    function setBuildCommand(r) {
        return function () {
            setBuild(r.target.value);
        }
    }

    function setRunCommand(r) {
        return function () {
            setRun(r.target.value);
        }
    }

    function setAppRegion(r) {
        return function () {
            setRegion(r);
        }
    }

    function updateAppName(e) {
        setAppName(e.target.value);
        appUrl = appName + ".deployhedges.com";
    }

    function setCodeSource(_src) {
        return function () {
            setSource(_src);
        }
    }

    // END CONFIGURE BUILD OPTIONS
    function nextStep() {
        return function () {
            if (maxStep >= (step + 1)) {
                setStep(step + 1)
            }
        }
    }

    function lastStep() {
        return function () {
            if (1 <= (step - 1)) {
                setStep(step - 1)
            }
        }
    }

    return (
        <div>
            <Header></Header>
            <AccountNav></AccountNav>

            <Source step={step} setCodeSource={setCodeSource} isGithubAuthorized={isGithubAuthorized} repos={repos} owner={g_user} forUser={signer}></Source>
            <ConfigureApplication build={build} run={run} dir={dir} setDirectory={setDirectory} setRunCommand={setRunCommand} setBuildCommand={setBuildCommand} type={"NODE"} step={step}></ConfigureApplication>
            <Networking step={step} appName={appName} region={region} updateAppName={updateAppName} setAppRegion={setAppRegion}></Networking>
            <Deploy step={step} ready={ready}></Deploy>
        
            <div className='CreationNav'>
                <a style={{ display: step != 1 ? '' : 'none' }}  className='HeroButton' onClick={lastStep()}><i class="bi bi-caret-left-fill"></i>PREVIOUS STEP</a>
                <a style={{ display: step != 4 && isGithubAuthorized ? '' : 'none' }} className='HeroButton' onClick={nextStep()}>NEXT STEP<i class="bi bi-caret-right-fill"></i></a>
            </div>

            <Footer></Footer>
        </div>
    )
}