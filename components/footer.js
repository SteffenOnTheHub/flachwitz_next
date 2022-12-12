function FooterComponent() {    
	return (        
        <footer id="footer">
        <div id="quelle">
            Quelle:
            <a href="https://github.com/derphilipp/Flachwitze"> 
            {/* <ion-icon name="logo-github"></ion-icon> */}
            github.com/derphilipp/Flachwitze
            </a> 
            
        </div>
        <div id="copyright">
            Copyright &copy;
            {new Date().getFullYear()} Flachwitze
        </div>
        </footer>   
	)
}
export default FooterComponent