
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="https://imgs.search.brave.com/94tz_tBRybAoae6CfyBAUCJYOXOiXaYpyelmhFXyh8U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9idXJnZXItY29u/Y2VwdF80NDU5ODMt/NTMwLmpwZz9zZW10/PWFpc19oeWJyaWQ"
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;