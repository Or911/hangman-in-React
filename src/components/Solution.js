
export function Solution(props) {
  
  return(
    <div>
      {props.letters.map(l => <span>{l} </span>)}
      </div>
  )
}
