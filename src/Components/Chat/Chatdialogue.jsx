import { Dialog, Typography, Box, List, ListItem, styled } from "@mui/material";
import Menu from "./Menu/Menu";
import Emptychat from "./Chat/Emptychat";

const dialoguestyle = {
    height: "95%",
    width: "100%",
    margin:"20px",
    borderRadius:"0",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  };


  const Component = styled(Box)`
  display:flex
`;  

const Leftcomponent = styled(Box)`
min-width:450px
`; 

const Rightcomponent = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14)
`;

const Chatdialogue = () =>{
    return(
        <Dialog open={true} PaperProps={{ sx: dialoguestyle }} hideBackdrop={true} maxwidth={'md'}>
            <Component>
            <Leftcomponent>
                <Menu/>
            </Leftcomponent>
            <Rightcomponent>
                <Emptychat/>
            </Rightcomponent>
            </Component>
        </Dialog>
    )
}

export default Chatdialogue