import { Container, UserInfo, Movie } from "./styles";
import { Stars } from "../../components/Stars";
import { Link } from "react-router-dom";

import { FiClock, FiArrowLeft } from "react-icons/fi";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function MoviePreview(data) {
  return (
    <Container>
      <Header />

      <Section title="">
        <header>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <Movie>
            <h1>{data.title || "Interestellar"} </h1>
            <Stars ratings={data.ratings || 4} />
          </Movie>

          <UserInfo>
            <div>
              <img src="https://github.com/GabrielCuin.png" />

              <span>Por {data.name || "Gabriel Cuin"}</span>
            </div>

            <div>
              <FiClock />
              <span>{data.updated_at || "05/05/2022 17:00"}</span>
            </div>
          </UserInfo>

          <section className="tags">
            {data.tags && (
              <div>
                {data.tags.map((tag) => (
                  <Tag title={tag.name} key={tag.id} />
                ))}
              </div>
            )}
          </section>
        </header>

        {data.description ||
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet veritatis facilis enim ad? Magni nostrum obcaecati, provident velit blanditiis aut neque iste cupiditate aperiam dolorem animi labore, nisi magnam doloribus praesentium perspiciatis ea debitis dolore tempore sapiente nobis quis? Mollitia doloremque, accusamus a eos laborum nam enim adipisci similique facilis rem veritatis quisquam, ex, rerum deleniti quae est modi officiis eveniet minima consectetur! Dolorem dolorum placeat impedit quas molestiae libero molestias nemo! Tempora dignissimos non mollitia rem autem ad necessitatibus.Aesentium perspiciatis ea debitis dolore tempore sapiente nobis quis? Mollitia doloremque, accusamus a eos laborum nam enim adipisci similique facilis rem veritatis quisquam, ex, rerum deleniti quae est modi officiis eveniet minima consectetur! Dolorem dolorum placeat impedit quas molestiae libero molestias nemo! Tempora dignissimos non mollitia rem autem ad necessitatibus"}
      </Section>
    </Container>
  );
}
