const ButtonComponent = function (props) {
  return (
    <>
      <button onClick={props.onClick}>{props.content}</button>
    </>
  );
};

export default ButtonComponent;
