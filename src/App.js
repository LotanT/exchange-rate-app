import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/style/main.scss'
import { Header } from './cmps/Header';
import { EURToUSD } from './pages/EURToUSD';
import { GBPToUSD } from './pages/GBPToUSD';
import { Welcome } from './pages/Welcome';


function App() {
  return (
    <section className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/eur' element={<EURToUSD/>}/>
        <Route path='/gbp' element={<GBPToUSD/>}/>
      </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
