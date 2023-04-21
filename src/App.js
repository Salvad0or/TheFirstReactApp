import './App.css';
import MyPosts from './Сomponents/Profile/MyPosts';
import Header from './Сomponents/Header/Header';
import Nav from './Сomponents/Navigation/Nav';
import Dialog from './Сomponents/Dialogs/Dialog'
import { Routes, Route, NavLink } from "react-router-dom"
import NotFound from "./Сomponents/NotFoundPage/NotFound"


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav state={props.state} />
      <div >
        <img className='Ocean_img' src='https://pic.rutubelist.ru/video/5e/c0/5ec0227c893e62de2f6ef75b03331f26.jpg' />
        <div className='Routes'>
          <Routes>
            <Route path='/profile' element={<MyPosts name='Alexxxxxx' />} />
            <Route path='/messages/*' element={<Dialog users={props.state.users} msg={props.state.msg} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
