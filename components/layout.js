import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
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