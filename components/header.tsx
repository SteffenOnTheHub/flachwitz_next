import Link from 'next/link'

function HeaderComponent() {    
    return (        
        <header id="header">
            <Link href="/">
            <h1> Flachwitze </h1>
            </Link>
            
            {/*
            <div id="logo"><img src="{% static 'logo.png' %}" alt="" /></div>
            <div id="top_menu">Home | Calendar | About | Contact</div>
            <div id="topbanner"><img src="{% static 'top_banner.jpg' %}" alt="" /></div>
            */}
      </header>
     
    )
}
export default HeaderComponent