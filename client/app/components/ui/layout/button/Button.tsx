import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import classes from './Button.module.scss'
import { IButton } from "./buttonInterface";

const Button: FC<PropsWithChildren<IButton>> = ({
 children,
 className,
 ...rest
}) => {
 return (
  <button className={classNames(classes.button, className)} {...rest}>
   {children}
  </button>
 )
}
export default Button