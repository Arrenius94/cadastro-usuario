import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import {
  // Title,
  Container,
  ContainerInputs,
  Input,
  // Button,
  Form,
  InputLabel,
} from "./styles";

import Title from "../../components/Title";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Home() {
  const [open, setOpen] = useState(false);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const navigate = useNavigate();

  const closeDialog = () => {
    setOpen(false);
  };

  async function registerNewUser() {
    try {
      const data = await api.post("/usuarios", {
        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
        email: inputEmail.current.value,
      });

      console.log("Usuário registrado com sucesso:", data);
    } catch (error) {
      console.error("Erro ao registrar o novo usuário", error);
    }
  }

  const twoFunction = () => {
    registerNewUser();
    setOpen(true);
  };

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title title="first">Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={twoFunction} theme="primary">
          Cadastrar Usuário
        </Button>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Usuário Cadastrado com sucesso! :)"}
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button theme="primary" onClick={() => closeDialog()}>
                Fechar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
        Ver lista de Usuário
      </Button>
    </Container>
  );
}

export default Home;
