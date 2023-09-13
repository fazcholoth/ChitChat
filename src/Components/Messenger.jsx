import { useContext } from "react";
import LoginDialogue from "./Account/LoginDialogue";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { accountcontext } from "../Context/AccountProvider";
import Chatdialogue from './Chat/Chatdialogue'


const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {

const {account} = useContext(accountcontext)

  return (
    <Component>
      {
        account?
        <>
        <LoginHeader>
        <Toolbar>

        </Toolbar>
        </LoginHeader>
      <Chatdialogue/>
      </>
      :
      <>
      <LoginHeader>
        <Toolbar>

        </Toolbar>
      </LoginHeader>
      <LoginDialogue />
      </>
    }
    </Component>
  );
};

export default Messenger;
