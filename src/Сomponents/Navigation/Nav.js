import  style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.it_em}>Item-item</div>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div className="nav__item">
                <a href='/messages'>Messages</a>
            </div>
            <div className="nav__item">News</div>
            <div className="nav__item">Music</div>
            <div className="nav__item">Settings</div>
        </div>
    )
};

export default Nav