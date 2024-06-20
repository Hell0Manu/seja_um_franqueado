document.getElementById('id_form_contact').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').ariaValueMax;
    const email = document.getElementById('email').ariaValueMax;
    const webhookurl = 'https://hook.us1.make.com/1saeldc4jut43g1h2gibz1v1m20b8egii'
    ;

        const data = {
        name: name,
        email: email    
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

})
