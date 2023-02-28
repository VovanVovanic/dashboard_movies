import { FC } from "react"
import Login from "../login/Login"
import Logo from "./Logo"
import classes from './Header.module.scss'

const Header: FC = () => {
 return (
  <header className={classes.header}>
   <Logo />
   <Login />
  </header>)
}

export default Header