import { InputBase, Box, Button, styled,Typography } from "@mui/material";
import { useState } from "react";
import {v4 as uuid} from "uuid";
const Container = styled(Box)`
   & > * {
    margin-right: 20px;
    margin: 20px 20px 20px 0;
   }
   & > div > input[type="text"]{
    border: 1px solid #111111;
    opacity:0.4;
    width: 300px;
    margin-right: 25px;
   }
   & > div > input[type="color"]{
     width: 40px;
     height: 40px;
     position: relative;
     bottom: -10px;
   }
   & > span {
    font-size: 12px;
    position: relative;
    right: 60px;
   }
`
const Error = styled(Typography)`
  background-color:red;
  color: #fff;
  padding: 10px;
  width: 50%;
`
const defaultObj = {
  id: 0,
  title: '',
  detail: '',
  color: '',
  date: (new Date().toLocaleString()).toString()
}
export interface NoteObject {
  id: number,
  title: string,
  detail: string,
  color: string,
  date: string
}
interface IcreateNoteProps {
  addNotes: (note: NoteObject) => void
}
export const CreateNote: React.FC<IcreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultObj);
  const [error,setError] = useState<string>('');
  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if(error){
      setError('');
    }
          setNote({...note,[e.target.name]:e.target.value})
  }
  const onCreateNote = ()=>{
    if(!note.title && !note.detail){
      setError("All Fields are mandatory");
      return;
    }
    addNotes({...note,id:uuid()})
    setNote(defaultObj)
  }
  const TITLE_LIMIT = 30;
  const DETAIL_LIMIT = 50;

  return (
    <Container>
      <InputBase placeholder='Title' inputProps={{maxLenght:TITLE_LIMIT}} value={note.title} name="title" onChange={(e) => onValueChange(e)} />
      <Box component='span'>{note.title.length}/{TITLE_LIMIT}</Box>
      <InputBase placeholder='Detail' inputProps={{maxLength:DETAIL_LIMIT}} value={note.detail} name='detail' onChange={(e) => onValueChange(e)} />
      <Box component='span'>{note.detail.length}/{DETAIL_LIMIT}</Box>
      <InputBase type="color" defaultValue='#F5F5F5' name='color' onChange={(e) => onValueChange(e)} />
      <Button onClick={()=>onCreateNote()} variant='outlined'>Create</Button>
      {error && <Error>{error}</Error>}
    </Container>
  )
}
