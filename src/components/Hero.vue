<template>
    <div class="min-h-screen flex justify-center items-end  bg-heroback bg-fixed bg-center bg-no-repeat bg-cover">
        <div class=" rounded-full mb-16 px-20 p-5 ">
            <div class="bg-palegoldenrod flex justify-center mt-4">
                <div class="text-center">
                    <svg id="more-arrows" class="w-20 h-16 transform transition-transform duration-200 hover:scale-105"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 65">
                        <polygon class="fill-current text-black transition-all duration-200 arrow-top opacity-50"
                            points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                        <polygon class="fill-current text-black transition-all duration-200 arrow-middle opacity-75"
                            points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                        <polygon class="fill-current text-black transition-all duration-200 arrow-bottom"
                            points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="flex p-10 ">
        <div class=" pr-10">
            <h2 class="font-bold text-4xl pb-4">EMAILSEARCH</h2>
            <p>Con <strong>EMAIL-SEARCH</strong> (buscador de información indexada), dile adiós a las largas horas navegando correos desordenados y a la
                lentitud al buscar entre grandes volúmenes de correspondencia. Nuestra herramienta optimiza y agiliza tu
                búsqueda, garantizando resultados precisos en segundos. Desde profesionales hasta curiosos,
                <strong>EMAIL-SEARCH</strong> es la solución definitiva para descifrar el mundo digital.
            </p>
            <p class="pt-2 font-bold">¡Transforma tu búsqueda y encuentra lo inencontrable hoy!</p>
            <LoginButton class=" flex justify-center pt-8" />
            <div class=" flex justify-center pt-2">
                <p class=" font-bold text-1xl">Obtén tu demo, iniciando sesión</p>
            </div>
        </div>
        <div class="lg:block hidden ">
            <img src="../images/op2.webp" alt="hero"  class="rounded-lg"/>
        </div>

    </div>
</template>

<script setup>
    import LoginButton from "./LoginButton.vue";
</script>