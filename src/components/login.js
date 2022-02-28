import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login = () => {

    const paperStyle = { padding: 20, margin: "20px auto", height: '70vh', width: 280 };
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const textSize = { fontSize: '1rem', marginTop: '8px' };
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar>P</Avatar>
                        <h2>Login</h2>
                    </Grid>


                    <TextField id="filled-basic" label="User" variant="filled" fullWidth required autoComplete="off" />
                    <TextField id="filled-basic" label="Password" variant="filled" type="password" fullWidth required autoComplete="off" />

                    <Checkbox {...label} />
                    <label>Lembre-se</label>

                    <Button type='submit' variant="contained" color="primary" fullWidth>Login</Button>

                    <Typography variant="caption" display="block" gutterBottom style={textSize}><Link href="#">Esqueceu a senha?</Link></Typography>

                    <Typography variant="caption" display="block" gutterBottom style={textSize}>Voce não tem conta? <Link href="#">Cadastre-se</Link></Typography>

                </Paper>
            </Grid>
        </ThemeProvider>
    )
}

export default Login;