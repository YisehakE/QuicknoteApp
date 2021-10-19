import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <>
  <Router>
    <App />
    <CssBaseline />

  </Router>
   
  </>,
  document.getElementById('root')
);

