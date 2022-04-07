import Head from 'next/head'
import { useState } from 'react';
import 'react-dropdown/style.css';

export default function () {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <Head>
                <title>Project Box</title>
                <meta name="description" content="HEDGS" />
            </Head>
            <div className='Header'>
                <a href='../../' className='Logo'>ProjectBox</a>
                <a href='../../deploy' className='NavLink'>DEPLOY</a>
                <a href='../../storage' className='NavLink'>STORAGE</a>
                <a href='../../platform' className='NavLink'>PLATFORM</a>
                <a href="../login" className='DisableMobile NavButton PushLeft BG'>LOGIN</a>
                <a href="../signup" className='DisableMobile NavButton BG'>SIGNUP</a>
            </div>
        </div>
    )
}