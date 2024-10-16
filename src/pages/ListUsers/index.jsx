import { useEffect, useState } from 'react'
import api from '../../services/api'
import  Button  from "../../components/Button/"
import TopBackground from "../../components/TopBackground"


function ListUsers() {
    const [users, setUsers] = useState([]); 

    useEffect(()=>{
      async function getUsers() {
        const {data} = await api.get('/usuarios')
       
        setUsers(data)
        console.log('data',data);
      }  
      getUsers()
    }, [])                                            

        return(
            <div>
                <TopBackground/>
                <h1>Listagem de Usuários</h1>

                {users.map(user =>(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>
                ))}


                <Button>voltar</Button>
            </div>
        )
}

export default ListUsers