import React, { useState } from 'react';
import './Main.css';
import NoteItem from '../note/Note';

import done from './img/done.png'

function Main() {

    const [todos, setTodos] = useState(JSON.parse ( localStorage.getItem('date') ) || [] );


    function promtUser(e) {
        e.preventDefault();
        const sticker = document.querySelector('.sticker');
        let record = document.querySelector('.sticker input');
        if(record.value){
            let newRecord = {
                _id: Math.random(),
                title: record.value,
                isComplites: false
            }
            let res = [...todos, newRecord];
            localStorage.setItem('date', JSON.stringify(res));
            setTodos(res);
        }
        record.value = '';
        sticker.style.display = 'none';
    }
    function stickerShow() {
        const sticker = document.querySelector('.sticker');
        sticker.style.display = 'flex';
        let record = document.querySelector('.sticker input');

        setTimeout(() => {
            record.focus()}, 100);
    }

    function delite() {
        let newArr = [...todos].filter(item => !item.isComplites);
        setTodos(newArr);
        localStorage.date = JSON.stringify(newArr);
    }
    

    window.onkeydown = (e)=> {
        if (e.code === "Enter" || e.code === "NumpadEnter"){
            stickerShow();
        }
    }

    return(
        <main className='main'>
            <div className="wing"></div>
            
            <NoteItem todos={todos} setTodos={setTodos} />
            <div className="new__task" onClick={stickerShow}><h1>НОВАЯ <br />ЗАДАЧА</h1></div>
            <button className='btn__edit' onClick={delite}>Очистить</button>
            <form className="sticker">
                <input type="text" placeholder='Введите заметку' autoFocus />
                <button onClick={promtUser}>Добавить</button>
            </form>
        </main>
    );
}



export default Main;