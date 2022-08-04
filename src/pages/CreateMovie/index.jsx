import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NewItem } from "../../components/NewItem";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <h1>Novo Filme</h1>
          </header>

          <div className="two-inputs">
            <div>
              <Input placeholder="Título" />
            </div>
            <div>
              <Input placeholder="Sua nota (de 0 a 5)" type="number" />
            </div>
          </div>

          <TextArea placeholder="Observações" />

          <section>
            <p>Tags</p>
            <div className="tags">
              <NewItem value="Ação" />
              <NewItem isNew placeholder="Nova Tag" />
              <NewItem isNew placeholder="Nova Tag" />
              <NewItem isNew placeholder="Nova Tag" />
            </div>
          </section>

          <div className="two-inputs">
            <Button reverse title="Excluir Filme" />
            <Button title="Salvar Alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
