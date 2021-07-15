import './App.css';
import mummypapa from './mummypapa.png';
import ganeshJi from './ganeshji.png';

function App() {
  return (
    <div className="App">
      <div className="App-col-flex-box">
        <img src={ganeshJi} className="ganeshji" alt="shri ganesh"/>
        <img src={mummypapa} className="mummy-and-papa" alt="Mrs. and Dr. Sanjay Kumar" />
        <p>
          Mrs. and Dr. Sanjay Kumar invite you to their Grih Pravesh.
        </p>
        <p>22nd July, 2021</p>
        <span>Gayatri Kripa(Duplex)</span>
        <span>Hari Om Nagar Road Number 5</span>
        <span>Adityapur, Jamshedpur</span>
      </div>
    </div>
  );
}

export default App;
