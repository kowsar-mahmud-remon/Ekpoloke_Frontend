import { IoIosStar } from "react-icons/io";
import getRatingColor from "../../../utils/getRatingColor";

const Rating = ({ value }) => {
  return (
    <span
      style={{
        display: "inline-flex",
        background: getRatingColor(value),
        color: "#fff",
        fontWeight: "400",
        fontSize: "10px",
        borderRadius: "3px",
        padding: "2px 5px",
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span className="mr-1">{value?.toFixed(1)}</span> <IoIosStar />
    </span>
  );
};

export default Rating;
