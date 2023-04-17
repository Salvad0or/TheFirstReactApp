import style from './Header.module.css'

const Header = () => {
    return (
        <div className = {style.main}>
            Header
            <div className={style.item}>Item-item</div>
        </div>
        
    );
}

export default Header