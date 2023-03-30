import { InputBase,Box, Button,styled } from "@mui/material";
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
export const CreateNote:React.FC = ()=> {
  return (
    <Container>
        <InputBase placeholder='Title' />
        <Box component='span'>30</Box>
        <InputBase placeholder='Detail' />
        <Box component='span'>50</Box>
        <InputBase type="color" defaultValue='#F5F5F5'></InputBase>
        <Button variant='outlined'>Create</Button>
    </Container>
  )
}
