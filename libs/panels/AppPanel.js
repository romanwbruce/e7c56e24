
export default function ({ app, selected }) {
    //Memory Usage
    //Storage Usage
    //CPU Usage
    var text = app.activity;
    text = text.reverse();

    return (
        <div>
            <div style={{ display: selected == "App" ? '' : 'none' }} className='Panel AppPanel'>
                <div className='Items'>
                    <div className='Item'>
                        <div className='FlexCenter'>
                            <h3 className='TerminalGray'>RAM</h3>
                        </div>
                        <div id="progress">
                        <a>45%</a>
                        </div>
                    </div>
                    <div className='Item'>
                        <div className='FlexCenter'>
                            <h3 className='TerminalGray'>CPU</h3>
                        </div>
                        <div id="progress">
                            <a>45%</a>
                        </div>
                    </div>
                    <div className='Item'>
                        <div className='FlexCenter'>
                            <h3 className='TerminalGray'>STORAGE</h3>
                        </div>
                        <div id="progress">
                        <a>45%</a>
                        </div>
                    </div>
                </div>
                <div className='Timeline'>
                    <div className='Item'>
                        <h3 className='TerminalGray BG'>REFRESH ACTIVITY FEED</h3>
                        <ul>
                            {text.map((el) => {
                                return (<li key={el}>{el}</li>)
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}