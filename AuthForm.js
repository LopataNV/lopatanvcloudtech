import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Button from '/components/Header/Button';
import aut from './containers/AuthForm';
import TextField  from '@mui/material/TextField'; 
function GetAuth () {
    const DivStyle = {    };
    return (
        <form> <div>  <TextField
        id="outlined-password-input"
        label="login"
        type="text"
        autoComplete="current-password"
        /> <p> </p> 
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        /> <p> </p>
        <Button style={{backgroundColor: '#145ea8'}} href='C:\lab1\index.html'>Login</Button>
          </div>    </form>
    )
}
export default GetAuth;
ReactDOM.createRoot(dokument.querySelector("#auth")).render( 
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Aut />
        </StyledEngineProvider>
    </React.StrictMode>
)