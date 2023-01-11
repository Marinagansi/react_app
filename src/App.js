
import { useState ,useEffect} from 'react';
import axios from "axios";
import './App.css';
 
function App(props) {
  const[newNote,setNewNote]=useState('')
  const[notes,setNotes]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3002/notes')
    .then((response)=>{
      console.log(response)
      setNotes(response.data)
    })
  },[])
const handleInputChange=(event)=>{
console.log(event.target.value)
setNewNote(event.target.value)  
}
const handleadd=(event)=>{
  event.preventDefault()
  alert('Testing..')
}
  return (
    <>
   <h2>Notes</h2>
   <ul>
     {notes.map(note=>
     <li key={note.id}>
      {note.content}
      </li>)} 
   </ul>
   <form>
    <input value={newNote} onChange={handleInputChange}/>
    <button onClick={handleadd}>add</button>
   </form>

    
    </>

  );
}

export default App;
