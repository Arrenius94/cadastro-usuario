import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Button from "../../components/Button/";
import TopBackground from "../../components/TopBackground";
import Title from "../../components/Title";

import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from "./styles";
import Trash from "../../assets/trash.svg";

function ListUsers() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");

      setUsers(data);
      console.log("data", data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const updateUsers = users.filter(user => user.id !== id)
    setUsers(updateUsers);
  }

  return (
    <Container>
      <TopBackground />
      <Title title="first">Lista de Usuários</Title>
      {/* <h1>Listagem de Usuários</h1> */}

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixeira" onClick={() => deleteUsers(user.id)}/>
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate('/')}>
        voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
