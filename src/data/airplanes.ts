type Airplane = {
  id: number; // 1, 2, 3, etc.
  manufacturer: string; // Airbus, Boeing, etc.
  family: string; // 737, A320, etc.
  year: number; // 1967, 1988, etc.
};

// Airbus A320 1988
export const dataAirplanes: Airplane[] = [
  {
    id: 1,
    manufacturer: "Airbus",
    family: "A320",
    year: 1988,
  },
  {
    id: 2,
    manufacturer: "Boeing",
    family: "737",
    year: 1967,
  },
];
