*COMO CRIAR UM CHAT BOT (ROBO) PARA O WHATSAPP*

[1º-] Crie uma pasta e dentro dela crie um arquivo *JAVASCRIPT*, ([exemplo] *robo.js*).
[2º-] Em seguida abra o [prompt] [de] [comando] apontando para a pasta que acabou de criar e execulte o comando *npm init*{
    (esse comando irá criar uma arquivo chamado [package.json] )
    (ele é o arquivo que salva as bibliotecas e diretorios instalado no seu sistema),
    (nele tembem fica armasenado os dados do seu projeto como [nome-do-projeto], [quem-criou] [version] etc..),
} 
[3º-] Ainda no [prompt] [de] [comando] execulte o comando *npm i --save @wppconnect-team/wppconnect*{
    (ele é o responsavel para se conectar com a *API* do WhatsApp)
}.
[4º-] No seu *arquivo.js* criado chame a biblioteca do wppconnect (exemplo) *const wppconnect = require('@wppconnect-team/wppconnect');*
[5º-] Segue agora um comando padrão para conexão com a AIP{
    wppconnect.create({ *<- aquie estamos criando a conexão com a API do WhatsApp*
        session: 'session', 
        puppeteerOptions: { args: ['--no-sandbox']} *<- ela possue dois parametro o (session) e o (puppeteerOptions)*
    })
    .then((cliente) => suaFunçãoAqui(ParametroDaFunção)) *<- caso a conexão tenha sucesso ira execultar uma função criada por vc*
    .then((err) => console.log(err)); *<- caso contrario dará erro e o console.log irá mostar o erro*
}
[6º-] Segue agora um exemplo de função{
    function ssuaFunçãoAqui(ParametroDaFunção) *<- inicio da função com um parametro que irá receber o valor que vem da conexão realizada*
    {
        ParametroDaFunção.onMessage((message) => { *<- utilize o parametro da suafução junto com o (onMessage) pois irá receber a mensagem que foi enviada pra vc*
            console.log(message);
            console.log('Mensagem digitada pelo usuário:' + message.body);*<- escreva a mensagem utilizando o .body*
            cliente.sendText(message.from, 'PING! Mande um PONG para mim:')*<- aqui vc irá escrever sua resposta a quem enviu a mensagem*
                .then((res) => {
                    console.log('SUCESSO!: ', res );*<- se de sucesso ira cair aqui*
                })
                .catch((error) => {
                    console.log('ERRO: ', error); *<- se não cai aqui*
                });
        });
    }
}
[7º-] Apos feito isso no seu  [prompt] [de] [comando] execulte o comando *node nome_do_seu_aqruivo.js*.