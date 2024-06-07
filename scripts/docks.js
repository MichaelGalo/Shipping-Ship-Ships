import { getDocks, getTransports } from "./database.js";

const Transports = getTransports();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  let currentlyUnloading = "";

  if (itemClicked.dataset.type === "dock") {
    for (const transport of Transports) {
      if (parseInt(itemClicked.dataset.id) === transport.targetDock) {
        currentlyUnloading = transport.name;
      }
    }

    window.alert(
      `The ${itemClicked.dataset.location} dock is currently unloading ${currentlyUnloading}`
    );
  }
});

export const DockList = () => {
  const docks = getDocks();

  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-id=${dock.id} data-location=${dock.location}>${dock.location}</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
