

<script setup>
import { onMounted } from 'vue';
import img_logo from '@/assets/Logo.png' 
onMounted(() => {
  // Seleciona todos os links com a classe "link"
  const links = document.querySelectorAll('.link');

  // Adiciona um evento de clique para cada link
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Impede o comportamento padrão do link
      const targetId = link.getAttribute('href').slice(1); // Obtém o ID do destino
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight; // Altura do header
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Posição do destino
        const offsetPosition = targetPosition - headerHeight; // Calcula o deslocamento com base no header

        window.scrollTo({
          top: offsetPosition, // Rolagem ajustada
          behavior: 'smooth', // Rolagem suave
        });
      }
    });
  });
});

</script>

<template>
  <header class="sticky-top header">
    <nav class="navbar navbar-expand-lg" id="nav-header">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand d-flex gap-2">
          <img :src="img_logo" alt="">
          <span class="text-white">Clean Air</span>
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list fs-1 text-white"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="menu" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#sobrenos">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#porque">Vantagens</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#patrocinio">Patrocínio</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#visao">Nossa Visão</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#recursos">Recursos</a>
            </li>
          </ul>
          <div class="d-flex justify-content-center">
            <button class="botao">Download App</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/** HEADER **/
.header {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 150px;
  border: 1px solid #67676741;
  transition: all 0.3s ease-in-out;
}

/* Ajustes para telas menores */
@media (max-width: 992px) {
  .header {
    padding: 10px 20px;
  }
}

#menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.link {
  color: white;
  font-size: 18px;
  transition: all 300ms;
  text-decoration: none;
}

.link:hover {
  color: var(--cor-laranja-claro);
}

.botao {
  background-color: var(--cor-azul);
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: bold;
}
.botao:active {
  background-color: var(--cor-azul-hover);
}
</style>
