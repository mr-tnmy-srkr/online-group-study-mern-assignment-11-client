const ParseDate = (input) => {
  //  console.log(input);
  const date = new Date(input);

  // Get the date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1 to get the correct month
  const day = date.getDate();

  // Create a formatted date string
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return formattedDate;
  // console.log(formattedDate); //
};

export default ParseDate;
