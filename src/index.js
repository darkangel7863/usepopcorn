import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './starRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      maxRating={7}
      color={'#212464'}
      size={32}
      messages={[
        'Perfect',
        'good',
        'acceptable',
        'medium',
        'weak',
        'extremely weak',
        'Ignore',
      ]}
      defaultRating={3}
    />
    {/* maxRating = 5,
  color = '#fcc419',
  size = 48,
  className = '',
  messages = [],
  defaultRating = 0, */}
  </React.StrictMode>
);
