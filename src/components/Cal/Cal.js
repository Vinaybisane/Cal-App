import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal=()=>{

    const[inputVal1, setInputVal1]= useState(0);
    const allBtArr =[
        {value:0, btFun:()=> {
            setInputVal1(0)
            }},
        {value:1, btFun:()=> 
            {
                setInputVal1(1)
            }},
        {value:2, btFun:()=> {
            setInputVal1(2)
        }},
        {value:3, btFun:()=> {
            setInputVal1(3)
        }},
        {value:4, btFun:()=> {
            setInputVal1(4)
        }},
    ]
    return(
        <div>
            <p> This is cal js {inputVal1}</p>
            <CalWrapper allBtArr={allBtArr} />
        </div>
    )
}
export default Cal;