// Question_03

// There is a name with _ underscores inside it , you are required to remove it and then convert the first letter as capital and then push in array 1

let arr = [];

let name = "my_name_is_owais_nadeem";

function removeUnderscore(naam, array) {
  let splittedName = naam.split("_");

  let capitalize = splittedName.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );

  capitalize = capitalize.join(" ");
  array.push(capitalize);

  return array;
}

console.log(removeUnderscore(name, arr));
