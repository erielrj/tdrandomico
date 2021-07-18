let itens = (`2 elites Re-role o Dado
N.I
Caçador - Local com sangue e carne e ossos
Comedora de miolos - casa com rastros de sangue e cabeças humanas em locais diversos espalhados na casa
Nada
Bebemorf - Zumbis de barriga inchada. outros com a barriga aberta
Foice Humana - Corpos fatiados espalhados pelo local
Engocorp - Casa com uma mancha de sangue que leva ate o banheiro. Banheira ou Box com uma bolha enorme. Feito com tendões Humanos pele e Ossos
Explosivo - Local com um liquido verde musgo espalhado entre corpos
Mutak - Casa com um grande buraco na entrada. pedaços de Brinquedos e coisas que Brilham ou Refletem a luz
Nada
Begosm - Zumbis com a barrigas cheias de bolhas pulsando
Lingua - Casa com pegadas de sangue e gotas que acompanha
Pùdrido - Local escuro cheio de moscas. Janelas. Cortina. Portas Fechadas
Maria martelinho - casa com marcas de batidas e partes quebradas. corpos com cranio afundado
Nada
Infeccioso - Sangue coagulado e vermes pelo chão
Paratum - casa com muito lixo e sujeira
Arakna - Casa com Teias. e Cabeças penduradas e Ninho de aranhas
Nada
Grito - Casa com corpos presos nas paredes e teto
Cães Infectados - casa com muitos ossos ruidos e sujo com liquido viscoso
1D6 N.I
N - Vermes gordos em cadaveres aparentemente frescos e retorcidos
Nada
3 Caçador Noturno
Casa completamente escura 2d6 Criaturas ao dia. a noite Vazia 
3 Criadora - corpos pelo chão que se levantam com o toque
3 N.I
3 Bocarra - Casa com Corpos Faltando pedaços. Em cantos carne e ossos mastigados em decomposição 
Nada
2D6 Casa ocupada, por sobrevive ou + %
Zumbi dentro do Guarda roupas
Saida de zumbis na entra Surpreende Protagonistas
Zumbis saindo de outro cômodo atacam os sobreviventes
Zumbie no armário na cozinha
Zombies na casa queda de parede
Zumbis caindo da um telhado ou lage
Nada
Zumbis presos em uma sala na casa,
se alguém chegar perto da porta.
Jogar 1d6x2 zumbis presos ataca os PJs
Zumbi escondido em baixo da cama.
Zumbi no banheiro escuro quieto, só ataca se alguém ligar a luz.
Zumbi em cima do guarda Roupas.
Zumbi criança dentro de uma cazinha de cachorro.
Zumbi parado na entrada esperando os jogadores entrarem.
Nada
Na saída dos sobreviventes, jogar 1d6x2 zumbis na saída do local
Zumbis quebrando janelas para atacar os sobreviventes 1d6x2
Elite aparece no local onde está os sobreviventes jogar qual elite?
Zumbis encurralando sobreviventes no local.
Zumbi ataca escondido em escombros
Zumbi escondido em baixo da pia atrás da cortina
Nada
Zumbis na casa.1d6x3 casa com água potável. 1D6x2 garrafas 600ml.
Zumbis  com armas de fogo. Jogar em armas.
Granada Remota ate 10 minutos de detonação
Rifle de Precisão 
Munição 9mm 1d6x10
Mini pistola 2 Tiros
Uzi (macaquinha)
Pistola 9mm 1D6 par com ou impar sem Rajada
Nada
Granada de fragmentos.
Revolver 38
Munição de lança granadas 1d6.
Munição de borracha 1D6x10
Granada de Fumaça.
Munição 9mm 1d6x10
Nada
Fuzil 762 
Mina antipersona (Retangula acionamento com fio).
Munição de 38 1d6x6
Caixa com fogos 12tiros 1d6x2.
Munição de Fizil 1D6x10
Grana de som.
Nada
Munição de metralhadora 1d6x10
Caixa com bombinhas 25 unidades
Explosivo plástico.
Sub-metralhadora
Deserte Pistola de grosso calibre
lança Granadas.
Nada
Arma ou Munição a escolha do jogador
Caixa de munição Metralhadora 1d6x10
Granada de luz.
Sinalizador 1D6 Impa Bastão Par pistola 1d6 munições.
RPG lança foguete.
Ponto 30 Par com 1d6x10 minução Impar sem
Nada
Dinamite.
Municão de 12 1d6x5
Shotgum 12 1d6 impar manual par automática
Munição ponto 50 1d6x2
Sniper ponto 50
Arcenal de armas e munições e explosivos 1 item de cada da lista`).split('\n');

function randomizar(){
    let res = document.querySelector('#resultado');
    numeroaleatorio = Math.round((Math.random() * 98));
    res.innerHTML = itens[numeroaleatorio];
}

















let elites = `
2 elites Re-role o Dado
N.I
N.I
Caçador - Local com sangue e carne e ossos
N.I
Comedora de miolos - casa com rastros de sangue e cabeças humanas em locais diversos espalhados na casa
Nada
Bebemorf - Zumbis de barriga inchada. outros com a barriga aberta
Foice Humana - Corpos fatiados espalhados pelo local
Engocorp - Casa com uma mancha de sangue que leva ate o banheiro. Banheira ou Box com uma bolha enorme. Feito com tendões Humanos pele e Ossos
Explosivo - Local com um liquido verde musgo espalhado entre corpos
Mutak - Casa com um grande buraco na entrada. pedaços de Brinquedos e coisas que Brilham ou Refletem a luz
N.I
Nada
N.I
Begosm - Zumbis com a barrigas cheias de bolhas pulsando
Lingua - Casa com pegadas de sangue e gotas que acompanha
Pùdrido - Local escuro cheio de moscas. Janelas. Cortina. Portas Fechadas
N.I
Maria martelinho - casa com marcas de batidas e partes quebradas. corpos com cranio afundado
Nada
N.I
Infeccioso - Sangue coagulado e vermes pelo chão
Paratum - casa com muito lixo e sujeira
N.I
Arakna - Casa com Teias. e Cabeças penduradas e Ninho de aranhas
N.I
Nada
Grito - Casa com corpos presos nas paredes e teto
N.I
Cães Infectados - casa com muitos ossos ruidos e sujo com liquido viscoso
1D6 N.I
N - Vermes gordos em cadaveres aparentemente frescos e retorcidos
N.I
Nada
3 N.I
3 Caçador Noturno
Casa completamente escura 2d6 Criaturas ao dia. a noite Vazia 
3 N.I
3 Criadora
corpos pelo chão que se levantam com o toque
3 N.I
3 Bocarra
Casa com Corpos Faltando pedaços. Em cantos carne e ossos mastigados em decomposição 
Nada
2D6 Casa ocupada, por sobrevive ou + %
`