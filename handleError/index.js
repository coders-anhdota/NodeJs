function add(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    throw new Error("Wrong type");
  }
  return a + b;
}

try {
  var result = add("1", 2);
} catch (error) {
  console.error("---> ", error);
}

console.log("Do st ....");

function reject() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Promis error"));
  });
}

reject().catch(function (error) {
  console.log("Has error", error);
});
