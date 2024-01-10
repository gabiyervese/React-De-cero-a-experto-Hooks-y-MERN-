import { useState } from "react"
import { useCounter } from "../Hooks"
import { Small } from "./Small"


export const Memorize = () => {
  const {counter, increment} = useCounter(1)
  const [show, setShow] = useState(true)
return(
    <>
    <h1>Counter: <Small value={counter}/></h1>
    <hr/>

<button onClick={()=> increment(1)} className="btn ">+1</button>
<button
className="btn btn-outline-primary"
onClick={()=>{setShow(!show)}}
>show/hide {JSON.stringify(show)}</button>

    </>
)

}

