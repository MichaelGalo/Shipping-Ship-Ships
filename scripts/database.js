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
      transportShip: 1,
      weight: 10000,
    },
    {
      id: 2,
      name: "The Ship Faced",
      transportShip: 1,
      weight: 50000,
    },
    {
      id: 3,
      name: "The Berth Control",
      transportShip: 2,
      weight: 80000,
    },
    {
      id: 4,
      name: "The Haulin' Oats",
      transportShip: 3,
      weight: 150000,
    },
    {
      id: 5,
      name: "The Reefer Madness",
      transportShip: 5,
      weight: 300000,
    },
  ],
  transports: [
    {
      id: 1,
      name: "The Pier Pressure",
      currentCargoCount: 4,
      targetDock: 1,
    },
    {
      id: 2,
      name: "The Ship Happens",
      currentCargoCount: 6,
      targetDock: 2,
    },
    {
      id: 3,
      name: "The Bulk Hogan",
      currentCargoCount: 8,
      targetDock: 3,
    },
    {
      id: 4,
      name: "The Deck-orator",
      currentCargoCount: 1,
      targetDock: 4,
    },
    {
      id: 5,
      name: "The Sea-Section",
      currentCargoCount: 2,
      targetDock: 5,
    },
  ],
  // contracts: [
  //   {
  //     dockId: 3,
  //     haulerId: 2
  //   },
  //   {
  //     dockId: 1,
  //     haulerId: 2
  //   },
  //   {
  //     dockId: 1,
  //     haulerId: 2
  //   },
  // ]
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulers = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};

export const getTransports = () => {
  return database.transports.map((transport) => ({ ...transport }));
};
