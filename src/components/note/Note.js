import './Note.css';

import doneBtn from './img/done.png'


function NoteItem({ todos, setTodos }) {

    function status(id) {
        let newArr = [...todos].filter(item => {
            if (item._id == id) {
                item.isComplites = !item.isComplites;
            }
            return item;
        });
        setTodos(newArr);
        localStorage.dateboock = JSON.stringify(newArr);
    }


    return (
        todos.map((item, i) =>
            <div className={item.isComplites ? 'note note-complite' : 'note'} key={item._id}>
                <h2 className='note__item' onClick={() => status(item._id)} >{i + 1}) {item.title}</h2>

                <div className="note__btns">
                    <div className="note__btns-done"><img src={doneBtn} alt="done" className={item.isComplites ?
                        "note__btns-done-complite" :
                        "note__btns-done-work"} /></div>
                </div>
            </div>)
    );
}


export default NoteItem;