
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="">
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <div className="my-container">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App