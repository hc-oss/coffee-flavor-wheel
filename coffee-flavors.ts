export interface ICoffeeFlavor {
  name: String;
  color: String;
  children?: ICoffeeFlavor[];
}

export const CoffeeFlavors: ICoffeeFlavor[] = [
  {
    name: "roasted",
    color: "#d33727",
    children: [
      {
        name: "pipe tobacco",
        color: "#a49663"
      },
      {
        name: "tobacco",
        color: "#cfb480"
      },
      {
        name: "burnt",
        color: "#b6804d",
        children: [
          {
            name: "acrid",
            color: "#b0a068"
          },
          {
            name: "ashy",
            color: "#94a993"
          },
          {
            name: "smoky",
            color: "#a97f34"
          },
          {
            name: "brown, roast",
            color: "#835621"
          }
        ]
      },
      {
        name: "cereal",
        color: "#e4bd2d",
        children: [
          {
            name: "grain",
            color: "#d0a588"
          },
          {
            name: "malt",
            color: "#ec9b65"
          }
        ]
      }
    ]
  },
  {
    name: "spices",
    color: "#b90d41",
    children: [
      {
        name: "pungent",
        color: "#734864"
      },
      {
        name: "pepper",
        color: "#bc4747"
      },
      {
        name: "brown spice",
        color: "#be404c",
        children: [
          {
            name: "anise",
            color: "#c99f19"
          },
          {
            name: "nutmeg",
            color: "#a61619"
          },
          {
            name: "cinnamon",
            color: "#e6922f"
          },
          {
            name: "clove",
            color: "#b5796e"
          }
        ]
      }
    ]
  },
  {
    name: "nutty/cocoa",
    color: "#9a7b79",
    children: [
      {
        name: "nutty",
        color: "#b59287",
        children: [
          {
            name: "peanuts",
            color: "#e4b509"
          },
          {
            name: "hazelnut",
            color: "#935f21"
          },
          {
            name: "almond",
            color: "#d9a99c"
          }
        ]
      },
      {
        name: "cocoa",
        color: "#b37122",
        children: [
          {
            name: "chocolate",
            color: "#6b271f"
          },
          {
            name: "dark chocolate",
            color: "#4a271d"
          }
        ]
      }
    ]
  },
  {
    name: "sweet",
    color: "#f36421",
    children: [
      {
        name: "brown sugar",
        color: "#ce7c92",
        children: [
          {
            name: "molasses",
            color: "#230007"
          },
          {
            name: "maple syrup",
            color: "#d85e25"
          },
          {
            name: "caramelized",
            color: "#e2a227"
          },
          {
            name: "honey",
            color: "#f47e2a"
          }
        ]
      },
      {
        name: "vanilla",
        color: "#f6997d"
      },
      {
        name: "vanillin",
        color: "#f38088"
      },
      {
        name: "overall sweet",
        color: "#de707a"
      },
      {
        name: "sweet aromatics",
        color: "#ce3e6c"
      }
    ]
  },
  {
    name: "floral",
    color: "#ec008c",
    children: [
      {
        name: "black tea",
        color: "#ae667d"
      },
      {
        name: "floral",
        color: "#f05794",
        children: [
          {
            name: "chamomile",
            color: "#fbaf25"
          },
          {
            name: "rose",
            color: "#e472a7"
          },
          {
            name: "jasmine",
            color: "#f8f7e5"
          }
        ]
      }
    ]
  },
  {
    name: "fruity",
    color: "#ee1d23",
    children: [
      {
        name: "berry",
        color: "#ed2c4b",
        children: [
          {
            name: "blackberry",
            color: "#090819"
          },
          {
            name: "raspberry",
            color: "#e32487"
          },
          {
            name: "blueberry",
            color: "#666aac"
          },
          {
            name: "strawberry",
            color: "#ee293b"
          }
        ]
      },
      {
        name: "dried fruit",
        color: "#d7444f",
        children: [
          {
            name: "raisin",
            color: "#9e1e79"
          },
          {
            name: "prune",
            color: "#85558f"
          }
        ]
      },
      {
        name: "other fruit",
        color: "#f26648",
        children: [
          {
            name: "coconut",
            color: "#e48e2a"
          },
          {
            name: "cherry",
            color: "#e71158"
          },
          {
            name: "pomegranate",
            color: "#ef4b60"
          },
          {
            name: "pineapple",
            color: "#f89d1c"
          },
          {
            name: "grape",
            color: "#9ec536"
          },
          {
            name: "apple",
            color: "#69c071"
          },
          {
            name: "peach",
            color: "#f37f51"
          },
          {
            name: "pear",
            color: "#b2aa1e"
          }
        ]
      },
      {
        name: "citrus fruit",
        color: "#fcb914",
        children: [
          {
            name: "grapefruit",
            color: "#f05a5e"
          },
          {
            name: "orange",
            color: "#f47921"
          },
          {
            name: "lemon",
            color: "#f5da02"
          },
          {
            name: "lime",
            color: "#91c355"
          }
        ]
      }
    ]
  },
  {
    name: "sour/fermented",
    color: "#f5ce02",
    children: [
      {
        name: "sour",
        color: "#e2d925",
        children: [
          {
            name: "sour aromatics",
            color: "#c0bd1e"
          },
          {
            name: "acetic acid",
            color: "#9fc78a"
          },
          {
            name: "butyric acid",
            color: "#d6c509"
          },
          {
            name: "isovaleric acid",
            color: "#71c05a"
          },
          {
            name: "citric acid",
            color: "#e4d711"
          },
          {
            name: "malic acid",
            color: "#b4c425"
          }
        ]
      },
      {
        name: "alcohol/fermented",
        color: "#b2a113",
        children: [
          {
            name: "winey",
            color: "#a50a71"
          },
          {
            name: "whiskey",
            color: "#b03a53"
          },
          {
            name: "fermented",
            color: "#d2a808"
          },
          {
            name: "overripe",
            color: "#7e7029"
          }
        ]
      }
    ]
  },
  {
    name: "green/vegetative",
    color: "#17803b",
    children: [
      {
        name: "olive oil",
        color: "#a0b127"
      },
      {
        name: "raw",
        color: "#6c8c39"
      },
      {
        name: "green/vegetative",
        color: "#21b252",
        children: [
          {
            name: "under-ripe",
            color: "#aaca47"
          },
          {
            name: "peapod",
            color: "#47b44a"
          },
          {
            name: "fresh",
            color: "#00ab6f"
          },
          {
            name: "dark green",
            color: "#00603d"
          },
          {
            name: "vegetative",
            color: "#1eb26a"
          },
          {
            name: "hay-like",
            color: "#9fa122"
          },
          {
            name: "herb-like",
            color: "#79c359"
          }
        ]
      },
      {
        name: "beany",
        color: "#6f9f95"
      }
    ]
  },
  {
    name: "other",
    color: "#00a7d2",
    children: [
      {
        name: "chemical",
        color: "#61c6dd",
        children: [
          {
            name: "bitter",
            color: "#6fc9bf"
          },
          {
            name: "salty",
            color: "#ced2ca"
          },
          {
            name: "medicinal",
            color: "#61a8c4"
          },
          {
            name: "petroleum",
            color: "#00a9c1"
          },
          {
            name: "skunky",
            color: "#5c8296"
          },
          {
            name: "rubber",
            color: "#001631"
          }
        ]
      },
      {
        name: "papery/musty",
        color: "#9bbccc",
        children: [
          {
            name: "stale",
            color: "#657d6b"
          },
          {
            name: "cardboard",
            color: "#dac346"
          },
          {
            name: "papery",
            color: "#ffffff"
          },
          {
            name: "woody",
            color: "#725c26"
          },
          {
            name: "moldy/damp",
            color: "#a1ac74"
          },
          {
            name: "musty/dusty",
            color: "#caa669"
          },
          {
            name: "musty/earthy",
            color: "#948547"
          },
          {
            name: "animalic",
            color: "#a0a277"
          },
          {
            name: "meaty brothy",
            color: "#cb817a"
          },
          {
            name: "phenolic",
            color: "#e97e89"
          }
        ]
      }
    ]
  }
];

export const CreditText =
  "Coffee Taster’s Flavor Wheel created using the Sensory Lexicon developed by World Coffee Research. Copyright 2017 SCA and WCR";
