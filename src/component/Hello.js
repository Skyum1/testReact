import {useState} from "react";
import UserName from "./UserName";

export default function Hello(props) {
    const [name, setName] = useState('Mike');
    const [age,setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다" : "미성년자입니다.";
    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        //document.getElementById("name").innerText = name;
        setName(newName);
        setAge(age + 1);
    }
    return ( 
        <div>
            <h1>Hello</h1>
            <h2 id="name">
                {name}({age}세) : {msg}
            </h2>
            <UserName name={name}/>
            <button onClick={changeName}>Change</button>
            
        </div>
    );
}