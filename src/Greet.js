import React,{useState} from "react";


const Greet =()=>{
    const [name,setName]=useState('');

    const handleNameChange=(event)=>{
        const newName=event.target.value;
        setName(newName);
    }

    const greeting = name ? `Hello ${name}!` : '';

    return (
        <div>
            <label>
                Enter your name:<br/>
                <input type="text" value={name} onChange={handleNameChange}/>
            </label>
            <p>{greeting}</p>
        </div>
    )
}

export default Greet;