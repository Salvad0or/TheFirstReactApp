import './App.css';
import MyPosts from './Сomponents/Profile/MyPosts';
import Header from './Сomponents/Header/Header';
import Nav from './Сomponents/Navigation/Nav';
import Dialog from './Сomponents/Dialogs/Dialog'
import {Routes, Route} from "react-router-dom" 



const App = () => {
  return (

    <div className='app-wrapper'>

      <Header />
      <Nav />
      <MyPosts/>
      
      <Routes>
        <Route path='/messages' element={<Dialog/>}/>
        <Route path='/profile' element={<MyPosts />}/>
      </Routes>


    </div>


  );
}


export default App;
