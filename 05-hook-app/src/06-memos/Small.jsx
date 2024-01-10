import { memo } from "react"


export const Small = memo(({value}) => {
    console.log("me dibuje!!");

  return (
    <small>{value}</small>
  )

}

)
//El memo es una funcion que le dice a React "memoriza este componente", el metodo memo recibe como argumento al componente. 
//Solo cuando los properties cambian es que se volvera a renderizar la logica del componente. 
//Una forma tradicional de verlo es como React.memo pero para esto debo importar React from react.
//otra forma de utilizar memo es solo englobando entre parentesis el export defoult al final cuando coloco el nombre del componente como "memo(Small)"