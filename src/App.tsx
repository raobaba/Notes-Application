import { CreateNote } from './Components/CreateNote';
import { Header } from './Components/Header';
import { Box } from "@mui/material";
import { Notes } from './Components/Notes';
import { NoteObject } from './Components/CreateNote';
import { useState ,useEffect} from 'react';
function App() {
  const [notes,setNotes] = useState<NoteObject[]>([]);
  useEffect(()=>{
    if(sessionStorage.getItem("notes")){
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string))
    }
  },[])
  const addNotes = (note:NoteObject)=>{
    setNotes([note,...notes])
    sessionStorage.setItem('notes',JSON.stringify([note,...notes]))
  }
  const deleteNote = (id:number)=>{
     const updateNotes = notes.filter(note => note.id!==id);
     setNotes(updateNotes);
     sessionStorage.setItem('notes',JSON.stringify(updateNotes))
  }
  return (
    <>
      <Header />
      <Box style={{margin:20}}>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote}/>
      </Box>
    </>
  );
}

export default App;
