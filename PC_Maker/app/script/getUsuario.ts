
import axios from "axios";

export const getUsuario = () =>
    axios(`http://127.0.0.1:8080/api/v1/usuarios`)
        .then(response => {
            return response.data;
        })