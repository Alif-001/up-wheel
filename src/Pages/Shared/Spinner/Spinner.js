import DotLoader from "react-spinners/DotLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

function Spinner() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="sweet-loading"
    >
      <DotLoader color="#0061ff" width="50%" />
    </div>
  );
}

export default Spinner;
