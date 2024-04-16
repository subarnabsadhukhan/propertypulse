import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderWidth: "10px",
};

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader
        color={`#3b82f6`}
        cssOverride={override}
        size={150}
        width={20}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Spinner;
