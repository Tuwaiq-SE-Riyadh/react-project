
import React from 'react';
import { useState } from "react";


function Com() {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [arr, setArr] = useState([])

    const changename = (e) => {
        
        const value = e.target.value;
        setName(value)
    };

    const changecomment = (e) => {
        const value = e.target.value;
        setComment(value)
    };
    const add = (e) => {
        const item = { name, comment };
        e.preventDefault();
        let array2 = arr.slice()
        array2.push(item);
        setArr(array2)
    };
    function remove(e,index) {
        e.preventDefault()
        let array2 = arr.slice()
        array2.splice(index, 1);
        setArr(array2)
    }
    let f = arr.map((item, index) => {

        return (
            <div index={index}>
                <p>{item.name}</p>
                <p>{item.comment}</p>
            </div>
        )
    }
    )
    return (
        <div>
            <form className="comForm">

                <input type="name" onChange={changename} />
                <input type="comment" onChange={changecomment} />
                <button onClick={add}>Add</button>
                <button onClick={remove}>remove</button>

            </form>

            {f}

        </div>
    )
}


export default Com;
