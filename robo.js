const wppconnect = require('@wppconnect-team/wppconnect');


let userStages = [];
let objetoCli = [];

wppconnect.create({
    session: 'session',
    puppeteerOptions: { args: ['--no-sandbox']}
})
    .then((cliente) => start(cliente))
    .then((err) => console.log(err));


function start(cliente)
{
    
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
            // console.log('meu objeto cliente dentro do if  dadosCli  ::> dadosCli',objetoCli[0]);
            // console.log('meu objeto cliente dentro do if  dadosCli  ::> dadosSender',objetoCli[1]);
            return;
        }else{
            // console.log('meu objeto cliente dentro do ELSE  dadosCli  ::> dadosCli',objetoCli[0]);
            // console.log('meu objeto cliente dentro do ELSE  dadosCli  ::> dadosSender',objetoCli[1]);
            console.log('Mensagem enviada pelo usuário:' + objetoCli[0].body);
            stage(objetoCli,objetoCli[0].body);            
        }
       
    });
}

function stage(cl,msn)
{
    stage = userStages[msn.from];
    console.log('cl',cl);
    console.log('msn',msn);
    switch( stage ){
        case 'Nome':
            const nome = msn.body;
            sendWppMessage(msn, cl.from, `
                 Olá sou o *Rinogahr* ! *CHATBOT* de Rodrigo Maciel,
                 no momento o senhor Rodrigo está muito ocupado e possa ser que não te responda,
                 por favor se for muito importante mesmo digite *é caso de vida ou morte*.` );
                 userStages[msn.from] = 'é caso de vida ou morte';
                 break;
    }
    // cl.sendText(objetoCli.from, );
}