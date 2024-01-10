

export const ShowIncrement = ({increment}) => {

    console.log("me volvi a dibujar :c");
  return (
    <button className="btn btn-primary"
    onClick={()=> increment()}
    >Increment</button>
  )
}
