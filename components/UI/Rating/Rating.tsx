import getRatingColor from "@/utils/getRatingColor";
import { IoIosStar } from "react-icons/io";

const Rating = (value: any) => {
  console.log("value", value.value);
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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span className="mr-1">{value?.value?.toFixed(1)}</span> <IoIosStar />
    </span>
  );
};

export default Rating;
