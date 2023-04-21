import { NavLink, Link } from 'react-router-dom';
import  style from './Nav.module.css'
import Friends from './Friends/Friends'


const setActive = ({isActive}) => isActive? style.active_link : '';

const Nav = (props) => {
    return (
        <div className={style.nav}>
            <div className={style.it_em}>Item-item</div>
            <div>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to='/messages' className={setActive}>Messages</NavLink>
            </div>
            <div className="nav__item">News</div>
            <div className="nav__item">Music</div>
            <div className="nav__item">Settings</div>

            <div >

                <Friends friends = {props.state.friends}/>

            </div>



        </div>
    )
};

export default Nav