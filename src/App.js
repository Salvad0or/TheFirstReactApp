import './App.css';
import MyPosts from './Сomponents/Profile/MyPosts';
import Header from './Сomponents/Header/Header';
import Nav from './Сomponents/Navigation/Nav';
import Dialog from './Сomponents/Dialogs/Dialog'
import {Routes, Route} from "react-router-dom" 
import NotFound from "./Сomponents/NotFoundPage/NotFound"


const App = () => {
  return (

    <div className='app-wrapper'>

      <Header />
      <Nav />
      
      
      <Routes>
        
        <Route path='/profile' element={<MyPosts />}/>
        <Route path='/messages' element={<Dialog/>}/>
        <Route path ="*" element={<NotFound/>}/>

      </Routes>


    </div>


  );
}


export default App;
