import Head from 'next/head'
import Image from 'next/image'
import Header from '../libs/Header';
import Footer from '../libs/Footer';


export default function () {
    return (
        <div>
            <Header></Header>
            <div className='Oxford'>
                <br></br>
                <a className='TerminalGray'>DEPLOYING ON PROJECT BOX</a>
                <h1>WE MAKE IT EASY</h1>
                <p>Hosting your web applications has never been easier using our custom panel.</p>
            </div>
            <div className='Features'>
                <h2 className='Center TerminalGray'>HOW TO DEPLOY</h2>
                <div className='DesktopSupport'>
                    <div className='Feature'>
                        <img src="/images/storage-box.png"></img>
                        <div className='Text'>
                            <p>CHOOSE SOURCE</p>
                            <p className='text'>Authorize github and select the repospitory you would like to use as the source.</p>
                        </div>
                    </div>
                    <div className='Feature'>
                        <img src="/images/input.png"></img>
                        <div className='Text'>
                            <p>CONFIGURE APP</p>
                            <p className='text'>Customize your application using our custom made panel.</p>
                        </div>
                    </div>
                    <div className='Feature'>
                        <img src="/images/online.png"></img>
                        <div className='Text'>
                            <p>LAUNCH TO THE WEB</p>
                            <p className='text'>Choose the container plan thats right for you and launch to the web!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ContainerPlans DisableMobile'>
                <div className='Features'>
                    <h2 className='Center TerminalGray'>CONTAINER PLANS</h2>
                </div>
                <table>
                    <tr>
                        <th>Container</th>
                        <th>RAM</th>
                        <th>CPU</th>
                        <th>Storage</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td><a>Container 1A</a></td>
                        <td><a>500MB</a></td>
                        <td><a>1CPU / Shared</a></td>
                        <td><a>10GB</a></td>
                        <td><a>FREE</a></td>
                    </tr>
                    <tr>
                        <td><a>Container 2A</a></td>
                        <td><a>1GB</a></td>
                        <td><a>1CPU / Shared</a></td>
                        <td><a>50GB</a></td>
                        <td><a>5.00/mon</a></td>
                    </tr>
                    <tr>
                        <td><a>Container 3A</a></td>
                        <td><a>2GB</a></td>
                        <td><a>2CPU / Dedicated</a></td>
                        <td><a>100GB</a></td>
                        <td><a>15.00/mon</a></td>
                    </tr>
                </table>
            </div>
            <Footer></Footer>
        </div >
    )
}