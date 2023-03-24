import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {container, form, title, name_surname, name, surname, username, email, pwd, signup_button, have_account} from './SignupForm.module.css'
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <section className={container}>
      <form className={form}>
        <div className={title}>
          <p>Sign Up</p>
        </div>
        <div className={name_surname}>
          <div className={name}>
            <div>
              <PersonOutlineOutlinedIcon/>
            </div>
            <input type="text" placeholder='Type your first name' />
          </div>
          <div className={surname}>
            <div>
              <PersonOutlineOutlinedIcon/>
            </div>
            <input type="text" placeholder='Type your last name' />
          </div>
        </div>
        <div className={username}>
          <div>
            <AccountCircleOutlinedIcon/>
          </div>
          <input type="text" placeholder='Type your username'/>
        </div>
        <div className={email}>
          <div>
            <EmailOutlinedIcon/>
          </div>
          <input type="email" placeholder='Type your email'/>
        </div>
        <div className={pwd}>
          <div>
            <LockOutlinedIcon/>
          </div>
          <input type="password" placeholder='Type your password'/>
        </div>
        <div className={pwd}>
          <div>
            <LockOutlinedIcon/>
          </div>
          <input type="password" placeholder='Confirm your password'/>
        </div>
        <div className={signup_button}>
          <button>Sign Up</button>
        </div>
        <div className={have_account}>
          <Link to='/login'>Have an account?</Link>
        </div>
      </form>
    </section>
  )
}

export default SignupForm;