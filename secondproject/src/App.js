import logo from './logo.svg';
import './App.css';
import './style.css';
import imgSrc from './imageInSrc.jpg'

function App() {
  return (
    <div style={{border: 'solid 1px black', maxWidth:'100vw'}}>
      <h1 className='title red'>zakaria</h1>
      <br/>
      <img src={imgSrc} alt=""/>
      <br/>
      <img src="/imageInPublic.jpg" alt="" width="200px"/>  
    <video width="320" height="240" controls>
      <source src="" type="video/mp4"/>
    </video>
    </div>
  );
}

export default App;


