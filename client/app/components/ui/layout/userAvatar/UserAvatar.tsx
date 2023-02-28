import Link from "next/link"
import { FC } from "react"
import Image from 'next/Image'


const UserAvatar: FC<{avatarPath:string}> = ({avatarPath}) => {
 return <Link href='./dashboard'>
  <a>
   <Image src={avatarPath} width={60} height={60} alt=""/>
  </a>
 </Link>
}

export default UserAvatar