const Note=(props)=>{

    const {note,deletenote,handleImportance}=props
    const label=note.important?'make not imortant':'make important'
    return(
    <>
    {note.content}<br/>
    {note.date}<br/>
    <button onClick={()=>deletenote(note.id)}>delete</button>
    <button onClick={handleImportance}>{label}</button>
    </>)
}
export default Note