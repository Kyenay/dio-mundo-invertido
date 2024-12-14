import { subscribeClube } from './firebase/clube.js';

(function main() {
    const txtName = document.getElementById('txtName');
    const txtEmail = document.getElementById('txtEmail');
    const txtLevel = document.getElementById('txtLevel');
    const txtCharacter = document.getElementById('txtCharacter');

    document.getElementById('btnSubscribe').addEventListener('click', async () => {
        const subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const id = await subscribeClube(subscription);
        alert(`Inscrição ${id} adicionada com sucesso!`);

        txtName.value = '';
        txtEmail.value = '';
        txtLevel.value = '';
        txtCharacter.value = '';
    })
})()

async function loadData() {
    const subscriptions = subscribeClube();
    console.log(subscriptions);
}

loadData();