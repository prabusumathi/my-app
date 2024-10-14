// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav'
import img1 from './img/img-1.jpeg'
import img2 from './img/img-3.jpeg'
import img3 from './img/img-4.jpeg'
import img5 from './img/img-5.jpeg'
function App() {
  return (
  
    <div className="App">
      
<Nav/>
      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3">
            <div className="card">
              <img src={img1} className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">This is a description for Card 1.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3">
            <div className="card">
              <img src={img2} className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">This is a description for Card 2.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3">
            <div className="card">
              <img src={img3} className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">This is a description for Card 3.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3">
            <div className="card">
              <img src={img5} className="card-img-top" alt="Card 4" />
              <div className="card-body">
                <h5 className="card-title">Card 4</h5>
                <p className="card-text">This is a description for Card 4.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;