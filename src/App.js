import logo from './logo.svg';
import './App.css';
import Durgamma from './images/Durgamma.jpeg'
import navbar from './images/navbar.svg'
import {Helmet} from "react-helmet";
import Contact from './Contact'

function App() {
  // const hamburger = document.getElementById(".line")
  // const navList = document.getElementById(".nav-list")
  // const links = document.getElementById(".nav-link")
  // const hamdleOnClick=()=>{
  //   navList.classList.toggle("open")
  //   window.open("https://youtube.com")
  // }
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div class="logo-container">
            <img class="logo" src={Durgamma} alt="logo"/>
            <h3 class="name-container">
              DEVI SREE <br></br>
              AQUA TECH
            </h3>
          </div>
          
            <ul class='nav-list'>
              <li class='nav-link'><a href='#' target='_blank'><span>Home</span></a></li>
              <li class='nav-link'><a href='#' target='_blank'><span>Products</span></a></li>
              <li class='nav-link'><a href='#' target='_blank'><span>About</span></a></li>
              <li class='nav-link'><a href='#' target='_blank'><span>Contact Us</span></a></li>
            </ul>
          <div class='hamburger'>
            <img class='line' src={navbar} alt='nav'/>
          </div>
        </nav>
      </header>
      <section class='home'>
        <div class='home-container'>
          <h1><strong>DEVI SRI AQUA TECH</strong></h1>
          <p><em>"Keep it shrimple stupid"</em></p>
          <div class='bta'>
            <button class='btaselect'><a style={{textDecoration:'none'}}href='' target="_blank">Contact Us</a></button>
            <button class='btaselect'><a style={{textDecoration:'none'}}href='' target="_blank">Locate Us</a></button>
          </div>
        </div>
      </section>
      <section class='contact'>
        <Contact/>
      </section>
    </div>
  );
}

export default App;
