import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/inter";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import {reducer,initialState} from './Utils/reducer.js'
import DataProvider from './components/DataProvider/DataProvider.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
