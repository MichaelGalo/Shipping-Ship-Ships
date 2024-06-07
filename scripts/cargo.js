import { getHaulers, getTransports } from "./database.js";

const allTransports = getTransports();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "hauler") {
    const currentHauler = itemClicked.dataset.id;

    let currentTransportShip = "";

    for (const transport of allTransports) {
      if (parseInt(currentHauler) === transport.id) {
        currentTransportShip = transport.name;
      }
    }

    window.alert(
      `This cargo hauler is being carried by ${currentTransportShip}.`
    );
  }
});

export const HaulerList = () => {
  const haulers = getHaulers();
  const sortedHaulers = haulers.sort((a, b) => a.name.localeCompare(b.name));

  let haulerHTML = "<ul>";

  for (const hauler of sortedHaulers) {
    haulerHTML += `<li data-type="hauler" data-id=${hauler.id} >${hauler.name}</li>`;
  }

  haulerHTML += "</ul>";

  return haulerHTML;
};
