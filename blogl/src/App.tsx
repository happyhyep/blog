import './App.css';
import '../src/assets/css/App.scss';
import Router from './router';
import GlobalStyle from './styles/fonts/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router></Router> 
      </>
  );
}
 
export default App;
