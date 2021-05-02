/*Categories img imports*/
import bebidas from "assets/bebidas.png";
import cafeteria from "assets/cafeteria.png";
import cucurucho from "assets/cucuruchos.png";
import chocolate from "assets/chocolate.png";
import especialidades from "assets/especialidades.png";
import copahelada from "assets/copahelada.png";
import copadulce from "assets/copadulce.png";
import promociones from "assets/promociones.png";
/*Products img imports*/
import simple from "assets/simple.png";
import especial from "assets/especial.png";
import bañado from "assets/bañado.png";
import confitados from "assets/tresgustos.png";

export const categories = [
  {
    id: 1,
    name: "BEBIDAS",
    img: bebidas,
  },
  {
    id: 2,
    name: "CAFETERIA",
    img: cafeteria,
  },
  {
    id: 3,
    name: "CUCURUCHOS",
    img: cucurucho,
  },
  {
    id: 4,
    name: "CHOCOLATES",
    img: chocolate,
  },
  {
    id: 5,
    name: "ESPECIALIDADES",
    img: especialidades,
  },
  {
    id: 6,
    name: "COPA HELADA",
    img: copahelada,
  },
  {
    id: 7,
    name: "COPA DULCE",
    img: copadulce,
  },
  {
    id: 8,
    name: "PROMOCIONES",
    img: promociones,
  },
];

export const products = [
  {
    id: 1,
    idCategory: 3,
    name: "SIMPLE",
    img: simple,
    description:
      "Helado simple 1 bocha a elección. Gustos disponibles: Vainilla, Chocolate o Frutilla.",
    price: "$40",
  },
  {
    id: 2,
    idCategory: 3,
    name: "ESPECIAL",
    img: especial,
    description:
      "Especial con 3 bochas a elección. Gustos disponibles: Vainilla, Chocolate o Frutilla.",
    price: "$80",
  },
  {
    id: 3,
    idCategory: 3,
    name: "BAÑADO",
    img: bañado,
    description:
      "Bañado con distintas capas, 1 bocha. Gustos disponibles: Vainilla, Chocolate o Frutilla.",
    price: "$70",
  },
  {
    id: 4,
    idCategory: 3,
    name: "CONFITADOS",
    img: confitados,
    description:
      "Doble cucurucho con helado y confites. Gustos disponibles: Vainilla, Chocolate o Frutilla.",
    price: "$80",
  },
];
