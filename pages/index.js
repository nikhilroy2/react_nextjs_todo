import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {useState, useRef} from 'react'
export default function Home() {
  const [text, setText] = useState('')
  const inputField = useRef()
  const textSendHandler = ()=> {
    let textCopy = [...text]
    textCopy = [...text, inputField.current.value]
    //console.log(inputField.current.value)
    setText(textCopy)
    inputField.current.value = ''
  }
  return (
    <div className={styles.container}>
      <main>
        <h2>To do list</h2>

        <form action="" method="post">
          <input type="text" ref={inputField} />
          <button type="button" onClick={textSendHandler}> Send</button>
        </form>

        <div className="todo_list_wrapper">
         {
           text&&(
             <ul>
               {text.map(v=> {
                 return (
                   <li key={v}>
                     {v}
                   </li>
                 )
               })}
             </ul>
           )
         }
        </div>
      </main>
    </div>
  );
}
