import React, { useState, useEffect, useRef, useContext } from 'react';
import { Clock, User, LogIn, UserPlus, List, Menu, X, ClipboardList, Bell, Settings } from 'lucide-react';
import styles from './Navbar.module.css';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { userContext } from '../../Context/createContext';
import { ApiLogout } from '../../API/Api';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const {user, setUser, isLogin, setisLogin} = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await ApiLogout();
    if(response.status <= 210){
      toast.success(response.data.message);
      setUser(null);
      setisLogin(false);
      closeMobileMenu();
      navigate("/");
    }
  }
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <span className={styles.logoIconWrapper}>
            <Clock className={styles.logoIcon} size={20} />
          </span>
          <span className={styles.logoText}>DeadlineAI</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Nav Items */}
        <div className={`${styles.navItems} ${isMobileMenuOpen ? styles.navItemsVisible : ''}`}>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            onClick={closeMobileMenu}
          >
            <List size={18} className={styles.navLinkIcon} />
            <span>Dashboard</span>
          </NavLink>
          
          {user && (
            <NavLink 
              to="/tasks" 
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
              onClick={closeMobileMenu}
            >
              <ClipboardList size={18} className={styles.navLinkIcon} />
              <span>Tasks</span>
            </NavLink>
          )}
          
      
          
          {/* User Menu */}
          <div className={styles.userMenu} ref={userMenuRef}>
            <button className={styles.userButton} onClick={toggleDropdown}>
              <User size={18} className={styles.userIcon} />
              {user ? <span>{user.email}</span> : <span>Account</span>}
            </button>
            
            {/* Dropdown menu */}
            <div className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownVisible : ''}`}>
              {!user && (
                <Link to="/login" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <LogIn size={18} className={styles.dropdownIcon} />
                  <span>Login</span>
                </Link>
              )}

              {user && (
                <button className={`${styles.dropdownItem} ${styles.button}`} onClick={handleLogout}>
                  <LogIn size={18} className={styles.dropdownIcon} />
                  <span>Logout</span>
                </button>
              )}
              
              {!user && (
                <Link to="/signup" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <UserPlus size={18} className={styles.dropdownIcon} />
                  <span>Sign Up</span>
                </Link>
              )}
              
              
              
              {user && (
                <Link to="/tasks" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <List size={18} className={styles.dropdownIcon} />
                  <span>My Tasks</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;