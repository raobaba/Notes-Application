import { CreateNote } from './Components/CreateNote';
import { Header } from './Components/Header';
import { Box } from "@mui/material";
import { Notes } from './Components/Notes';
function App() {
  return (
    <>
      <Header />
      <Box style={{margin:20}}>
        <CreateNote />
        <Notes />
      </Box>
    </>
  );
}

export default App;
