const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const filters = {
  all: vehicles,
  isElectric: vehicles.filter((vehicle) => vehicle.isElectric),
  seatsAboveTwo: vehicles.filter((vehicle) => vehicle.passengers > 2),
  ownedByJonas: vehicles.filter(
    (vehicle) => vehicle.isElectric && vehicle.ownedBy == "Jonas"
  ),
  fueledByRye: vehicles.filter(
    (vehicle) => vehicle.fuel == "Rugbrød" && vehicle.passengers > 1
  ),
};

document.querySelector("nav").addEventListener("click", (e) => {
  const filterName = e.target.dataset.filter;
  tbodyPointer.innerHTML = "";
  showTheseVehicles(filters[filterName]);
});

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${ifUndefined(each.type)}</td>
  <td>${ifUndefined(each.fuel)}</td>
  <td>${ifUndefined(each.passengers)}</td>
  <td>${ifUndefined(each.stops)}</td>
  <td>${ifUndefined(each.ownedBy)}</td>
  <td>${ifUndefined(each.isElectric)}</td>
  <td>${ifUndefined(each.isTandem)}</td>
</tr>`;
  });
}

function ifUndefined(item) {
  if (item) {
    return item;
  } else {
    return "";
  }
}
