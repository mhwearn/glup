import React, {useState} from 'react';
import logo from './img/img.png';
import './App.css';

function App() {

    const [animationDuration, setAnimationDuration] = useState(100); // seconds
    const [emojiSize, setEmojiSize] = useState(5); // pt
    const [floatingEmojis, setFloatingEmojis] = useState([""]);

    const spin = {
        animationName: "spin",
        animationDuration: animationDuration + "s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
    }

    const emojis = ["✨","🙃","👺","🍭",""];

    function click() {
        if (animationDuration > 0.05) {
            setAnimationDuration(animationDuration*0.75);
        }
        setEmojiSize(emojiSize + 1);
        setFloatingEmojis([...floatingEmojis,emojis[Math.floor(Math.random()*emojis.length)]]);
    }


    return (
        <div className="App" onClick={() => click()}>
            {floatingEmojis.map((x,i) =>
                <div key={i} className="emoji"
                     style={{fontSize: Math.floor(Math.random()*emojiSize)+"pt", left: Math.floor(Math.random()*(window.innerWidth+emojiSize))-emojiSize,
                         top:Math.floor(Math.random()*(window.innerHeight+emojiSize))-emojiSize}}>{x}</div>)}
            <div className="App-header">
                <div className="scroll-container">
                    <h1 className="scroll-text">GLUP SHIT YOURSELF GLUP SHIT YOURSELF GLUP SHIT YOURSELF GLUP SHIT YOURSELF</h1>
                </div>
                <img src={logo} className="App-logo" style={spin} alt="logo" />
                <b className="rainbow">G L U P S H I T T O</b>
                <div className="scroll-container">
                    <h1 className="scroll-text">GLUP SHIT YOURSELF GLUP SHIT YOURSELF GLUP SHIT YOURSELF GLUP SHIT YOURSELF</h1>
                </div>
            </div>
        </div>
      );
    }

export default App;
