import { CreateNote } from './Components/CreateNote';
import { Header } from './Components/Header';
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <Header />
      <Box style={{margin:20}}>
        <CreateNote />
      </Box>
    </>
  );
}

export default App;
