  let TotalEquipo1 = 0;
  let TotalEquipo2 = 0;
  let AtaqueTotal1 = 0;
  let DefensaTotal1 = 0;
  let AtaqueTotal2 = 0;
  let DefensaTotal2 = 0; //Variables declaradas para el calculo del combate

  
  // Funcion para sacar 3 pokemons random para el primer equipo (solo primera generacion por es hay 151)
  function mostrarPrimerEquipo() {
      const contenedor = document.getElementById('contenedor');
      contenedor.innerHTML = '';
      for(let i=0; i<3; i++) {
        const id = Math.floor(Math.random() * 151) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(res => res.json())
          .then(data => {
            const ataque = data.stats.find(s => s.stat.name === 'attack').base_stat;
            const defensa = data.stats.find(s => s.stat.name === 'defense').base_stat;
            AtaqueTotal1 += ataque;
            DefensaTotal1 += defensa;
            contenedor.innerHTML += `
              <div class="pokemon">
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}" />
                <p><strong>Ataque:</strong> ${ataque}</p>
                <p><strong>Defensa:</strong> ${defensa}</p>
              </div>
            `;
          });
      }
      return {AtaqueTotal1, DefensaTotal1};
    }

    // Funcion para sacar los 3 pokemones random del segundo equipo
     function mostrarSegundoEquipo() {
      const contenedor = document.getElementById('contenedor1');
      contenedor.innerHTML = '';
      for(let i=0; i<3; i++) {
        const id = Math.floor(Math.random() * 151) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(res => res.json())
          .then(data => {
            const ataque = data.stats.find(s => s.stat.name === 'attack').base_stat;
            const defensa = data.stats.find(s => s.stat.name === 'defense').base_stat;
            AtaqueTotal2 += ataque;
            DefensaTotal2 += defensa;
            contenedor.innerHTML += `
              <div class="pokemon">
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}" />
                <p><strong>Ataque:</strong> ${ataque}</p>
                <p><strong>Defensa:</strong> ${defensa}</p>
              </div>
            `;
          });
      }
      return {AtaqueTotal2, DefensaTotal2};
    }
    // Funcion para tirar dados
    function lanzarDadosEquipo1() {
        for(let i = 0; i < 3; i++) {
      TotalEquipo1 += Math.floor(Math.random() * 6) + 1;
        }; 
    document.getElementById('resultado1').textContent = 'Total Equipo 1: ' + TotalEquipo1;
    document.getElementById('dado1').disabled = true;
    }
    function lanzarDadosEquipo2() {
        for(let i = 0; i < 3; i++) {
      TotalEquipo2 += Math.floor(Math.random() * 6) + 1;
        }; 
    document.getElementById('resultado2').textContent = 'Total Equipo 2: ' + TotalEquipo2;
    document.getElementById('dado2').disabled = true;
    document.getElementById('primero').disabled = false;
    document.getElementById('segundo').disabled = false;
    }

    
    // Funcion para Calcular el Ganador
   function EquipoGanador () {
    const resultadoDiv = document.getElementById('resultado');
    ResultadoGanador1= (DefensaTotal1-AtaqueTotal2)
    ResultadoGanador2= (DefensaTotal2-AtaqueTotal1)

    let ganadorTexto= '';
    
    if (ResultadoGanador1 > ResultadoGanador2) {
        ganadorTexto = '¡EL Primer Equipo!🥂';
    } else {
        ganadorTexto = '¡El Segundo Equipo!🥂';
    }
    if (AtaqueTotal1 == 0 && AtaqueTotal2 == 0) {
        ganadorTexto = '🤬Primero asigne los dos Equipos🤬';
    }
    if (ResultadoGanador1 == ResultadoGanador2) {
        if (TotalEquipo1>TotalEquipo2) {
            ganadorTexto = 'Gana el primer Equipo por Desempate🥂'
        } else {
            ganadorTexto = 'Gana el Segundo Equipo por Desempate🥂'
        }
    }
    resultadoDiv.innerHTML = `
        <h3> Ganador: <h3>
        <h2>${ganadorTexto}</h2>
    `
}