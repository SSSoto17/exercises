const aName = "sabrina";

console.log(aName);

const threeCap = aName
  .substring(0, 2)
  .toLowerCase()
  .concat(aName[2].toUpperCase(), aName.substring(3).toLowerCase());

console.log(threeCap);
