import {useState} from "react";
import bg1 from './App.css'
const CounterApp = ()=>{
    const[count,setCount]=useState(0);
    const[backgroundcolor,setBackgroundcolor]=useState(true);

    const bgcolor=backgroundcolor ? "" : "bg1"
    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    const Reset=()=>{
        setBackgroundcolor(false)
        setCount(0)
    }
    if(count<0){
        setCount(0)
    }
    let bgcolor1="";
    if(count===5){
        bgcolor1="bg1";
    }
    return(
        <div>
            <h1 className={bgcolor}>
                {count}
            </h1>
            <button onClick={Increment}>INC</button>
            <button onClick={Reset}>RESET</button>
            <button onClick={Decrement}>DEC</button>

        </div>
        )
    }
export default CounterApp;