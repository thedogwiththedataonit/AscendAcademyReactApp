import "./Typewriter.css";
import TypewriterEffect from 'typewriter-effect';

function Typewriter(props) {
    return (
        <div>
            <p>
                Elevate your 
            </p>
            <TypewriterEffect options={{
                strings: ['Academics', 'Interests', 'Passions', 
                'Career', 'Mind', 'Curiosity'],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                delay: 60,
            }} />
            
          </div>
    );
}




export default Typewriter;