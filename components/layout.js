import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
    <body>
        <Header />
        <section id="main" class="center">
            <main>{children}</main>
        </section>
        <Footer />
    </body>

    {/*
      <Header />
      <main>{children}</main>
      <Footer />
      */}
    </>
  )
}