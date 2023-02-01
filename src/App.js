import { useState,useEffect} from 'react';
import axios from "axios";
import './App.css';
import Note from "./components/Note";
import noteService from './services/noteService';
  
function App() {
  const[newNote,setNewNote]=useState('')
  const[notes,setNotes]=useState([])
  const[showAll, setshowAll]=useState(true)


  //useEffect -> render component
  // useEffect(()=>{
  //   axios.get('http://localhost:3002/notes')
  //   .then((response)=>{
  //     console.log(response)
  //     setNotes(response.data)
  //   }).catch(err=>(console.log(err)))
  // },[])
//[] to stop loop

// const getNotes=()=>{
//     axios.get('http://localhost:3002/notes')
//     .then((response)=>{
//       console.log(response)
//       setNotes(response.data)
//     }).catch(err=>(console.log(err)))
  
// }
 
const getNotes= async ()=>{
  try{
    let response=await noteService.getAllnotes()
    console.log(response)
    setNotes(response.data)
  }catch(err){
  console.log(err)
  }

}

useEffect(getNotes,[])



const handleInputChange=(event)=>{
console.log(event.target.value)
setNewNote(event.target.value)  
}
const handleadd=(event)=>{
  event.preventDefault()
  //create a new note
  const note={
 
    content:newNote,
    date:new Date().toString(),
    important:Math.random()<0.5
  }
  if(newNote!==''){
    noteService.createNote(note)
    .then(response=>{
      console.log(response)
      setNotes(notes.concat(response.data))
    }).catch(err=>console.log(err))
  }
 
  // if (newNote!=='')
  // setNotes(notes.concat(note))
  // setNewNote("")
}
const notesShow=showAll 

? notes
:notes.filter(n=>n.important===true)

const deletenote=(id)=>{
  if(window.confirm(`do you want to delete ${id}`)){
    noteService.deletenote(id)
  .then(response=>{
    console.log(response)
      setNotes( notes.filter(n=>n.id!==id))
    
  }).catch(err=>console.log(err))
 
  }
}
const handleImportance=(id)=>{
 // alert(id)
  // find the note with id
  //update the note and change importance
  //put request to the server with the updated note
  //update state with 


let targetNote=  notes.find(n=>n.id===id)
 targetNote={...targetNote,important:!targetNote.important}
noteService.updateNote(id,targetNote)
 .then(response=>{
  console.log(response.data)
  setNotes(notes.map(n=>n.id===id?response.data:n))
 }).catch(err=>console.log(err))
 }



  return (
    <>
   <h2>Notes</h2>
   <button onClick={()=>setshowAll(!showAll)}>{showAll ? 'show important':'show all'}</button>
    {/* <button onClick={showImportant}>show important</button> */}
    <ul>
     {notesShow.map(note=>
      <li key={note.id}>
 <Note 
 note={note} 
 deletenote={deletenote}
 handleImportance={()=>handleImportance(note.id)}/>
      </li>
    
  )} 
   </ul>
   <form>
    <input value={newNote} onChange={handleInputChange}/>
    <button onClick={handleadd}>add</button>
   </form>


    </>

  );
}

export default App;
