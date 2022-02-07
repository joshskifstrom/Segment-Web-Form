fetch('https://reqres.in/api/users')
    .then(res => {
        return res.json()
    })
    .then(data => {
        let id = data.data[0].id
        let first_name = data.data[0].first_name
        let last_name = data.data[0].last_name
        let email = data.data[0].email
        console.log("Data:", data)

        const fullname = document.querySelector('input[name="fullname"]');
        fullname.innerHTML = first_name + ' ' + last_name;
    })
    .catch(error => console.log('ERROR'))

    export default "name.js";