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
                <a className='TerminalGray'>WHAT YOUR APPS ARE RUNNING ON</a>
                <h1>OUR PLATFORM</h1>
                <p>Latest generation servers spread across the globe to provide you the best experience possible.</p>
            </div>


            <div className='Features'>
                <h2 className='Center TerminalGray'>PLATFORM</h2>
                <div className='DesktopSupport'>
                    <div className='Feature'>
                        <img src="/images/3d.png"></img>
                        <div className='Text'>
                            <p>Edge Network</p>
                            <p className='text'>Quickly deploy your app to our Edge network. The edge network consists of servers spread across the globe to deliever your app and content to users around the world.</p>
                        </div>
                    </div>
                    <div className='Feature'>
                        <img src="/images/folder.png"></img>
                        <div className='Text'>
                            <p>Storage API</p>
                            <p className='text'>Addon storage to your applications to store images, files, and more. Using our custom storage API you can quickly store and retrieve content stored.</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <Footer></Footer>
        </div >
    )
}