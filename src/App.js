import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Routes/AppRouter';
import NewsProvider from './components/Providers/NewsProvider';

function App() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <AppRouter/>
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;
