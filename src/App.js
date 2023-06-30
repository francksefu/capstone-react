import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BigView from './components/BigView';
import { getFinance } from './redux/dataSlice/dataSlice';
import DetailViewItem from './components/DetailViewItem';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinance());
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BigView />} />

          <Route path="/detail/:date" element={<DetailViewItem />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
