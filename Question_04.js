let string = "Apple";

function FindOcc(str) {
  let occurrences = {}; // Object to store character frequencies

  for (let char of str) {
    // Convert character to lowercase to count 'A' and 'a' as the same (if case-insensitive count is needed)
    char = char.toLowerCase();

    if (occurrences[char]) {
      occurrences[char] += 1; // If character exists, increment its count
    } else {
      occurrences[char] = 1; // Otherwise, set its count to 1
    }
  }

  return occurrences;
}

console.log(FindOcc(string));
