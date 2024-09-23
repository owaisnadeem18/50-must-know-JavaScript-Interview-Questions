// Write a JavaScript program in which find the largest string from a sentence

let sentence = "My Name is Owais Nadeem";

function FindLargestWord(sent) {
  let splitted_str = sent.split(" ");
  let largest_str = "";
  for (let i = 0; i < splitted_str.length; i++) {
    if (splitted_str[i].length > largest_str.length) {
      largest_str = splitted_str[i];
    }
  }

  return largest_str;
}

console.log(FindLargestWord(sentence));
