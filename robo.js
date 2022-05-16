const wppconnect = require('@wppconnect-team/wppconnect');
// const { start } = require('repl');

wppconnect.create({
    session: 'session',
    puppeteerOptions: { args: ['--no-sandbox']}
})
    .then((cliente) => start(cliente))
    .then((err) => console.log(err));


function start(cliente)
{
    cliente.onMessage((message) => {
        console.log(message);
        console.log('Mensagem digitada pelo usuário:' + message.body);
        cliente.sendText(message.from, 'PING! Mande um PONG para mim:')
            .then((res) => {
                console.log('SUCESSO!: ', res );
            })
            .catch((error) => {
                console.log('ERRO: ', error);
            });
    });
}