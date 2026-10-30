
const POKEMONS = window.pokemons.pokemon;
const image = document.getElementById("cards");
const arrayTipos = window.data.filterOptions(POKEMONS);

exibeMenuTipos();

const detailRequests = new Map();
const statLabels = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Atq. especial",
  "special-defense": "Def. especial",
  speed: "Velocidade"
};

const buildPokemonCard = pokemon => `
  <article class="card" data-pokemon-id="${pokemon.id}" tabindex="0" role="button" aria-pressed="false" aria-label="Ver detalhes de ${pokemon.name}">
    <div class="card-inner">
      <section class="card-face card-front" aria-hidden="false">
        <span class="pokemon-number">#${pokemon.num}</span>
        <img src="${pokemon.img}" alt="${pokemon.name}" loading="lazy">
        <div class="name-card">
          <h3>${pokemon.name}</h3>
          <div class="type-list">${pokemon.type.map(type => `<span class="type-tag">${type}</span>`).join("")}</div>
        </div>
        <div class="pokemon-abilities" aria-live="polite">
          <span class="ability-loading">Carregando habilidades...</span>
        </div>
      </section>
      <section class="card-face card-back" aria-hidden="true">
        <div class="back-heading">
          <span class="pokemon-number">#${pokemon.num}</span>
          <h3>${pokemon.name}</h3>
          <div class="type-list">${pokemon.type.map(type => `<span class="type-tag">${type}</span>`).join("")}</div>
        </div>
        <div class="pokemon-details" aria-live="polite">
          <p class="details-loading">Abra o card para carregar os dados.</p>
        </div>
      </section>
    </div>
  </article>`;

function loadPokemonDetails(pokemonId) {
  if (!detailRequests.has(pokemonId)) {
    const request = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`PokéAPI respondeu com status ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        detailRequests.delete(pokemonId);
        throw error;
      });
    detailRequests.set(pokemonId, request);
  }
  return detailRequests.get(pokemonId);
}

function renderPokemonDetails(details) {
  const stats = details.stats.map(statEntry => {
    const baseStat = statEntry["base_stat"];
    const label = statLabels[statEntry.stat.name] || escapeHtml(statEntry.stat.name);
    const percentage = Math.min(baseStat / 255 * 100, 100);
    return `
      <div class="stat-row">
        <span>${label}</span>
        <span class="stat-track"><span style="width: ${percentage}%"></span></span>
        <strong>${baseStat}</strong>
      </div>`;
  }).join("");

  return `
    <div class="detail-measures">
      <div><span>Altura</span><strong>${(details.height / 10).toFixed(1)} m</strong></div>
      <div><span>Peso</span><strong>${(details.weight / 10).toFixed(1)} kg</strong></div>
      <div><span>Exp. base</span><strong>${details.base_experience || "—"}</strong></div>
    </div>
    <div class="stat-list"><span class="detail-label">Atributos base</span>${stats}</div>`;
}

function renderPokemonAbilities(abilities, showHidden) {
  return abilities
    .filter(abilityEntry => showHidden || !abilityEntry["is_hidden"])
    .map(abilityEntry => `
      <span class="ability-chip">${escapeHtml(abilityEntry.ability.name.replace(/-/g, " "))}${showHidden && abilityEntry["is_hidden"] ? " · oculta" : ""}</span>`)
    .join("");
}

function updateFrontAbilities(card, details) {
  const abilitiesPanel = card.querySelector(".pokemon-abilities");
  abilitiesPanel.innerHTML = renderPokemonAbilities(details.abilities, true) || "<span class=\"ability-loading\">Sem habilidades listadas</span>";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[character]));
}

function renderPokemons(pokemons) {
  image.innerHTML = pokemons.length
    ? pokemons.map(buildPokemonCard).join("")
    : "<p class=\"empty-state\">Nenhum Pokémon encontrado. Tente outro nome ou tipo.</p>";
  document.getElementById("results-count").textContent = `${pokemons.length} ${pokemons.length === 1 ? "resultado" : "resultados"}`;
  if (abilityObserver) {
    image.querySelectorAll(".card").forEach(card => abilityObserver.observe(card));
  }
}

const abilityObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      abilityObserver.unobserve(entry.target);
      loadPokemonDetails(entry.target.dataset.pokemonId)
        .then(details => {
          updateFrontAbilities(entry.target, details);
        })
        .catch(error => {
          const abilitiesPanel = entry.target.querySelector(".pokemon-abilities");
          abilitiesPanel.innerHTML = "<span class=\"ability-loading\">Habilidades indisponíveis</span>";
          console.error("Erro ao consultar habilidades na PokéAPI:", error);
        });
    });
  }, { rootMargin: "80px" })
  : null;

function flipPokemonCard(card) {
  const front = card.querySelector(".card-front");
  const back = card.querySelector(".card-back");
  const detailsPanel = card.querySelector(".pokemon-details");
  const isFlipped = !card.classList.contains("is-flipped");

  card.classList.toggle("is-flipped", isFlipped);
  card.setAttribute("aria-pressed", String(isFlipped));
  card.setAttribute("aria-label", `${isFlipped ? "Voltar ao card de" : "Ver detalhes de"} ${card.querySelector(".name-card h3").textContent}`);
  front.setAttribute("aria-hidden", String(isFlipped));
  back.setAttribute("aria-hidden", String(!isFlipped));

  if (!isFlipped || card.dataset.detailsLoaded === "true" || card.dataset.detailsLoading === "true") {
    return;
  }

  card.dataset.detailsLoading = "true";
  detailsPanel.innerHTML = "<p class=\"details-loading\">Buscando dados na PokéAPI...</p>";
  loadPokemonDetails(card.dataset.pokemonId)
    .then(details => {
      updateFrontAbilities(card, details);
      detailsPanel.innerHTML = renderPokemonDetails(details);
      card.dataset.detailsLoaded = "true";
    })
    .catch(error => {
      detailsPanel.innerHTML = "<p class=\"details-error\">Não foi possível carregar os dados. Clique para voltar e tente novamente.</p>";
      console.error("Erro ao consultar detalhes na PokéAPI:", error);
    })
    .then(() => {
      delete card.dataset.detailsLoading;
    });
}

image.addEventListener("click", event => {
  const card = event.target.closest(".card");
  if (card) {
    flipPokemonCard(card);
  }
});

image.addEventListener("keydown", event => {
  const card = event.target.closest(".card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    flipPokemonCard(card);
  }
});

renderPokemons(POKEMONS);

document.getElementById("option-order").addEventListener("change", orderPoke);
const optionOrder = document.getElementById("option-order");

function orderPoke() {
  const orderType = optionOrder[optionOrder.selectedIndex].value;
  const orderedPokemons = window.data.sort(POKEMONS, orderType);
  renderPokemons(orderedPokemons);
}

document.getElementById("search-form").addEventListener("submit", event => {
  event.preventDefault();
  searchPoke();
});

function searchPoke() {
  const namePok = document.getElementById("txt").value;
  const arrayRetornada = window.data.search(POKEMONS, namePok);
  renderPokemons(arrayRetornada);
}

function exibeMenuTipos() {
  document.getElementById("option-filter").innerHTML += `${arrayTipos.map(elem => `<option value="${elem}">${elem}</option>`)}`;
}

document.getElementById("option-filter").addEventListener("change", filterPoke);
const optionFilter = document.getElementById("option-filter");
const comparacao = document.getElementById("calculo");

function filterPoke() {
  const filterType = optionFilter.value;
  const arrayFiltrada = filterType === "all" ? POKEMONS : window.data.filter(POKEMONS, filterType);
  renderPokemons(arrayFiltrada);
  comparacao.querySelector(".comparation-poke").textContent = filterType === "all"
    ? ""
    : `Tipo ${filterType}: ${(arrayFiltrada.length * 100 / POKEMONS.length).toFixed(2)}% do total.`;
}

const calculateAllTypePercentages = () => {
  const typePercentages = arrayTipos.map((type) => {
    const typeArray = window.data.filter(POKEMONS, type);
    const percentage = (typeArray.length * 100 / 151).toFixed(2);

    return [type, +percentage];
  });

  typePercentages.unshift(["Tipos", "Percentual de tipos de Pokemon"]);

  return typePercentages;
};

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  const typePercentages = calculateAllTypePercentages();
  var data = google.visualization.arrayToDataTable(typePercentages);

  var options = {
    backgroundColor: "transparent",
    chartArea: { left: 0, top: 8, width: "100%", height: "90%" },
    legend: { position: "none" },
    pieSliceText: "label",
    pieStartAngle: 200,
    pieHole: 0.48,
    pieSliceBorderColor: "#191415",
    colors: ["#f04452", "#d8303e", "#b92431", "#ff6b73", "#8d1d28", "#f58978", "#72202a", "#c64d55", "#9d3c45", "#ee8b8b", "#5a2027", "#da6565", "#b34e58", "#f3a5a5", "#82313b"]
  };

  var chart = new google.visualization.PieChart(document.getElementById("graph"));
  chart.draw(data, options);
}
