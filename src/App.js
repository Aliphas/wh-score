import s from'./App.module.css';
import Header from './components/Header';
import Side from './components/Side';

const App = () => {
  return ( 
    <div className={s.app}>
      <Header />
        <Side />
        <Side/>
    </div>
    
  );
}




export default App;
