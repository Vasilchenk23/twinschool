import React, { useState, useEffect } from "react";

export const History = () => {
  const Counter = ({ endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < endValue) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 10);

      return () => clearInterval(interval);
    }, [endValue]);

    return <h3 style={{ fontSize:"21.5px", fontFamily:"Montserrat-Bold"}}>{count}+</h3>;
  };

  return (
    <>
      <div id="history" className="block-history">
        <h2 className="h2-history">History</h2>
        <p className="page">
          It began with the cultures of Ukraine and Lithuania coming together.
          Currently, in the online program:
        </p>
        <div className="blocks">
        <div className="image-container">
          <img src="./img/photo-decor.png" alt=""/>
          <div className="block1">
            <Counter endValue={650} />
            <p className="page-info">schools have joined the program</p>
          </div>
        </div>
        <div className="image-container">
          <img src="./img/photo-decor.png" alt="" />
          <div className="block2">
              <Counter endValue={2000} />
              <p className="page-info">students have taken part</p>
          </div>
        </div>
          <div className="image-container">
            <img src="./img/photo-decor.png" alt="" />
            <div className="block3">
              <Counter endValue={100} />
              <p className="page-info">schools have finished the program</p>
            </div>
          </div>
        </div>
        <img className="team" src="./img/image-4.png" alt="team" />
        <p className="page-history">
          And we continue to establish relations with other countries!
        </p>
        <p className="page-facebook">
          See more{" "}
          <a className="link-facebook" href="https://www.facebook.com/twinschools/">
            Facebook
          </a>
        </p>
      </div>
    </>
  );
};
