
export default function({ step, appName, region, updateAppName, setAppRegion }){
    return(
        <div>
                 <div style={{ display: step == 3 ? '' : 'none' }} className='Step'>
                <h1 className='StepHeader'>
                <small className='TerminalGray'>STEP {step} </small>Networking
                </h1>
                <div className='ChooseSourceOptions'>
                    <div className='Card Config'>
                        <div className='SetupOption'>
                            <h1 className='TerminalGray'>APP NAME</h1>
                            <input onChange={updateAppName} placeholder='My App'></input>
                        </div>

                        <div className='SetupOption'>
                            <h1 className='TerminalGray'>FREE SUB DOMAIN</h1>
                            <input placeholder='/' value={appName + "-app.freeapphosting.co"} readOnly></input>
                            <small className='TerminalGray'>You can add a custom domain under Domains.</small>
                        </div>

                        <div className='SetupOption'>
                            <h1 className='TerminalGray'>REGION</h1>
                            <div className='Regions'>
                                <div onClick={setAppRegion('NA_NYC_1')} className='Card Region'>
                                    <img width='52px' src='/images/us.png'></img>
                                    <p className='TerminalGray'>New York</p>
                                </div>
                                <div onClick={setAppRegion('EUR_BER_1')} className='Card Region'>
                                    <img width='52px' src='/images/germany.png'></img>
                                    <p className='TerminalGray'>Berlin</p>
                                </div>
                                <div onClick={setAppRegion('AUS_SYD_1')} className='Card Region'>
                                    <img width='52px' src='/images/australia.png'></img>
                                    <p className='TerminalGray'>Sydney</p>
                                </div>
                            </div>
                        </div>
                        <a className='TerminalGray'>Selected Region: {region}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}