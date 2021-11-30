import {IProductsObject} from '../interfaces/products/products.interfaces';
import { v4 as uuidv4 } from 'uuid';

const productsObject: IProductsObject = {
  english: {
    A: [
      {
        name: "apple",
        category: "friuts",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }, 
      {
        name: "apricot",
        category: "friuts",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }, 
  ],
    B: [
      {
        name: "banana",
        category: "friuts",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }
    ],
    C: [
      {
        name: "carrot",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },
      {
        name: "cabbage",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },
      {
        name: "coconut",
        category: "friuts",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },
      {
        name: "cucumber",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },{
        name: "celery",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },
      {
        name: "couliflower",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },
      {
        name: "courgette",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },
      {
        name: "capers",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      },
      {
        name: "celeriac",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }
    ],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [
      {
        name: "lettuce",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }
    ],
    M: [],
    N: [],
    O: [],
    P: [
      {
        name: "pineapple",
        category: "friuts",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }
    ],
    Q: [],
    R: [
      {
        name: "raddish",
        category: "vegs",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }
    ],
    S: [],
    T: [
      {
        name: "tomato",
        category: "friuts",
        id: uuidv4(),
        quantity: 0,
        emoji: ""
      }
    ],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
  },
  // polish: {
  //   A: ["apple", "apricot"],
  //   B: [],
  //   C: [
  //     "carrot",
  //     "cabbage",
  //     "coconut",
  //     "cucumber",
  //     "celery",
  //     "couliflower",
  //     "courgette",
  //     "capers",
  //     "celeriac",
  //   ],
  //   D: [],
  //   E: [],
  //   F: [],
  //   G: [],
  //   H: [],
  //   I: [],
  //   J: [],
  //   K: [],
  //   L: ["lettuce"],
  //   M: [],
  //   N: [],
  //   O: [],
  //   P: ["pineapple"],
  //   Q: [],
  //   R: ["raddish"],
  //   S: [],
  //   T: ["tomato"],
  //   U: [],
  //   V: [],
  //   W: [],
  //   X: [],
  //   Y: [],
  //   Z: [],
  // }
};

export { productsObject };
