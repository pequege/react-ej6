import './App.css'
import FormColor from './components/FormColor'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='main container my-5'>
        <FormColor></FormColor>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
