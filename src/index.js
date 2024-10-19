import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './component/card/card1.css';
import '../src/card2.css';
import '../src/card3.css';
import '../src/card4.css';

//card2
const card2 = ReactDOM.createRoot(document.getElementById('card2'));
card2.render(
  <React.StrictMode>
    <div class="card-body">
      <img class="card-img" src="./assets/all in one.webp" alt="all in one"/>
        <h4 class="card-details">کامپیوتر همه کاره 23.8 اینچ اچ‌ پی مدل 24-CR0123-i5 1335U 8GB 512SSD UHD</h4><br/>
        <h3 class="card-price"> تومان ۴۶,۵۰۰,۰۰۰
        </h3>
        <button>افزودن به سبد خرید</button>
    </div>
  </React.StrictMode>
);

//card3
const card3 = ReactDOM.createRoot(document.getElementById('card3'));
card3.render(
  React.createElement()
);

