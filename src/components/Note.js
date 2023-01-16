const Note=(props)=>{
    const {note,deletenote}=props
    return(
    <>
    {note.content}<br/>
    {note.date}<br/>
    <button onClick={()=>deletenote(note.id)}>delete</button>
   
    </>)
}
export default Note