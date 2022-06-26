import React, {useEffect, useState} from "react";

export default function Fib({num}){

    function getFib(num){
        num = parseInt(num)
        var i;
        var fib
        if (num === 1){
            fib = [0]
            return fib.map(x => x + " ")
        } else if( num === 2){
            fib = [0,1]
            return fib.map(x => x + " ")
         }else {
            fib = [0, 1]; // Initialize array!
            for (i = 0; i < num-2; i++) {
                fib.push(fib[i]+fib[i+1]);  
                // console.log(fib); 
            }
            return fib.map(x => x + " ")
        }
    }
    
    
    const [text, setText] = useState('Please insert a Number from 1-10 (Inclusive)');
    useEffect(() => {
        (num >0 & num <=10) ? (setText(getFib(num))) : (setText('Please insert a Number from 1-10 (Inclusive)'))
    }, [num]);

    return(
        <div>
            <p>{text}</p>
        </div>
    )
}
