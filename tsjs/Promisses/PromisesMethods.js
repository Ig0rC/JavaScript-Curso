function rand(max, min){
    max *= max;
    min *= min;
    return Math.floor(Math.random() * (max - min) - min);
}



function aguardeAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(msg);
      
            resolve(msg);
            return;
        }, tempo);
    });
};


// Methods Resolve caso alguma coisa já tenha ele só devolve;

// function BaixaPagina() {
//     const emCache = true;


//     if(emCache){
//         return Promise.resolve('Página em cache');
//     }else {
//         return aguardeAi('Baixei a página', rand());
//     }
// }




// BaixaPagina()
//     .then(dadosPagina =>{
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log(e));


//Methods all;

// const promises = [
//     aguardeAi('pRIMEIRO', 2000),
//     aguardeAi('sEGUNDO', 1000),
//     aguardeAi('TERCEIRO', 500),

// ];

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(e){
//         console.log(e)
//     })

// Methods race resolvida primeiro

// Promise.race(promises)
//     .then((valor) =>{
//         console.log(valor);
//     })
//     .catch((e) =>{
//         console.log(e);
//     })

