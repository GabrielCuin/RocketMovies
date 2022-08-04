import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Content, NewMovie } from "./styles.js";
import { Header } from "../../components/Header";
import { Section } from "./../../components/Section";
import { Card } from "./../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus filmes">
          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>

          <Card
            data={{
              name: "Gabriel",
              id: 1,
              title: "Interestellar",
              rating: 4,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor quasi corrupti quibusdam eaque fuga laborum itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.",
              tags: [
                { id: "1", name: "Ficção Cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Amor" },
              ],
            }}
          />

          <Card
            data={{
              name: "Gabriel",
              id: 2,
              title: "Everything Everywhere All at Once",
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor quasi corrupti quibusdam eaque fuga laborum itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.",
              tags: [
                { id: "1", name: "Ficção Cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />

          <Card
            data={{
              name: "Gabriel",
              id: 3,
              title: "Once Upon a Time in Hollywood",
              rating: 4,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor quasi corrupti quibusdam eaque fuga laborum itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.",
              tags: [
                { id: "1", name: "Ação" },
                { id: "2", name: "Comédia" },
                { id: "3", name: "Época" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  );
}
