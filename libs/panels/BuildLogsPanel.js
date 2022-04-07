
export default function ({ app, selected }){
    let text = app.buildLogs;
    return (
        <div>
            <div style={{ display: selected == "BuildLogs" ? '' : 'none' }} className='Panel'>
                <div className='Console'>
                   
                    <ul>
                        { text.map( (el) =>{
                            return ( <li key={el}>{el}</li> )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}