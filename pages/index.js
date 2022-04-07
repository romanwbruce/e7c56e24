import Head from 'next/head'
import Image from 'next/image'
import Header from '../libs/Header';
import Footer from '../libs/Footer';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <br></br>
      <div className='Hero'>
        <div className='Headline'>
          <p className='TerminalGray'>DEPLOY NODE APPS, PHP +MORE</p>
          <p className='HeroText'>Code. Build. Deploy.</p>
        </div>
      </div>

      <div className='Features'>
        <h2 className='Center TerminalGray'>BUILD WITH PROJECTBOX</h2>
        <div className='DesktopSupport'>
        <div className='Feature'>
          <img src="/images/wind.png"></img>
          <div className='Text'>
            <p>Seemless Design</p>
            <p className='text'>Control your app all in one easy to use custom panel designed by us.</p>
          </div>
        </div>
        <div className='Feature'>
        <img src="/images/gear.png"></img>
          <div className='Text'>
            <p>Fast Deployments</p>
            <p className='text'>Our super fast servers can build & deploy your project to the web within minutes.</p>
          </div>
        </div>
        <div className='Feature'>
        <img src="/images/server.png"></img>
          <div className='Text'>
            <p>Enterprise Grade</p>
            <p className='text'>Your apps are hosted on the latest enterprise grade hardware ensuring excellent performance.</p>
          </div>
        </div>
        </div>
      </div>
      <div className='Features'>
      <h2 className='Center TerminalGray'>FEATURES</h2>
        <div className='DesktopSupport'>
        <div className='Feature'>
          <img src="/images/https.png"></img>
          <div className='Text'>
            <p>Subdomain & HTTPs</p>
            <p className='text'>With every app, you get access to a free subdomain to serve your project on with HTTPs.</p>
          </div>
        </div>
       
        <div className='Feature'>
        <img src="/images/box.png"></img>
          <div className='Text'>
            <p>Free Storage</p>
            <p className='text'>All customers have access of up to 25GB of free storage which can be upgraded.</p>
          </div>
        </div>
        </div>
      </div>

      <div className='Oxford'>
        <br></br>
        <a className='TerminalGray'>WHAT MAKES US SPECIAL</a>
        <h1>Deploy your projects within minutes.</h1>     
        <p>Publish your projects to the web within minutes by using our web application services.</p>
      </div>
      <Footer></Footer>
    </div>
  )
}
