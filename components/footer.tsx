import Link from 'next/link'

function FooterComponent() {    
	return (        
        <footer id="footer">

        <Link href="/about">About</Link>

        {/*
        <div id="quelle">
            Quelle:
            <a href="https://github.com/derphilipp/Flachwitze"> 
           
            github.com/derphilipp/Flachwitze
            </a> 
            
        </div>
        */} 
        {/*
        <div id="copyright">
            Copyright &copy;
            {new Date().getFullYear()} Flachwitze
        </div>
        */}
        
        </footer>
           
	)
}
export default FooterComponent