import "./Typewriter.css";
import TypewriterEffect from 'typewriter-effect';

function Typewriter(props) {
    const strings = ['Academics', 'Interests', 'Passions', 
    'Career', 'Mind', 'Curiosity']
    //get the length of each random index word
    return (
        <TypewriterEffect
        onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
            .pauseFor(2500)
            .deleteChars(5)
            .start();
        }}
        />
    );
}




export default Typewriter;