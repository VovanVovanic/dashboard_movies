import { Dispatch, LegacyRef,  SetStateAction, useEffect, useRef, useState } from "react"

type TypeOut = {
 ref: any
 isShow: boolean
 setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initIsVisible: boolean): TypeOut => {
 const [isShow, setIsShow] = useState(initIsVisible)
 const ref = useRef<HTMLElement>(null)

 const onClickOutside = (e: any) => {
  if (ref.current && !ref.current.contains(e.target)) {
   setIsShow(false)
  }
 }

 useEffect(() => {
  document.addEventListener('click', onClickOutside, true)
  return () => {
   document.removeEventListener('click', onClickOutside, true)
  }
 })
 return {ref, isShow, setIsShow}
}