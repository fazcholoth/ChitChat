import { Dialog, Typography, Box, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../Constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'
import { useContext } from "react";
import { accountcontext } from "../../Context/AccountProvider";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;

const QrCode = styled("img")({
  height: 256,
  width: 256,
  margin: "50px 0 0 50px",
});

const Tittle = styled(Typography)`
  font-size: 26px;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
  color: #525252;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #525252;
  }
`

const dialoguestyle = {
  height: "96%",
  maginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
};

const LoginDialogue = () => {

  const {setaccount} = useContext(accountcontext)

const OnLoginSuccess = (res) =>{
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    setaccount(decoded)
}

const OnLoginError = (res)  =>{

}


  return (
    <Dialog open={true} PaperProps={{ sx: dialoguestyle }}>
      <Component>
        <Container>
          <Tittle>Use Whatsapp On Your Computer</Tittle>
          <StyledList>
            <ListItem>1.Open WhatsApp on your Phone</ListItem>
            <ListItem>2.Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>
              3.Point Your Phone to this Screen to Capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{position:'relative'}}>
          <QrCode src={qrCodeImage} alt="qr code" />
          <Box style={{position:'absolute',top : '50%', transform : 'translateX(25%)'}}>
            <GoogleLogin
              onSuccess={OnLoginSuccess}
              onError={OnLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
