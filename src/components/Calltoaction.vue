<template>
    <div class="relative c" id="home">
        <img ref="imagem_radial" class="imagem_radial" :src="img_radial" alt="">
        <div class="row justify-content-center banner ">
            <div class="col">
                <h1 class="  titulo">
                    Protegendo Vidas dos <span>Assassinos Invisíveis</span>
                </h1>

                <p class="texto mt-2">
                    Bem-vindo ao CleanAir – Uma solução inovadora para monitorar os níveis de gases perigosos como
                    monóxido de carbono (CO) e dióxido de carbono (CO₂), prevenindo acidentes fatais. Nossa missão é
                    simples: salvar vidas. Com CleanAir, você pode monitorar os níveis de gases em tempo real,
                    protegendo sua família, colegas de trabalho e comunidades.
                </p>
                <div class="d-flex d-flex gap-4 mt-3">
                    <button class="get" onclick="window.location.href='https://cleanair-dashboard.netlify.app'" >Get Started</button>

                    <button class="watch d-flex justify-content-center align-items-center gap-3">
                        <img :src="img_play" alt="">
                        Watch Tutorials</button>
                </div>
               
               
            </div>

            <div class="col-12 col-lg-5  mt-5 mt-lg-0 container-imgs  d-none d-lg-block">
                <img :src="img_cleanair" alt="">
                <img class="planetinhas" :src="img_planetinhas" alt="">
                <img class="radial2 d-none d-lg-block" :src="img_radial" alt="">
            </div>
            

        </div>

    </div>
</template>
<style scoped>


    .titulo{
    color: white;
    font-weight: bold;
    font-size: 70px;
    }
@media (max-width: 1300px) {
    .titulo {
    color: white;
    font-weight: bold;
    font-size: 30px;
}
}

.texto{
    font-size: 18px;
    color: var(--cor-cinza);
    font-family: 'Outfit', sans-serif;
}
h1 {
    line-height: 1.2;
    /* Ajusta o espaçamento entre as linhas */
}

.titulo span {
    color: var(--cor-azul);
}

.banner {
    padding: 50px 230px;
    
}
@media (max-width: 991.98px) {
.banner {
    padding: 50px 30px;
    
}
}

.banner *{
    z-index: 10;
}
button{
    color: white;
    font-size: 25px;
    padding: 15px 25px;
    border-radius: 10px;
    font-weight: bold;
}
.get{
    background-color: var(--cor-azul);
    border: none ;
}
.get:active{
    background-color:var(--cor-azul-hover) ;
}
.watch{
    background-color: transparent;
    border:2px solid var(--cor-azul);
}
.watch:active{
    border:2px solid var(--cor-azul-hover);
    
}


.imagem_radial {
    position: absolute;
    top: -36px;
    mix-blend-mode: lighten;
    /* Efeito de blend mode */
    opacity: 80%;
    z-index: 1;
}
.container-imgs{
    position: relative;
}
.planetinhas{
    position: absolute;
    top: -20px;
    left: -40px;
}
.radial2{
    position: absolute;
    top: -36px;
    left: -40px;
    width: 300px;
    mix-blend-mode: lighten;
    /* Efeito de blend mode */
    opacity: 60%;
    /* Efeito de blend mode */
    
}
</style>
<script setup>

import img_radial from "@/assets/radial.png"
import img_cleanair from "@/assets/cleanair.png"
import img_play from "@/assets/play.png"
import img_planetinhas from '@/assets/planetinhas.png'

</script>