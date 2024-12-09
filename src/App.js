import "./App.css";
import {sculptureList} from './data'
import {useState} from 'react'


function App() {
  const [index, setIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const handleNextClick =()=>{
    index < 11 && setIndex(index+1);
  }
  const handlePreviewClick =()=>{
    index >= 1 && setIndex(index-1);
  }

  const handleShowClick = ()=>{
    setIsShow(!isShow);
  }

  const sculpture = sculptureList[index];

  return (
    <div className="App">
      <button type="button" onClick={handlePreviewClick}>Preview</button>
      <button type="button" onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button type="button" onClick={handleShowClick}>
          {isShow ? 'hide' : 'show'}
      </button>
      <br />
      <br />
      {
        isShow ? <p>{sculpture.description}</p> : ''
      }
      <img 
      src={sculpture.url} 
      alt={sculpture.alt}  />
    </div>
  );
}

export default App;
