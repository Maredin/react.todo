import React, { useState } from 'react';
import './Main.css';
import NoteItem from '../note/Note';

function Main() {

    const [todos, setTodos] = useState(JSON.parse ( localStorage.getItem('date') ) || [] );

    function promptTask() {
        let record = prompt('Новая задача')
        if(record){
            let newRecord = {
                _id: Math.random(),
                title: record,
                isComplites: false
            }
            let res = [...todos, newRecord];
            localStorage.setItem('date', JSON.stringify(res));
            setTodos(res);
        }
    }
    

    window.onkeydown = (e)=> {
        if (e.code === "Enter" || e.code === "NumpadEnter"){
            promptTask()
        }
    }

    return(
        <main className='main'>
            <div className="wing"></div>
            
            <NoteItem todos={todos} setTodos={setTodos} />
            <div className="new__task" onClick={promptTask}><h1>НОВАЯ <br />ЗАДАЧА</h1></div>
        </main>
    );
}



export default Main;