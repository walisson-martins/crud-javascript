import { clienteService } from "../service/cliente-service.js";

const formulário = document.querySelector('[data-form]');

formulário.addEventListener('submit', (evento) => {
    evento.preventDefault();
    try {
        const nome = evento.target.querySelector('[data-nome]').value;
        const email = evento.target.querySelector('[data-email]').value;
    } catch (erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html';
    }

    clienteService.criaCliente(nome, email)
        .then(() => {
            window.location.href = '../telas/cadastro_concluido.html';
        })
});