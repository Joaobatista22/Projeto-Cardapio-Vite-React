import { useState } from "react";
import Restaurante from "./assets/Capa.png";
import "./App.css";
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, bebidas, sobremesas } from "./cardapio";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);
  return (
    <>
      <img src={Restaurante} alt="foto do restaurante" className="capa" />
      <Navegacao setPaginaSelecionada={setPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item) => (
          // eslint-disable-next-line react/jsx-key
          <ItemCardapio
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
