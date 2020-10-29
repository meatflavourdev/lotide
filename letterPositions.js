const letterPositions = function(sentence) {
  const results = {};
  for (const [key, value] of Object.entries(sentence)) {
    const valueString = String(value);
    if (!results[valueString]) results[valueString] = [];
    results[valueString].push(key);
  }
  return results;
};

const countLetter = (inputString) => {
  let results = {};
  for (const [, value] of Object.entries(inputString)) {
    const valueString = String(value);
    results[valueString] = !results[valueString] ? 1 : results[valueString] + 1;
  }
  return results;
};

console.log(letterPositions("ABCABC123"));