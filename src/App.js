import './App.css';
import { useEffect } from "react";
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import OtdelList from './components/OtdelList/OtdelList';
import Form from './components/Form/Form';


function App() {

  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element = {<OtdelList />}/>
        <Route path={'/form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;









