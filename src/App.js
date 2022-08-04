import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Confetti from 'react-confetti'

function App() {
  const [ initText, setInitText ] = useState('');
  const [ initSpeed, setInitSpeed ] = useState(300);
  
  const [ text, setText ] = useState('');
  const [ speed, setSpeed ] = useState(300);
  const [ currentWord, setCurrentWord ] = useState('');
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ finish, setFinish ] = useState(false);
  const [ font, setFont ] = useState(74)

  const [ isPlaying, setIsPlaying ] = useState(false);

  const handleText = (e) => {
    setInitText(e.target.value);
  }

  const handleFontSize = (e) => {
    setFont(parseInt(e.target.value));
  }

  const handleSpeed = (e) => {
    window.temp = e.target.value
    setInitSpeed(window.temp.split(' ')[0])
  }

  const handlePlay = (e) => {    
    setText(initText.split(' ').filter(Boolean));
    setSpeed((60/parseInt(initSpeed))*1000);
    console.log(speed)
    setIsPlaying(true);
    console.log(font);
  }

  const handlePause = (e) => {
    setIsPlaying(false);
  }

  const handleBack = (e) => {
    setFinish(false);
    setIsPlaying(false);
    setCurrentIndex(0);
    
  }

  const handleRefresh = (e) => {
    setCurrentIndex(0);
    setIsPlaying(false);
    setSpeed(2000);
    setText('');
    localStorage.clear();
    setFinish(false);
    setInitText('')
  }
  
  useEffect(() => {
    if(isPlaying){
      const intervalID = setInterval(() => {
        if(currentIndex >= text.length){
          console.log('it is done');  
          clearInterval(intervalID);

          setCurrentIndex(text.length + 1)
          localStorage.clear();
          setFinish(true);
          setIsPlaying(false)

        }else{ 
          setCurrentWord(text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1)
          localStorage.setItem("index", `${currentIndex}`)
          console.log(localStorage.getItem("index"), "local")
          console.log(currentIndex)
        }
      }, speed);
      return () => {clearInterval(intervalID);}//3
    } else {
      console.log('notWorking')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isPlaying , currentIndex])

  return(
    <div className='grand'>
      {isPlaying 
      ? <div className='dark'>
        { console.log (font, "font size in body")}
          <div className='current' style={{ fontSize: `${font}px` }}>{currentWord}</div>
          <div onClick={handlePause} className="pauseButton">Pause</div>
        </div> 
      : finish ? 
      <div className = "dark">
        <Confetti width={2000} height={2000}/>        
        <div className="current end" style={{ fontSize: `42px` }}>
          <div>Congratulations, you have</div>
          <div>completed reading this text!</div>
        </div>
        <div onClick={handleBack} className="backButton" >Back to main page</div>
      </div>
      :<div className="main">
      <Navbar />
      <div className="text">
        Paste your text below
        </div>
      <textarea type = 'text' value={initText} onChange = { handleText }></textarea>
      <div className='buttons-up'>
        { isPlaying? null: finish ? null : <button onClick={ handlePlay } className="readButton">Read</button>}
        <div className='progress'>
          <div>Progress</div>
          <div className='progress_bar'>
            <div className='my_progress' style={{width: `${(currentIndex/(text.length + 1)*100)}%`}}></div>
          </div>
        </div>
        { finish ? <button onClick={ handleRefresh } className="refresh">Refresh</button> :  null }
        { isPlaying ? null : finish? null : <button onClick={ handleRefresh } className="refresh">Refresh</button> }
      </div>
      <div className='buttons-down'>
        <div className="speed">
          <div>Speed</div>
          <div>
          <select name="select" onChange={handleSpeed} value = {window.temp}>
            <option value= "200 WPM" defaultValue>200 WPM</option>
            <option value= "300 WPM">300 WPM</option>
            <option value= "600 WPM">600 WPM</option>
          </select>
          </div>
        </div> 
        <div className="font">
          <div>Font Size</div>
          <div>
          <select name="select" onChange={handleFontSize} value={font}> 
            <option value="74" defaultValue>74px</option>
            <option value="80">80px</option>
            <option value="86">86px</option>
            <option value="92">92px</option>
            <option value="98">98px</option>
            <option value="104">104px</option>
            <option value="112">112px</option>
          </select>
          </div>
        </div>
      </div>
    </div>}
    </div>
  );
}

export default App;
