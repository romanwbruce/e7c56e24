import { useEffect, useState } from "react"

export default function ({ step, setCodeSource, isGithubAuthorized, repos, g_user, forUser}) {
    const [auth, setAuth] = useState('NOT AUTHORIZED');
    useEffect(() => {
        if (isGithubAuthorized) {
            setAuth("AUTHORIZED")
        }
    }, []);

    const update = (e) => {
        return (
            setCodeSource(e.target.value)
        )
    }
    return (
        <div>
            <div style={{ display: step == 1 && isGithubAuthorized ? '' : 'none' }} className='Step'>
                <h1 className='StepHeader'>
                <small className='TerminalGray'>STEP {step} </small>App Source
                </h1>
                <div className='ChooseSourceOptions'>
                    <div className='Card Config'>
                        <div className='SetupOption'>
                            <h1 className='TerminalGray'>SELECT REPO</h1>
                            <div className='ListRepos'>
                            {repos.map( (item) =>{
                                return (<a className='TerminalGray BG'><i class="bi bi-file-lock2"></i> {item.full_name} @{item.default_branch}</a>)
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: step == 1 && !isGithubAuthorized ? '' : 'none' }} className='Step'>
                <h1 className='StepHeader'>
                    App Source
                </h1>
                <div className='ChooseSourceOptions'>
                    <div className='AccountOption'>
                        <h1 className='OptionTag'>Authorize Github</h1>
                        <a className='HeroButton' href={"localhost:3030/api/github/auth?username="+forUser}>CONNECT GITHUB</a>
                    </div>
                </div>
            </div>

        </div>
    )
}