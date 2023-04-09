
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="container mx-auto w-[90%]">
      <Header />
    <div className='min-h-[calc(100vh-120px)]'>
      <Outlet />
    </div>
        <Footer />
    </div>
  );
}

export default App