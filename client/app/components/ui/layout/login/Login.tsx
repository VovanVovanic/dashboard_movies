import { useAuth } from "@/hooks/useAuth"
import { useOutside } from "@/hooks/useOutside"
import { IAuthField } from "@/shared/interfaces/authInterface"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FaRegUserCircle } from 'react-icons/fa'
import Button from "../button/Button"
import Field from "../field/Field"
import UserAvatar from "../userAvatar/UserAvatar"
import { emailValidation } from "./formConstants"
import classes from './Login.module.scss'

const Login: FC = () => {
 const { ref, setIsShow, isShow } = useOutside(false)
 const [type, setType] = useState<'login' | 'register'>('login')

 const {
  register,
  formState: { errors },
  handleSubmit
 } = useForm<IAuthField>({ mode: "onChange" })

 const { user, setUser } = useAuth()
 const onSubmit: SubmitHandler<IAuthField> = (data) => {
  if (type === 'login') {
   setUser({
    id: 1,
    email: 'test@test.com',
    avatarPath: '/ava_cat.avif',
    name: 'Vlad'
   })
  }
 }
 return (<div
  className={classes.wrapper} ref={ref}>
  {
   user ? (
    <UserAvatar avatarPath={user.avatarPath || ""} />
   ) : (
    <button
     onClick={() => setIsShow(!isShow)}
     className={classes.button}
    >
     <FaRegUserCircle />
    </button>
   )
  }

  {isShow && (
   <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
    <Field
     {...register('email', {
      required: 'Email is required',
      pattern: {
       value: emailValidation,
       message: "Please enter a valid email"
      }
     })}
     placeholder="Email"
     error={errors.email}
    />
    <Field
     {...register('password', {
      required: 'Password is required',
      minLength: {
       value: 6,
       message: "Length must be more than 6 symbols"
      }
     })}
     placeholder="Password"
     error={errors.password}
    />
    <div className={classes.btn}>
     <Button onClick={() => setType('login')}>Login</Button>
    </div>
    <button className={classes.register} onClick={()=>setType('login')}>
     Register
     </button>
   </form>
  )}
 </div>)
}

export default Login