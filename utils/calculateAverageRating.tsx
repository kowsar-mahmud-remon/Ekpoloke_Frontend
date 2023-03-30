const calculateAverageRating = (ratingArray: any) => {
<<<<<<< HEAD
  console.log(ratingArray, "ratingssssssss");
  
  if (ratingArray) {
    let sum:number = 0;
=======
  if (ratingArray?.length > 0) {
    let sum = 0;
>>>>>>> 0914c4efd390de91edd3f4252e4d27acb906f51d
    for (const arr of ratingArray) {
      sum += arr?.rate;
    }


    const averageRate = sum / ratingArray.length || 0;
    return averageRate;
  }
};
export default calculateAverageRating;
