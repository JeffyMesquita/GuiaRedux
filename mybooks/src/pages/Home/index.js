import React from "react";

import { FiShoppingBag } from 'react-icons/fi';

import "./styles.css";

import JsGuia from "../../assets/jsguia.jpg"
import PooJs from "../../assets/poojs.jpg"
import CangaceiroJs from "../../assets/cangaceirojs.jpg"
import JsGp from "../../assets/javascriptgp.jpg"
import PadroesJs from "../../assets/padroesjs.jpg"
import AprendendoNode from "../../assets/aprendendonode.jpg"

export default function Home() {
  return( 
    <main className="container">
      <ul className="book.catalog">
        <li className="book-container">
          <img src={JsGuia} alt="JavaScript: O Guia Definitivo" />
          <strong>JavaScript: O Guia Definitivo</strong>
          <span>R$ 146,08</span>

          <button type="button" onClick={() =>{}}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />
              {' '} 0
            </div>

            <span>Adicionar</span>
          </button>
        </li>
        <li className="book-container">
          <img src={JsGp} alt="JavaScript: The Good Parts" />
          <strong>JavaScript: The Good Parts</strong>
          <span>R$ 44,69</span>

          <button type="button" onClick={() =>{}}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />
              {' '} 0
            </div>

            <span>Adicionar</span>
          </button>
        </li>
        <li className="book-container">
          <img src={PadroesJs} alt="Padrões JavaScript" />
          <strong>Padrões JavaScript</strong>
          <span>R$ 47,68</span>

          <button type="button" onClick={() =>{}}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />
              {' '} 0
            </div>

            <span>Adicionar</span>
          </button>
        </li>
        <li className="book-container">
          <img src={AprendendoNode} alt="Aprendendo Node: Usando JavaScript no Servidor" />
          <strong>Aprendendo Node: Usando JavaScript no Servidor</strong>
          <span>R$ 66,75</span>

          <button type="button" onClick={() =>{}}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />
              {' '} 0
            </div>

            <span>Adicionar</span>
          </button>
        </li>
        <li className="book-container">
          <img src={PooJs} alt="Princípios de Orientação à Objetos em JavaScript" />
          <strong>Príncipios de Orientação à Objetos em JavaScript</strong>
          <span>R$ 36,00</span>

          <button type="button" onClick={() => {}}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />
            </div>

            <span>Adicionar</span>
          </button>
        </li>        
        <li className="book-container">
          <img src={CangaceiroJs} alt="Cangaceiro JavaScript: Uma aventura no sertão da programação" />
          <strong>Cangaceiro JavaScript: Uma aventura no sertão da programação</strong>
          <span>R$ 36,00</span>

          <button type="button" onClick={() => {}}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />
            </div>

            <span>Adicionar</span>
          </button>
        </li>        
      </ul>
    </main>
  );
}
