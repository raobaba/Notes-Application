import { CreateNote } from './Components/CreateNote';
import { Header } from './Components/Header';
import { Box } from "@mui/material";
import { Notes } from './Components/Notes';
import { NoteObject } from './Components/CreateNote';
import { useState } from 'react';
function App() {
  const [notes,setNotes] = useState<NoteObject[]>([]);
  const addNotes = (note:NoteObject)=>{
    setNotes([note,...notes])
  }
  return (
    <>
      <Header />
      <Box style={{margin:20}}>
        <CreateNote addNotes={addNotes} />
        <Notes />
      </Box>
    </>
  );
}

export default App;
