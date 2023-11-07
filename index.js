const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={`button ${className}`}> {text} </button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading"> Social Buttons </h1>
    <div className="buttonsContainer">
      <Button className="likeButton" text="Like" />
      <Button className="commentButton" text="Comment" />
      <Button className="shareButton" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
