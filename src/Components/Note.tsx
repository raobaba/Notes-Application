import { NoteObject } from "./CreateNote";
import { Card, CardContent, Box, Typography,Button,styled } from "@mui/material";
const StyleCard = styled(Card)`
   width: 400px;
   margin: 20px;
`
const Wrapper = styled(Box)`
   & > button {
    border: 1px solid #000;
    background-color: #fff;
    margin-top: 5px;
   }
`
interface INoteProps {
    note: NoteObject,
    deleteNote: (id: number) => void
}
export const Note: React.FC<INoteProps> = ({ note,deleteNote }) => {
    return (
        <StyleCard style={{background:note.color}}>
            <CardContent>
                <Wrapper>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.detail}</Typography>
                    <Typography>{note.date}</Typography>
                    <Button onClick={()=>deleteNote(note.id)} variant="outlined" >Delete</Button>
                </Wrapper>
            </CardContent>
        </StyleCard>
    )
}
