import './App.css';
import image from './image.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={image} className="App-logo" alt="logo" />
        <p>
          Mrs. and Dr. Sanjay Kumar invite you to their Grih Pravesh.
        </p>
        <p>22nd July, 2021</p>
        <span>Gayatri Kripa(Duplex)</span>
        <span>Hari Om Nagar Road Number 5</span>
        <span>Adityapur</span>
      </header>
    </div>
  );
}

export default App;
