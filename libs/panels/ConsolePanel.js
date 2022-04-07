
export default function ({ app, selected }){
    let text = app.deploymentLogs;

return (
    <div>
        <div style={{ display: selected == "Console" ? '' : 'none' }} className='Panel'>
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