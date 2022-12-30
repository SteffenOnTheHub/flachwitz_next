import Header from './header'
import Footer from './footer'
import React, { ReactNode } from "react";

//interface Props {
//  children?: ReactNode
  // any props that come into the component
//}



export default function Layout ({ children }: {
  children: ReactNode
}) {
  return (
    <>
    
      <Header />
      <div id="test" className="center">
        <main>{children}</main>
      </div>
      <Footer />
 
      {/*
      <Header /> 
      <main>{children}</main>
      <Footer />
       */}

    </>
  )
}