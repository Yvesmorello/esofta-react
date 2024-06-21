import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardSection from '@/app/components/CardSection/CardSection';

interface Evolution {
  img: string;
  description: string;
  height: number;
  weight: number;
  abilities: string[];
}

export default function Evolucoes() {
  const router = useRouter();
  const { evolucao } = router.query;
  const [evolution, setEvolution] = useState<Evolution | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (evolucao && typeof evolucao === 'string') {
      const fetchEvolutionData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolucao.toLowerCase()}`);
          const data = response.data;
          const evolutionData: Evolution = {
            img: data.sprites.front_default,
            description: `Pokémon do tipo ${data.types.map((type: any) => type.type.name).join(', ')}`,
            height: data.height,
            weight: data.weight,
            abilities: data.abilities.map((ability: any) => ability.ability.name),
          };
          setEvolution(evolutionData);
        } catch (error) {
          setError("Erro ao buscar dados da PokéAPI");
        } finally {
          setLoading(false);
        }
      };

      fetchEvolutionData();
    }
  }, [evolucao]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!evolution) {
    return <p>Nenhum dado encontrado.</p>;
  }

  return (
    <div>
      <Link href="/">Voltar</Link>
      <CardSection title={`Evolução do Pokémon: ${evolucao}`}>
        <img src={evolution.img} alt={evolucao as string} />
      </CardSection>
    </div>
  );
}
