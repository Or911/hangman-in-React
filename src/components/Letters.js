export function Letters (){
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
    let lettersToHtml = []
    letters.map(l => lettersToHtml.push(<span>{l}</span>) )
    return (<div><p>Available Letters</p>{lettersToHtml}</div>)
}