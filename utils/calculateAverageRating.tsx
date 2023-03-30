const calculateAverageRating = (ratingArray: any) => {
  console.log(ratingArray, "ratingssssssss");
  
  if (ratingArray) {
    let sum:number = 0;
    for (const arr of ratingArray) {
      sum += arr?.rate;
    }


    const averageRate = sum / ratingArray.length || 0;
    return averageRate;
  }
};
export default calculateAverageRating;
