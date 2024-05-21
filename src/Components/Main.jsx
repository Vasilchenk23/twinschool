export const Main = () => {
    return(
        <>
        <div className="content">
            <nav className="sidebar">
                <img src="./img/decor-small-balls.png" alt="small-ball" />
            </nav>
            <div className="main">
                <h1 className="title">Welcome to the <br />
                    <span className="orange">T</span>
                    <span className="orange">w</span>
                    <span className="green">i</span>
                    <span className="green">n</span>
                    <span className="red">s</span>
                    <span className="red">c</span>
                    <span className="blue">h</span>
                    <span className="blue">o</span>
                    <span className="blue">o</span>
                    <span className="orange">l</span>
                    <span className="orange">s</span>
                </h1>
                <p className="page-title">TOGETHER WITH SCHOOLS ALL OVER THE WORLD</p>
                <button className="join-us-main">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYRrNPjiZf-8XTzoSqu4p9fMHbggRoQuw4bie0eVwvsRPO4w/viewform" target="_blank" rel="noopener noreferrer">Join-us</a>
                </button>
            </div>
            <nav className="sidebar2">
            <img src="./img/decor-small-balls2.png" alt="small-ball" />
            </nav>
        </div>
        </>
    );
}