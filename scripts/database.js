export const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    {
      id: 1,
      name: "The Knotty Buoy",
      transportShip: transportShip.id,
      weight: 10000,
    },
    {
      id: 2,
      name: "The Ship Faced",
      transportShip: transportShip.id,
      weight: 50000,
    },
    {
      id: 3,
      name: "The Berth Control",
      transportShip: transportShip.id,
      weight: 80000,
    },
    {
      id: 4,
      name: "The Haulin' Oats",
      transportShip: transportShip.id,
      weight: 150000,
    },
    {
      id: 5,
      name: "The Reefer Madness",
      transportShip: transportShip.id,
      weight: 300000,
    },
  ],
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulers = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};
