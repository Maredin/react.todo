import './Note.css';

import deliteBtn from './img/delite.png';
import doneBtn from './img/done.png'


function NoteItem( { todos, setTodos } ) {
    
    function delite(id) {
        let newArr = [...todos].filter(item => item._id != id );
        setTodos(newArr);
        localStorage.date = JSON.stringify(newArr);
    }

    function status(id) {
        let newArr = [...todos].filter(item => {
            if(item._id == id) {
                item.isComplites = !item.isComplites;
            }
            return item;
        });
        setTodos(newArr);
        localStorage.date = JSON.stringify(newArr);
    }


    return (
        todos.map( (item, i) => 
        <div className={item.isComplites ? 'note note-complite' : 'note'} key={item._id}>
            <h2 className='note__item' onClick={ () => status(item._id)} >{i + 1}) <span>{item.title}</span></h2>
           
            <div className="note__btns">
                <div className="note__btns-done" onClick={ () => status(item._id)}><img src={doneBtn} alt="done" className={item.isComplites ?
                "note__btns-done-complite" :
                "note__btns-done-work"}/></div>
                <div className="note__btns-delite" onClick={ () => delite(item._id) }><img src={deliteBtn} alt="delite" /></div>
            </div>
        </div>)
        
    );
}


export default NoteItem;