import { MoreVert } from "@mui/icons-material";
import {Menu ,styled}from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";


const MenuOption = styled(MenuItem)`
font-size : 14px;
padding : 15px 60px 5px 24px;
color : #A4A4A4;
`

const HeaderMenu = () => {
   
    const [open,setOpen] = useState(false)

  const handleClick = (e) => {
    setOpen(e.currentTarget)
  };

  const handleClose = () =>{
    setOpen(null)
  }

  return (
    <>
      <MoreVert onClick={handleClick} />
    
        <Menu
          id="basic-menu"
          anchorEl={open}
          keepMounted
          open={open}
          onClose={handleClose}
          getContentAnchorE1={null}
          anchorOrigin={{
            vertical:'bottom',
            horizontical:'center'
          }}
          transformOrigin={{
            vertical:'top',
            horizontal:'right'
          }}
        >
        
        
          <MenuOption onClick={handleClick}>Logout</MenuOption>
        </Menu>
      
    </>
  );
};

export default HeaderMenu;
