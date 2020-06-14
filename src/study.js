import React,{useRef, useState} from "react";

const Study = () =>{
    const [word, setWord] = useState("이태희");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    const formOnsubmit = (e) =>{
        e.preventDefault();
        if(word[word.length-1] === value[0]){
            setResult("딩동댕");
            setWord(value);
            setValue("");
            inputRef.current.focus();
        }else{
            setResult("땡");
            setValue("");
        }
    }
    const onChangeInput = (e) =>{
        setValue(e.target.value);
    }
    return(
        <div>
            <div>{word}</div>
            <form onSubmit = {formOnsubmit}>
                <input value={value} ref={inputRef} onChange={onChangeInput}></input>
                <button>입력!!</button>
            </form>
            <div>{result}</div>
        </div>
    )
}



export default Study;