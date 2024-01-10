import ReactDOM from "react-dom/client";
import "./index.css";
// import HooksApp from "./HooksApp";
//import CounterWithCustomeHook from "./01-useState/CounterWithCustomeHook";
//import SimpleForm from "./02-useEffect/SimpleForm";
//import FormWithCustomeHook from "./02-useEffect/FormWithCustomeHook";
//import CounterApp from "./01-useState/CounterApp";
//import MultipleCustomeHooks from "./03-examples/MultipleCustomeHooks";
//import FocusScreen from "./04-useRef/FocusScreen";
//import Layout from "./05-useLayoutEffect/Layout";
//import { Memorize } from "./06-memos/Memorize";
//import { MemoHook } from "./06-memos/MemoHook";
//import { CallBackHook } from "./06-memos/CallBackHook";
//import { Padre } from "./07-tarea-memo/Padre";
//import "./08-useReducer/intro-reducer";
//import TodoApp from "./08-useReducer/TodoApp";
import MainApp from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomeHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomeHook /> */}

    {/* <MultipleCustomeHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallBackHook/> */}
    {/* <Padre /> */}
    {/* <TodoApp /> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
