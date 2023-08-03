//const Hello = function() {
//    <p>Hello</p>
//};

import World from "./World";

//const Hello = () => {
//    <p>Hello</p>
//};
//export default Hello;

export default function Hello() {
    return ( 
        <div>
            <h1>Hello</h1>
            <World/>
            <World/>
        </div>
    );
}