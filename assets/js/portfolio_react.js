import React from 'react';
import { render } from 'react-dom';
import PortfolioApp from './Portfolio/PortfolioApp.js';


render(
    <PortfolioApp
    {...window.REP_LOG_APP_PROPS}
    />,
    document.getElementById('main')
);