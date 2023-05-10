
import axios from "axios";

export const getUsuario = (nome: string) =>
    axios(`http://127.0.0.1:8080/api/v1/usuarios${nome}`)
        .then(response => {
            return response.data;
        })