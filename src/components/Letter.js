export default function Letter(props) {
  function getletter() {
    props.clickLetter(props.letter);
  }

  return (
    <span className={props.status ? "lettrHide" : "none"} onClick={getletter}>
      {props.letter}
    </span>
  );
}
