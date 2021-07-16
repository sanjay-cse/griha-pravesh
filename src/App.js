import './App.css';
import mummypapa from './mummypapa.png';
import ganeshJi from './ganeshji.png';

function App() {
  return (
    <div className="App">
      <div className="App-col-flex-box">
        <img src={ganeshJi} className="ganeshji" alt="shri ganesh"/>
        <img src={mummypapa} className="mummy-and-papa" alt="Mrs. and Dr. Sanjay Kumar" />
        <p>Mrs. and Dr. Sanjay Kumar cordially invite you to the auspicious occasion of Griha Pravesh of our new residence on<br/>22nd July, 2021</p>

        <p>
        Gayatri Kripa (Duplex),<br/>
        Heaven River View,<br/>
        Road Number 5, Hari Om Nagar,<br/>
        Adityapur, Jamshedpur
        </p>
      </div>
    </div>
  );
}

export default App;
