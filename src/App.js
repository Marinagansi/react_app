
import { useState} from 'react';
import Form from './components/Form';
// import axios from "axios";
import './App.css';
  
function App(props) {
  const[newNote,setNewNote]=useState('')
  const[notes,setNotes]=useState(props.notes)
  const[showAll, setshowAll]=useState(true)

  // useEffect(()=>{
  //   axios.get('http://localhost:3002/notes')
  //   .then((response)=>{
  //     console.log(response)
  //     setNotes(response.data)
  //   })
  // },[])
const handleInputChange=(event)=>{
console.log(event.target.value)
setNewNote(event.target.value)  
}
const handleadd=(event)=>{
  event.preventDefault()
  //create a new note
  const note={
    id:notes.length+1,
    content:newNote,
    date:new Date().toString(),
    important:Math.random()<0.5
  }
  if (newNote!=='')
  setNotes(notes.concat(note))
  setNewNote("")
}
const notesShow=showAll 
? notes
:notes.filter(n=>n.important===true)

const deletenote=(id)=>{
  if(window.confirm(`do you want to delete ${id}`)){
   setNotes( notes.filter(n=>n.id!==id))
  }
  }

  return (
    <>
   <h2>Notes</h2>
   <button onClick={()=>setshowAll(!showAll)}>{showAll ? 'show important':'show all'}</button>
    {/* <button onClick={showImportant}>show important</button> */}
   <ul>
     {notesShow.map(note=>
     <li key={note.id}>
      {note.content}<br/>
      {note.date}<br/>
      <button onClick={()=>deletenote(note.id)}>delete</button>
      </li>)} 
   </ul>
   <form>
    <input value={newNote} onChange={handleInputChange}/>
    <button onClick={handleadd}>add</button>
   </form>

  <Form/>
    </>

  );
}

export default App;
