import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Grown-Plants",
    description:
      "",
      imgSrc: "https://greenalley.netlify.app/assets/grown-pl.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Plant-Pots",
    description:
      "",
      imgSrc: "https://greenalley.netlify.app/assets/pot-pl.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Garden-Tools",
    description:
      "",
      imgSrc: "https://greenalley.netlify.app/assets/tools.jpg"
  },
];

