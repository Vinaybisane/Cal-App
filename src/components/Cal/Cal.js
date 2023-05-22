import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";
import './Cal.css';
const Cal=()=>{

    const[inputVal1, setInputVal1]= useState(0);
    const[oprationValue, setOprationValue]=useState(0);
    const[currentOpration, setCurrentopration]= useState('');
    const allBtArr =[
        {value:0, btFun:()=> {
            
            setInputVal1( prevValue=> parseInt(prevValue.toString()+0))
               

            }},
        {value:1, btFun:()=> 
            {
                setInputVal1( prevValue=> parseInt(prevValue.toString()+1))
            }},
        {value:2, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+2))
        }},
        {value:3, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+3))
        }},
        {value:4, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+4))
        }},
        {value:5, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+5))
        }},
        {value:6, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+6))
        }},
        {value:7, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+7))
        }},
        {value:8, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+8))
        }},
        {value:9, btFun:()=> {
            setInputVal1( prevValue=> parseInt(prevValue.toString()+9))
        }},
        
    ];

   
    

    const oprationArr =[
        {
            value:'+',
            btFun:()=>{
                setCurrentopration('+');
                setOprationValue(inputVal1);
                setInputVal1(0);
            }
        },
        {
            value:'-',
            btFun:()=>{
                setCurrentopration('-');
                setOprationValue(inputVal1);
                setInputVal1(0);
            }

        },
        {
            value:'*',
            btFun:()=>{
                setCurrentopration('*');
                setOprationValue(inputVal1);
                setInputVal1(0);
            }
        },
        {
            value:'/',
            btFun:()=>{
                setCurrentopration('/');
                setOprationValue(inputVal1);
                setInputVal1(0);
            }
        },
        {
            value:'=',
            btFun:()=>{
                if(currentOpration=== '+'){

                    setInputVal1((prevValue)=>{
                        return  prevValue+oprationValue;
                    })
                }else if(currentOpration==='-'){
                    setInputVal1((prevValue)=>{
                        return  oprationValue-prevValue;
                })
                    
                }else if(currentOpration==='*'){
                    setInputVal1((prevValue)=>{
                        return  oprationValue*prevValue

                })
                 }else if(currentOpration==='/'){
                    setInputVal1((prevValue)=>{
                        return  oprationValue/prevValue;
                    })
                 }

            }
        }
    ]
    return(
        <div className="output">
            <p  > This is cal js {inputVal1}</p>
            <p >{oprationValue}{currentOpration}</p>
           
            <CalWrapper allBtArr={allBtArr} oprationArr={oprationArr} />
        </div>
    )
}



export default Cal;