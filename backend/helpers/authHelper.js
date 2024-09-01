

// COMPARE ENTERED PHONE NUMBER WITH THE PHONE NUMBER IN THE DATABASE
export const comparePhone = async (enteredPhone, userPhone) => {
    console.log(enteredPhone,userPhone)
  return enteredPhone === userPhone;
};
