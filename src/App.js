import React, {useState} from 'react';
import './App.css';
import Header from './Component/Header/Header';
// import Footer from './Component/Footer/Footer';
import Main from './Component/Main/Main';

function App() {
  const [shownCompleted, setShownCompleted] = useState(false);

  function showCompletedTasks(){
    setShownCompleted(!shownCompleted);
  }

  return (
    <div>
      <Header  showCompletedTasks={showCompletedTasks}/>
      <Main shownCompleted={shownCompleted}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
