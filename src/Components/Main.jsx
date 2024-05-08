export const Main = () => {
    return(
        <>
        <div className="content">
            <nav className="sidebar">
                <img src="./img/decor-small-balls.png" alt="small-ball" />
            </nav>
            <div className="main">
                <h1 className="title">Welcome to the <br />
                    <span class="orange">T</span>
                    <span class="orange">w</span>
                    <span class="green">i</span>
                    <span class="green">n</span>
                    <span class="red">s</span>
                    <span class="red">c</span>
                    <span class="blue">h</span>
                    <span class="blue">o</span>
                    <span class="blue">o</span>
                    <span class="orange">l</span>
                    <span class="orange">s</span>
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