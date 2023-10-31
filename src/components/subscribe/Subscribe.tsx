import "./subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribeContent">
        <div className="subscribeHead">Subscribe to our Newsletter</div>
        <div className="subscription">
          <input
            className="subscribeInput"
            placeholder="Your Email Address"
          ></input>
          <button className="subscribeButton">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
