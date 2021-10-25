const KaprekarsConstant = (number) => {
  let error;
  number = document.getElementById("inputResult").value;
  const originalNumber = number;
  let output;
  let count = 0;

  const validInput = /^[0-9]{4}$/;
  const validate = validInput.test(number);

  if (!validate) {
    error = "<b style='color:green;border:1px dotted green'>Please enter a valid 4-digit number to proceed</b>";
    document.getElementById("output").innerHTML = "";
    return (document.getElementById("error").innerHTML = error);
  } //End of 4-digit validation

  if (!numUnique(number)) {
    error =
      "<b style='color:red; border:1px dotted red'>The number you entered does not meet the Kapreka's Constant uniqueness requirement</b>";
    document.getElementById("output").innerHTML = "";
    return (document.getElementById("error").innerHTML = error);
  } //End of Uniqueness validation

  while (output !== 6174) {
    number = number.toString();
    number = number.split(""); //if there's no error the error div should not display anything

    if (!error) {
      document.getElementById("error").innerHTML = "";
    }

    let ascInt = "";
    let descInt = ""; //Sort the array into descending order

    const descArray = number.sort(function (a, b) {
      return b - a;
    }); //Sort the array into ascending order
    //Slice creates a copy of the array so as to not alter the descending one

    const ascArray = number.slice().sort(function (a, b) {
      return a - b;
    }); //Use join to turn the arrays into strings
    //Use parse int to turn those strings to integers

    descInt = parseInt(descArray.join(""));
    ascInt = parseInt(ascArray.join("")); //performing mathematical caluculation on the string using the parseInt()method

    output = parseInt(descInt - ascInt);
    count += 1;

    if (output === 6174) {
      return (document.getElementById("output").innerHTML =
        "Result: " +
        originalNumber +
        " becomes a kaprekar's constant in " +
        count +
        " steps");
    }

    number = output;
  } //end while
} //end function Kaprekar's Constant

const evaluate = document.querySelector(".check");
evaluate.addEventListener("click", KaprekarsConstant);

const numUnique = (number) => {
  number = number.toString();
  number = number.split("");

  for (let i = 0; i < number.length; i++) {
    let nonIdentical = 0;

    for (let j = 0; j < number.length; j++) {
      if (number[i] === number[j]) {
        nonIdentical += 1;
      }
    } //end inner loop

    if (nonIdentical > 2) {
      return false;
    }
  } //end outer loop

  return true;
}
