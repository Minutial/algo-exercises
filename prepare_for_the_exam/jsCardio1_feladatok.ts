/**************************************************************************************** */
// String reversal //

function reverseString(string: string): string {
  return string.split("").reverse().join("");

// ---------------------------------------------------------------------------- //
  
  let revString: string = "";
  for (let i: number = string.length -1 ; i >= 0; i--) {
    revString = revString + string[i]
  };
  return revString;

// ---------------------------------------------------------------------------- //

  string.split("").forEach((element) => revString = element + revString)

// ---------------------------------------------------------------------------- //

  return string.split("").reduce((revString, letter) => letter + revString, "");
};

/**************************************************************************************** */
// Check if string is palindrome //

function isPalindrome(string: string): boolean {
  let reversed: string = string.toLowerCase().split('').reverse().join("");

  if (reversed === string) {
    return true;
  } return false;
};

/**************************************************************************************** */
// Reverse a number //

function reverseInt(int: number) {
  let reversedNum: string = int.toString().split("").reverse().join("");
  return parseInt(reversedNum)
};

/**************************************************************************************** */
// Capitalize first letters in a sentence //

function capitalizeFirst(string: string) {
  
  let stringArray: string[] = string.toLowerCase().split(" ");

  for (let i: number = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].substring(1);
  };

  return stringArray.join(" ");
  
// ---------------------------------------------------------------------------- //

  return string.toLowerCase().split(" ")
    .map((element) => element[0].toUpperCase() + element.substring(1)).join(" ")
};