import s from './Dialog.module.css'
import GetName from './GetName'



const Dialog = (props) => {
    
    let dilogsElements = props.users.map(u => <GetName name={u.name} id={u.id} />);
    

    return (
        <div className={s.container}>
            <div className={s.leftSide}>
             {dilogsElements}
            </div>

          
        </div>
    )
}



export default Dialog;