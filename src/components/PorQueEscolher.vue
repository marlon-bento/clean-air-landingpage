<template>
    <div>
        <div class=" text-center d-flex flex-column align-items-center mt-5 pt-4" id="porque">
            <span class="secao text-center mt-2">Por que nos escolher</span>
            <h1 class="titulo mt-3">Tecnologia por trás do CleanAir</h1>
            <p class="texto mt-3">
                O CleanAir utiliza tecnologias de ponta para garantir a máxima eficácia e segurança em seu monitoramento
                de gases.
            </p>
        </div>
        <div class="container mt-5">
            <div class="row gx-4 gy-4">
                <div class="col-sm-6 col-md-6 col-lg">
                    <div class=" card p-4 h-100  ">
                        <div class="icon-container ">
                            <img :src="icon_cadeado" alt="">
                        </div>
                        <h1 class="titulo-card mt-3">Seguro e Protegido</h1>
                        <p class="texto-card">
                            No backend do CleanAir, Python com FastAPI garante uma API rápida e escalável, enquanto a
                            biblioteca Paho-MQTT cuida da comunicação eficiente com o broker MQTT, integrando os dados
                            dos
                            sensores ao sistema.
                        </p>

                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg">
                    <div class=" card p-4 h-100  ">
                        <div class="icon-container ">
                            <img :src="icon_grafico" alt="">
                        </div>
                        <h1 class="titulo-card mt-3">Gráficos Interativos</h1>
                        <p class="texto-card">
                            Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris.

                        </p>

                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg">
                    <div class=" card p-4 h-100  ">
                        <div class="icon-container ">
                            <img :src="icon_mobile" alt="">
                        </div>
                        <h1 class="titulo-card mt-3">Aplicativo Mobile</h1>
                        <p class="texto-card">
                            O app CleanAir será desenvolvido com Flutter para Android e iOS, oferecendo uma interface simples e eficiente para monitorar os níveis de CO e CO2 em tempo real.
                        </p>

                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg">
                    <div class=" card p-4 h-100  ">
                        <div class="icon-container ">
                            <img :src="icon_web" alt="">
                        </div>
                        <h1 class="titulo-card mt-3">Página web</h1>
                        <p class="texto-card">
                            Nossa aplicação web, construída com Vue.js, oferece uma interface intuitiva e responsiva, garantindo uma experiência de usuário fluida e facilitando o monitoramento eficiente dos níveis de CO e CO₂.
                        </p>

                    </div>
                </div>
               
            </div>
        </div>

    </div>


</template>
<style scoped>
.secao {
    color: var(--cor-azul);
    font-size: 19px;
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
    max-width: 900px;
}



.card {
    border-radius: 10px;
    border: #353535 solid 1px;
    background-color: #030B15;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: #5f5f5f2c;

    width: 100px;
    height: 100px;
    border: #353535 solid 1px;
}

.titulo-card {
    font-weight: bold;
    color: white;
}

.texto-card {
    color: #7D7D7D;

}
</style>
<script setup>
import icon_cadeado from "@/assets/iconCadeado.png"
import icon_grafico from "@/assets/iconGrafico.png"
import icon_mobile from "@/assets/iconCelular.png"
import icon_web from "@/assets/iconWeb.png"
</script>