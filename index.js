document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('id_form_contact').addEventListener('submit', sendMessage);
});

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const investment = document.getElementById('investment').value;
    const sultsUrl = "https://api.sults.com.br/api/v1/expansao/negocio";
    const webhooks = "https://hook.us1.make.com/w4ur1a61gmgfy94mw5mc5hjd58bbyd1y";

    const data = {
        sendEmailModeloIdToLead: 1,
        sendNotificationToResponsavel: true,
        negocio: {
            titulo: "Novo Negócio",
            responsavelId: 999, 
            situacaoId: 1, 
            etapaId: 9, 
            descricao: "Descrição do negócio",
            valor: investment,
            temperatura: 3,
            cidade: city,
            uf: state,
            origemId: 2, 
            campanhaId: 3 
        },
        pessoa: {
            nome: name,
            email: email,
            phone: tel,
            cidade: city,
            uf: state
        },
        empresa: {
            nomeFantasia: "Empresa AAAA",
            razaoSocial: "Empresa AAA Social",
            cnpj: "78751245754", 
            email: "mammm@live.com", 
            phone: "34 3333-3333", 
            cidade: "São José", 
            uf: state
        }
    };

    fetch(webhooks, {
        method: 'POST',
        headers: {
            'Authorization': 'O2RlbW9uc3RyYWNhbzsxNzE5MjM3ODQwNjIx', 
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert('Success!');
            }
            else {
                alert('Failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error occurred');
        });
}
