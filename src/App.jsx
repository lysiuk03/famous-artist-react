
import { Link } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';

function App() {
  return (
    <>
    <h1> Famous artist!</h1>
    <nav>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="biography">Biography</Link>
        </li>
        <li>
          <Link to="painting">Painting</Link>
        </li>
        <li>
          <Link to="paintingsCollection">Paintings Collection</Link>
        </li>
      </ul>
    </nav>
    <Layout/>
    </>
  );
}

export default App;
