import { Box,Typography } from '@mui/material';
import { Note } from './Note';
import { NoteObject } from './CreateNote';
interface INoteProps {
    notes: NoteObject[],
    deleteNote: (id: number) => void
}
export const Notes:React.FC<INoteProps> = ({notes})=> {
  return (
    <Box>
      <Typography>Notes</Typography>
      <Box>
        {
           notes.map(note=>(
            <Note note={note}/>
           ))
        }
      </Box>
    </Box>
  )
}
