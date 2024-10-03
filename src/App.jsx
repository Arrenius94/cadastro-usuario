import {
  Title,
  Container,
  TopBackground,
  ContainerInputs,
  Input,
  Button,
  Form,
  InputLabel,
} from "./styles";

import UsersImage from './assets/users.png' 

function App() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage}/>
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" />
            </div>
            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" />
            </div>
        </ContainerInputs>

          <div style={{width: '100%'}}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>
        
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default App;
