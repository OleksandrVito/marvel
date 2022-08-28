import img from "./error.gif";

const ErrorMessage = () => {
  //   return <img src={process.env.PUBLIC_URL + "/error.gif"} />;
  return (
    <img
      alt="error"
      src={img}
      style={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contains",
        margin: "0 auto",
      }}
    />
  );
};

export default ErrorMessage;
