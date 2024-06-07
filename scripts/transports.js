import { getHaulers, getTransports } from "./database.js";

const allHaulers = getHaulers();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "transport") {
    const currentTransport = itemClicked.dataset.id;

    let shipCounter = 0;

    for (const hauler of allHaulers) {
      if (parseInt(currentTransport) === hauler.transportShip) {
        shipCounter++;
      }
    }

    window.alert(`This transport ship is carrying ${shipCounter} cargo ships.`);
  }
});

export const TransportsList = () => {
  const transports = getTransports();
  const sortedTransports = transports.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  let transportHTML = "<ul>";

  for (const transport of sortedTransports) {
    transportHTML += `<li data-type="transport" data-id=${transport.id} data-cargoCount=${transport.currentCargoCount}>${transport.name}</li>`;
  }

  transportHTML += "</ul>";

  return transportHTML;
};
