import { Container, Profile, Search } from "./styles";
import { Input } from "./../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Search>
        <Input placeholder="Pesquisar pelo título" type="text" />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Gabriel Cuin</strong>
          <Link to="/">sair</Link>
        </div>

        <img src="https://github.com/GabrielCuin.png" alt="foto do usuário" />
      </Profile>
    </Container>
  );
}
