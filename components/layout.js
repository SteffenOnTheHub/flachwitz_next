import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
    <body>
    <div id="wrapper">
    <Header />
      {/*
      <div id="log
    <section id="main" class="center">
      {% block content %}
      <p>Placeholder text in base template. Replace with page content.</p>
      {% endblock content %}
    </section>
    */}
    <main>{children}</main>
    <Footer />
    </div>
  </body>

    {/*
      <Header />
      <main>{children}</main>
      <Footer />
      */}
    </>
  )
}