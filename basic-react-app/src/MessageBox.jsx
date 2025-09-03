export default function MessageBox({name,textColor}){
    let style = {color:textColor}
  return (
    <>
      <h1 style={style}>Hello {name}</h1>
    </>
  )
}