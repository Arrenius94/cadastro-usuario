import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Button from "../../components/Button/";
import TopBackground from "../../components/TopBackground";
import Title from "../../components/Title";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from "./styles";
import Trash from "../../assets/trash.svg";

function ListUsers() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
      console.log("data", data);
    }
    getUsers();
  }, []);

  async function deleteUsers() {
    if (userIdToDelete === null) return; // Verifica se há um ID definido

    try {
      await api.delete(`/usuarios/${userIdToDelete}`);
      const updatedUsers = users.filter(user => user.id !== userIdToDelete);
      setUsers(updatedUsers);
      setUserIdToDelete(null); // Limpa o ID após a exclusão
      closeDialog(); // Fecha o diálogo após a exclusão
    } catch (error) {
      console.error("Erro ao excluir o usuário:", error);
     
    }
  }

  const openDialog = (id) => {
    setUserIdToDelete(id); // Armazena o ID do usuário que será excluído
    setOpen(true); // Abre o diálogo
  };

  const closeDialog = () => {
    setOpen(false);
  }


  return (
    <Container>
      <TopBackground />
      <Title title="first">Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixeira" onClick={() => openDialog(user.id)} /> {/* Passa o ID aqui */}
          </CardUsers>
        ))}

        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ 
            "& .MuiDialog-paper": { // Aplica o estilo ao papel do Dialog
              backgroundColor: "#161f56" // Muda a cor do fundo
            }
          }}
        >
          <DialogTitle id="alert-dialog-title" style={{ color: '#fff' }}>
            {"Deseja excluir o usuário?"}
          </DialogTitle>
          <DialogActions>
            <div style={{ paddingRight: '60px' }}>
              <Button theme="primary" onClick={deleteUsers}>Sim</Button> {/* Chama deleteUsers sem passar ID */}
            </div>
            <Button onClick={closeDialog} autoFocus>
              Não
            </Button>
          </DialogActions> 
        </Dialog> 

      </ContainerUsers>

      <Button type="button" onClick={() => navigate('/')}>
        voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
