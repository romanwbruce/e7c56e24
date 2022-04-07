import Particles from "react-tsparticles";

export default function () {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div className='NoBorder'>
            <div className='FooterNav'>
                <div className='Footer'>
                    <a className='NavButton'>TERMS OF SERVICE</a>
                    <a className='NavButton'>PRIVACY POLICY</a>
                    <a className='NavButton'>SUPPORT</a>
                </div>
            </div>
           
        </div>
    )
}