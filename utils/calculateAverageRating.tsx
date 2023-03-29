const calculateAverageRating = (ratingArray: any) => {
  if (ratingArray?.length > 0) {
    let sum = 0;
    for (const arr of ratingArray) {
      sum += arr.rate;
    }
    const averageRate = sum / ratingArray.length || 0;
    return averageRate;
  }
};
export default calculateAverageRating;
