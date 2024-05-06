export const Header = () => {
    return(
        <>
        <header>
            <div className="logo-block">
                <img src="./img/logo.jpg" alt="" />
            </div>
            <div className="header-items">
                <p>About</p>
                <p>History</p>
                <p>Program</p>
                <p>FAQs</p>
                <p>Our Team</p>
                <p>Partners</p>
                <p>Contact</p>
            </div>
            <button className="join-us">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYRrNPjiZf-8XTzoSqu4p9fMHbggRoQuw4bie0eVwvsRPO4w/viewform" target="_blank" rel="noopener noreferrer">Join-us</a>
            </button>
        </header>
        </>
    );
}
