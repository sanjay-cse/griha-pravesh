import './App.css';
import mummypapa from './mummypapa-min.png';
import ganeshJi from './ganeshji.png';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-col-flex-box">
          <img src={ganeshJi} className="ganeshji" alt="shri ganesh"/>
          <img src={mummypapa} className="mummy-and-papa" alt="Mrs. and Dr. Sanjay Kumar" />
          <p className="image-description">Dr. Sanjay Kumar, Dept. Of CSE, NIT Jamshedpur</p>
          <p>We cordially invite you to the auspicious occasion of Griha Pravesh of our new residence, Gayatri Kripa.<br/>22nd July, 2021<br/>4:00 PM</p>
        </div>
        <div className="App-row-flex-box">
          <p>
          Gayatri Kripa (Duplex),<br/>
          Heaven River View Society,<br/>
          Road Number 5, Hari Om Nagar,<br/>
          Adityapur, Jamshedpur
          </p>
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773.2526699996668!2d86.16453505436333!3d22.793928550361606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e499ec9aea89%3A0x9e0b66121608f64f!2sHeaven%20River%20View!5e0!3m2!1sen!2sin!4v1626591987975!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          <p className="from">
          RSVP<br/>Champa Prasad, Sanjay Kumar, Rekha Sinha, Dhriti Dhairya, Amitesh Arya
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
