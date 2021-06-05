const client = require('../../src/index');

client.on('ready', () => {
    console.log(`${client.user.tag} está online!`);

    client.user.setActivity("Rede Flexi", { type: 1 });
})