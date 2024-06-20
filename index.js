
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('id_form_contact').addEventListener('submit', sendMessage) 
})

function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const investment = document.getElementById('investment').value;
    const webhookurl = 'https://hook.us1.make.com/tsd1x29rtelk21uhd100g2i8ir518bit';

        const data = {
        name: name,
        email: email,  
        tel: tel,
        city: city,
        state: state,
        investment: investment  
        
    };

    fetch(webhookurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
    .then(response => {
        if(response.ok) {
            alert('Sucess!');
        }
        else {
            alert('Failed');
        }
    })
    .catch(error => {
        comsole.error('Error:', error);
        alert('Error ocurred');
    })
}
   