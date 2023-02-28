
import { IMeta } from "@/utils/metaComponent/meta";
import MetaComponent from "@/utils/metaComponent/MetaComponent";
import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import classes from './Layout.module.scss'


const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
 return <>
  <MetaComponent {...meta} />
  <div>
   <Header /> 
   <main className={classes.main}>
    {children}
   </main>
   </div>
  
 </>
}

export default Layout