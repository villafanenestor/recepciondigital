
import './App.css';
//import Page from './componentes/Page';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap';
//import Login from './componentes/login/login';
import AppRouter from './componentes/router/router';

function App() {
  return (
    <div className="App">
      <Container>
        <AppRouter/>
      </Container>
    </div>
  );
}

export default App;
