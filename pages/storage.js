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
                <a className='TerminalGray'>NO HASSLE STORAGE</a>
                <h1>STORAGE MADE EASY</h1>
                <p>Hosting your files has never been easier using our volume storage.</p>
            </div>
            <div className='Features'>
                <h2 className='Center TerminalGray'>STORAGE FEATURES</h2>
                <div className='DesktopSupport'>
                    <div className='Feature'>
                        <img src="/images/money-bag.png"></img>
                        <div className='Text'>
                            <p>CHEAP</p>
                            <p className='text'>All users get 25GB of free storage, then .10 per GB after.</p>
                        </div>
                    </div>
                    <div className='Feature'>
                        <img src="/images/www.png"></img>
                        <div className='Text'>
                            <p>WORLDWIDE</p>
                            <p className='text'>Choose from our wide range of storage servers across the globe.</p>
                        </div>
                    </div>
                    <div className='Feature'>
                        <img src="/images/compliant.png"></img>
                        <div className='Text'>
                            <p>PRIVACY</p>
                            <p className='text'>Set the volume to either be public or private. Private volumes require a access key to retrieve files.</p>
                        </div>
                    </div>
                </div>
            </div>

           
            <Footer></Footer>
        </div >
    )
}