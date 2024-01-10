import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onCLick = () => {
    console.log(inputRef.current);
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre..."
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={onCLick}>
        Set focus
      </button>
    </>
  );
};

export default FocusScreen;
