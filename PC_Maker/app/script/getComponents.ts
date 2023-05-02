
import axios from "axios";

export const getComponents = (categoria: string) =>
    axios(`http://127.0.0.1:8080/api/v1/produtos/categoria/${categoria}`)
        .then(response => {
            return response.data;
        })