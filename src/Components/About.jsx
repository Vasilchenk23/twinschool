export const About = () => {
    return(
        <>
        <div id="about" className="block-about">
            <h2 className="h2-about">What is Twinschools</h2>
            <p className="page-about">
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
                    <span className="orange">s</span> is a project connecting students from different countries for an 8-week program. 
                    It aims to foster cultural exchange, 
                    friendships, and collaboration through virtual meetings and activities. 
                    Participants learn about each other's cultures, develop teamwork skills, 
                    and build lifelong connections.
            </p>
            <div className="presentation">
                <embed className="presentation-file" src="./Twinschools-worldwide-schools.pdf" type="application/pdf"  width="1100px" height="auto" toolbar="0" />
            </div>
        </div>
        </>
    );
}