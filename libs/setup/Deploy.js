
export default function ({ step, ready }) {
    return (
        <div>
            <div style={{ display: step == 4 ? '' : 'none' }} className='Step'>
                <h1 className='StepHeader'>
                <small className='TerminalGray'>STEP {step} </small>Launch
                </h1>
                <div className='LaunchPage ColMobile'>
                    <div className='Plans'>
                        <div className='Plan'>
                            <img className='DisableMobile' src='/images/earth.png'></img>
                            <div className='PlanHeader'>
                                <div className='Desc'>
                                    <h2>Launch App</h2>
                                    <p className='TerminalGray'>Deploy to the web</p>
                                </div>
                            </div>
                            <div className='Assets'>
                                <a className='Asset'><i class="bi bi-check-lg"></i> Https</a>
                                <a className='Asset'><i class="bi bi-check-lg"></i> Unlimited Networking</a>
                                <a className='Asset'><i class="bi bi-check-lg"></i> Custom Domain</a>
                                <a className='Asset'><i class="bi bi-check-lg"></i> Hosted on Edge</a>
                                <a className='Asset'><i class="bi bi-check-lg"></i> Priority Support</a>
                                <a className='Asset'><i class="bi bi-check-lg"></i> Unlimited Builds & Deployments</a>
                            </div>
                        </div>

    
                        
                    </div>
                    <div className='SetupOption ColMobile'>
                        <div className='CheckOutOptions'>
                            <div className='DualOption'>
                                <div className='Option'>
                                    <h1 className='TerminalGray'>CONTAINER</h1>
                                    <select>
                                        <option>
                                            <a>500MB RAM / 1CPU</a>
                                        </option>
                                    </select>
                                </div>
                                <div className='Option'>
                                    <h1 className='TerminalGray'>MONTHLY COST</h1>
                                    <input readonly value='Free'></input>
                                    <a style={{ display: step == 4 && ready ? '' : '' }} className='HeroButton'>LAUNCH</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}