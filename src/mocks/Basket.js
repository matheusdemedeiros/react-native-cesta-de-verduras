import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const basket = {
  top: {
    title: "Detalhe da cesta",
  },
  details: {
    basketName: "Cesta de verduras",
    farmLogo: logo,
    farmName: "Jenny Jack Farm",
    basketDescription:
      "Uma cesta com produtos selecionados cuidadosamente direto da fazenda para a sua cozinha!",
    basketPrice: "R$ 40,00",
    buyButton: "Comprar",
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      },
    ],
  },
};

export default basket;
