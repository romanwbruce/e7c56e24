

export default function ({ step, type, run, build, dir, setDirectory, setBuildCommand, setRunCommand }) {
    return (
        <div>
            <div style={{ display: step == 2 ? '' : 'none' }} className='Step'>
                <h1 className='StepHeader'>
                    <small className='TerminalGray'>STEP {step} </small>Configure Application
                </h1>

                <div className='ChooseSourceOptions'>
                    
                    <div className='Card Config'>
                        <div className='SetupOption'>
                            <h1 className='TerminalGray'>SOURCE DIRECTORY</h1>
                            <input onChange={setDirectory} placeholder={dir}></input>
                        </div>
                        <div className='SetupOption'>
                            <div className='DualOption'>
                                <div className='Option'>
                                    <h1 className='TerminalGray'>APP TYPE</h1>
                                    <select>
                                        <option>Node.js</option>
                                    </select>
                                </div>
                                <div className='Option'>
                                    <h1 className='TerminalGray'>VERISON</h1>
                                    <select>
                                        <option>LATEST</option>
                                    </select>
                                </div>
                               
                            </div>
                        </div>
                        <div className='SetupOption'>
                            <div className='DualOption'>
                                <div className='Option'>
                                    <h1 className='TerminalGray'>BUILD COMMAND</h1>
                                    <input onChange={setBuildCommand} placeholder={build}></input>
                                </div>
                                <div className='Option'>
                                    <h1 className='TerminalGray'>RUN COMMAND</h1>
                                    <input onChange={setRunCommand} placeholder={run}></input>
                                </div>
                            </div>
                        </div>
                        <div className='SetupOption'>
                            <div className='DualOption'>
                                <div className='Option'>
                                    <h1 className='TerminalGray'>APP PORT</h1>
                                    <input onChange={setBuildCommand} placeholder='3000'></input>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}