import { getHaulers } from "./database.js";

export const HaulerList = () => {
  const haulers = getHaulers();

  let haulerHTML = "<ul>";

  for (const hauler of haulers) {
    haulerHTML += `<li data-type="hauler" data->${hauler.name}</li>`;
  }

  haulerHTML += "</ul>";

  return haulerHTML;
};
