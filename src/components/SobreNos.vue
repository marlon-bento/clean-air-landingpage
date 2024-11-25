<template>
<div class="mt-3 row  jusfity-content-center align-items-center container-sobre" id="sobrenos">
    <img class="col px-4  px-md-0" :src="img_grafico" alt="">
    <div class="col-12 col-md-12 col-lg-8 ps-5">
        <span class="secao ">Sobre Nós</span>
        <h1 class="titulo mt-3">Navegando pela Segurança: Gráficos que Aceleram a Prevenção</h1>
        <p class="texto mt-3">
            No CleanAir, nossa missão é proteger vidas monitorando os perigos invisíveis do CO e CO₂. Utilizando tecnologias avançadas, oferecemos uma plataforma acessível que permite que você acompanhe a qualidade do ar em tempo real. Com gráficos interativos e um design intuitivo, garantimos que você tenha as informações necessárias para agir rapidamente e garantir um ambiente mais seguro. Descubra como o CleanAir pode transformar sua experiência de monitoramento! 
            
        </p>
        <button class="get">Saiba +</button>
        <img class="img-espaco" :src="img_espaco" alt="">
    </div>
</div>    
</template>
<style scoped>
.container-sobre{
    padding: 0 150px;
    font-family: 'Outfit', sans-serif;
    position: relative;
   
}@media (max-width: 768px) {
 
 .container-sobre {
 padding: 0;


}
}
.secao{
    color: var(--cor-azul);
    font-size: 19px;
}
button{
    color: white;
    font-size: 25px;
    padding: 15px 50px;
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
.titulo{
    font-size: 36px;
    color: white;
    font-weight: bold;
}
.texto{
    color :var(--cor-cinza);
    font-size: 19px;
   
}
.img-espaco{
    position: absolute;
    top: 100px;
    right: -350px;
    z-index: -10;
}
</style>
<script setup>
import img_grafico from '@/assets/grafico.png'
import img_espaco from '@/assets/espacoCima.png'
</script>