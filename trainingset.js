const trainingSet = [
  {
         input: "I can't use panel",
         output: "panel"
  },
  {
         input: "AHQ Store failed to run",
         output: "astore"
  }
];

function computeLetter(str) {
  return String(str.replaceAll("#", 0).replaceAll("$", 1))
    .split("")
    .map((value) => Number(value));
}

export default trainingSet;
