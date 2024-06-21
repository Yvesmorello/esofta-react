import styles from "./app.module.css";
import CardSection from "@/app/components/CardSection/CardSection";
import Header from "@/app/components/Header/Header";

export default function App() {
  return (
    <>
      <header>
        <Header title="Squirtle" />
      </header>

      <main className={styles.main}>
        <CardSection title="Informações sobre Squirtle">
          <p>
            Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
            Kanto e evolui para Wartortle.
          </p>
        </CardSection>

        <CardSection title="Características">
          <p>
            Squirtle é conhecido por sua concha nas costas, que oferece proteção
            adicional. Ele possui ataques de água poderosos, como Water Gun e
            Hydro Pump.
          </p>
        </CardSection>

        <CardSection title="Curiosidades">
          <ul>
            <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
            <li>
              Seu nome é uma combinação de squirt (esguicho) e turtle
              (tartaruga).
            </li>
            <li>
              {" "}
              Squirtle é frequentemente escolhido por treinadores para começar
              sua jornada Pokémon.
            </li>
          </ul>
        </CardSection>

        <CardSection title="Squirtle: O Amigo Aquático">
          <p>
            Squirtle, com sua aparência simpática e sua habilidade em controlar
            a água, conquistou o coração de treinadores Pokémon ao redor do
            mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma
            escolha popular para aqueles que buscam equilíbrio e versatilidade
            em suas equipes.
          </p>
          <p>
            Sua concha nas costas não apenas oferece proteção, mas também é um
            símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
            para Blastoise, Squirtle se transforma em uma força formidável,
            dominando ataques aquáticos que podem surpreender adversários em
            batalhas.
          </p>
          <p>
            Além de suas habilidades de batalha, Squirtle é conhecido por seu
            carisma. Treinadores muitas vezes descrevem a relação com seu
            Squirtle como uma amizade profunda, tornando-o não apenas um
            companheiro de lutas, mas um amigo leal ao longo de suas jornadas.
          </p>
        </CardSection>

        <CardSection title="Recursos Adicionais">
          <ul>
            <li>
              <a href="https://www.pokemon.com/br/pokedex/squirtle">
                Pokédex - Squirtle
              </a>
            </li>
            <li>
              <a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)">
                Bulbapedia - Squirtle
              </a>
            </li>
          </ul>
        </CardSection>

        <CardSection title="Evoluções">
          <ul>
            <li>
              <a href="./pages/pokemon/index.html?name=squirtle">
                <figure>
                  <img
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
                    alt="Squirtle"
                  />
                  <figcaption>1. Squirtle</figcaption>
                </figure>
              </a>
            </li>

            <li>
              <a href="./pages/pokemon/index.html?name=wartortle">
                <figure>
                  <img
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
                    alt="Wartortle"
                  />
                  <figcaption>2. Wartortle</figcaption>
                </figure>
              </a>
            </li>

            <li>
              <a href="./pages/pokemon/index.html?name=blastoise">
                <figure>
                  <img
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
                    alt="Blastoise"
                  />
                  <figcaption>3. Blastoise</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </CardSection>
      </main>
    </>
  );
}
