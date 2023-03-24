import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.title}>
          <p>Login</p>
        </div>
        <div className={styles.email}>
          <div className={styles.icon}>
            <PersonOutlineOutlinedIcon/>
          </div>
          <input type="email" placeholder='Type your username' />
        </div>
        <div className={styles.pwd}>
          <div className={styles.icon}>
            <LockOutlinedIcon/>
          </div>
          <input type="password" placeholder='Type your password' />
        </div>
        <div className={styles.forgot}>
          <Link to=''>Forgot password?</Link>
        </div>
        <div className={styles.signin}>
          <button>Login</button>
        </div>
        <div className={styles.accounts}>
          <div className={styles.subtitle}>
            <p>Or sign up using</p>
          </div>
          <div className={styles.icons}>
            <div>
              <FacebookRoundedIcon/>
            </div>
            <div>
              <TwitterIcon/>
            </div>
            <div>
              <GoogleIcon/>
            </div>
          </div>
        </div>
        <div className={styles.signup}>
          <div className={styles.subtitle}>
            <p>Or sign up using</p>
          </div>
          <Link to='/sign-up'>Sign Up</Link>
        </div>
      </form>
    </section>
  )
}

export default LoginForm