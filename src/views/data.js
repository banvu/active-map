const energySources = [{ value: "hydro", name: "Hydro-electric" }];

const countriesInfo = [
  {
    country: "1",
    hydro: 10,
  },
  {
    country: "2",
    hydro: 7,
  },
  {
    country: "3",
    hydro: 0,
  },
  {
    country: "4",
    hydro: 8,
  },
  {
    country: "5",
    hydro: 5,
  },
  {
    country: "6",
    hydro: 5,
  },
  {
    country: "7",
    hydro: 3,
  },
  {
    country: "8",
    hydro: 6,
  },
  {
    country: "9",
    hydro: 8,
  },
  {
    country: "10",
    hydro: 5,
  },
];

export default {
  getEnergySources() {
    return energySources;
  },
  getCountriesInfo() {
    return countriesInfo;
  },
};
