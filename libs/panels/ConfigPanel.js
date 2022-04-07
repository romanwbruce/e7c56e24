
export default function ({ app, selected }) {
    var moment = require('moment');
    return (
        <div>
            <div style={{ display: selected == "Config" ? '' : 'none' }} className='Panel'>
                <div className='Config'>
                    <div className='Card'>
                    <div className='SetupOption'>
                        <div className='DualOption'>
                            <div className='Option'>
                                <h1 className='TerminalGray'>APP TYPE</h1>
                                <input width='300px' value={app.type} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>BUILD COMMAND</h1>
                                <input value={app.buildCommand} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>RUN COMMAND</h1>
                                <input value={app.runCommand} readOnly></input>
                            </div>
                        </div>
                    </div>

                    <div className='SetupOption'>
                        <div className='DualOption'>
                            <div className='Option'>
                                <h1 className='TerminalGray'>SOURCE DIRECTORY</h1>
                                <input width='300px' value={app.sourceDirectory} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>HTTP PORT</h1>
                                <input value={app.httpPort} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>REGION</h1>
                                <input value={app.edgeNode} readOnly></input>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='Card SetupOption'>
                        <div className='DualOption'>
                            <div className='Option'>
                                <h1 className='TerminalGray'>SOURCE</h1>
                                <input width='300px' value={'REPO '+app.githubRepo} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>SOURCE OWNER</h1>
                                <input value={app.githubUser} readOnly></input>
                            </div>
                            <div className='Option'>
                                <h1 className='TerminalGray'>LAST BUILT</h1>
                                <input value={ moment.unix(app.lastBuilt/1000).fromNow()} readOnly></input>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}