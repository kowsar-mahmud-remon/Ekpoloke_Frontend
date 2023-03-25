const getRatingColor = (rating:any) => {
  let color = "#388e3c";
  if (rating >= 4) {
    color = "#388e3c";
  } else if (rating >= 2 && rating < 4) {
    color = "#ff9f00";
  } else if (rating < 2) {
    color = "#ff6161";
  }
  return color;
};

export default getRatingColor;
