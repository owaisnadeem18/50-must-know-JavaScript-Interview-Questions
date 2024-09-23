// Question_02
// Write a program in which capitalize the first letter of the string and then concatenate it with the remaining

let str = "my name is owais nadeem";

function ConcatAndCapitalize(string) {
  let capitalizeStr = string.split(" ");

  //   first solution:

  //   capitalizeStr = capitalizeStr.map((item) =>
  //     item.replace(item[0], item[0].toUpperCase())
  //   );

  //   second solution:

  capitalizeStr = capitalizeStr.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );

  return `#${capitalizeStr.join("")}`;
}

console.log(ConcatAndCapitalize(str));
