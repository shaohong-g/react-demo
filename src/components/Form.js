import React, {useState, useEffect } from "react";
import '../css/form.css'

export default function Form(props){
    console.log(props)

    function click(num){
        props.changeNum(num);
        (num <0 || num >10) && setCount(count + 1)
    }


    // https://www.w3schools.com/react/react_useeffect.asp
    const [count, setCount] = useState(0);
    // var checkvalue = typeof document.getElementById('fnum').value 
    useEffect(() => {
        (count !== 0) && alert("Wrong Input count = "+ count)
    }, [count]);


    return(
        <div>
            <label htmlFor ="fnum">Number:</label>
            <input type="text" id="fnum" name="fname" defaultValue = {props.num}/>
            <button type="button" onClick={() => {click(document.getElementById('fnum').value)}}>Submit</button>
        </div>
    )
}

