import { getTransports } from "./database.js";

export const HaulerList = () => {
  const transports = getTransports();

  let transportHTML = "<ul>";

  for (const transport of transports) {
    transportHTML += `<li>${transport.name}</li>`;
  }

  transportHTML += "</ul>";

  return transportHTML;
};
