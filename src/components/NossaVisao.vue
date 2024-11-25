<template>
    <div class="row  jusfity-content-center align-items-center container-sobre mt-5" id="visao">
        
        <div class="col-12 mt-3 mt-lg-0 col-md-12 col-lg-7 mx-3 mx-md-5">
            <span class="secao ">Nossa Visão:</span>
            <h1 class="titulo mt-3">Usuários de todo o mundo</h1>
            <p class="texto mt-3">
                Queremos capacitar usuários ao redor do mundo a monitorarem os perigos invisíveis do CO e CO₂, protegendo vidas em qualquer lugar. Estamos comprometidos em levar soluções que salvem vidas globalmente, construindo um futuro mais seguro e saudável.

            </p>
           
            <div class="d-flex gap-4">
                <div class="text-center">
                    <h1 class="display-4 display-md-3 numberes">32K+</h1>
                    <P class="texto">Pessoas Usando</P>
                </div>
                <div class="text-center">
                    <h1 class="display-4 display-md-3 numberes">250+</h1>
                    <P class="texto">Vip Users</P>
                </div>
                <div class="text-center">
                    <h1 class="display-4 display-md-3 numberes">87+</h1>
                    <p class="texto">Grandes Empresas</p>
                </div>
            </div>
        </div>
        <img class="col mt-3 mt-lg-0 px-5 p-md-0" :src="img_mapa" alt="">
    </div>
</template>
<style scoped>
.container-sobre {
    padding: 0 150px;
    font-family: 'Outfit', sans-serif;
    position: relative;

}
@media (max-width: 768px) {
 
    .container-sobre {
    padding: 0;


}
}

.secao {
    color: var(--cor-azul);
    font-size: 19px;
}
.numberes{
    font-weight: bold;
    color: white;
    margin: 0;
}
button {
    color: white;
    font-size: 25px;
    padding: 15px 50px;
    border-radius: 10px;
    font-weight: bold;
}

.get {
    background-color: var(--cor-azul);
    border: none;
}

.get:active {
    background-color: var(--cor-azul-hover);
}

.titulo {
    font-size: 36px;
    color: white;
    font-weight: bold;
}

.texto {
    color: var(--cor-cinza);
    font-size: 19px;

}

.img-espaco {
    position: absolute;
    top: 100px;
    right: -350px;
    z-index: -10;
}
</style>
<script setup>
import img_mapa from '@/assets/mapa.png'

</script>