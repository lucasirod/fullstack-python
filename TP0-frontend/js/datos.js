const productos=[
    {
      img:"./imagenes/resortes.jpg",
      titulo:"Colchón de Resortes",
      descripcion:" Combina las ventajas que aporta la espuma de poliuretano (15 kg/mt3) con la estructura de puentes de acero que presentan los resortes.",
      precio:"$35000",
    },
    {
      img:"./imagenes/espuma.jpg",
      titulo:"Colchón de Espuma",
      descripcion:"Se conforma de espuma de poliuretano de alta densidad (25 kg/mt3) y son acabados en tela de jackard o piquet, totalmente matelaseada.",
      precio:"$38000",
    },
    {
      img:"./imagenes/enrollable.jpg",
      titulo:"Colchón Enrrollado",
      descripcion:"Envasado al vacío y enrollado, se presenta dentro de una caja. Al abrirlo absorbe aire y toma las dimensiones deseadas en 24hs",
      precio:"$55000",
    },
    
  ]
  
  const contenedorProductos = document.getElementById("contenedor-productos");
  
  for(let index of productos){
    contenedorProductos.innerHTML+=`
     <div class="productos ">
           <div class="card">
               <img src=${index.img} alt="">
           </div>
           <div class="informacion">
               <h1>${index.titulo}</h1>
              <p class="descripcion">
                  ${index.descripcion}
              </p>
           </div>
           <div class="precio">
               <div class="box-precio">
               <span class="precio2"><b>${index.precio}</b></span>
               </div>
           </div>
       </div>
    `
  }