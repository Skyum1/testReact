//const Hello = function() {
//    <p>Hello</p>
//};

import World from "./World";
import styles from "./Hello.module.css";

//const Hello = () => {
//    <p>Hello</p>
//};
//export default Hello;

export default function Hello() {
    return ( 
        <div>
            <h1 style={
                {
                    color: '#f00',
                    borderRigh : '12px solid #000',
                    marginBottom : '50px',
                    opacity: 1,
                }
            }>Hello</h1>
            <div className={styles.box}> Hello </div>
        </div>
    );
}