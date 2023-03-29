import {AppBar,Toolbar,Typography} from "@mui/material";
import { logo } from "../Constant/Constant";
export const Header:React.FC=()=> {
  return (
    <AppBar color="transparent" position="static">
       <Toolbar>
          <img src={logo} alt="logo" style={{width:30,marginRight:10}} />
          <Typography>Evernote</Typography>
       </Toolbar>
    </AppBar>
  )
}
