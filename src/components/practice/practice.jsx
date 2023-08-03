import React, { useEffect } from 'react';
import './practice.css';
import pershiba from '../../constants/Pershiba-Image.jpeg';
import videofile from '../../constants/video.mp4';
import Audio from '../../constants/audio.mp3';
import { useNavigate } from 'react-router-dom';

export const Practice = () => {


  const navigate = useNavigate()
  useEffect(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World", 10, 50);


    var c1 = document.getElementById("myCanvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.font = "30px Arial";
    ctx1.fillText("Hello World", 10, 50);
    ctx1.beginPath();
    ctx1.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx1.stroke();
  }, [])





  const getLocation = () => {
    var x = document.getElementById("demo");
    console.log(navigator, "navigator")
    console.log(x)
    if (x !== null) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    } else {
      alert("Unable to fetch data")
    }

  }

  const showPosition = (position) => {
    var x = document.getElementById("demo");

    console.log(x)
    x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }

  const showError = (error) => {
    var x = document.getElementById("demo");
    switch (error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
      default:
        break;
    }
  }


  const allowDrop = (e) => {

    e.preventDefault();
  }
  const drag = (even) => {
    console.log(even)
    even.dataTransfer.setData("text", even.target.id);
  }
  function drop(e) {
    console.log(e)
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  return (
    <div className='formDisplay'>
      
      <button className='nextButton' onClick={() => navigate('/css')}>go to css</button>
      <div className='form'>
        <h2>HTML FORMS </h2>
        <form autocomplete="on" >
          <fieldset>

            <legend className='legend'>feedback</legend>

            <label>Name:</label>
            <input type='text' name='Name' id='fname' /> <br />
            <label>Age:</label>
            <input type="number" name="age" id='age' min="18" max="45" /> <br />
            <label>Email:</label>
            <input type='email' name="email" id='email' /> <br />
            <label>Choose your designation:</label>
            <select>
              <option>React Developer</option>
              <option>Node Developer</option>
              <option>Application Developer</option>
            </select> <br />
            <div className='comment'>
              <label className='commentlable'>Comments:</label>
              <textarea placeholder='We are Pleased to here your comments...' name={'comments'} rows="2" cols="30"></textarea><br />

            </div>
            <label>Browser</label>
            <input list="browsers" name="browser" />
            <datalist id="browsers">
              <option value="Internet Explorer" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist><br />
            <label>Date:</label>
            <input type="datetime-local" /><br />
            <label>month:</label>
            <input type="month" /><br />
            <label>week:</label>
            <input type="week" /><br />
            <label>time:</label>
            <input type="time" /><br />
            <label>search:</label>
            <input type="search" placeholder='search' /><br />
            <p>select multiple</p>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label><br />
            <label for="favcolor">Select your favorite color:</label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000" /><br />
            <input type="image" src={pershiba} alt="Submit" width="48" height="48" /><br />
            <input type="file" id="myfile" name="myfile" /><br />

            <input className='subButton' type='submit' name={'submit'} id='submit' />




          </fieldset>

        </form>
      </div>


      <hr></hr>
      <h1>HTML Graphics</h1>


      <canvas id="myCanvas" width="200" height="100" style={{ border: "1px solid #000000" }}>

      </canvas>
      <br />
      <br />

      <canvas id="myCanvas1" width="200" height="100" style={{ border: "1px solid #000000" }}>
      </canvas>
      <br />
      <hr></hr>
      <h1>SVG</h1>

      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40"
          stroke="green" stroke-width="4" fill="yellow" />

      </svg>
      <br />

      <svg width="400" height="100">
        <rect width="400" height="100" className='svgstyle' />
      </svg>
      <br />

      <svg width="300" height="200">
        <polygon points="100,10 40,198 190,78 10,78 160,198"
          className='star'
        />
      </svg>
      <svg width="300" height="200">
        <polygon points="120,50 30,178 160,98 50,98 160,178"
          className='star1'
        />
      </svg>

      <br />

      <hr></hr>


      <h1>
        Html media
      </h1>

      <h2>Video</h2>

      <p>Video with controls</p>

      <video width="320" height="240" src={videofile} type="video/mp4" controls /><br />
      <p>Video with autoplay</p>
      <video width="320" height="240" src={videofile} type="video/mp4" autoPlay muted />

      <br />
      <h2>Audio</h2>
      <audio src={Audio} type="audio/mp3" controls />
      <br />


      <h2>Youtube</h2>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/020g-0hhCAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


      <hr></hr>
      <h1>
        HTML API
      </h1>

      <h3>Get location</h3>
      <button className="butongeo" onClick={() => getLocation()} > get Location</button>
      <br></br>

      <p id='demo' className='loactionGEo'></p>




      <br />
      <br />

      <h2>Drag and drop</h2>
      <div id="div1" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}></div>

      <br />
      <div className='draganddrop'>
        <img id="drag1" src={pershiba} alt="iwe" draggable="true" onDragStart={(e) => drag(e)} width="150" height="150"></img>
        <p>Drag and Drop the image<br /> into the box</p>
     
      </div>
     
    </div>
    
  )
}
