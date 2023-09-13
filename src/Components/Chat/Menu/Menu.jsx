import Header from './Header'
import { Dialog, Typography, Box, List, ListItem, styled } from "@mui/material";
import { useContext } from 'react';
import SearchBox from './Searchbox';




const Menu = () =>{
    return (
        
        <Box>
            <Header></Header>
            <SearchBox/>
        </Box>
    )
}

export default Menu