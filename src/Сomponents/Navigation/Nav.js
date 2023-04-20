import { NavLink, Link } from 'react-router-dom';
import  style from './Nav.module.css'
import Friends from './Friends'


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

            <div className={style.friends}>

                <div className = {style.friends_row}>
                    <div>
                        <img scr = 'https://yandex.ru/images/search?from=tabbar&img_url=http%3A%2F%2Fmobimg.b-cdn.net%2Fv3%2Ffetch%2Fc0%2Fc032f011084db485a7de53e8986af698.jpeg&lr=236&pos=32&rpt=simage&text=avatar'></img>

                        <div>
                         <Friends friends = {props.state.friends}/>

                        </div>


                    </div>

                </div>
    
            </div>



        </div>
    )
};

export default Nav