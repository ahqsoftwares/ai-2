import brain from "brain.js";
import fs from "fs";
import trainingSet from "./trainingset.js";
import preTrainedModel from "./network.js";

const network = new brain.recurrent.LSTM();

network.train([...trainingSet], {
  log: console.log,
  iterations: 300
});

fs.writeFileSync("./network.js", `const data = ${JSON.stringify(network.toJSON())}; export default data;`);

const ans = network.run(
         "AHQ STore is working"
);

console.log(ans);
