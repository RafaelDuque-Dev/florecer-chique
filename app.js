import produtos from './script/produtos.js';

function carregarDestaques() {
  const produtosContainer = document.getElementById("produtos");

  produtos.forEach(produto => {
    console.log('Produto:', produto); // Verifica os dados do produto

    if (produto.destaque === true) {
      const produtoDiv = document.createElement("div");
      produtoDiv.className = "produto";

      // Define a imagem padrão e a imagem alternativa
      const imagemPadrao = produto.imagem1;
      const imagemAlternativa = produto.imagem2; // Substitua pelo caminho da imagem ao passar o mouse

      produtoDiv.innerHTML = `
        
        <img class="produto-img" src="${imagemPadrao}" alt="${produto.nome}">
        <p class="produto-id">Cod:${produto.id}</p>
        <p class="produto-nome">${produto.nome}</p>
        <p class="produto-preco">${produto.preco}</p>
        <p class="produto-status">${produto.status}</p>
      `;

      // Adiciona os eventos de mouseover e mouseout
      const imgElement = produtoDiv.querySelector(".produto-img");
      imgElement.addEventListener("mouseover", () => {
        imgElement.src = imagemAlternativa; // Altera para a imagem alternativa
      });
      imgElement.addEventListener("mouseout", () => {
        imgElement.src = imagemPadrao; // Retorna à imagem padrão
      });

      const statusElement = produtoDiv.querySelector(".produto-status");
      if (produto.status === "Indisponível") {
        statusElement.classList.add("status-indisponivel");
      }

      console.log('Elemento criado:', produtoDiv); // Verifica o elemento criado
      produtosContainer.appendChild(produtoDiv);
    }
  });
}

document.addEventListener('DOMContentLoaded', carregarDestaques);