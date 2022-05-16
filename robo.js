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
    let objetoCli = [];
    cliente.onMessage((message) => {
        objetoCli = [
            dadosCli = {
                id: message.id,
                body: message.body,
                t: message.t,
                Name: message.notifyName,
                from: message.from,
                to: message.to,
                isGroupMsg: message.isGroupMsg,
            },
            dadosSender ={
                id: message.sender.id,
                name: message.sender.ame,
                pushname: message.sender.pushname,
                formattedName: message.sender.formattedName,
                isMyContact: message.sender.isMyContact,
                tag: message.sender.tag
            }
        ]

        if(objetoCli[0].isGroupMsg){
            console.log('meu objeto cliente dentro do if  dadosCli  ::> dadosCli',objetoCli[0]);
            console.log('meu objeto cliente dentro do if  dadosCli  ::> dadosSender',objetoCli[1]);
            console.log('objetoCli.dadosCli.isGroupMsg ::>  ',objetoCli[0].isGroupMsg);
            return;
        }else{
            
            console.log('meu objeto cliente dentro do ELSE  dadosCli  ::> dadosCli',objetoCli[0]);
            console.log('meu objeto cliente dentro do ELSE  dadosCli  ::> dadosSender',objetoCli[1]);
            console.log('objetoCli.dadosCli.isGroupMsg ::>  ',objetoCli[0].isGroupMsg);
            // console.log('Mensagem digitada pelo usuário:' + message.body);
            // cliente.sendText(message.from, 'PING! Mande um PONG para mim:')
            //     .then((res) => {
            //         console.log('SUCESSO!: ', res );
            //     })
            //     .catch((error) => {
            //         console.log('ERRO: ', error);
            //     });
        }
       
    });
}