export function Solution() {
  let arry = [5, 6, 3, 8];
  let hideWord = arry.map((w) => {
    return <span> _</span>;
  });
  return <div>{hideWord}</div>;
}
