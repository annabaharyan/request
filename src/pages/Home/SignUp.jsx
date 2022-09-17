import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homeCss from './home.css'
import {useState, useEffect} from 'react'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();


export default function SignUp() {


const [formValues,setFormValues]=useState({
  fullName:'',
  email:'',
  password:'',
  phone:'',
  telegram:'',
  whatsapp:''
  
});
 const [formErrors,setFormErrors]=useState({})
const[isSumbit,setIsSubmit]=useState(false)
  
const handleChange=(e)=>{

 const {name,value}= e.target
 setFormValues({...formValues,[name]:value})
}
const validate=(values)=>{
const errors={}
const fullNameRegex=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex=/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/
if(!values.fullName){
  errors.fullName='Username is required!'
}else if(!fullNameRegex.test(values.fullName)){
  errors.fullName='wrong Username!'
}
if(!values.email){
  errors.email='Email is required!'
}else if(!emailRegex.test(values.email)){
  errors.email='wrong Email!'
}
if(!values.phone){
  errors.phone='Phone is required!'
}else if(!phoneRegex.test(values.phone)){
  errors.phone='wrong Phone Number!'
}
if(!values.telegram){
  errors.telegram='Telegram is required!'
}else if(!phoneRegex.test(values.phone)){
  errors.phone='wrong Telegram number!'
}
if(!values.whatsapp){
  errors.whatsapp='Whatsapp is required!'
}else if(!phoneRegex.test(values.phone)){
  errors.phone='wrong Whatsapp number!'
}
return errors
}



  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    setFormErrors( validate(formValues))
    setIsSubmit(true)
  };
useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length===0 && isSumbit){
    console.log(formValues);
  }
},[formErrors])
  return (
  
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {Object.keys(formErrors).length===0 && isSumbit?(<Box className='success'>Sign in succesfully</Box>):('')}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="FullName"
                  label="Full Name"
                  autoFocus
                  value={formValues.fullName}
                  onChange={handleChange}

                />
              </Grid>
              <p>{formErrors.fullName}</p>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Grid>
              <p>{formErrors.email}</p>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </Grid>
              <p>{formErrors.phone}</p>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="telegram"
                  label="Telegram"
                  name="telegram"
                  autoComplete="telegram"
                  value={formValues.telegram}
                  onChange={handleChange}
                />
              </Grid>
              <p>{formErrors.telegram}</p>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="whatsapp"
                  label="Whatsapp"
                  name="whatsapp"
                  autoComplete="whatsapp"
                  value={formValues.whatsapp}
                  onChange={handleChange}
                />
              </Grid>
              <p>{formErrors.whatsapp}</p>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}