
import { forwardRef } from "react";
import { IField } from "./fieldInterface";
import classes from './field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
 ({ error, type = 'text', style, ...rest }, ref) => {
  return (
   <div className={classes.input} style={style}>
    <input ref={ref} type={type} {...rest} />
    {error && <div className={classes.error}>{ error.message}</div>}
   </div>
  )
}
)
Field.displayName = 'Field'
export default Field