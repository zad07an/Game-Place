import React, { useEffect, useRef, useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/slices/UserSlice';
import styles from './Navbar.module.css'
import { fetchWishList } from '../../redux/slices/WishListSlice';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const navigate = useNavigate();
  const {user, isLoggedIn} = useSelector(state => state.user);
  const {wish_list_data} = useSelector(state => state.wish_list);

  const handleMenuOpen = () => setIsOpen(!isOpen);
  const activeLink = ({isActive}) => (isActive ? {color: "orange"} : null)

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchWishList())
  }, [dispatch])

  useEffect(() => {
    const handleCloseMenu = (e) => {
      if (iconRef.current && menuRef.current && !menuRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleCloseMenu)
    return () => document.removeEventListener("mousedown", handleCloseMenu)
  }, [])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to='/'>GamePlace</Link>
        </div>
        {
          isOpen ? (
            <div className={styles.overlay}></div>
          ) : null
        }
        <ul ref={menuRef} className={styles.menu} style={{right: isOpen && 0}}>
          <li className={styles.list}>
            <NavLink to='/' onClick={() => setIsOpen(false)} className={styles.link} style={activeLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink to='/games/all-games' onClick={() => setIsOpen(false)} className={styles.link} style={activeLink}>
              Games
            </NavLink>
          </li>
          {
            isLoggedIn ? (
              <li className={styles.list}>
                <NavLink to='/wishlist' onClick={() => setIsOpen(false)} className={styles.link} style={activeLink}>
                  Wishlist
                  <p> - {wish_list_data?.length}</p>
                  <div>
                    <span>{wish_list_data?.length}</span>
                  </div>
                </NavLink>
              </li>
            ) : (
              null
            )
          }
        </ul>
        <div className={styles.buttons}>
          {
            isLoggedIn ? (
              <div className={styles.user}>
                <div className={styles.username}>
                  <span>{user?.first_name} {user?.last_name}</span>
                  <p>@{user?.username}</p>
                </div>
                <div className={styles.user_picture}>
                  <img src={user?.picture} alt="" />
                </div>
              </div>
            ) : (
              <>
                <button onClick={() => navigate('/login')}>Sing In</button>
                <button className={styles.signup} onClick={() => navigate("/sign-up")}>Sing Up</button>
              </>
            )
          }
          <div ref={iconRef} className={styles.hamburger} onClick={handleMenuOpen}>
            <Hamburger toggled={isOpen} color='white'/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar