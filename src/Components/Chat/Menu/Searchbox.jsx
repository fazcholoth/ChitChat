import { Box } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from '@mui/material';
import styled from "@emotion/styled";

const Component = styled(Box)`
background : #fff ;
height : 45px ;
border-bottom : 1px solid #f2f2f2 ;
display : flex ;
align-items : center ;
`
const Icon = styled(Box)`
position : absolute ;
height : 100%
padding : 8px ;
color : #919191;
`

const Inputfield = styled(InputBase)`
width : 100%;
padding : 16 px ;
height : 15px ;
padding-left : 65px

`

const Wrapper = styled(Box)`
background-color : #f0f2f5 ;
position : relative ;
margin : 0 13px ;
width : 100% ;
`

const SearchBox = () =>{
    return(
        <Component>
            <Wrapper>
            <Icon>
                <SearchIcon
                fontSize="small"
                />
            </Icon>
            <Inputfield
            placeholder="search or start a new chat"
            />
            </Wrapper>
        </Component>
    )
}

export default SearchBox