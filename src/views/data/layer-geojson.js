export var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Restricted Area",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [1475, 1099],
            [1727, 1099],
            [1727, 770],
            [1475, 769],
          ],
          [
            [492, 280],
            [932, 280],
            [932, 77],
            [492, 77],
          ],
          [
            [1086, 280],
            [1441, 280],
            [1441, 77],
            [1086, 77],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Running Area",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [490, 1098],
            [1469, 1098],
            [1469, 765],
            [1726, 765],
            [1726, 357],
            [1443, 357],
            [1443, 285],
            [490, 285],
          ],
        ],
      },
    },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "In Guezzam",
    //     name_ar: "عين قزام",
    //     name_ber: "ⵉⵏ ⴳⴻⵣⴰⵎ ",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Tamanrasset",
    //     name_ar: "تمنراست",
    //     name_ber: "ⵜⴰⵎⴰⵏⵖⴰⵙⵜ",
    //     density: 0.32,
    //     city_code: "11",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Djanet",
    //     name_ar: "جانت",
    //     name_ber: " ⵊⴰⵏⴻⵜ ",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Illizi",
    //     name_ar: "إليزي",
    //     name_ber: "ⵉⵍⵍⵉⵣⵉ",
    //     density: 0.18,
    //     city_code: 33,
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Ouargla",
    //     name_ar: "ورقلة",
    //     name_ber: "ⵡⴰⵔⴳⵍⴰ",
    //     density: 2.6,
    //     city_code: 30,
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "In Salah",
    //     name_ar: "عين صالح",
    //     name_ber: "ⵄⵉⵏ ⵙⴰⵍⴻⵃ",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Béni Abbès",
    //     name_ber: "ⴱⴰⵏⵉ ⴰⴱⴱⴰⵙ ",
    //     name_ar: "بني عباس",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Tindouf",
    //     name_ar: "تندوف",
    //     density: 0.31,
    //     name_ber: "ⵜⵉⵏⴷⵓⴼ",
    //     city_code: 37,
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Béchar",
    //     name_ar: "بشار",
    //     density: 1.7,
    //     name_ber: "ⴱⴻⵛⵛⴰⵔ",
    //     city_code: "08",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Naâma",
    //     name_ar: "النعامة",
    //     name_ber: "ⵏⵄⴰⵎⴰ",
    //     density: 6.5,
    //     city_code: "45",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Sidi Bel Abbès",
    //     name_ar: "سيدي بلعباس",
    //     name_ber: "ⵙⵉⴷⵉ ⴱⴻⵍ ⵄⴻⴱⴱⴰⵙ",
    //     density: 66,
    //     city_code: "22",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
    // {
    //   type: "Feature",
    //   properties: {
    //     name: "Tlemcen",
    //     name_ar: "تلمسان",
    //     name_ber: "ⵜⵍⴻⵎⵙⴻⵏ",
    //     density: 105,
    //     city_code: "13",
    //   },
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [

    //       ],
    //     ],
    //   },
    // },
  ],
};
