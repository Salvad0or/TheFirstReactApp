import s from './Dialog.module.css'


const Dialog = (props) => {
    return (
        <div className={s.container}>
            <div className={s.leftSide}>
               <div>
                Коля
               </div>
               <div>
                Маша
               </div>
               <div>
                Саша
               </div>

            </div>

            <div className={s.rightSide}>
              Some messages

            </div>
        </div>
    )
}

export default Dialog;