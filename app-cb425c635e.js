
/* mudança de endereço: o site antigo (diogoparatic-beep.github.io) leva os dados guardados no telemóvel para o novo */
(function(){
  const NEW="https://duelodeonzes.github.io/";
  try{const m=location.hash.match(/^#mig=([A-Za-z0-9_\-]+)/);
    if(m){const js=decodeURIComponent(escape(atob(m[1].replace(/-/g,"+").replace(/_/g,"/"))));const o=JSON.parse(js);
      Object.keys(o).forEach(k=>{if(/^duelo/.test(k)&&localStorage.getItem(k)==null)localStorage.setItem(k,o[k])});
      const rest=location.hash.replace(/^#mig=[A-Za-z0-9_\-]+&?/,"");history.replaceState(null,"",location.pathname+location.search+(rest?"#"+rest:""))}}catch(e){}
  if(location.hostname!=="diogoparatic-beep.github.io")return;
  fetch(NEW+"move.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).then(j=>{if(!j||!j.ok)return;
    const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(/^duelo/.test(k)&&k!=="duelo_reports")o[k]=localStorage.getItem(k)}
    let js=JSON.stringify(o);if(js.length>150000){delete o.duelo_hist;js=JSON.stringify(o)}
    const b=btoa(unescape(encodeURIComponent(js))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
    const sala=(location.hash.match(/sala=[A-Za-z]{4}/)||[])[0];location.replace(NEW+(location.search||"")+"#mig="+b+(sala?"&"+sala:""))}).catch(()=>{});
})();
/*I18N_START*/
/* ---- língua: PT/EN. Só se traduz o que aparece no ecrã; a lógica do jogo fica igual nos dois telemóveis ---- */
const LANG=(()=>{try{const v=JSON.parse(localStorage.getItem("duelo_lang"));if(v==="pt"||v==="en")return v}catch(e){}return /^pt/i.test(navigator.language||"")?"pt":"en"})();
const I18N={"d":{"(tu)":"(you)","Abre o marcador!":"Opens the scoring!","Bónus: formação preferida do treinador.":"Bonus: coach's preferred formation.","Cada um escolhe às escondidas.":"Each one picks in secret.","Contra-ataque mortal!":"Deadly counter-attack!","Está tudo empatado!":"All square!","Golo da vitória mesmo no fim!":"Late winner!","Reviravolta! Passa para a frente.":"Comeback! They go in front.","fechar o mercado).":"close the market).","★ preferida":"★ preferred","(fraquinho).":"(a weak one).","(só portugueses, só lendas, geração atual…) e o":"(Portuguese only, legends only, current generation…) and the","). Tenta outra vez.":"). Try again.","+ Adicionar bot":"+ Add bot",". A equipa mais forte (rating, química, capitão e tática) fica com":". The stronger team (rating, chemistry, captain and tactics) gets",". A preferida do treinador dá um pequeno bónus.":". The coach's preferred one gives a small bonus.",". Quanto maior a química, mais forte jogam todos os setores: até":". The higher the chemistry, the stronger every line plays: up to","1.ª volta":"1st half of the season","11 rondas: cada ronda tem uma regra, como \"Jogou no FC Porto\" ou \"Brasileiro\". Toca numa posição vaga do teu onze e":"11 rounds: each round has a rule, like \"Played for FC Porto\" or \"Brazilian\". Tap an empty position in your XI and","2.ª volta":"2nd half of the season","4 ou 5":"4 or 5","4 ou 8 treinadores":"4 or 8 coaches","4 treinadores":"4 coaches","50 ou mais jogos pela seleção":"50 or more caps","7 lances decisivos":"7 decisive moments","8 treinadores":"8 coaches",": se quem defende não adivinhar, é golo; se adivinhar, não é.":": if the defender doesn't guess right, it's a goal; if they do, it isn't.","A BARRA ESTREMECE!":"THE BAR SHAKES!","A barreira salta":"The wall jumps","A barreira trava!":"The wall blocks it!","A carregar…":"Loading…","A começar…":"Starting…","A contratar…":"Signing…","A decidir…":"Deciding…","A enviar…":"Sending…","A equipa soma os pontos dos 11 jogadores, num máximo de":"The team adds up the points of its 11 players, up to","A escolha conta e não perdes a tentativa.":"The pick counts and you don't lose the attempt.","A ligação caiu. A voltar a ligar…":"Connection lost. Reconnecting…","A química da equipa vale a dobrar.":"The team's chemistry counts double.","A religar aos outros telemóveis…":"Reconnecting to the other phones…","A época só funciona no site do jogo, com internet.":"Seasons only work on the game's website, with internet.","Acabaram as tentativas.":"Out of attempts.","Aceitar":"Accept","Afasta de cabeça!":"Heads it clear!","Agarra a bola!":"Holds on to it!","Agressivo a defender e no meio-campo.":"Aggressive in defence and midfield.","Ainda não há escolhas neste jogo. Podes escrever o erro em baixo.":"No picks in this game yet. You can describe the error below.","Ainda não há jogos nesta liga. Os jogos contam quando a liga está ligada ao criar o jogo.":"No games in this league yet. Games count when the league is linked when the game is created.","Ainda não há época a decorrer.":"No season in progress yet.","Ainda não jogaste contra o bot.":"You haven't played the bot yet.","Amigo ou bot, aqui":"Friend or bot, right here","Ao 1.º poste":"Near post","Ao 2.º poste":"Far post","Ao criar o jogo podes escolher um":"When you create the game you can choose a","Ao meio":"Down the middle","Ao poste do GR":"At the keeper's post","Ao poste do guarda-redes":"At the goalkeeper's post","Ao poste do guarda-redes…":"At the goalkeeper's post…","Ao primeiro poste":"To the near post","Ao segundo poste":"To the far post","Apagar histórico":"Delete history","Apito inicial":"Kick-off","Aqui no Claude, o modo online precisa de conta do Claude e de convite. Para jogar sem conta, usa a versão independente do jogo.":"Here in Claude, online mode needs a Claude account and an invite. To play without an account, use the standalone version of the game.","Argélia":"Algeria","Arrisca!":"Go for it!","Ataca com tudo, mas deixa espaço nas costas.":"All-out attack, but leaves space behind.","Ataque pelas alas":"Wing play","Atirar-se ao chão":"Dive to the ground","Até 3 trocas no jogo todo (intervalo e 60'). Quem sai já não volta. Toca num suplente e depois no jogador que sai.":"Up to 3 subs in the whole game (half-time and 60'). Players who go off can't come back. Tap a substitute and then the player going off.","Até 3 trocas: sai um jogador do teu plantel e entra um jogador livre que cumpra a regra dessa troca, para a mesma posição (ou para o banco). Quem confirmar primeiro fica com o jogador. A 2.ª volta começa quando todos terminarem (ou quando":"Up to 3 swaps: one player leaves your squad and a free player who meets that swap's rule comes in, for the same position (or the bench). Whoever confirms first gets the player. The 2nd half of the season starts when everyone is done (or when","Avançados":"Forwards","BALNEÁRIO":"DRESSING ROOM","BATE NO POSTE!":"OFF THE POST!","BLOQUEADO!":"BLOCKED!","Baliza aberta…":"Open goal…","Baliza escancarada…":"Gaping goal…","Banco:":"Bench:","Bem-vindo":"Welcome","Bloco baixo":"Low block","Bloqueado!":"Blocked!","Boa escolha":"Good pick","Bola em profundidade!":"Ball over the top!","Bola na área…":"Ball into the box…","Bola para a área…":"Ball into the box…","Bolívia":"Bolivia","Bomba de fora da área!":"Thunderbolt from outside the box!","Bulgária":"Bulgaria","Burkina Faso":"Burkina Faso","Bélgica":"Belgium","CORTADO!":"CUT OUT!","CORTE DECISIVO!":"VITAL BLOCK!","Cabo Verde":"Cape Verde","Cada jogador do teu onze ganha pontos de química, até":"Each player in your XI earns chemistry points, up to","Cada jogo tem":"Each game has","Cada treinador monta o seu onze à vez, com as mesmas regras em cada ronda. Depois há eliminatórias até à final. O sorteio do quadro é feito no início.":"Each coach builds their XI in turn, with the same rules each round. Then knockout rounds up to the final. The bracket is drawn at the start.","Cada um abre este jogo no seu telemóvel, com internet. Quem cria recebe um código de 4 letras e pode partilhar o link do jogo; o outro abre o link ou escreve o código. Não é preciso conta.":"Everyone opens this game on their own phone, with internet. The creator gets a 4-letter code and can share the game link; the other opens the link or types the code. No account needed.","Cada um escolhe um":"Each one picks a","Cada um escolhe às escondidas. Podes mudar a formação e a atitude. Atacar: mais ocasiões, mas deixa espaço atrás. Fechar: segura o resultado, mas cria menos.":"Each one picks in secret. You can change the formation and the approach. Attack: more chances, but leaves space behind. Shut up shop: protects the result, but creates less.","Cada um no seu telemóvel":"Each on their own phone","Cada um usa o seu telemóvel. Quem cria o jogo recebe um código de 4 letras para dar aos amigos.":"Everyone uses their own phone. Whoever creates the game gets a 4-letter code to give to friends.","Camarões":"Cameroon","Campeão da Europa pela seleção":"European champion with the national team","Campeão da época":"Season champion","Campeão do Mundo":"World champion","Campeão em Espanha":"Champion in Spain","Campeão em França":"Champion in France","Campeão em Inglaterra":"Champion in England","Campeão em Itália":"Champion in Italy","Campeão em dois países diferentes":"Champion in two different countries","Campeão na Alemanha":"Champion in Germany","Campeão nacional em Portugal":"League champion in Portugal","Campeões":"Champions","Campeões de torneios":"Tournament champions","Capitão":"Captain","Centro tenso…":"Whipped cross…","Chéquia":"Czechia","Classificação":"Standings","Colômbia":"Colombia","Combinação rápida!":"Quick combination!","Começar":"Start","Começar a primeira época":"Start the first season","Começar a época (draft)":"Start the season (draft)","Começar o draft da época":"Start the season draft","Começar o jogo":"Start the game","Começar o torneio":"Start the tournament","Como bates o livre?":"How do you take the free kick?","Como defende o teu guarda-redes?":"How does your goalkeeper defend?","Como defendes o livre?":"How do you defend the free kick?","Como defendes?":"How do you defend?","Como finalizas?":"How do you finish?","Como jogar":"How to play","Como te chamas? É o nome que os amigos vão ver (e o da liga).":"What's your name? It's the name your friends will see (and the league's).","Confirmar":"Confirm","Confirmar capitão":"Confirm captain","Confrontos":"Head-to-head","Continua a escrever…":"Keep typing…","Continuar o jogo":"Continue the game","Contra":"Against","Contra o bot":"Against the bot","Contra-ataque":"Counter-attack","Contra-ataque!":"Counter-attack!","Contra-golpe!":"On the break!","Convidar amigos":"Invite friends","Convite copiado. Cola-o no WhatsApp.":"Invite copied. Paste it into WhatsApp.","Copiado. Cola na conversa com o Diogo.":"Copied. Paste it in the chat with Diogo.","Copiar para enviar ao Diogo":"Copy to send to Diogo","Copiar resumo para o WhatsApp":"Copy summary for WhatsApp","Coreia do Sul":"South Korea","Corta a linha de passe":"Cut the passing lane","Cortado!":"Cut out!","Cortar a linha de passe":"Cut the passing lane","Costa do Marfim":"Ivory Coast","Craque!":"Star!","Criar duelo (2)":"Create duel (2)","Criar liga":"Create league","Croácia":"Croatia","Cruzamento para a área…":"Cross into the box…","Cruzamento rasteiro!":"Low cross!","Cruzamento venenoso…":"Dangerous cross…","Cruzamento!":"Cross!","Cumpre!":"Valid!","CÓDIGO":"CODE","Código":"Code","Código do jogo":"Game code","DEFENDE!":"SAVED!","DIR.":"R.","DUELO DE ONZES":"XI DUEL","Dados: Wikidata e Wikipédia (CC BY-SA)":"Data: Wikidata and Wikipedia (CC BY-SA)","Decide!":"Decide!","Defende compacto e mata em transições quando o adversário tem a bola.":"Defends compactly and kills on the transition when the opponent has the ball.","Defende… e há recarga!":"Saved… and there's a rebound!","Definições":"Settings","Deixa o defesa no chão!":"Leaves the defender on the floor!","Desforra":"Rematch","Domina o meio-campo e controla o ritmo do jogo.":"Dominates midfield and controls the tempo.","Drible de mestre!":"Masterful dribble!","Duelo de":"XI","Duelo de Onzes":"XI Duel","Dá este código ao teu adversário. À espera que ele entre…":"Give this code to your opponent. Waiting for them to join…","E agora?":"What now?","ESQ.":"L.","Em baixo à direita":"Low to the right","Em baixo à esquerda":"Low to the left","Em cada ronda começa a escolher um treinador diferente, à vez. Há um":"Each round a different coach picks first, in turn. There's a","Em cada ronda há uma regra nova (\"Jogou no Benfica\", \"Canhoto\"…). Escreve um jogador que a cumpra.":"Each round has a new rule (\"Played for Benfica\", \"Brazilian\"…). Type a player who meets it.","Em cima (ângulos): quase impossível de defender, mas podes falhar. Em baixo: mais seguro. Meio: só resulta se o guarda-redes se atirar.":"Top (corners): almost impossible to save, but you might miss. Low: safer. Middle: only works if the keeper dives.","Empate! Cada equipa leva um ponto.":"Draw! Each team takes a point.","Empate. Vamos para os penáltis! Cada penálti é decidido por vocês.":"Draw. Penalties it is! Each penalty is decided by you.","Entra o júnior":"The youth player comes in","Entrar":"Join","Enviado ✓":"Sent ✓","Enviar":"Send","Equilíbrio":"Balance","Erros no Duelo de Onzes:\\n":"Errors in XI Duel:\\n","Erros reportados neste telemóvel":"Errors reported on this phone","Escolha livre":"Free pick","Escolha sólida":"Solid pick","Escolhe a zona que vais cobrir. Se fores para o lado certo, ainda podes chegar à bola.":"Choose the zone you'll cover. If you go the right way, you can still reach the ball.","Escolhe bons jogadores, mas nem sempre o melhor":"Picks good players, but not always the best","Escolhe jogadores medianos e às vezes engana-se":"Picks average players and sometimes gets it wrong","Escolhe o capitão":"Choose the captain","Escolhe o treinador":"Choose the coach","Escolhem a":"They choose the","Escolheste:":"You picked:","Escreve o nome":"Type the name","Escreve o nome do jogador":"Type the player's name","Escreve o teu nome.":"Type your name.","Escreve primeiro o que está mal.":"First write what's wrong.","Eslovénia":"Slovenia","Espreitar os outros onzes":"Peek at the other XIs","Espírito de família":"Family spirit","Estatísticas do jogo":"Match stats","Estrangeiro que jogou em Portugal":"Foreign player who played in Portugal","Está errado?":"Is it wrong?","Excelente escolha":"Excellent pick","Extremos rápidos e cruzamentos para a área.":"Fast wingers and crosses into the box.","FALHOU!":"MISSED!","FORA DE JOGO! Golo anulado":"OFFSIDE! Goal disallowed","Faltam jogadores? Junta bots":"Short of players? Add bots","Faz até 3 trocas antes da 2.ª volta.":"Make up to 3 swaps before the 2nd half of the season.","Fazer esta troca":"Make this swap","Fecha o remate":"Block the shot","Fechar":"Shut up shop","Fechar o mercado para todos":"Close the market for everyone","Fechar o remate":"Block the shot","Feito":"Done","Fica a valer a regra.":"The rule stands.","Fica ao meio":"Stays in the middle","Ficar em pé":"Stay on his feet","Fichas de jogo":"Match reports","Finta o GR":"Round the keeper","Fintar o guarda-redes":"Round the goalkeeper","Formação":"Formation","Força das equipas":"Team strength","Força total":"Total strength","Fraca: menos de 7 · Razoável: 7 a 14 · Boa: 15 a 22 · Excelente: 23 ou mais.":"Weak: under 7 · Fair: 7 to 14 · Good: 15 to 22 · Excellent: 23 or more.","França":"France","Futebol entre amigos":"Football among friends","Futebol ofensivo":"Attacking football","Fácil":"Easy","GOLAÇO!":"WONDER GOAL!","GOLO!":"GOAL!","GOLO, GOLO, GOLO!":"GOAL, GOAL, GOAL!","GOLOOO!":"GOOOAL!","GR atira-se ao chão":"Keeper dives to the ground","GR cobre o poste":"Keeper covers the post","GR fica em pé":"Keeper stays on his feet","GR sai aos pés":"Keeper rushes out","Gabão":"Gabon","Ganhou a Bola de Ouro":"Won the Ballon d'Or","Ganhou a Liga Europa (ou Taça UEFA)":"Won the Europa League (or UEFA Cup)","Ganhou a Liga dos Campeões":"Won the Champions League","Geração 80–94":"Generation 80–94","Geração 80–94 (nascidos entre 1980 e 1994)":"Generation 80–94 (born 1980 to 1994)","Geração atual":"Current generation","Geração atual (nascidos em 1995 ou depois)":"Current generation (born 1995 or later)","Gestão de estrelas":"Star management","Geórgia":"Georgia","Golos:":"Goals:","Grécia":"Greece","Guarda-redes":"Goalkeepers","Guardado neste telemóvel. Em Definições podes copiá-lo para enviar ao Diogo.":"Saved on this phone. In Settings you can copy it to send to Diogo.","Guardado ✓":"Saved ✓","Guiné":"Guinea","Guiné Equatorial":"Equatorial Guinea","Guiné-Bissau":"Guinea-Bissau","Gâmbia":"Gambia","Histórico":"History","Hmm… havia melhor":"Hmm… there was better","Homem do jogo":"Man of the match","Há dois treinadores com o mesmo nome. Na época cada um tem de ter um nome diferente (mudem em 'O teu nome').":"Two coaches have the same name. In a season each one needs a different name (change it in 'Your name').","Imagem guardada. Envia-a pelo WhatsApp a partir das tuas fotos/transferências.":"Image saved. Send it on WhatsApp from your photos/downloads.","Intervalo · Substituições":"Half-time · Substitutions","Intervalo · o que muda para a 2.ª parte?":"Half-time · what changes for the 2nd half?","Ir ao mercado":"Go to the market","Irlanda do Norte":"Northern Ireland","Irão":"Iran","Itália":"Italy","Japão":"Japan","Joga com os amigos":"Play with your friends","Jogar online":"Play online","Jogaram em Portugal":"Played in Portugal","Jogo do 3.º lugar":"3rd place play-off","Jogo online":"Online game","Jogo online a meio":"Online game in progress","Jogo rápido":"Quick game","Jogou em Espanha":"Played in Spain","Jogou em França":"Played in France","Jogou em Inglaterra":"Played in England","Jogou em Inglaterra e em Espanha":"Played in England and Spain","Jogou em Itália":"Played in Italy","Jogou em Itália e em Espanha":"Played in Italy and Spain","Jogou em Portugal":"Played in Portugal","Jogou em Portugal e em Espanha":"Played in Portugal and Spain","Jogou em Portugal e em Inglaterra":"Played in Portugal and England","Jogou em dois dos três grandes":"Played for two of Portugal's big three","Jogou na Alemanha":"Played in Germany","Jogou na Arábia Saudita":"Played in Saudi Arabia","Jogou na Grécia":"Played in Greece","Jogou na MLS":"Played in MLS","Jogou na Turquia":"Played in Turkey","Jogou nos Países Baixos":"Played in the Netherlands","Já decidiu (em segredo).":"Has decided (in secret).","Já decidiu.":"Has decided.","Já escolhido":"Already picked","Já não tens trocas.":"You have no swaps left.","Já terminaste o teu mercado. À espera dos outros…":"You've finished your market. Waiting for the others…","Júnior":"Youth","Júnior da formação":"Youth player","LONGE DO ALVO!":"WIDE OF THE TARGET!","Lenda":"Legend","Lenda!":"Legend!","Libéria":"Liberia","Liga":"League","Liga alemã":"German league","Liga do Balneário":"Dressing Room League","Liga dos amigos":"Friends' league","Liga e época:":"League and season:","Liga espanhola":"Spanish league","Liga inglesa":"English league","Liga italiana":"Italian league","Link copiado! Cola-o no WhatsApp":"Link copied! Paste it into WhatsApp","LÁ DENTRO!":"IN IT GOES!","Líbia":"Libya","Madagáscar":"Madagascar","Mais ocasiões, mas deixa espaço atrás":"More chances, but leaves space behind","Manter tudo igual":"Keep everything the same","Marca o 1.º poste":"Mark the near post","Marca o 2.º poste":"Mark the far post","Marcar o primeiro poste":"Mark the near post","Marcar o segundo poste":"Mark the far post","Mauritânia":"Mauritania","Mede 1,72 m ou menos":"1.72 m or shorter","Mede 1,90 m ou mais":"1.90 m or taller","Meias-finais":"Semi-finals","Meio-campo":"Midfield","Mercado aberto":"Market open","Mercado de transferências":"Transfer market","Mercado de transferências aberto":"Transfer market open","Modo fácil: mostrar a lista de jogadores possíveis":"Easy mode: show the list of possible players","Momento decisivo…":"Decisive moment…","Monta o teu onze":"Build your XI","Mostrar a qualidade dos jogadores durante a escolha":"Show player quality while picking","Moçambique":"Mozambique","Mudar":"Change","Muito difícil de furar, mas cria pouco.":"Very hard to break down, but creates little.","Médio":"Medium","Médios":"Midfielders","México":"Mexico","NA BARRA!":"OFF THE BAR!","NA TRAVE!":"OFF THE CROSSBAR!","NO FERRO!":"OFF THE WOODWORK!","Nasceu em 2000 ou depois":"Born in 2000 or later","Nasceu nos anos 80":"Born in the 80s","Nasceu nos anos 90":"Born in the 90s","Nasceu num país diferente do que representa":"Born in a different country from the one he represents","Nenhum jogador desta posição cumpre a regra. Experimenta outra posição.":"No player in this position meets the rule. Try another position.","Nenhum jogador livre com esse nome para esta posição.":"No free player with that name for this position.","Nigéria":"Nigeria","No jogo,":"In the game,","No mesmo telemóvel, online, em torneios ou numa liga com épocas, draft e mercado.":"On the same phone, online, in tournaments or in a league with seasons, draft and transfer market.","Nome da liga":"League name","Nome da liga (ex.: Liga do Balneário)":"League name (e.g. Dressing Room League)","Nos lances de perigo, quem ataca e quem defende escolhem às escondidas. Se o defesa não adivinhar, é golo.":"In the dangerous moments, attacker and defender choose in secret. If the defender doesn't guess right, it's a goal.","Notas dos jogadores":"Player ratings","Nova época":"New season","Novo jogo":"New game","Não cumpre":"Doesn't meet the rule","Não foi possível criar a imagem.":"Couldn't create the image.","Não foi possível entrar no jogo (":"Couldn't join the game (","Não foi possível gravar.":"Couldn't save.","Não foi possível ler a liga. A liga só funciona no site do jogo, com internet.":"Couldn't read the league. Leagues only work on the game's website, with internet.","Não sei, mete um júnior da formação":"I don't know, bring in a youth player","Não tens equipa nesta época.":"You don't have a team this season.","Nível do bot":"Bot level","Nível dos bots":"Bots' level","O POSTE SALVA!":"THE POST SAVES IT!","O bot aceita":"The bot accepts","O bot recusa":"The bot refuses","O capitão ganha +4 de qualidade e puxa pela equipa toda. Toca num jogador.":"The captain gets +4 quality and lifts the whole team. Tap a player.","O código da liga tem 5 letras/números.":"The league code has 5 letters/numbers.","O código tem 4 letras.":"The code has 4 letters.","O guarda-redes cobre o poste":"The goalkeeper covers the post","O guarda-redes fica com a bola!":"The goalkeeper gathers it!","O jogo ainda não começou (estão no balneário). Fica aqui que entra sozinho quando começar.":"The game hasn't started yet (they're in the dressing room). Stay here and it starts by itself.","O meu perfil":"My profile","O que fazes?":"What do you do?","O que muda na tua equipa?":"What changes in your team?","O teu nome":"Your name","O teu nome (igual em todos os jogos e na liga)":"Your name (same in every game and in the league)","Obrigado! O erro ficou registado.":"Thanks! The error has been logged.","Onde fazes a marcação?":"Where do you mark?","Onde metes a bola?":"Where do you put the ball?","Onzes":"Duel","Opções do jogo":"Game options","Os craques com qualidade 90 ou mais rendem ainda mais.":"Stars rated 90 or more perform even better.","Os golos decides tu":"You decide the goals","Os jogos novos contam para esta liga":"New games count for this league","Os losangos por baixo de cada jogador no campo mostram os pontos dele.":"The diamonds under each player on the pitch show their points.","Outro erro (escreve o que está mal)":"Another error (write what's wrong)","PARA FORA!":"OUT OF PLAY!","PENÁLTI":"PENALTY","Para onde vai o canto?":"Where does the corner go?","Partilhar link do jogo":"Share game link","Passa por ele como quer!":"Goes past him at will!","Passaram por Benfica, Porto ou Sporting":"Played for Benfica, Porto or Sporting","Passe a rasgar!":"Defence-splitting pass!","Passe atrasado…":"Ball played back…","Passe de rutura!":"Through ball!","Passe para a área…":"Pass into the box…","Passe para o lado…":"Sideways pass…","Passe para o meio…":"Pass into the middle…","Passe teleguiado!":"Pinpoint pass!","País de Gales":"Wales","Países Baixos":"Netherlands","Penáltis 0–0":"Penalties 0–0","Perfil e definições":"Profile and settings","Pica a bola":"Chip it","Picar a bola":"Chip the ball","Plantel ainda não gravado.":"Squad not saved yet.","Plantéis prontos! A preparar a época…":"Squads ready! Preparing the season…","Polónia":"Poland","Por cima da barreira":"Over the wall","Por cima da barreira…":"Over the wall…","Português que jogou no estrangeiro":"Portuguese player who played abroad","Posse de bola":"Possession","Pressão alta":"High press","QUE DEFESA!":"WHAT A SAVE!","QUE PERDIDA!":"WHAT A MISS!","Quadro do torneio":"Tournament bracket","Qualquer um dos dois pode dar o apito inicial. O jogo aparece igual nos dois telemóveis.":"Either of you can blow the whistle. The game looks the same on both phones.","Quantos treinadores?":"How many coaches?","Quartos de final":"Quarter-finals","Quase sempre o melhor disponível. Boa sorte.":"Almost always the best available. Good luck.","Que finta!":"What a dribble!","Que passe!":"What a pass!","Que pontapé!":"What a strike!","Que zona defendes?":"Which zone do you defend?","Quem bate?":"Who takes it?","Quem joga?":"Who's playing?","Quem sai?":"Who comes off?","Quénia":"Kenya","Química":"Chemistry","Química (de 33)":"Chemistry (out of 33)","Química:":"Chemistry:","RD Congo":"DR Congo","RESULTADO FINAL":"FULL TIME","Rasteiro à direita":"Low to the right","Rasteiro à esquerda":"Low to the left","Razoável":"Fair","Reclamação enviada":"Complaint sent","Recupera a bola perto da baliza adversária e cria mais ocasiões.":"Wins the ball back near the opponent's goal and creates more chances.","Recusar":"Refuse","Regra desta ronda":"This round's rule","Remata já!":"Shoot now!","Rematar já":"Shoot now","Rematar rasteiro":"Low shot","Remate de longe!":"Long-range shot!","Remate de primeira!":"First-time shot!","Remate rasteiro":"Low shot","Remate à barreira…":"Shot into the wall…","Remates à baliza":"Shots on target","Reportar um erro":"Report an error","República Centro-Africana":"Central African Republic","Resumo copiado. Cola-o no WhatsApp.":"Summary copied. Paste it into WhatsApp.","Roménia":"Romania","Sair":"Leave","Sair aos pés":"Rush out","Sair da liga":"Leave the league","Sair desta liga neste telemóvel? Os resultados ficam guardados.":"Leave this league on this phone? The results stay saved.","Sair e voltar ao quadro":"Leave and go back to the bracket","Sair e voltar à liga":"Leave and go back to the league","Saltar para o fim":"Skip to the end","Saída rápida!":"Quick break!","Se o jogo disse que um jogador não cumpre a regra e cumpre (ou o contrário), toca no caso. Eu vejo a lista e corrijo.":"If the game said a player doesn't meet the rule and he does (or the other way round), tap the case. I'll check the list and fix it.","Se o tempo acabar, entra um júnior da formação: primeiro para o banco e, se o banco estiver cheio, para um lugar vago do onze, à sorte. Online vale o tempo de quem cria o jogo.":"If time runs out, a youth player comes in: first to the bench and, if the bench is full, to a random empty spot in the XI. Online, the game creator's time applies.","Segura o resultado, cria menos":"Protects the result, creates less","Seleciona o texto e copia-o.":"Select the text and copy it.","Sem pensar duas vezes!":"No second thoughts!","Sem pontos fracos: todos os setores um pouco melhores.":"No weak spots: every line a little better.","Sem substituições.":"No substitutions.","Sem tempo":"No time limit","Sem troca.":"No swap.","Sem trocas":"No swaps","Sentou o defesa!":"Sat the defender down!","Serra Leoa":"Sierra Leone","Som (apito e golos)":"Sound (whistle and goals)","Sul-americano":"South American","Sul-americanos":"South Americans","Suécia":"Sweden","São Tomé e Príncipe":"São Tomé and Príncipe","Sérvia":"Serbia","Só africanos":"Africans only","Só campeões (Champions, Liga Europa, Mundial ou Europeu)":"Champions only (Champions League, Europa League, World Cup or Euros)","Só craques":"Stars only","Só craques (80 ou mais)":"Stars only (80 or more)","Só gigantes (1,85 m ou mais)":"Giants only (1.85 m or taller)","Só internacionais (50 ou mais jogos pela seleção)":"Internationals only (50 or more caps)","Só lendas":"Legends only","Só lendas (nascidos antes de 1980)":"Legends only (born before 1980)","Só portugueses":"Portuguese only","Só quem jogou em Espanha":"Only players who played in Spain","Só quem jogou em Inglaterra":"Only players who played in England","Só quem jogou em Itália":"Only players who played in Italy","Só quem jogou em Portugal":"Only players who played in Portugal","Só quem jogou na Alemanha":"Only players who played in Germany","Só sul-americanos":"South Americans only","Só tem de encostar…":"He just has to tap it in…","TRAVADO!":"STOPPED!","Tabela perfeita!":"Perfect one-two!","Tabelinha!":"One-two!","Tanzânia":"Tanzania","Tempo para cada escolha":"Time for each pick","Tens 3 tentativas. Se falhares, entra um":"You have 3 attempts. If you miss, in comes a","Tens a certeza que cumpre?":"Are you sure he meets it?","Tens a certeza? Toca outra vez para apagar":"Are you sure? Tap again to delete","Tenta de longe!":"Try from distance!","Tentar outro":"Try another","Tentativas":"Attempts","Terminaste o mercado. À espera dos outros…":"You've finished the market. Waiting for the others…","Terminei o mercado":"I'm done with the market","Tipo de draft":"Draft type","Tirar":"Remove","Toca numa posição vaga para escolher o jogador":"Tap an empty position to pick the player","Todos ficam nas suas posições.":"Everyone stays in position.","Torneio":"Tournament","Torneio de 4":"4-coach tournament","Torneio de 8":"8-coach tournament","Transição a toda a velocidade!":"Transition at full speed!","Treinador":"Coach","Treinador 1":"Coach 1","Treinador 2":"Coach 2","Trocas:":"Swaps:","Três grandes":"Big three","Tudo em aberto…":"Still all to play for…","Tudo igual":"All the same","Tunísia":"Tunisia","Ucrânia":"Ukraine","Um-dois!":"One-two!","Uma liga guarda os resultados de todos os vossos jogos (online, no mesmo telemóvel e torneios): classificação, títulos e confrontos diretos. Cria uma e partilha o código com os amigos.":"A league keeps the results of all your games (online, on the same phone and tournaments): standings, titles and head-to-head. Create one and share the code with your friends.","Uma liga junta os teus amigos: classificação, títulos, confrontos e épocas com draft, calendário e mercado de transferências.":"A league brings your friends together: standings, titles, head-to-head and seasons with draft, fixtures and transfer market.","União Soviética":"Soviet Union","Vais escolher":"You'll pick","Vamos jogar":"Let's play","Ver análise":"See analysis","Ver mercado":"See market","Vez de":"Turn:","Vitória 3 pontos · empate 1 · desempate: diferença de golos, golos marcados, confronto direto.":"Win 3 points · draw 1 · tiebreak: goal difference, goals scored, head-to-head.","Vitória 3 pontos · nos penáltis 2 (quem perde nos penáltis leva 1).":"Win 3 points · on penalties 2 (the penalty loser gets 1).","Voltar":"Back","Voltar ao campo":"Back to the pitch","Voltar ao meu onze":"Back to my XI","Voltar ao quadro":"Back to the bracket","Voltar à época":"Back to the season","Zimbabué":"Zimbabwe","Zâmbia":"Zambia","a escolher…":"picking…","a jogar…":"playing…","avançado":"forward","cada jogador ganha +1 por colega com quem passou pelo mesmo clube e +½ por colega do mesmo país (até 3). A equipa vai até 33 e química alta dá até +4 em todos os setores.":"each player gets +1 for each teammate he shared a club with and +½ for each teammate from the same country (up to 3). The team goes up to 33 and high chemistry gives up to +4 in every line.","deles; se as forças forem iguais, desempata a química.":"of them; if the teams are equal, chemistry breaks the tie.","depois da 1.ª volta":"after the 1st half of the season","draft temático":"themed draft","em 🏆 Liga criam uma liga e começam uma época. Há um draft único com todos, depois uma 1.ª volta (jogam quando quiserem), um mercado de transferências (até 3 trocas, cada uma com uma regra nova) e a 2.ª volta. Vitória 3, empate 1. Um vermelho deixa o jogador de fora no jogo seguinte.":"in 🏆 League you create a league and start a season. There's one draft with everyone, then a 1st half (play whenever you like), a transfer market (up to 3 swaps, each with a new rule) and the 2nd half. Win 3, draw 1. A red card rules the player out of the next game.","falta tática":"tactical foul","falta à entrada da área":"foul on the edge of the box","formação":"formation","júnior da formação":"youth player","liga: não gravou":"league: not saved","médio":"midfielder","no ataque, meio-campo, defesa e baliza (o dobro com um treinador de \"Espírito de família\").":"in attack, midfield, defence and goal (double with a \"Family spirit\" coach).","não cumpre a regra":"doesn't meet the rule","os golos só acontecem nos lances em que vocês escolhem":"goals only happen in the moments where you choose","para cada escolha (muda-se em Definições): se acabar, entra um júnior da formação.":"for each pick (change it in Settings): if it runs out, a youth player comes in.","para o ângulo direito":"into the top right corner","para o ângulo esquerdo":"into the top left corner","por cada colega do mesmo país (sem clube em comum)":"for each teammate from the same country (no club in common)","rasteiro à direita":"low to the right","rasteiro à esquerda":"low to the left","suplente (qualquer posição)":"substitute (any position)","tática":"tactics","À BARRA!":"OFF THE BAR!","À espera dos outros jogos…":"Waiting for the other games…","À espera dos plantéis…":"Waiting for the squads…","À espera…":"Waiting…","África do Sul":"South Africa","Áustria":"Austria","Ângulo direito":"Top right","Ângulo esquerdo":"Top left","É GOLO!":"IT'S A GOAL!","É a tua vez":"Your turn","Época terminada":"Season over","Épocas com draft e mercado":"Seasons with draft and market","Últimos jogos":"Latest games","à direita":"to the right","à esquerda":"to the left","época: não gravou":"season: not saved","época: resultado não gravado":"season: result not saved","‹ Voltar à liga":"‹ Back to the league","● REPETIÇÃO":"● REPLAY","⚑ Erro?":"⚑ Error?","⚙️ Definições":"⚙️ Settings","⚡ O resto do jogo é simulado: as decisões são tomadas como um treinador as tomaria.":"⚡ The rest of the game is simulated: decisions are made the way a coach would make them.","⚡ Simular o resto do jogo":"⚡ Simulate the rest of the game","⚡ Simular o resto do jogo (recusado, podes pedir outra vez)":"⚡ Simulate the rest of the game (refused, you can ask again)","✉️ Convidar amigos":"✉️ Invite friends","⬆ Voltar ao jogo":"⬆ Back to the game","👁 Ver":"👁 Watch","👁 Ver em direto":"👁 Watch live","👕 Plantéis":"👕 Squads","👥 Um amigo":"👥 A friend","📅 Todas as jornadas":"📅 All matchdays","📅 Época: calendário, jogos e mercado":"📅 Season: fixtures, games and market","📊 Classificação completa":"📊 Full standings","📖 Como jogar":"📖 How to play","📜 Histórico de jogos":"📜 Match history","📲 Instalar a app":"📲 Install the app","📷 Partilhar este onze":"📷 Share this XI","📷 Partilhar imagem do resultado":"📷 Share result image","📷 Partilhar o meu onze":"📷 Share my XI","🔁 Mercado de transferências":"🔁 Transfer market","🚪 Sair da liga":"🚪 Leave the league","🤖 O bot":"🤖 The bot",":\"\"} (escolhe quem cria o jogo).":":\"\"} (the game creator chooses).","Já fizeste todos os teus jogos desta volta. 👏":"You've played all your games in this half. 👏","Ver o onze seguinte":"See the next XI","⚽ Duelo de Onzes":"⚽ XI Duel","entrou um júnior da formação":"a youth player came in","Manter":"Keep","sem tempo":"no time limit","ou extremo":"or winger","nos penáltis":"on penalties","ao intervalo":"at half-time","dez":"ten","nove":"nine","para o banco":"to the bench","o draft da época":"the season draft","o torneio":"the tournament","o jogo":"the game","a decidir…":"deciding…","Penálti":"Penalty","Um contra um":"One-on-one","Livre direto":"Direct free kick","Canto":"Corner","primeiro":"near","segundo":"far","no ângulo":"in the top corner","rasteiro":"low","põe a bola por cima da barreira, no ângulo":"puts it over the wall, into the top corner","surpreende o guarda-redes ao poste":"catches the keeper out at his post","CUMPRE":"MEETS","NÃO cumpre":"does NOT meet","· 1.ª volta":"· 1st half","· 2.ª volta (depois do mercado)":"· 2nd half (after the market)","Defesas":"Defenders","guarda-redes":"goalkeeper","defesa":"defender","extremo":"winger","Atacar":"Attack","Excelente":"Excellent","Boa":"Good","Fraca":"Weak","Normal":"Normal","Difícil":"Hard","Muito difícil":"Very hard","📲 Como instalar a app":"📲 How to install the app","É o nome que os amigos vão ver.":"It's the name your friends will see.","No mesmo telemóvel, online ou em torneios.":"On the same phone, online or in tournaments.","O teu nome (igual em todos os jogos)":"Your name (the same in every game)","Conversa":"Chat","Escreve uma mensagem…":"Type a message…","Ainda não há mensagens. Diz olá!":"No messages yet. Say hi!","⚡ Simulação":"⚡ Simulation","⚡ Simulação (recusada, podes pedir outra vez)":"⚡ Simulation (declined, you can ask again)","Torneio a meio":"Tournament in progress","Só espanhóis":"Spanish only","Espanhóis":"Spanish","Só franceses":"French only","Franceses":"French","Só brasileiros":"Brazilians only","Brasileiros":"Brazilians","Só argentinos":"Argentines only","Argentinos":"Argentines","Só ingleses":"English only","Ingleses":"English","Só italianos":"Italians only","Italianos":"Italians","Só alemães":"Germans only","Alemães":"Germans","Só neerlandeses":"Dutch only","Neerlandeses":"Dutch","Só lusófonos (Portugal, Brasil, PALOP)":"Portuguese-speaking only (Portugal, Brazil, Lusophone Africa)","Lusófonos":"Portuguese-speaking","Só nórdicos (Dinamarca, Suécia, Noruega, Finlândia, Islândia)":"Nordic only (Denmark, Sweden, Norway, Finland, Iceland)","Nórdicos":"Nordic","Só dos Balcãs":"Balkans only","Balcãs":"Balkans","Passaram pelo Benfica":"Played for Benfica","Passaram pelo FC Porto":"Played for FC Porto","Passaram pelo Sporting":"Played for Sporting","Passaram pelo Real Madrid ou pelo Barcelona":"Played for Real Madrid or Barcelona","Real ou Barça":"Real or Barça","Passaram por um clube de Madrid (Real ou Atlético)":"Played for a Madrid club (Real or Atlético)","Passaram pelo Milan ou pelo Inter":"Played for Milan or Inter","Milão":"Milan","Passaram pelo Manchester United ou pelo City":"Played for Manchester United or City","Passaram por um clube de Londres":"Played for a London club","Londres":"London","Passaram pelos seis grandes de Inglaterra":"Played for England's Big Six","Passaram pela Juventus":"Played for Juventus","Só quem jogou em França":"Only players who played in France","Liga francesa":"French league","Só quem jogou nos Países Baixos":"Only players who played in the Netherlands","Liga neerlandesa":"Dutch league","Só quem jogou na Turquia":"Only players who played in Turkey","Liga turca":"Turkish league","Reforma dourada (jogaram na Arábia, Qatar, Emirados, China ou EUA)":"Golden retirement (played in Saudi Arabia, Qatar, UAE, China or USA)","Reforma dourada":"Golden retirement","Só vencedores da Liga dos Campeões":"Champions League winners only","Campeões europeus":"European champions","Só campeões do Mundo":"World champions only","Campeões do Mundo":"World champions","Centenários (100 ou mais jogos pela seleção)":"Centurions (100+ international caps)","Centenários":"Centurions","Treinados por José Mourinho":"Coached by José Mourinho","Treinados por Ancelotti":"Coached by Ancelotti","Treinados por Guardiola":"Coached by Guardiola","Treinados por Jorge Jesus":"Coached by Jorge Jesus","Nascidos nos anos 70":"Born in the 70s","Anos 70":"70s","Nascidos nos anos 80":"Born in the 80s","Anos 80":"80s","Nascidos nos anos 90":"Born in the 90s","Anos 90":"90s","Sem estrelas (rating abaixo de 85)":"No stars (rating below 85)","Sem estrelas":"No stars","Viajantes (passaram por 6 ou mais clubes)":"Journeymen (6 or more clubs)","Viajantes":"Journeymen","Fiéis (no máximo 2 clubes na carreira)":"One-club types (2 clubs at most)","Fiéis":"Loyal","Português que jogou em dois dos três grandes":"Portuguese, played for two of Portugal's big three","Avisar do erro":"Report the error","Obrigado! Vou verificar. Tenta outro jogador.":"Thanks! I'll check it. Try another player.","Se a base de dados estiver errada, avisa: eu verifico e corrijo. Esta escolha não conta.":"If the database is wrong, let me know: I'll check and fix it. This pick doesn't count.","Há um telemóvel com o jogo desatualizado: recarreguem a página":"One phone has an old version of the game: reload the page","Obrigado, vou verificar":"Thanks, I'll check it","MED/D":"MID/D","MED/A":"MID/F","DEF/M":"DEF/M","AVA/M":"FWD/M","AVA/D":"FWD/D","Média":"Average","Em cada ronda há uma regra nova (\"Jogou no Benfica\", \"Campeão do Mundo\"…). Escreve um jogador que a cumpra.":"Each round has a new rule (\"Played for Benfica\", \"World Cup winner\"…). Type a player who meets it.","▴ Menos":"▴ Fewer","Privacidade":"Privacy","Termos":"Terms","Estugarda":"Stuttgart","Sevilha":"Sevilla","Marselha":"Marseille","Bordéus":"Bordeaux","Colónia":"Köln","Nuremberga":"Nürnberg","Hamburgo":"Hamburg","Maiorca":"Mallorca","Saragoça":"Zaragoza","Estrasburgo":"Strasbourg","Deportivo da Corunha":"Deportivo La Coruña","Dínamo de Kiev":"Dynamo Kyiv","Dínamo de Moscovo":"Dinamo Moscow","Dínamo de Zagreb":"Dinamo Zagreb","Estrela Vermelha":"Red Star Belgrade","Spartak de Moscovo":"Spartak Moscow","CSKA de Moscovo":"CSKA Moscow","Slavia de Praga":"Slavia Prague","Sparta Roterdão":"Sparta Rotterdam","Standard de Liège":"Standard Liège","Atlético de Madrid":"Atlético Madrid","Nacional (Uruguai)":"Nacional (Uruguay)","Torpedo Moskau":"Torpedo Moscow","Wolfsburgo":"Wolfsburg","Mónaco":"Monaco","Forma":"Form","Golos":"Goals","Jogos":"Games","ou entra no jogo de um amigo":"or join a friend's game","ou entra numa liga de um amigo":"or join a friend's league","por cada colega com quem passou pelo mesmo clube":"for each teammate he shared a club with","AO LADO!":"WIDE!","AO POSTE!":"OFF THE POST!","treinador":"coach",". É ele que define a":". They set the","escreve o nome":"type the name","de um jogador que cumpra a regra.":"of a player who meets the rule.","de cada escolha.":"of each pick.","tempo":"time limit","Intensidade":"Intensity","entrada dura":"hard tackle","protestos":"dissent","travou um contra-ataque":"stopped a counter-attack","entrada atrasada":"late tackle","Alto":"High","Baixo":"Low","Meio":"Middle","Esq.":"L.","Dir.":"R.","Passar":"Pass","Albânia":"Albania","Alemanha":"Germany","Arménia":"Armenia","Arábia Saudita":"Saudi Arabia","Austrália":"Australia","Azerbaijão":"Azerbaijan","Benim":"Benin","Bermudas":"Bermuda","Bielorrússia":"Belarus","Brasil":"Brazil","Bósnia":"Bosnia and Herzegovina","CSSR":"Czechoslovakia","Canadá":"Canada","Catar":"Qatar","Cazaquistão":"Kazakhstan","Chade":"Chad","Chipre":"Cyprus","Comores":"Comoros","Coreia do Norte":"North Korea","Curaçau":"Curaçao","Dinamarca":"Denmark","EUA":"USA","East Germany (GDR)":"East Germany","Egito":"Egypt","Equador":"Ecuador","Escócia":"Scotland","Eslováquia":"Slovakia","Espanha":"Spain","Estónia":"Estonia","Filipinas":"Philippines","Finlândia":"Finland","Gana":"Ghana","Guadalupe":"Guadeloupe","Guiana Francesa":"French Guiana","Hungria":"Hungary","Ilhas Faroé":"Faroe Islands","Indonésia":"Indonesia","Inglaterra":"England","Iraque":"Iraq","Irlanda":"Ireland","Islândia":"Iceland","Jordânia":"Jordan","Jugoslawien (SFR)":"Yugoslavia","Letónia":"Latvia","Lituânia":"Lithuania","Luxemburgo":"Luxembourg","Macedonia":"North Macedonia","Macedónia do Norte":"North Macedonia","Marrocos":"Morocco","Martinica":"Martinique","Moldávia":"Moldova","Noruega":"Norway","Nova Caledónia":"New Caledonia","Nova Zelândia":"New Zealand","Omã":"Oman","Palestina":"Palestine","Panamá":"Panama","Paraguai":"Paraguay","República Dominicana":"Dominican Republic","Rússia":"Russia","St. Kitts & Nevis":"St Kitts and Nevis","Suíça":"Switzerland","Síria":"Syria","The Gambia":"Gambia","Trindade e Tobago":"Trinidad and Tobago","Turquia":"Turkey","UdSSR":"Soviet Union","Uruguai":"Uruguay","Usbequistão":"Uzbekistan","Yugoslavia (Republic)":"Yugoslavia","Sudão":"Sudan","Tajiquistão":"Tajikistan","República Socialista Federativa da Jugoslávia":"Socialist Federal Republic of Yugoslavia","Império Austríaco":"Austrian Empire","GR":"GK","MED":"MID","AVA":"FWD","SUP":"SUB","EE":"LW","ED":"RW","PL":"ST","MC":"CM","ME":"LM","MD":"RM","MO":"CAM","MDC":"CDM","DE":"LB","DC":"CB","DD":"RB","tu":"you"},"p":[["^Draft\\ com\\ todos\\ ao\\ mesmo\\ tempo,\\ (.*?)\\ jornadas\\ na\\ 1\\.ª\\ volta,\\ mercado\\ \\(até\\ 3\\ trocas\\)\\ e\\ mais\\ (.*?)\\ na\\ 2\\.ª\\ volta\\.\\ Vitória\\ 3,\\ empate\\ 1\\.$","Draft with everyone at the same time, $1 matchdays in the 1st half, market (up to 3 swaps) and $2 more in the 2nd half. Win 3, draw 1."],["^Junta\\-te\\ à\\ minha\\ liga\\ do\\ Duelo\\ de\\ Onzes:\\ \"(.*?)\"\\.\\ Abre\\ o\\ jogo,\\ carrega\\ em\\ Liga\\ →\\ Entrar\\ numa\\ liga\\ e\\ escreve\\ o\\ código\\ (.*?)\\.$","Join my XI Duel league: \"$1\". Open the game, tap League → Join a league and type the code $2."],["^Draft\\ da\\ época\\ de\\ \"(.*?)\":\\ os\\ amigos\\ entram\\ pela\\ Liga\\ \\(ou\\ com\\ este\\ código\\)\\.\\ São\\ (.*?)\\ treinadores\\.$","Season draft for \"$1\": friends join through the League (or with this code). There are $2 coaches."],["^Contra\\ o\\ bot\\ vale\\ a\\ base\\ de\\ dados:\\ (.*?)\\ não\\ conta\\ para\\ \"(.*?)\"\\.\\ Se\\ estiver\\ errado,\\ corrijo\\.$","Against the bot the database rules: $1 doesn't count for \"$2\". If that's wrong, I'll fix it."],["^Forças\\ iguais\\ \\((.*?)\\):\\ (.*?)\\ tem\\ mais\\ química\\ e\\ fica\\ com\\ mais\\ lances\\ de\\ ataque\\ \\((.*?)\\ contra\\ (.*?)\\)\\.$","Equal strength ($1): $2 has more chemistry and gets more attacking moments ($3 against $4)."],["^(.*?)\\ tem\\ a\\ equipa\\ mais\\ forte\\ \\((.*?)\\ contra\\ (.*?)\\):\\ vai\\ ter\\ mais\\ lances\\ de\\ ataque\\ \\((.*?)\\ contra\\ (.*?)\\)\\.$","$1 has the stronger team ($2 against $3): they'll get more attacking moments ($4 against $5)."],["^⚽\\ (.*?)\\ está\\ à\\ tua\\ espera\\ para\\ o\\ teu\\ jogo!\\ Carrega\\ em\\ \"Sair\\ e\\ voltar\\ ao\\ quadro\"\\.$","⚽ $1 is waiting for you for your game! Tap \"Leave and go back to the bracket\"."],["^Podes\\ reclamar:\\ se\\ (.*?)\\ aceitar,\\ a\\ escolha\\ conta\\ e\\ não\\ perdes\\ a\\ tentativa\\.$","You can claim: if $1 accepts, the pick counts and you don't lose the attempt."],["^Foste\\ convidado\\ para\\ o\\ jogo\\ (.*?)\\.\\ Escreve\\ o\\ teu\\ nome\\ e\\ carrega\\ em\\ Entrar\\.$","You've been invited to game $1. Type your name and tap Join."],["^(.*?)\\ escolhe\\ quem\\ bate\\.\\ (.*?)\\ está\\ na\\ baliza\\.\\ Cada\\ um\\ escolhe\\ às\\ escondidas\\.$","$1 chooses who takes it. $2 is in goal. Each one picks in secret."],["^À\\ espera\\ que\\ (.*?)\\ entre\\ para\\ o\\ jogo\\ da\\ liga\\.\\ Ele\\ vê\\ o\\ convite\\ na\\ Liga\\.$","Waiting for $1 to join the league game. He sees the invite in the League."],["^(.*?)\\ marca,\\ mas\\ o\\ fiscal\\ de\\ linha\\ levanta\\ a\\ bandeira:\\ fora\\ de\\ jogo!$","$1 scores, but the linesman raises the flag: offside!"],["^⏱\\ Acabou\\ o\\ tempo!\\ Entrou\\ um\\ júnior\\ da\\ formação\\ (.*?)\\ na\\ equipa\\ de\\ (.*?)\\.$","⏱ Time's up! A youth player came in $1 for $2."],["^Estão\\ todos\\.\\ Escolhe\\ o\\ tipo\\ de\\ draft\\ e\\ o\\ tempo\\ e\\ carrega\\ em\\ (.*?)\\.$","Everyone's here. Choose the draft type and the time and tap $1."],["^GOLO\\ de\\ livre!\\ (.*?)\\ põe\\ a\\ bola\\ por\\ cima\\ da\\ barreira,\\ no\\ ângulo\\.$","Free-kick GOAL! $1 puts it over the wall, into the top corner."],["^Os\\ dois\\ treinadores\\ \\((.*?)\\ e\\ (.*?)\\)\\ aceitam\\ simular\\ o\\ resto\\ do\\ jogo\\?$","Do both coaches ($1 and $2) agree to simulate the rest of the game?"],["^Dá\\ o\\ código\\ ou\\ o\\ link\\ aos\\ teus\\ amigos\\.\\ O\\ torneio\\ é\\ para\\ (.*?)\\.$","Give the code or the link to your friends. The tournament is for $1."],["^Penálti\\ para\\ (.*?)…\\ (.*?)\\ adivinha\\ o\\ lado\\ e\\ defende\\ o\\ remate\\ de\\ (.*?)!$","Penalty for $1… $2 guesses the side and saves $3's shot!"],["^jogada\\ individual\\ de\\ (.*?),\\ que\\ deixa\\ dois\\ para\\ trás\\ e\\ marca$","a solo run from $1, who beats two and scores"],["^Neste\\ draft\\ só\\ valem\\ jogadores\\ do\\ tema:\\ (.*?)\\.\\ Tenta\\ outro\\.$","In this draft only players from the theme count: $1. Try another."],["^(.*?)\\ desvia\\ com\\ classe,\\ sem\\ hipóteses\\ para\\ o\\ guarda\\-redes$","$1 flicks it in with class, the keeper has no chance"],["^(.*?)\\ chegou\\ primeiro,\\ mas\\ a\\ bola\\ sobra\\ para\\ (.*?),\\ que\\ marca!$","$1 got there first, but the ball falls to $2, who scores!"],["^(.*?),\\ já\\ escolheste\\.\\ À\\ espera\\ que\\ (.*?)\\ escolha\\ o\\ treinador…$","$1, you've picked. Waiting for $2 to choose the coach…"],["^GOLO\\ de\\ livre!\\ (.*?)\\ surpreende\\ o\\ guarda\\-redes\\ ao\\ poste\\.$","Free-kick GOAL! $1 catches the keeper out at his post."],["^(.*?)\\ estava\\ lá,\\ mas\\ o\\ remate\\ de\\ (.*?)\\ é\\ forte\\ demais\\.\\ GOLO!$","$1 was there, but $2's shot is too powerful. GOAL!"],["^(.*?)\\ fica\\ no\\ relvado\\ com\\ dores…\\ levanta\\-se\\ e\\ continua\\.$","$1 stays down in pain… gets up and carries on."],["^GOLO!\\ (.*?)\\ bate\\ ao\\ meio\\ e\\ (.*?)\\ já\\ tinha\\ saído\\ para\\ o\\ lado\\.$","GOAL! $1 goes down the middle and $2 had already dived."],["^(.*?)\\ empurra\\ tudo\\ para\\ a\\ frente\\ à\\ procura\\ do\\ empate\\.$","$1 throws everything forward looking for the equaliser."],["^Sem\\ ligação\\ ao\\ servidor\\ \\((.*?)\\)\\.\\ A\\ tentar\\ outra\\ vez…$","No connection to the server ($1). Trying again…"],["^(.*?)\\ acabou\\ de\\ ser\\ contratado\\ por\\ outro\\ treinador\\.$","$1 has just been signed by another coach."],["^Segundo\\ amarelo\\ para\\ (.*?)!\\ Vermelho\\ e\\ (.*?)\\ fica\\ com\\ (.*?)\\.$","Second yellow for $1! Red, and $2 are down to $3."],["^(.*?)\\ ganha\\ nas\\ costas\\ da\\ defesa\\ e\\ atira\\ rasteiro$","$1 gets in behind the defence and drills it low"],["^Substituição\\ em\\ (.*?)\\ ao\\ intervalo:\\ entra\\ (.*?),\\ sai\\ (.*?)\\.$","Half-time substitution for $1: $2 on, $3 off."],["^(.*?)\\ ganha\\ nas\\ alturas\\ e\\ cabeceia\\ sem\\ hipóteses$","$1 rises highest and heads home"],["^(.*?)\\ tinha\\ tudo\\ para\\ marcar…\\ e\\ atira\\ para\\ fora!$","$1 had everything to score… and puts it wide!"],["^A\\ defesa\\ leu\\ a\\ jogada,\\ mas\\ (.*?)\\ marca\\ na\\ mesma!$","The defence read it, but $1 scores anyway!"],["^O\\ passe\\ para\\ (.*?)\\ é\\ cortado\\.\\ A\\ defesa\\ leu\\ tudo\\.$","The pass to $1 is cut out. The defence read it all."],["^que\\ pontapé\\ de\\ (.*?),\\ a\\ bola\\ entra\\ junto\\ à\\ barra$","what a strike from $1, in off the bar"],["^(.*?)\\ foi\\ para\\ o\\ lado\\ certo\\ e\\ chega\\ à\\ bola\\ de\\ (.*?)!$","$1 went the right way and gets to $2's shot!"],["^(.*?)\\ empurra\\ para\\ a\\ baliza\\ na\\ confusão\\ da\\ área$","$1 bundles it in during a goalmouth scramble"],["^GOLO!\\ (.*?)\\ foi\\ para\\ o\\ lado\\ certo,\\ mas\\ (.*?)\\ meteu\\ (.*?)\\.$","GOAL! $1 went the right way, but $2 put it $3."],["^(.*?)\\ adivinha\\ a\\ zona\\ e\\ defende\\ o\\ penálti\\ de\\ (.*?)!$","$1 guesses the zone and saves $2's penalty!"],["^(.*?)\\ remata\\ torto,\\ a\\ bola\\ vai\\ para\\ a\\ bancada\\.$","$1 skews it into the stands."],["^(.*?)\\ tenta\\ o\\ chapéu,\\ mas\\ a\\ bola\\ sai\\ por\\ cima\\.$","$1 tries the chip, but it goes over."],["^⚡\\ (.*?)\\ quer\\ simular\\ o\\ resto\\ do\\ jogo\\.\\ Aceitas\\?$","⚡ $1 wants to simulate the rest of the game. Do you accept?"],["^GOLO!\\ (.*?)\\ remata\\ cruzado\\ e\\ não\\ dá\\ hipótese\\.$","GOAL! $1 fires across goal, no chance."],["^Não\\ chegou\\ para\\ parar\\ (.*?):\\ golaço\\ de\\ livre!$","Not enough to stop $1: a free-kick screamer!"],["^(.*?)\\ estava\\ no\\ poste\\ e\\ defende\\ o\\ livre\\ de\\ (.*?)\\.$","$1 was at the post and saves $2's free kick."],["^GOLO!\\ (.*?)\\ finta\\ (.*?)\\ e\\ marca\\ de\\ baliza\\ aberta\\.$","GOAL! $1 rounds $2 and scores into an empty net."],["^Nenhum\\ (.*?)\\ com\\ esse\\ nome\\ na\\ base\\ de\\ dados\\.$","No $1 with that name in the database."],["^Reclamação\\ recusada\\.\\ Restam\\ (.*?)\\ tentativa(.*?)\\.$","Claim refused. $1 attempt$2 left."],["^(.*?)\\ tenta\\ o\\ ângulo\\ e\\ a\\ bola\\ sai\\ por\\ cima!$","$1 goes for the corner and it flies over!"],["^GOLO!\\ (.*?)\\ serve\\ (.*?),\\ que\\ só\\ tem\\ de\\ encostar\\.$","GOAL! $1 sets up $2, who just has to tap it in."],["^Remate\\ forte\\ de\\ (.*?),\\ (.*?)\\ defende\\ para\\ canto\\.$","Powerful shot from $1, $2 tips it round the post."],["^(.*?)\\ diz\\ que\\ (.*?)\\ cumpre\\ a\\ regra\\ \"(.*?)\"\\.\\ Aceitas\\?$","$1 says $2 meets the rule \"$3\". Do you accept?"],["^(.*?)\\ leu\\ a\\ intenção,\\ mas\\ (.*?)\\ marca\\ na\\ mesma!$","$1 read it, but $2 scores anyway!"],["^A\\ barreira\\ salta\\ e\\ trava\\ o\\ livre\\ de\\ (.*?)\\.$","The wall jumps and blocks $1's free kick."],["^GOLO!\\ Remate\\ rasteiro\\ e\\ colocado\\ de\\ (.*?)\\.$","GOAL! A low, well-placed shot from $1."],["^Joga\\ comigo\\ no\\ Duelo\\ de\\ Onzes\\ \\(jogo\\ (.*?)\\)$","Play me at XI Duel (game $1)"],["^Oportunidade\\ para\\ (.*?),\\ mas\\ falha\\ o\\ alvo\\.$","Chance for $1, but he misses the target."],["^(.*?):\\ entrou\\ um\\ júnior\\ da\\ formação\\ para\\ (.*?)\\.$","$1: a youth player came in for $2."],["^(.*?)\\ escolhe\\ quem\\ bate\\.\\ (.*?)\\ está\\ na\\ baliza\\.$","$1 chooses who takes it. $2 is in goal."],["^(.*?)\\ de\\ cabeça,\\ na\\ sequência\\ de\\ um\\ canto$","$1 heads in from a corner"],["^Cabeceamento\\ de\\ (.*?),\\ grande\\ defesa\\ de\\ (.*?)!$","Header from $1, great save from $2!"],["^Diz\\ que\\ (.*?)\\ cumpre\\ a\\ regra\\ \"(.*?)\"\\.\\ Aceitas\\?$","Says $1 meets the rule \"$2\". Do you accept?"],["^Estás\\ dentro!\\ À\\ espera\\ que\\ (.*?)\\ comece\\ (.*?)\\.$","You're in! Waiting for $1 to start $2."],["^Passa\\ o\\ telemóvel\\ a\\ (.*?)\\.\\ (.*?)\\ não\\ pode\\ ver\\.$","Pass the phone to $1. $2 can't look."],["^(.*?)\\ segura\\ sem\\ problemas\\ o\\ remate\\ de\\ (.*?)\\.$","$1 comfortably holds $2's shot."],["^(.*?)\\ entra\\ pelo\\ meio\\ e\\ remata\\ para\\ golo$","$1 cuts inside and fires home"],["^(.*?)\\ sobe\\ no\\ livre\\ e\\ cabeceia\\ para\\ golo$","$1 rises from the free kick and heads in"],["^(.*?)\\ demora\\ a\\ rematar\\ e\\ a\\ defesa\\ corta\\.$","$1 takes too long to shoot and the defence clears."],["^(.*?)\\ tenta\\ o\\ ângulo…\\ e\\ acerta\\ na\\ barra!$","$1 goes for the corner… and hits the bar!"],["^(.*?)\\ manda\\ (.*?)\\ para\\ a\\ frente\\ ao\\ intervalo\\.$","$1 sends $2 forward at half-time."],["^(.*?)\\ tira\\ o\\ defesa\\ do\\ caminho\\ e\\ fuzila$","$1 brushes the defender aside and fires home"],["^(.*?)\\ arranca\\ com\\ espaço,\\ com\\ (.*?)\\ ao\\ lado\\.$","$1 breaks into space, with $2 alongside."],["^GOLO!\\ (.*?)\\ cabeceia\\ sozinho\\ ao\\ (.*?)\\ poste\\.$","GOAL! $1 heads in unmarked at the $2 post."],["^GOLO!\\ (.*?)\\ engana\\ (.*?)\\ e\\ marca\\ de\\ penálti\\.$","GOAL! $1 sends $2 the wrong way and scores the penalty."],["^O\\ livre\\ de\\ (.*?)\\ passa\\ a\\ rasar\\ o\\ poste\\.$","$1's free kick flies just past the post."],["^Segundo\\ amarelo\\ para\\ (.*?)…\\ e\\ vermelho!$","Second yellow for $1… and red!"],["^Vermelho\\ direto\\ para\\ (.*?)!\\ (.*?)\\ fica\\ com\\ (.*?)\\.$","Straight red for $1! $2 are down to $3."],["^(.*?)\\ estica\\-se\\ todo\\ e\\ tira\\ o\\ golo\\ a\\ (.*?)!$","$1 stretches every sinew and denies $2!"],["^(.*?)\\ fica\\ sozinho\\ com\\ o\\ guarda\\-redes!$","$1 is one-on-one with the goalkeeper!"],["^(.*?)\\ aparece\\ na\\ área\\ no\\ momento\\ certo$","$1 arrives in the box at just the right moment"],["^(.*?)\\ bate\\ colocado…\\ e\\ manda\\ ao\\ poste!$","$1 places it… and hits the post!"],["^À\\ espera\\ que\\ (.*?)\\ comece\\ o\\ novo\\ jogo…$","Waiting for $1 to start the new game…"],["^(.*?)\\ isolado\\ frente\\ ao\\ guarda\\-redes!$","$1 one-on-one with the goalkeeper!"],["^(.*?)\\ remata\\ colocado,\\ junto\\ ao\\ poste$","$1 places it just inside the post"],["^(.*?)\\ antecipa\\-se\\ e\\ afasta\\ de\\ cabeça\\.$","$1 gets there first and heads clear."],["^(.*?)\\ sobe\\ à\\ área\\.\\ (.*?)\\ está\\ na\\ marcação\\.$","$1 goes up into the box. $2 is marking him."],["^Fora\\ de\\ posição\\ \\(rendem\\ menos\\):\\ (.*?)$","Out of position (perform worse): $1"],["^GOLO!\\ (.*?)\\ pica\\ a\\ bola\\ por\\ cima\\ de\\ (.*?)\\.$","GOAL! $1 chips it over $2."],["^Que\\ reflexos\\ de\\ (.*?)!\\ (.*?)\\ não\\ acredita\\.$","What reflexes from $1! $2 can't believe it."],["^À\\ espera\\ que\\ (.*?)\\ escolha\\ o\\ capitão…$","Waiting for $1 to choose the captain…"],["^🏆\\ Torneio(.*?)\\ \\((.*?)\\ treinadores,\\ (.*?)\\ jogos\\)$","🏆 Tournament$1 ($2 coaches, $3 games)"],["^(.*?)\\ já\\ foi\\ escolhido\\.\\ Tenta\\ outro\\.$","$1 has already been picked. Try another."],["^A\\ bola\\ de\\ (.*?)\\ bate\\ no\\ poste\\ e\\ sai!$","$1's shot hits the post and goes out!"],["^Faltam\\ (.*?)\\ segundos\\ para\\ (.*?)\\ escolher$","$1 seconds left for $2 to pick"],["^Grande\\ defesa\\ de\\ (.*?)\\ a\\ remate\\ de\\ (.*?)!$","Great save from $1 to deny $2!"],["^Substituição\\ em\\ (.*?)(.*?):\\ entra\\ (.*?),\\ sai\\ (.*?)\\.$","Substitution for $1$2: $3 on, $4 off."],["^Substituição\\ em\\ (.*?):\\ entra\\ (.*?),\\ sai\\ (.*?)\\.$","Substitution for $1: $2 on, $3 off."],["^(.*?)\\ aproveita\\ uma\\ recarga\\ na\\ área$","$1 pounces on a rebound in the box"],["^(.*?)\\ faz\\ um\\ chapéu\\ ao\\ guarda\\-redes$","$1 chips the goalkeeper"],["^A\\ voltar\\ a\\ ligar…\\ \\(tentativa\\ (.*?)\\)$","Reconnecting… (attempt $1)"],["^O\\ jogo\\ disse\\ que\\ NÃO\\ cumpre\\ \"(.*?)\"$","The game said he does NOT meet \"$1\""],["^O\\ árbitro\\ mostra\\ o\\ amarelo\\ a\\ (.*?)\\.$","The referee shows $1 the yellow card."],["^Penálti\\ para\\ (.*?)!\\ (.*?)\\ bate\\ (.*?)\\ e\\ marca\\.$","Penalty for $1! $2 beats $3 and scores."],["^📋\\ Draft\\ da\\ época\\ a\\ decorrer\\ \\((.*?)\\)$","📋 Season draft in progress ($1)"],["^(.*?)\\ é\\ (.*?)\\.\\ Esta\\ posição\\ é\\ para\\ um\\ (.*?)(.*?)\\.$","$1 is a $2. This position is for a $3$4."],["^O\\ teu\\ próximo\\ jogo\\ ·\\ Jornada\\ (.*?)$","Your next game · Matchday $1"],["^Vermelho!\\ (.*?)\\ fica\\ com\\ menos\\ um\\.$","Red card! $1 are down to ten."],["^À\\ espera\\ que\\ (.*?)\\ entre\\ em\\ campo…$","Waiting for $1 to take the field…"],["^À\\ espera\\ que\\ (.*?)\\ aceite\\ simular…$","Waiting for $1 to accept simulating…"],["^(.*?)\\ procura\\ uma\\ linha\\ de\\ passe…$","$1 looks for a passing lane…"],["^🟥\\ suspenso\\ no\\ próximo\\ jogo:\\ (.*?)$","🟥 suspended for the next game: $1"],["^(.*?)\\ leu\\ tudo\\ e\\ fica\\ com\\ a\\ bola!$","$1 read it all and gathers the ball!"],["^(.*?)\\ desperdiça\\ uma\\ boa\\ ocasião\\.$","$1 wastes a good chance."],["^(.*?)\\ tenta\\ de\\ longe,\\ sem\\ perigo\\.$","$1 tries from distance, no danger."],["^Ao\\ poste!\\ (.*?)\\ esteve\\ tão\\ perto…$","Off the post! $1 was so close…"],["^Livre\\ perigoso\\.\\ (.*?)\\ prepara\\-se…$","Dangerous free kick. $1 gets ready…"],["^remate\\ em\\ arco\\ de\\ (.*?)\\ ao\\ ângulo$","curler from $1 into the top corner"],["^👁\\ Estás\\ a\\ ver\\ (.*?)\\ x\\ (.*?)\\ em\\ direto\\.$","👁 You're watching $1 v $2 live."],["^👁\\ Estás\\ a\\ ver\\ (.*?)\\ x\\ (.*?)\\ em\\ direto\\.$","👁 You're watching $1 v $2 live."],["^⚡\\ química\\ com\\ (.*?)\\ \\(mesmo\\ país\\)\\.$","⚡ chemistry with $1 (same country)."],["^⚡\\ química\\ com\\ (.*?)\\ \\(mesmo\\ país\\)$","⚡ chemistry with $1 (same country)"],["^(.*?)\\ está\\ à\\ tua\\ espera\\.\\ Entrar!$","$1 is waiting for you. Join!"],["^(.*?)\\ escolhe\\ quem\\ bate\\ o\\ livre\\.$","$1 chooses who takes the free kick."],["^(.*?)\\ obriga\\ (.*?)\\ a\\ defesa\\ apertada\\.$","$1 forces $2 into a tough save."],["^Exibição\\ de\\ grande\\ nível\\ ·\\ (.*?)$","Outstanding performance · $1"],["^Remate\\ de\\ (.*?)\\ a\\ rasar\\ o\\ poste!$","$1's shot flashes past the post!"],["^⚡\\ química\\ com\\ (.*?)\\ \\(mesmo\\ país\\)$","⚡ chemistry with $1 (same country)"],["^(.*?)\\ ·\\ (.*?)\\ ·\\ Força\\ (.*?)\\ ·\\ Química\\ (.*?)/33$","$1 · $2 · Strength $3 · Chemistry $4/33"],["^(.*?)\\ encosta\\ ao\\ primeiro\\ poste$","$1 turns it in at the near post"],["^(.*?)\\ ganha\\ nos\\ penáltis\\ por\\ (.*?)–(.*?)!$","$1 win on penalties $2–$3!"],["^⚡\\ química\\ com\\ (.*?)\\ \\((.*?)\\)\\ e\\ mais\\ (.*?)\\.$","⚡ chemistry with $1 ($2) and $3 more."],["^(.*?)\\ vai\\ para\\ o\\ um\\ contra\\ um…$","$1 goes one-on-one…"],["^(.*?)\\ aparece\\ ao\\ segundo\\ poste$","$1 arrives at the far post"],["^(.*?)\\ chega\\ de\\ trás\\ e\\ finaliza$","$1 arrives late and finishes"],["^(.*?)\\ atira\\ por\\ cima\\ da\\ barra\\.$","$1 fires over the bar."],["^Cabeceamento\\ de\\ (.*?)\\ ao\\ lado\\.$","$1 heads wide."],["^Fazes\\ (.*?)\\ substituição\\(ões\\)\\.$","You make $1 substitution(s)."],["^O\\ remate\\ de\\ (.*?)\\ é\\ bloqueado\\.$","$1's shot is blocked."],["^bomba\\ de\\ fora\\ da\\ área\\ de\\ (.*?)$","thunderbolt from outside the box by $1"],["^⚽\\ (.*?)\\ está\\ à\\ tua\\ espera:\\ (.*?)\\ x\\ (.*?)$","⚽ $1 is waiting for you: $2 v $3"],["^⚡\\ química\\ com\\ (.*?)\\ \\((.*?)\\)\\ e\\ mais\\ (.*?)$","⚡ chemistry with $1 ($2) and $3 more"],["^Começa\\ o\\ jogo!\\ (.*?)\\ contra\\ (.*?)\\.$","Kick-off! $1 against $2."],["^Força\\ (.*?)\\ \\ \\ ·\\ \\ \\ Química\\ (.*?)/33$","Strength $1   ·   Chemistry $2/33"],["^▾\\ Mais\\ tipos\\ de\\ draft\\ \\((.*?)\\)$","▾ More draft types ($1)"],["^Cartão\\ amarelo\\ para\\ (.*?)\\ \\((.*?)\\)\\.$","Yellow card for $1 ($2)."],["^Remate\\ de\\ primeira\\ de\\ (.*?)!$","First-time shot from $1!"],["^(.*?)\\ procura\\ a\\ desmarcação…$","$1 looks for the run…"],["^(.*?)\\ pousa\\ a\\ bola\\ na\\ marca…$","$1 places the ball on the spot…"],["^(.*?)\\ não\\ cumpre\\ a\\ regra\\ \"(.*?)\"\\.$","$1 doesn't meet the rule \"$2\"."],["^Confirmar\\ (.*?)\\ como\\ capitão$","Confirm $1 as captain"],["^Confronto\\ direto:\\ (.*?)\\ (.*?)\\ –\\ (.*?)\\ (.*?)$","Head-to-head: $1 $2 – $3 $4"],["^Homem\\ do\\ jogo:\\ (.*?)\\ \\(nota\\ (.*?)\\)$","Man of the match: $1 (rating $2)"],["^Penálti!\\ (.*?)\\ pega\\ na\\ bola…$","Penalty! $1 picks up the ball…"],["^Penálti!\\ (.*?)\\ pega\\ na\\ bola…$","Penalty! $1 picks up the ball…"],["^À\\ espera\\ que\\ (.*?)\\ responda(.*?)…$","Waiting for $1 to answer$2…"],["^(.*?)\\ ajeita\\ para\\ o\\ remate…$","$1 sets himself to shoot…"],["^(.*?)\\ fica\\ na\\ cara\\ do\\ golo…$","$1 is through on goal…"],["^(.*?)\\ voa\\ e\\ nega\\ o\\ golo\\ a\\ (.*?)\\.$","$1 flies and denies $2."],["^(.*?)\\ isola\\-se\\ e\\ não\\ perdoa$","$1 goes clean through and makes no mistake"],["^(.*?)\\ remata,\\ mas\\ (.*?)\\ defende\\.$","$1 shoots, but $2 saves."],["^Vermelho\\ direto\\ para\\ (.*?)!$","Straight red for $1!"],["^À\\ espera\\ que\\ (.*?)\\ escolha…$","Waiting for $1 to pick…"],["^👁\\ A\\ ligar\\ ao\\ jogo\\ (.*?)\\ x\\ (.*?)…$","👁 Connecting to the game $1 v $2…"],["^(.*?)\\ acelera\\ pelo\\ flanco…$","$1 speeds down the wing…"],["^(.*?)\\ conduz\\ a\\ meio\\-campo…$","$1 carries it through midfield…"],["^(.*?)\\ parte\\ para\\ a\\ baliza…$","$1 heads for goal…"],["^(.*?)\\ vê\\ o\\ cartão\\ amarelo\\.$","$1 is booked."],["^(.*?)\\ conduz\\ a\\ meio\\-campo…$","$1 carries it through midfield…"],["^(.*?)\\ finaliza\\ de\\ primeira$","$1 finishes first time"],["^(.*?)\\ remata\\ à\\ figura\\ de\\ (.*?)\\.$","$1 shoots straight at $2."],["^Livre\\ perigoso\\ para\\ (.*?)!$","Dangerous free kick for $1!"],["^Na\\ barra!\\ Remate\\ de\\ (.*?)\\.$","Off the bar! Shot from $1."],["^Passa\\ o\\ telemóvel\\ a\\ (.*?)\\.$","Pass the phone to $1."],["^Penáltis\\ ·\\ (.*?)–(.*?)\\ ·\\ (.*?)\\.º\\ de\\ (.*?)$","Penalties · $1–$2 · $3th for $4"],["^Sai:\\ (.*?)\\ \\((.*?)\\)\\.\\ Quem\\ entra\\?$","Off: $1 ($2). Who comes on?"],["^À\\ espera\\ de\\ (.*?)\\ jogador(.*?)…$","Waiting for $1 player$2…"],["^Cartão\\ amarelo\\ para\\ (.*?)\\.$","Yellow card for $1."],["^Livre\\ perigoso\\ para\\ (.*?)!$","Dangerous free kick for $1!"],["^(.*?)\\ aparece\\ na\\ recarga!$","$1 pounces on the rebound!"],["^(.*?)\\ encontra\\ um\\ colega…$","$1 finds a teammate…"],["^(.*?)\\ olha\\ para\\ a\\ frente…$","$1 looks up…"],["^(.*?)\\ arranca\\ com\\ espaço…$","$1 breaks into space…"],["^Espreitar\\ o\\ onze\\ de\\ (.*?)$","Peek at $1's XI"],["^Passa\\ o\\ telemóvel\\ a\\ (.*?)$","Pass the phone to $1"],["^Regra\\ desta\\ ronda\\ ·\\ (.*?)$","This round's rule · $1"],["^Trocas\\ disponíveis:\\ (.*?)$","Swaps available: $1"],["^Jogou\\ pela\\ seleção\\ (.*?)\\ (.*?)$","Capped by $2"],["^(.*?)\\ avança\\ com\\ a\\ bola…$","$1 drives forward with the ball…"],["^(.*?)\\ enfrenta\\ o\\ defesa…$","$1 takes on the defender…"],["^(.*?)\\ ganha\\ nas\\ alturas!$","$1 wins it in the air!"],["^(.*?)\\ transporta\\ o\\ jogo…$","$1 carries the play…"],["^(.*?)\\ cabeceia\\ por\\ cima\\.$","$1 heads over."],["^(.*?)\\ corre\\ para\\ a\\ bola…$","$1 runs up to the ball…"],["^(.*?)\\ fica\\ sozinho\\ com\\ (.*?)\\.$","$1 is one-on-one with $2."],["^À\\ procura\\ do\\ jogo\\ (.*?)…$","Looking for game $1…"],["^🏆\\ (.*?)\\ ganha\\ o\\ torneio!$","🏆 $1 wins the tournament!"],["^🏆\\ (.*?)\\ ganha\\ o\\ torneio!$","🏆 $1 wins the tournament!"],["^(.*?)\\ desce\\ pela\\ linha…$","$1 goes down the line…"],["^(.*?)\\ prepara\\ o\\ remate…$","$1 lines up the shot…"],["^(.*?)\\ procura\\ o\\ ângulo…$","$1 looks for the angle…"],["^Já\\ são\\ (.*?)\\ golos\\ de\\ (.*?)!$","That's $1 goals for $2!"],["^(.*?)\\ levanta\\ a\\ cabeça…$","$1 lifts his head…"],["^(.*?)\\ prepara\\ o\\ remate…$","$1 lines up the shot…"],["^Canto\\.\\ (.*?)\\ vai\\ bater…$","Corner. $1 will take it…"],["^Contra\\-ataque\\ de\\ (.*?)!$","Counter-attack from $1!"],["^Restam\\ (.*?)\\ tentativa(.*?)\\.$","$1 attempt$2 left."],["^remate\\ cruzado\\ de\\ (.*?)$","angled shot from $1"],["^⚡\\ química\\ com\\ (.*?)\\ \\((.*?)\\)\\.$","⚡ chemistry with $1 ($2)."],["^Contra\\-ataque\\ de\\ (.*?)!$","Counter-attack from $1!"],["^(.*?)\\ cola\\-se\\ à\\ linha…$","$1 hugs the touchline…"],["^(.*?)\\ parte\\ para\\ cima…$","$1 runs at them…"],["^(.*?)\\ sobe\\ com\\ a\\ bola…$","$1 brings the ball up…"],["^Cabeceamento\\ de\\ (.*?)!$","Header from $1!"],["^(.*?)\\ na\\ cara\\ do\\ golo…$","$1 through on goal…"],["^(.*?)\\ parte\\ para\\ cima…$","$1 runs at them…"],["^(.*?)\\ remata\\ rasteiro…$","$1 shoots low…"],["^(.*?)\\ acerta\\ no\\ ferro!$","$1 hits the woodwork!"],["^(.*?)\\ acerta\\ no\\ poste!$","$1 hits the post!"],["^(.*?)\\ fecha\\ (.*?)\\ lá\\ atrás\\.$","$1 shuts up shop for $2."],["^(.*?)\\ muda\\ (.*?)\\ de\\ (.*?)\\ para\\ (.*?)\\.$","$1 switches $2 from $3 to $4."],["^(.*?)'\\ ·\\ Substituições$","$1' · Substitutions"],["^,\\ após\\ passe\\ de\\ (.*?)\\.$",", after a pass from $1."],["^,\\ assistido\\ por\\ (.*?)\\.$",", assisted by $1."],["^Apito\\ final:\\ (.*?)\\ (.*?)–(.*?)\\ (.*?)\\.$","Full time: $1 $2–$3 $4."],["^Continuar\\ o\\ jogo\\ (.*?)$","Continue game $1"],["^GOLO\\ de\\ livre!\\ (.*?)\\ (.*?)\\.$","Free-kick GOAL! $1 $2."],["^🔴\\ A\\ decorrer:\\ (.*?)\\ x\\ (.*?)$","🔴 In progress: $1 v $2"],["^Contra\\ o\\ (.*?),\\ a\\ meio$","Against $1, in progress"],["^⚡\\ química\\ com\\ (.*?)\\ \\((.*?)\\)$","⚡ chemistry with $1 ($2)"],["^(.*?)\\ nem\\ deixa\\ cair!$","$1 hits it on the volley!"],["^(.*?)\\ procura\\ espaço…$","$1 looks for space…"],["^(.*?)\\ sobe\\ mais\\ alto!$","$1 rises highest!"],["^\\((.*?)–(.*?)\\ nos\\ penáltis\\)$","($1–$2 on penalties)"],["^(.*?)\\ lança\\ o\\ ataque…$","$1 launches the attack…"],["^(.*?)\\ procura\\ espaço…$","$1 looks for space…"],["^(.*?)\\ atira\\ à\\ baliza!$","$1 shoots at goal!"],["^(.*?)\\ remata\\ ao\\ lado\\.$","$1 shoots wide."],["^Confirmar\\ (.*?)\\ troca(.*?)$","Confirm $1 swap$2"],["^Jornada\\ (.*?)\\ ·\\ tu\\ x\\ (.*?)$","Matchday $1 · you v $2"],["^Substituição\\ em\\ (.*?)$","Substitution for $1"],["^(.*?)\\ muda\\ o\\ flanco…$","$1 switches the play…"],["^(.*?)\\ tenta\\ a\\ sorte…$","$1 tries his luck…"],["^(.*?)\\ erro(.*?)\\ guardado(.*?)\\.$","$1 error$2 saved$3."],["^(.*?)\\ atira\\ ao\\ lado!$","$1 shoots wide!"],["^,\\ servido\\ por\\ (.*?)\\.$",", set up by $1."],["^Homem\\ do\\ jogo:\\ (.*?)$","Man of the match: $1"],["^Intervalo:\\ (.*?)\\ (.*?)–(.*?)\\ (.*?)\\.$","Half-time: $1 $2–$3 $4."],["^(.*?)\\ ganha\\ metros…$","$1 gains ground…"],["^(.*?)\\ lança\\ na\\ ala…$","$1 plays it out wide…"],["^(.*?)\\ solta\\ a\\ bola…$","$1 releases the ball…"],["^Hat\\-trick\\ de\\ (.*?)!$","Hat-trick for $1!"],["^muda\\ de\\ (.*?)\\ para\\ (.*?)$","switches from $1 to $2"],["^(.*?)\\ ·\\ Escolhe\\ um\\ (.*?)(.*?)$","$1 · Pick a $2$3"],["^(.*?)–(.*?)\\ nos\\ penáltis$","$1–$2 on penalties"],["^,\\ a\\ passe\\ de\\ (.*?)\\.$",", from $1's pass."],["^Amarelo\\ para\\ (.*?)\\.$","Yellow card for $1."],["^Penálti\\ para\\ (.*?)!$","Penalty for $1!"],["^Troca\\ (.*?)\\ ·\\ regra$","Swap $1 · rule"],["^Tática\\ de\\ (.*?):\\ (.*?)\\.\\ (.*?)$","$1's tactics: $2. $3"],["^✅\\ (.*?)\\ contratado!$","✅ $1 signed!"],["^Penálti\\ para\\ (.*?)!$","Penalty for $1!"],["^(.*?)\\ abre\\ o\\ jogo…$","$1 opens up the game…"],["^(.*?)\\ de\\ primeira!$","$1 first time!"],["^(.*?)\\ pede\\ a\\ bola…$","$1 asks for the ball…"],["^(.*?)\\ vira\\ o\\ jogo…$","$1 switches the play…"],["^(.*?)\\ de\\ primeira!$","$1 first time!"],["^(.*?)\\ pica\\ a\\ bola…$","$1 chips the ball…"],["^(.*?)\\ pica\\ a\\ bola…$","$1 chips the ball…"],["^(.*?)\\ abre\\ o\\ jogo…$","$1 opens up the game…"],["^Retomar\\ jogo\\ (.*?)$","Resume game $1"],["^Sou\\ (.*?),\\ mostrar$","I'm $1, show"],["^Treinado\\ por\\ (.*?)$","Coached by $1"],["^(.*?)\\ com\\ a\\ bola…$","$1 on the ball…"],["^(.*?)\\ na\\ recarga!$","$1 on the rebound!"],["^(.*?)\\ tem\\ a\\ bola…$","$1 has the ball…"],["^(.*?)\\ vai\\ embora…$","$1 is gone…"],["^Recarga\\ de\\ (.*?)!$","Rebound from $1!"],["^(.*?)\\ assistência(.*?)$","$1 assist$2"],["^(.*?)\\ vai\\ bater\\.\\ (.*?)$","$1 will take it. $2"],["^(.*?)\\ na\\ recarga!$","$1 on the rebound!"],["^(.*?)\\ com\\ a\\ bola…$","$1 on the ball…"],["^(.*?):\\ sem\\ trocas$","$1: no swaps"],["^Aceite\\ em\\ \"(.*?)\"(.*?)$","Accepted in \"$1\"$2"],["^Canto\\ para\\ (.*?)!$","Corner for $1!"],["^Passe\\ para\\ (.*?)…$","Pass to $1…"],["^Penáltis\\ ·\\ (.*?)–(.*?)$","Penalties · $1–$2"],["^Canto\\ para\\ (.*?)!$","Corner for $1!"],["^(.*?)\\ arma\\ o\\ pé…$","$1 winds up…"],["^(.*?)\\ de\\ cabeça!$","$1 with the header!"],["^(.*?)\\ escapa\\-se…$","$1 breaks away…"],["^(.*?)\\ de\\ cabeça!$","$1 with the header!"],["^GR\\ defende\\ (.*?)$","Keeper saves $1"],["^Penáltis\\ ·\\ (.*?)$","Penalties · $1"],["^Remate\\ de\\ (.*?)!$","Shot from $1!"],["^(.*?)\\ x\\ (.*?),\\ a\\ meio$","$1 vs $2, in progress"],["^Química\\ (.*?)/33$","Chemistry $1/33"],["^(.*?)\\ pela\\ ala…$","$1 down the wing…"],["^(.*?)\\ pela\\ ala…$","$1 down the wing…"],["^(.*?)\\ pela\\ ala…$","$1 down the wing…"],["^(.*?)\\ de\\ (.*?)\\ jogos$","$1 of $2 games"],["^Jogar:\\ (.*?)\\ x\\ (.*?)$","Play: $1 v $2"],["^Jogar:\\ (.*?)\\ x\\ (.*?)$","Play: $1 v $2"],["^O\\ onze\\ de\\ (.*?)$","$1's XI"],["^Penáltis\\ (.*?)–(.*?)$","Penalties $1–$2"],["^Treinador\\ (.*?)$","Coach $1"],["^(.*?)\\ dispara…$","$1 fires…"],["^(.*?)\\ isolado…$","$1 all alone…"],["^(.*?)\\ sozinho!$","$1 all alone!"],["^Capitão:\\ (.*?)$","Captain: $1"],["^escolha\\ (.*?)/(.*?)$","pick $1/$2"],["^(.*?):\\ (.*?)\\ para\\ (.*?)(.*?)\\.$","$1: $2 for $3$4."],["^(.*?)\\ isolado…$","$1 all alone…"],["^(.*?)\\.º\\ ·\\ (.*?)\\ pts$","$1th · $2 pts"],["^Campeão:\\ (.*?)$","Champion: $1"],["^Passar\\ a\\ (.*?)$","Pass to $1"],["^Penáltis\\ (.*?)$","Penalties $1"],["^Penáltis\\ (.*?)$","Penalties $1"],["^Penáltis\\ (.*?)$","Penalties $1"],["^🏆\\ (.*?)\\ ganha(.*?)!$","🏆 $1 win$2!"],["^Capitão:\\ (.*?)$","Captain: $1"],["^(.*?):\\ (.*?)\\ para\\ (.*?)\\.$","$1: $2 for $3."],["^Jogou\\ no\\ (.*?)$","Played for $1"],["^Jogou\\ na\\ (.*?)$","Played for $1"],["^(.*?)\\ avança…$","$1 moves forward…"],["^(.*?)\\ recebe…$","$1 receives…"],["^(.*?)\\ remata…$","$1 shoots…"],["^Bis\\ de\\ (.*?)!$","Brace for $1!"],["^Química\\ (.*?)$","Chemistry $1"],["^(.*?)\\ reclama$","$1 claims"],["^(.*?)\\ avança…$","$1 moves forward…"],["^(.*?)\\ remata…$","$1 shoots…"],["^(.*?)\\ finta\\ (.*?)…$","$1 rounds $2…"],["^(.*?)\\ remata…$","$1 shoots…"],["^(.*?)\\ remata…$","$1 shoots…"],["^Jornada\\ (.*?)(.*?)$","Matchday $1$2"],["^Onze\\ de\\ (.*?)$","$1's XI"],["^Tática:\\ (.*?)$","Tactics: $1"],["^…entra\\ (.*?)\\.$","…$1 comes on."],["^Química\\ (.*?)$","Chemistry $1"],["^Jornada\\ (.*?)$","Matchday $1"],["^(.*?)\\ atira…$","$1 shoots…"],["^(.*?)\\ passa…$","$1 passes…"],["^(.*?)\\ serve…$","$1 plays it in…"],["^(.*?):\\ (.*?)V\\ (.*?)E\\ (.*?)D$","$1: $2W $3D $4L"],["^(.*?)\\ bate\\ (.*?)…$","$1 goes $2…"],["^(.*?)\\ serve…$","$1 plays it in…"],["^(.*?)\\ remate(.*?)$","$1 shot$2"],["^(.*?)\\ defesa(.*?)$","$1 save$2"],["^Ronda\\ (.*?)/(.*?)$","Round $1/$2"],["^Jogou\\ (.*?)\\ (.*?)$","Played for $2"],["^Vez\\ de\\ (.*?)$","$1's turn"],["^Força\\ (.*?)$","Strength $1"],["^Força\\ (.*?)$","Strength $1"],["^Ronda\\ (.*?)$","Round $1"],["^versão (.*?)$","version $1"],["^(.*?)\\ golo(.*?)$","$1 goal$2"],["^(.*?)\\ por\\ (.*?)$","$1 for $2"],["^Bate\\ (.*?)$","Goes $1"],["^Sai\\ (.*?)…$","$1 goes off…"],["^Bot\\ (.*?)$","Bot $1"]]};
const TRC=new Map(),TRP=LANG==="en"&&I18N?I18N.p.map(([r,e])=>[new RegExp(r),e]):[],TRD=LANG==="en"&&I18N?I18N.d:{};
function tr1(c,depth){
  const d=TRD[c];if(d!=null)return d;
  if(depth>2||c.length>400)return c;
  for(const [re,en] of TRP){const m=c.match(re);if(m)return en.replace(/\$(\d)/g,(_,i)=>{const g=m[+i]||"";const t=g.trim();return t?g.replace(t,tr1(t,depth+1)):g})}
  /* frases feitas de peças: "6' · Penálti para X!", "Diogo: Rasteiro à direita" */
  if(c.includes(" · ")){const ps=c.split(" · "),ts=ps.map(x=>{const t=x.trim();return t?x.replace(t,tr1(t,depth+1)):x});if(ts.some((x,i)=>x!==ps[i]))return ts.join(" · ")}
  const k=c.indexOf(": ");if(k>0&&k<60){const L=c.slice(0,k),R=c.slice(k+2),tR=tr1(R,depth+1),tL=tr1(L,depth+1);if(tR!==R||tL!==L)return tL+": "+tR}
  const ss=c.split(/(?<=[.!?…])\s+(?=[A-ZÀ-Ý"“⚡⏱])/);if(ss.length>1){const ts=ss.map(x=>tr1(x,depth+1));if(ts.some((x,i)=>x!==ss[i]))return ts.join(" ")}
  return c}
function tr(s){
  if(LANG==="pt"||!s||typeof s!=="string")return s;
  let r=TRC.get(s);if(r!==undefined)return r;
  const m=s.match(/^(\s*)([\s\S]*?)(\s*)$/);r=m[2]?m[1]+tr1(m[2],0)+m[3]:s;
  if(TRC.size<20000)TRC.set(s,r);return r}
if(LANG==="en"){
  document.documentElement.lang="en";
  const SKIP=new Set(["SCRIPT","STYLE","TEXTAREA","INPUT"]);
  const ATTR=["placeholder","title","aria-label"];
  const trEl=e=>{for(const a of ATTR){const v=e.getAttribute&&e.getAttribute(a);if(v){const t=tr(v);if(t!==v)e.setAttribute(a,t)}}};
  const walk=n=>{
    if(n.nodeType===3){const v=n.nodeValue;if(/[A-Za-zÀ-ÿ]/.test(v)){const t=tr(v);if(t!==v)n.nodeValue=t}return}
    if(n.nodeType!==1||(n.closest&&n.closest("[data-noi18n]")))return;
    trEl(n);if(SKIP.has(n.tagName))return;for(let c=n.firstChild;c;c=c.nextSibling)walk(c)};
  const mo=new MutationObserver(ms=>{for(const m of ms){
    if(m.type==="characterData")walk(m.target);
    else if(m.type==="attributes")trEl(m.target);
    else m.addedNodes.forEach(walk)}});
  const start=()=>{walk(document.body);mo.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTR});document.title=tr(document.title)};
  if(document.body)start();else document.addEventListener("DOMContentLoaded",start);
  const C=CanvasRenderingContext2D.prototype;["fillText","strokeText","measureText"].forEach(k=>{const f=C[k];C[k]=function(t,...a){return f.call(this,typeof t==="string"?tr(t):t,...a)}});
  const A=window.alert,CF=window.confirm,PR=window.prompt;
  window.alert=m=>A.call(window,tr(String(m)));window.confirm=m=>CF.call(window,tr(String(m)));window.prompt=(m,d)=>PR.call(window,tr(String(m)),d);
}
function setLang(l){try{localStorage.setItem("duelo_lang",JSON.stringify(l))}catch(e){}location.reload()}
/*I18N_END*/
const HDR=h=>LANG==="en"?({J:"P",V:"W",E:"D",D:"L"})[h]||h:h;

const TACT={
 posse:{nome:"Posse de bola",desc:"Domina o meio-campo e controla o ritmo do jogo.",mid:5,poss:.06},
 pressao:{nome:"Pressão alta",desc:"Recupera a bola perto da baliza adversária e cria mais ocasiões.",mid:2,att:3,def:-1,ev:.15},
 contra:{nome:"Contra-ataque",desc:"Defende compacto e mata em transições quando o adversário tem a bola.",def:4,counter:true},
 bloco:{nome:"Bloco baixo",desc:"Muito difícil de furar, mas cria pouco.",def:6,gk:2,att:-2,ev:-.1},
 ofensivo:{nome:"Futebol ofensivo",desc:"Ataca com tudo, mas deixa espaço nas costas.",att:5,def:-3,ev:.12},
 equilibrio:{nome:"Equilíbrio",desc:"Sem pontos fracos: todos os setores um pouco melhores.",all:2},
 estrelas:{nome:"Gestão de estrelas",desc:"Os craques com qualidade 90 ou mais rendem ainda mais.",star:3},
 quimica:{nome:"Espírito de família",desc:"A química da equipa vale a dobrar.",chem:2},
 intensidade:{nome:"Intensidade",desc:"Agressivo a defender e no meio-campo.",def:3,mid:3,att:-1},
 alas:{nome:"Ataque pelas alas",desc:"Extremos rápidos e cruzamentos para a área.",att:4,mid:-1}
};
const FORMS={"4-3-3":{GR:1,DEF:4,MED:3,AVA:3},"4-4-2":{GR:1,DEF:4,MED:4,AVA:2},"4-2-3-1":{GR:1,DEF:4,MED:5,AVA:1},"3-5-2":{GR:1,DEF:3,MED:5,AVA:2},"3-4-3":{GR:1,DEF:3,MED:4,AVA:3},"5-3-2":{GR:1,DEF:5,MED:3,AVA:2}};
const POS=["GR","DEF","MED","AVA"], POSN={GR:"Guarda-redes",DEF:"Defesas",MED:"Médios",AVA:"Avançados"};
const NAT={POR:"Portugal",BRA:"Brasil",ARG:"Argentina",ESP:"Espanha",FRA:"França",ENG:"Inglaterra",GER:"Alemanha",NED:"Países Baixos",ITA:"Itália",URU:"Uruguai",BEL:"Bélgica",SVN:"Eslovénia",CZE:"Chéquia",DEN:"Dinamarca",URS:"União Soviética",GRE:"Grécia",UKR:"Ucrânia",POL:"Polónia",SWE:"Suécia",CIV:"Costa do Marfim",SRB:"Sérvia",MAR:"Marrocos",AUT:"Áustria",CRO:"Croácia",MEX:"México",JPN:"Japão",TUR:"Turquia",BUL:"Bulgária",GHA:"Gana",NOR:"Noruega",ROU:"Roménia",COL:"Colômbia",NGA:"Nigéria",ALG:"Argélia",RSA:"África do Sul",MLI:"Mali",IRN:"Irão",PAR:"Paraguai",HUN:"Hungria",EGY:"Egito",CMR:"Camarões",WAL:"País de Gales",NIR:"Irlanda do Norte",GEO:"Geórgia",LBR:"Libéria",KOR:"Coreia do Sul",SEN:"Senegal"};
const AFR=new Set(["Costa do Marfim","Marrocos","Gana","Nigéria","Argélia","África do Sul","Mali","Egito","Camarões","Libéria","Senegal","RD Congo","Tunísia","Guiné","Cabo Verde","Angola","Moçambique","Guiné-Bissau","Burkina Faso","Gabão","Congo","Zâmbia","Zimbabué","Quénia","Togo","Benim","Gâmbia","Serra Leoa","Guiné Equatorial","São Tomé e Príncipe","The Gambia","Uganda","Tanzânia","Madagáscar","Comores","Mauritânia","Líbia","Burundi","Chade","Zaire","República Centro-Africana","Eritrea","Djibouti","Mauritius","Seychelles"]),
      SAM=new Set(["Brasil","Argentina","Uruguai","Colômbia","Paraguai","Chile","Peru","Equador","Venezuela","Bolívia"]);
const CC={};CLUBS.forEach((c,i)=>CC[c]=CLUBCC[i]);
const inL=(p,l)=>p.cl.some(c=>CC[c]===l);
const FEM=new Set(["Juventus","Roma","Lazio","Fiorentina","Atalanta","Sampdoria","Real Sociedad","Udinese","Académica","Salernitana","Cremonese","Spezia","Reggina"]);
const BIG3=["Benfica","FC Porto","Sporting"];

const RULES=[];
(function(){
  const add=(cat,l,t)=>RULES.push({cat,l,t});
  const cnt={};DB.forEach(p=>p.cl.forEach(c=>cnt[c]=(cnt[c]||0)+1));
  Object.entries(cnt).filter(([c,n])=>n>=(CC[c]==="PT"?20:45)).forEach(([c])=>add("clube",`Jogou ${FEM.has(c)?"na":"no"} ${c}`,p=>p.cl.includes(c)));
  [["Portugal","Portugal"],["Brasil","Brasil"],["Argentina","Argentina"],["Espanha","Espanha"],["França","França"],["Inglaterra","Inglaterra"],["Alemanha","Alemanha"],["Países Baixos","Países Baixos"],["Itália","Itália"],["Uruguai","Uruguai"],["Bélgica","Bélgica"],["Colômbia","Colômbia"],["Croácia","Croácia"]]
    .forEach(([c,l])=>add("selecao",`Jogou pela seleção ${l==="Países Baixos"?"dos":["Argentina","Espanha","França","Inglaterra","Alemanha","Itália","Bélgica","Colômbia","Croácia"].includes(l)?"da":"de"} ${l}`,p=>p.c===c&&p.caps>0));
  add("selecao","Africano",p=>AFR.has(p.c));add("selecao","Sul-americano",p=>SAM.has(p.c));
  add("selecao","50 ou mais jogos pela seleção",p=>p.caps>=50);
  add("selecao","Nasceu num país diferente do que representa",p=>p.born&&p.born!==p.c);
  [["PT","Jogou em Portugal"],["ENG","Jogou em Inglaterra"],["ESP","Jogou em Espanha"],["ITA","Jogou em Itália"],["GER","Jogou na Alemanha"],["FRA","Jogou em França"],["NED","Jogou nos Países Baixos"],["TUR","Jogou na Turquia"],["KSA","Jogou na Arábia Saudita"],["USA","Jogou na MLS"],["GRE","Jogou na Grécia"]].forEach(([k,l])=>add("liga",l,p=>inL(p,k)));
  add("liga","Estrangeiro que jogou em Portugal",p=>p.c!=="Portugal"&&inL(p,"PT"));
  add("liga","Português que jogou no estrangeiro",p=>p.c==="Portugal"&&p.cl.some(c=>CC[c]&&CC[c]!=="PT"));
  add("liga","Jogou em dois dos três grandes",p=>BIG3.filter(c=>p.cl.includes(c)).length>=2);
  add("liga","Português que jogou em dois dos três grandes",p=>p.c==="Portugal"&&BIG3.filter(c=>p.cl.includes(c)).length>=2);
  add("liga","Jogou em Portugal e em Inglaterra",p=>inL(p,"PT")&&inL(p,"ENG"));
  add("liga","Jogou em Portugal e em Espanha",p=>inL(p,"PT")&&inL(p,"ESP"));
  add("liga","Jogou em Inglaterra e em Espanha",p=>inL(p,"ENG")&&inL(p,"ESP"));
  add("liga","Jogou em Itália e em Espanha",p=>inL(p,"ITA")&&inL(p,"ESP"));
  const has=t=>p=>p.tg.includes(t);
  [["ucl","Ganhou a Liga dos Campeões"],["uel","Ganhou a Liga Europa (ou Taça UEFA)"],["cPT","Campeão nacional em Portugal"],["cENG","Campeão em Inglaterra"],["cESP","Campeão em Espanha"],["cITA","Campeão em Itália"],["cGER","Campeão na Alemanha"],["cFRA","Campeão em França"],["wc","Campeão do Mundo"],["euro","Campeão da Europa pela seleção"],["bdo","Ganhou a Bola de Ouro"]]
    .forEach(([t,l])=>add("titulo",l,has(t)));
  add("titulo","Campeão em dois países diferentes",p=>p.tg.filter(t=>/^c[A-Z]{3}$|^cPT$/.test(t)).length>=2);
  const tc={};DB.forEach(p=>p.tg.forEach(t=>{if(t.startsWith("t:"))tc[t]=(tc[t]||0)+1}));
  Object.entries(tc).filter(([t,n])=>n>=30).forEach(([t])=>add("treinador",`Treinado por ${t.slice(2)}`,has(t)));
  add("perfil","Mede 1,90 m ou mais",p=>p.h>=190);
  add("perfil","Mede 1,72 m ou menos",p=>p.h>0&&p.h<=172);
  add("perfil","Nasceu nos anos 80",p=>p.by>=1980&&p.by<1990);
  add("perfil","Nasceu nos anos 90",p=>p.by>=1990&&p.by<2000);
  add("perfil","Nasceu em 2000 ou depois",p=>p.by>=2000);
})();
const RCATS=["clube","selecao","liga","titulo","treinador","perfil"];
const FREE={l:"Escolha livre",t:()=>true};

const $=id=>document.getElementById(id);
const rand=n=>Math.floor(Math.random()*n);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=rand(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const norm=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
const COL=["var(--home)","var(--away)","#ffd166","#7fe0a8","#c792ea","#ff9f43","#5ad1e6","#f78fb3"];
function el(t,c,x){const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
const SCREENS=["sStart","sLobby","sTour","sCoach","sDraft","sCap","sPre","sBracket","sMatch","sResult","sSeason","sMe","sQuick","sWelcome"];
function show(id){const was=SCREENS.find(s=>!$(s).hidden);SCREENS.forEach(s=>$(s).hidden=s!==id);if(id==="sStart"&&typeof instRefresh==="function")instRefresh();
  if(id==="sStart"&&typeof drawHome==="function")drawHome();if(was!==id)window.scrollTo(0,0);document.documentElement.classList.add("lockmatch");if(FITS[id])requestAnimationFrame(fitStart)}
const FITS={sLobby:["fA","fB","fC"],sTour:["fA","fB","fC"]};
function fitStart(){for(const id in FITS){const s=document.getElementById(id);if(!s||s.hidden)continue;const F=FITS[id];s.classList.remove(...F);
  for(const c of F){if(s.scrollHeight<=s.clientHeight+1)break;s.classList.add(c)}}}
window.addEventListener("resize",()=>requestAnimationFrame(fitStart));
["sLobby","sTour"].forEach(id=>new MutationObserver(()=>requestAnimationFrame(fitStart)).observe(document.getElementById(id),{subtree:true,childList:true,attributes:true,attributeFilter:["hidden"]}));
document.documentElement.classList.add("lockmatch");requestAnimationFrame(fitStart);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>fitStart());
function store(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k));if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}

/* ---- sorte com semente: os dois telemóveis tiram as mesmas regras e o mesmo jogo ---- */
function seeded(str){let h=2166136261;for(const c of str){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}let a=h>>>0;
  return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function withRng(r,fn){const o=Math.random;Math.random=r;try{return fn()}finally{Math.random=o}}
const newSeed=()=>Math.random().toString(36).slice(2,10);

let G=null;
/* drafts temáticos: só entram jogadores do tema (os júniores da formação entram sempre) */
const THEMES={"":{n:"Normal",f:()=>true},pt:{n:"Só portugueses",f:p=>p.c==="Portugal"},lendas:{n:"Só lendas (nascidos antes de 1980)",f:p=>p.by>0&&p.by<1980},
  novos:{n:"Geração atual (nascidos em 1995 ou depois)",f:p=>p.by>=1995},ligapt:{n:"Só quem jogou em Portugal",f:p=>p.cl.some(c=>CC[c]==="PT")},
  sam:{n:"Só sul-americanos",f:p=>SAM.has(p.c)},craques:{n:"Só craques (80 ou mais)",f:p=>p.r>=80},
  prem:{n:"Só quem jogou em Inglaterra",s:"Liga inglesa",f:p=>p.cl.some(c=>CC[c]==="ENG")},
  laliga:{n:"Só quem jogou em Espanha",s:"Liga espanhola",f:p=>p.cl.some(c=>CC[c]==="ESP")},
  seriea:{n:"Só quem jogou em Itália",s:"Liga italiana",f:p=>p.cl.some(c=>CC[c]==="ITA")},
  buli:{n:"Só quem jogou na Alemanha",s:"Liga alemã",f:p=>p.cl.some(c=>CC[c]==="GER")},
  grandes:{n:"Passaram por Benfica, Porto ou Sporting",s:"Três grandes",f:p=>p.cl.some(c=>c==="Benfica"||c==="FC Porto"||c==="Sporting")},
  campeoes:{n:"Só campeões (Champions, Liga Europa, Mundial ou Europeu)",s:"Campeões",f:p=>p.tg.some(x=>x==="ucl"||x==="uel"||x==="wc"||x==="euro")},
  inter:{n:"Só internacionais (50 ou mais jogos pela seleção)",s:"Internacionais",f:p=>p.caps>=50},
  afr:{n:"Só africanos",s:"Africanos",f:p=>AFR.has(p.c)},
  gig:{n:"Só gigantes (1,85 m ou mais)",s:"Gigantes",f:p=>p.h>=185},
  mil:{n:"Geração 80–94 (nascidos entre 1980 e 1994)",s:"Geração 80–94",f:p=>p.by>=1980&&p.by<=1994},
  /* seleções */
  es:{n:"Só espanhóis",s:"Espanhóis",f:p=>p.c==="Espanha"},fr:{n:"Só franceses",s:"Franceses",f:p=>p.c==="França"},
  br:{n:"Só brasileiros",s:"Brasileiros",f:p=>p.c==="Brasil"},ar:{n:"Só argentinos",s:"Argentinos",f:p=>p.c==="Argentina"},
  en:{n:"Só ingleses",s:"Ingleses",f:p=>p.c==="Inglaterra"},it:{n:"Só italianos",s:"Italianos",f:p=>p.c==="Itália"},
  de:{n:"Só alemães",s:"Alemães",f:p=>p.c==="Alemanha"},nl:{n:"Só neerlandeses",s:"Neerlandeses",f:p=>p.c==="Países Baixos"},
  luso:{n:"Só lusófonos (Portugal, Brasil, PALOP)",s:"Lusófonos",f:p=>["Portugal","Brasil","Angola","Cabo Verde","Moçambique","Guiné-Bissau","São Tomé e Príncipe"].includes(p.c)},
  nord:{n:"Só nórdicos (Dinamarca, Suécia, Noruega, Finlândia, Islândia)",s:"Nórdicos",f:p=>["Dinamarca","Suécia","Noruega","Finlândia","Islândia"].includes(p.c)},
  balc:{n:"Só dos Balcãs",s:"Balcãs",f:p=>["Croácia","Sérvia","Bósnia","Eslovénia","Montenegro","Macedónia do Norte","Albânia","Jugoslávia","Kosovo"].includes(p.c)},
  /* clubes */
  slb:{n:"Passaram pelo Benfica",s:"Benfica",f:p=>p.cl.includes("Benfica")},fcp:{n:"Passaram pelo FC Porto",s:"FC Porto",f:p=>p.cl.includes("FC Porto")},
  scp:{n:"Passaram pelo Sporting",s:"Sporting",f:p=>p.cl.includes("Sporting")},
  classico:{n:"Passaram pelo Real Madrid ou pelo Barcelona",s:"Real ou Barça",f:p=>p.cl.includes("Real Madrid")||p.cl.includes("Barcelona")},
  madrid:{n:"Passaram por um clube de Madrid (Real ou Atlético)",s:"Madrid",f:p=>p.cl.includes("Real Madrid")||p.cl.includes("Atlético de Madrid")},
  milao:{n:"Passaram pelo Milan ou pelo Inter",s:"Milão",f:p=>p.cl.includes("AC Milan")||p.cl.includes("Inter")},
  manch:{n:"Passaram pelo Manchester United ou pelo City",s:"Manchester",f:p=>p.cl.includes("Manchester United")||p.cl.includes("Manchester City")},
  londres:{n:"Passaram por um clube de Londres",s:"Londres",f:p=>p.cl.some(c=>["Arsenal","Chelsea","Tottenham","West Ham","Fulham","Crystal Palace","QPR","Brentford","Charlton"].includes(c))},
  big6:{n:"Passaram pelos seis grandes de Inglaterra",s:"Big Six",f:p=>p.cl.some(c=>["Arsenal","Chelsea","Liverpool","Manchester United","Manchester City","Tottenham"].includes(c))},
  juve:{n:"Passaram pela Juventus",s:"Juventus",f:p=>p.cl.includes("Juventus")},
  /* campeonatos */
  ligue1:{n:"Só quem jogou em França",s:"Liga francesa",f:p=>p.cl.some(c=>CC[c]==="FRA")},
  ered:{n:"Só quem jogou nos Países Baixos",s:"Liga neerlandesa",f:p=>p.cl.some(c=>CC[c]==="NED")},
  turq:{n:"Só quem jogou na Turquia",s:"Liga turca",f:p=>p.cl.some(c=>CC[c]==="TUR")},
  ouro:{n:"Reforma dourada (jogaram na Arábia, Qatar, Emirados, China ou EUA)",s:"Reforma dourada",f:p=>p.cl.some(c=>["KSA","QAT","UAE","CHN","USA"].includes(CC[c]))},
  /* títulos e seleção */
  ucl:{n:"Só vencedores da Liga dos Campeões",s:"Campeões europeus",f:p=>p.tg.includes("ucl")},
  wc:{n:"Só campeões do Mundo",s:"Campeões do Mundo",f:p=>p.tg.includes("wc")},
  cem:{n:"Centenários (100 ou mais jogos pela seleção)",s:"Centenários",f:p=>p.caps>=100},
  /* treinadores */
  mou:{n:"Treinados por José Mourinho",s:"Mourinho",f:p=>p.tg.includes("t:José Mourinho")},
  anc:{n:"Treinados por Ancelotti",s:"Ancelotti",f:p=>p.tg.includes("t:Ancelotti")},
  pep:{n:"Treinados por Guardiola",s:"Guardiola",f:p=>p.tg.includes("t:Guardiola")},
  jj:{n:"Treinados por Jorge Jesus",s:"Jorge Jesus",f:p=>p.tg.includes("t:Jorge Jesus")},
  /* épocas e outros */
  d70:{n:"Nascidos nos anos 70",s:"Anos 70",f:p=>p.by>=1970&&p.by<=1979},d80:{n:"Nascidos nos anos 80",s:"Anos 80",f:p=>p.by>=1980&&p.by<=1989},
  d90:{n:"Nascidos nos anos 90",s:"Anos 90",f:p=>p.by>=1990&&p.by<=1999},
  oper:{n:"Sem estrelas (rating abaixo de 85)",s:"Sem estrelas",f:p=>p.r<85},
  viaj:{n:"Viajantes (passaram por 6 ou mais clubes)",s:"Viajantes",f:p=>p.cl.length>=6},
  fiel:{n:"Fiéis (no máximo 2 clubes na carreira)",s:"Fiéis",f:p=>p.cl.length>0&&p.cl.length<=2}};
/* tipos de draft: os botões são feitos a partir da lista, em todos os ecrãs onde se escolhe o draft */
document.querySelectorAll(".thChips").forEach(box=>{box.innerHTML="";Object.entries(THEMES).forEach(([k,v])=>{const b=document.createElement("button");b.className="chip";b.dataset.th=k;
  b.textContent=v.s||({"":"Normal",pt:"Só portugueses",lendas:"Só lendas",novos:"Geração atual",ligapt:"Jogaram em Portugal",sam:"Sul-americanos",craques:"Só craques"})[k]||v.n;b.title=v.n;box.append(b)})});
/* regras que (quase) todos os jogadores do tema cumprem não têm graça nesse draft: ficam de fora */
const THTRIV=new Map();
function themeTrivial(r){const th=G&&G.theme;if(!th||!THEMES[th])return false;let S=THTRIV.get(th);
  if(!S){S=new Set();const pool=DB.filter(THEMES[th].f);if(pool.length)RULES.forEach(x=>{let k=0;for(const p of pool)if(x.t(p))k++;if(k>=pool.length*.85)S.add(x.l)});THTRIV.set(th,S)}
  return S.has(r.l)}
let THEME=(()=>{const v=store("duelo_theme");return THEMES[v]?v:""})();
const inTheme=p=>!G||!G.theme||!THEMES[G.theme]||p.youth||THEMES[G.theme].f(p);
/* só os tipos mais usados ficam à vista; os outros abrem com a seta (o escolhido aparece sempre) */
const THTOP=new Set(["","pt","lendas","novos"]);
document.querySelectorAll(".thChips").forEach(box=>{const t=document.createElement("button");t.type="button";t.className="thMore";box.append(t);
  t.onclick=()=>{box.dataset.open=box.dataset.open==="1"?"":"1";drawThChips()}});
function drawThChips(){document.querySelectorAll(".thChips").forEach(box=>{const open=box.dataset.open==="1";let n=0;
  box.querySelectorAll(".chip").forEach(b=>{b.setAttribute("aria-pressed",b.dataset.th===THEME);const top=THTOP.has(b.dataset.th);if(!top)n++;b.hidden=!open&&!top&&b.dataset.th!==THEME});
  const t=box.querySelector(".thMore");if(t){t.textContent=open?"▴ Menos":`▾ Mais tipos de draft (${n})`;t.setAttribute("aria-expanded",open)}})}
document.querySelectorAll(".thChips .chip").forEach(b=>b.onclick=()=>{THEME=b.dataset.th;store("duelo_theme",THEME);drawThChips();
  if(G&&G.mode==="online"&&G.me===0&&!G.online.go){G.theme=THEME||null;pushPresence();lobby()}});
drawThChips();
const TMOPT=[0,30,45,60,90];
let TMSET=(()=>{const v=store("duelo_tm");return TMOPT.includes(v)?v:45})();
function drawTmChips(){document.querySelectorAll(".tmChips .chip").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.s===TMSET))}
document.querySelectorAll(".tmChips .chip").forEach(b=>b.onclick=()=>{TMSET=+b.dataset.s;store("duelo_tm",TMSET);drawTmChips();
  if(G&&(G.mode!=="online"||G.me===0)){G.tm=TMSET;if(G.mode==="online")pushPresence()}});
drawTmChips();
function newGame(mode,names,seed){
  G={mode,names,n:names.length,seed,cfg:names.map(()=>({coach:null,form:null})),caps:names.map(()=>null),picks:[],mine:[],m:0,me:null,dec:{},res:{},playing:null,cardI:-1,
     tm:TMSET,avoid:mode==="online"&&!seed?null:(store("duelo_recent_rules")||[]).slice(-70),theme:mode==="online"&&!seed?null:(THEME||null),lg:null,showR:$("showR").checked,listMode:$("listMode").checked,teams:null,cur:null,sel:null,tries:3,peekT:null,shownM:0,lastI:-1,coachFor:-1,tour:null};
  G.easy=mode!=="online"&&(H().games||[]).length<3;
}
(function(){const s=store("duelo_names");if(s){$("n0").value=s[0]||"";$("n1").value=s[1]||""}
  const o=store("duelo_online");if(o&&o.code){const b=$("resumeBtn");$("resumeTxt").textContent=`Retomar jogo ${o.code}`;b.hidden=false}})();
function myName(){return $("n0").value.trim()||"Treinador"}

function openSheet(id){$(id).hidden=false;const i=$(id).querySelector("input");if(i&&id==="shNames")setTimeout(()=>i.focus(),60)}
document.querySelectorAll("[data-sheet]").forEach(b=>b.onclick=()=>openSheet(b.dataset.sheet));
document.querySelectorAll(".sheet").forEach(sh=>{sh.addEventListener("click",e=>{if(e.target===sh||e.target.closest("[data-close]"))sh.hidden=true})});
$("goStart").onclick=()=>openSheet("shNames");
let botLv=+(store("duelo_botlv")||2);
function drawBotSheet(){$("bLevel").querySelectorAll(".lv").forEach(b=>{b.setAttribute("aria-pressed",+b.dataset.lv===botLv);b.onclick=()=>{botLv=+b.dataset.lv;drawBotSheet()}});
  const r=store("duelo_bot")||{};$("bRec").textContent=[1,2,3].filter(l=>r[l]).map(l=>`${LVN[l]}: ${r[l].v}V ${r[l].e}E ${r[l].d}D`).join(" · ")||"Ainda não jogaste contra o bot."}
$("botBtn").onclick=()=>{$("bName").value=$("n0").value;drawBotSheet();openSheet("shBot")};
$("bName").addEventListener("input",()=>{$("n0").value=$("bName").value});
$("bGo").onclick=()=>{$("shBot").hidden=true;store("duelo_botlv",botLv);const nm=$("bName").value.trim()||"Treinador";$("n0").value=nm;
  store("duelo_names",[nm,$("n1").value.trim()]);newGame("local",[nm,"Bot "+LVN[botLv]],newSeed());G.bots={1:botLv};render()};
["n0","n1"].forEach(id=>$(id).addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();id==="n0"?$("n1").focus():$("goBtn").click()}}));
$("goBtn").onclick=()=>{$("shNames").hidden=true;
  const names=[$("n0").value.trim()||"Treinador 1",$("n1").value.trim()||"Treinador 2"];
  if(names[0].toLowerCase()===names[1].toLowerCase())names[1]+=" 2";
  store("duelo_names",names);
  newGame("local",names,newSeed());render();
};

/* ---- treinador ---- */
let selCoach=null, selForm=null;
const takenCoaches=t=>G.cfg.filter((c,i)=>i!==t&&c.coach).map(c=>c.coach.n);
function coachScreen(t){
  if(G.coachFor===t&&!$("sCoach").hidden)return;
  G.coachFor=t;selCoach=null;selForm=null;
  const w=$("cWho");w.innerHTML="";w.style.setProperty("--c",COL[t]);w.append(el("span","dot"),el("span",null,G.names[t]));
  const taken=takenCoaches(t);
  const list=$("coachList");list.innerHTML="";
  COACHES.forEach(c=>{
    const b=el("button","coach");b.append(el("b",null,c.n),el("div","f",c.f),el("span",null,TACT[c.t].nome));
    b.setAttribute("aria-pressed","false");
    if(taken.includes(c.n)){b.disabled=true;b.querySelector("span").textContent="Já escolhido"}
    b.onclick=()=>{selCoach=c;selForm=c.f;list.querySelectorAll(".coach").forEach(x=>x.setAttribute("aria-pressed",x===b));drawForms();$("formBox").hidden=false;$("coachOk").disabled=false;
      setTimeout(()=>b.scrollIntoView({block:"nearest"}),30)};
    list.append(b);
  });
  $("formBox").hidden=true;$("coachOk").disabled=true;show("sCoach");
}
function lockTakenCoach(){
  if($("sCoach").hidden||G.coachFor<0)return;const taken=takenCoaches(G.coachFor);
  $("coachList").querySelectorAll(".coach").forEach((b,i)=>{const c=COACHES[i],tk=taken.includes(c.n);
    if(tk!==b.disabled){b.disabled=tk;b.querySelector("span").textContent=tk?"Já escolhido":TACT[c.t].nome;
      if(tk&&selCoach&&selCoach.n===c.n){selCoach=null;b.setAttribute("aria-pressed","false");$("formBox").hidden=true;$("coachOk").disabled=true}}});
}
function drawForms(){
  const f=$("forms");f.innerHTML="";
  Object.keys(FORMS).forEach(k=>{const b=el("button","chip");b.append(k);if(k===selCoach.f)b.append(el("small",null," ★ preferida"));
    b.setAttribute("aria-pressed",k===selForm);b.onclick=()=>{selForm=k;drawForms()};f.append(b)});
  $("tactDesc").textContent=`Tática de ${selCoach.n}: ${TACT[selCoach.t].nome}. ${TACT[selCoach.t].desc}`;
}
$("coachOk").onclick=()=>{
  const t=G.coachFor;
  if(!selCoach||takenCoaches(t).includes(selCoach.n)){G.coachFor=-1;coachScreen(t);return}
  G.cfg[t].coach=selCoach;G.cfg[t].form=selForm;G.coachFor=-1;
  if(G.mode==="online")pushPresence();
  render();
};

/* ---- escolhas: tudo é reconstruído a partir da lista de escolhas ---- */
const ROWS={
 "4-3-3":[["AVA",["EE","PL","ED"]],["MED",["MC","MC","MC"]],["DEF",["DE","DC","DC","DD"]],["GR",["GR"]]],
 "4-4-2":[["AVA",["PL","PL"]],["MED",["ME","MC","MC","MD"]],["DEF",["DE","DC","DC","DD"]],["GR",["GR"]]],
 "4-2-3-1":[["AVA",["PL"]],["MED",["ME","MO","MD"]],["MED",["MDC","MDC"]],["DEF",["DE","DC","DC","DD"]],["GR",["GR"]]],
 "3-5-2":[["AVA",["PL","PL"]],["MED",["ME","MC","MO","MC","MD"]],["DEF",["DC","DC","DC"]],["GR",["GR"]]],
 "3-4-3":[["AVA",["EE","PL","ED"]],["MED",["ME","MC","MC","MD"]],["DEF",["DC","DC","DC"]],["GR",["GR"]]],
 "5-3-2":[["AVA",["PL","PL"]],["MED",["MC","MC","MC"]],["DEF",["DE","DC","DC","DC","DD"]],["GR",["GR"]]]
};
const POSL={GR:"guarda-redes",DEF:"defesa",MED:"médio",AVA:"avançado",SUP:"suplente (qualquer posição)"};
const RD=14,NBENCH=3;
const DBN=new Map(DB.map(p=>[p.n,p]));
function buildSlots(f){const s=[];ROWS[f].forEach((r,ri)=>r[1].forEach(l=>s.push({pos:r[0],label:l,row:ri,pl:null})));for(let i=0;i<NBENCH;i++)s.push({pos:"SUP",label:"SUP",row:-1,pl:null});return s}
function needs(t){const n={GR:0,DEF:0,MED:0,AVA:0,SUP:0};G.teams[t].slots.forEach(s=>{if(!s.pl)n[s.pos]++});return n}
/* extremos (esquerdo/direito) podem jogar também a médio esquerdo ou direito */
const WIDE=new Set(["ME","MD"]);
const fitsPos=(p,pos,label)=>pos==="SUP"||p.p===pos||(!!p.p2&&p.p2===pos)||(!!p.w&&pos==="MED"&&WIDE.has(label));
const fitsSlot=(p,s)=>fitsPos(p,s.pos,s.label);
function eligible(t,rule,pos,label){const n=needs(t),wide=G.teams[t].slots.some(s=>!s.pl&&s.pos==="MED"&&WIDE.has(s.label));
  return DB.filter(p=>!G.taken.has(p.n)&&inTheme(p)&&(pos?fitsPos(p,pos,label):(n[p.p]>0||(p.p2&&n[p.p2]>0)||n.SUP>0||(p.w&&wide)))&&rule.t(p))}
/* regras: categorias sorteadas com peso pela quantidade de regras (as categorias pequenas já não se repetem tanto)
   e as regras dos últimos jogos ficam para o fim da fila */
function chooseRule(){
  const pool=RULES.filter(r=>!G.used.has(r.l)&&!themeTrivial(r)&&(!G.theme||!THEMES[G.theme]||!THEMES[G.theme].skip||!THEMES[G.theme].skip(r)));
  const av=new Set(G.avoid||[]),w={};pool.forEach(r=>{if(r.cat!==G.lastCat)w[r.cat]=(w[r.cat]||0)+1});
  const cats=[],left=Object.keys(w);while(left.length){let tot=left.reduce((a,c)=>a+Math.sqrt(w[c]),0),x=Math.random()*tot,i=0;
    for(;i<left.length-1;i++){x-=Math.sqrt(w[left[i]]);if(x<=0)break}cats.push(left.splice(i,1)[0])}
  const fresh=cats.flatMap(c=>shuffle(pool.filter(r=>r.cat===c&&!av.has(r.l)))),old=cats.flatMap(c=>shuffle(pool.filter(r=>r.cat===c&&av.has(r.l))));
  const cands=[...fresh,...old];
  /* nos primeiros jogos deste telemóvel, as 3 primeiras rondas só têm regras com muitos craques */
  const tiers=G.easy&&(G.rules||[]).length<3?[[15,88],[12,88],[12,85],[3,80],[2,76],[2,0],[1,0]]:[[3,80],[2,76],[2,0],[1,0]];
  for(const [min,q] of tiers){
    const r=cands.find(r=>G.teams.every((_,t)=>eligible(t,r).filter(p=>p.r>=q).length>=min));if(r)return r}
  return FREE;
}
let RULEIXM=null;const RULEIX={get:l=>(RULEIXM=RULEIXM||new Map(RULES.map((r,i)=>[r.l,i]))).get(l)};
const orderOf=round=>{const n=G.n,f=round%n;return[...Array(n).keys()].map(k=>(f+k)%n)};
function youthFor(t,pos){const T=G.teams[t],c=T.picks.concat(T.bench||[]).filter(x=>x.youth).length;return{n:"Júnior da formação"+(c?" "+(c+1):""),p:pos==="SUP"?"MED":pos,c:"Portugal",r:64,cl:[],youth:true}}
function replay(){
  if(G.fixed){G.teams=G.fixed.teams.map(T=>({...T,slots:T.slots.map(x=>({...x})),picks:[...T.picks],bench:[...T.bench]}));G.cur={i:0,done:true};G.rules=[];G.taken=new Set();G.used=new Set();G.lastEv=null;return}
  G.teams=G.cfg.map(c=>({coach:c.coach,form:c.form,slots:c.form?buildSlots(c.form):[],picks:[],bench:[]}));
  G.taken=new Set();G.used=new Set();G.rules=[];G.lastEv=null;G.lastCat=null;G.pickLog=[];
  for(let i=0;;i++){
    const round=Math.floor(i/G.n),k=i%G.n;if(round>=RD){G.cur={i,done:true};return}
    if(k===0){const r=withRng(seeded(G.seed+":r"+round),chooseRule);G.used.add(r.l);G.rules[round]=r;G.lastCat=r.cat}
    const pk=orderOf(round)[k];let rule=G.rules[round];
    if(k>0&&!eligible(pk,rule).length)rule=FREE;
    const ev=G.picks[i];
    if(!ev){G.cur={i,round,k,picker:pk,rule};return}
    const s=G.teams[pk].slots[ev.s];
    if(!s||s.pl){G.cur={i,round,k,picker:pk,rule};return}
    let p=ev.y?null:DBN.get(ev.n);
    if(p&&(G.taken.has(p.n)||!fitsSlot(p,s)||!inTheme(p)||(!rule.t(p)&&!claimOk(i,p.n,pk))))p=null;/* escolha inválida (ex.: telemóvel adulterado): conta como júnior */
    if(!p)p=youthFor(pk,s.pos);
    let best=null;if(G.picks.length-1===i){const e=eligible(pk,rule,s.pos,s.label);best=e.reduce((m,x)=>!m||x.r>m.r?x:m,null)}
    const mates=G.teams[pk].picks.filter(x=>!x.youth&&!p.youth&&x.cl.some(c=>p.cl.includes(c))).map(x=>({x,c:x.cl.find(c=>p.cl.includes(c))}));
    s.pl=p;if(s.pos==="SUP")G.teams[pk].bench.push(p);else G.teams[pk].picks.push(p);if(!p.youth)G.taken.add(p.n);
    G.lastEv={i,t:pk,p,label:s.label,best,mates,rule:rule.l};
    if(!p.youth)(G.pickLog=G.pickLog||[]).push({n:p.n,rule:rule.l,t:pk});
  }
}
const picker=()=>G.cur.picker;
const isBot=t=>!!(G&&G.bots&&G.bots[t]);
const humanSeat=()=>{for(let t=0;t<G.n;t++)if(!isBot(t))return t;return 0};
const canAct=()=>G.mode!=="online"?!(G.cur&&isBot(G.cur.picker)):(G.cur&&G.cur.picker===G.me);
const LVN=["","Fácil","Médio","Lenda"];
/* bot: treinador, escolhas, capitão e decisões */
function botCoach(t){
  const taken=takenCoaches(t),pool=COACHES.filter(c=>!taken.includes(c.n));
  const c=withRng(seeded(G.seed+":bc"+t),()=>pool[rand(pool.length)]);
  G.cfg[t]={coach:c,form:c.f};const w=c.n.split(" ");G.names[t]="Bot "+(w.length>1&&/^(del|de|da|van|von|di)$/i.test(w[w.length-2])?w.slice(-2).join(" "):w[w.length-1]);
}
function botPick(){
  if(!G||!G.cur||G.cur.done||!isBot(G.cur.picker)||G.botAt===G.cur.i)return;
  G.botAt=G.cur.i;const t=G.cur.picker,lv=G.bots[t],T=G.teams[t];
  const ch=withRng(seeded(G.seed+":bp"+G.cur.i),()=>{
    const opts=[];T.slots.forEach((s,i)=>{if(s.pl)return;eligible(t,G.cur.rule,s.pos,s.label).forEach(p=>opts.push({i,p}))});
    const xi=opts.filter(o=>T.slots[o.i].pos!=="SUP");if(xi.length&&xi.some(o=>o.p.r>=70))opts.splice(0,opts.length,...xi);
    if(!opts.length||(lv===1&&Math.random()<.08)){const fr=T.slots.findIndex(s=>!s.pl&&s.pos==="SUP");return{i:fr>=0?fr:T.slots.findIndex(s=>!s.pl),p:null}}
    opts.sort((a,b)=>b.p.r-a.p.r);
    let ch;
    if(lv===3)ch=Math.random()<.85?opts[0]:opts[Math.min(opts.length-1,1+rand(3))];
    else if(lv===2){const top=opts.slice(0,Math.max(1,Math.min(8,Math.ceil(opts.length*.2))));ch=top[rand(top.length)]}
    else{const mid=opts.filter(o=>o.p.r>=68&&o.p.r<=81);const l=mid.length?mid:opts.slice(Math.floor(opts.length/2));ch=l[rand(l.length)]}
    return ch;
  });
  G.sel=ch.i;place(ch.p);
}
function botCap(t){const T=G.teams[t];let bi=0,br=-1;T.slots.forEach((s,i)=>{if(s.pos!=="SUP"&&i<11&&s.pl&&!s.pl.youth&&s.pl.r>br){br=s.pl.r;bi=i}});G.caps[t]=bi}
function botDecide(stop,side,k){
  const opts=optsFor(stop,side).map(o=>o[0]),lv=G.bots[stop.kind==="ht"?LIVE.ci[side]:LIVE.ci[side]]||2,d=decGet(),me=side,op=1-side;
  return withRng(seeded(LIVE.key+":bd"+k+":"+side),()=>{
    if(stop.kind==="ht"){const st=LIVE.st,diff=st.goals[me]-st.goals[op];
      if(lv>=2&&d[me]["f"+k]==null){const cur=st.T[me].form,tryF=diff<0?["4-3-3","3-4-3"]:diff>1?["5-3-2"]:[];const nf=tryF.find(f=>f!==cur&&oopList(reform(st.T[me],f)).length<=(lv===3?0:1));if(nf)d[me]["f"+k]=nf}
      if(lv===1)return opts[rand(opts.length)];return diff<0?"att":diff>0?"def":(Math.random()<.5?"keep":"att")}
    if(lv===1)return opts[rand(opts.length)];
    /* lembra-se do que o adversário fez nos momentos anteriores do mesmo tipo e evita repetir-se */
    const past=[],mine=[];LIVE.plan.forEach((s,j)=>{if(j<k&&s.kind==="mom"&&s.type===stop.type){const sideOp=s.t===stop.t?op:me;if(d[op][j])past.push(d[op][j]);if(d[me][j])mine.push(d[me][j])}});
    const w=opts.map(o=>{let x=1;if(lv===3){x+=past.filter(v=>v===o).length*1.5}if(mine.length&&mine[mine.length-1]===o)x*=.4;return[o,x]});
    return wpick(w);
  });
}

/* procurar um jogador pelo nome escrito */
const key=s=>norm(s).replace(/ø/g,"o").replace(/'/g,"").replace(/[^a-z0-9]+/g," ").trim();
const ALIAS={"pote":"Pedro Gonçalves","cr7":"Cristiano Ronaldo","cristiano":"Cristiano Ronaldo","r9":"Ronaldo Fenómeno","fenomeno":"Ronaldo Fenómeno","vini":"Vinicius Junior","vini jr":"Vinicius Junior","vinicius":"Vinicius Junior","kun":"Agüero","ibra":"Ibrahimović","zizou":"Zinedine Zidane","dimaria":"Di María","yamal":"Lamine Yamal","taa":"Alexander-Arnold","trent":"Alexander-Arnold","jardel":"Mário Jardel","baia":"Vítor Baía","quaresma":"Ricardo Quaresma","simao":"Simão Sabrosa","coentrao":"Fábio Coentrão","kaka":"Kaká","ronaldinho gaucho":"Ronaldinho","ronaldo nazario":"Ronaldo Fenómeno"};
const KEYS=DB.map(p=>({p,k:key(p.n)}));
function lev(a,b){const m=a.length,n=b.length;if(Math.abs(m-n)>2)return 9;const d=Array.from({length:m+1},(_,i)=>[i]);for(let j=1;j<=n;j++)d[0][j]=j;
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[m][n]}
function findPlayers(q){
  const k=key(q);if(k.length<2)return[];
  if(ALIAS[k]){const a=DB.filter(p=>p.n===ALIAS[k]||key(p.n)===key(ALIAS[k]));if(a.length)return a}
  let r=KEYS.filter(x=>x.k===k);if(r.length)return r.map(x=>x.p);
  r=KEYS.filter(x=>x.k.split(" ").includes(k)||(k.includes(" ")&&x.k.includes(k)));if(r.length)return r.map(x=>x.p);
  const tol=k.length>=7?2:k.length>=4?1:0;if(!tol)return[];
  r=KEYS.filter(x=>lev(x.k,k)<=tol||x.k.split(" ").some(w=>w.length>=4&&lev(w,k)<=tol));
  return r.map(x=>x.p);
}

/* desenhar o onze em campo */
const short=p=>{if(p.youth)return"Júnior";const n=String(p.n).replace(/ \([^)]*\)$/,"");return n.length<=10?n:n.split(" ").slice(-1)[0]};
let CHEMC=null;function chemOf(T){const key=T.picks.map(p=>p.n).join("|");if(!CHEMC||CHEMC.k!==key||CHEMC.T!==T)CHEMC={k:key,T,m:chemInfo(T).per};return CHEMC.m}
function drawPitch(box,t,o={}){
  box.innerHTML="";const T=o.team||G.teams[t],pitch=el("div","pitch"+(o.small?" sm":""));pitch.style.setProperty("--c",COL[t]);
  ["half","circ","boxT","boxB"].forEach(c=>pitch.append(el("i",c)));
  ROWS[T.form].forEach((r,ri)=>{
    const row=el("div","prow");
    T.slots.forEach((s,i)=>{if(s.row!==ri)return;
      const isCap=o.capTap?o.capSel===i:(T.cap&&s.pl===T.cap);
      const b=el(o.onTap||o.capTap?"button":"div","slot "+(s.pl?"full":"empty")+(s.pl&&s.pl.youth?" youth":"")+(G.sel===i&&o.onTap?" sel":"")+(isCap?" cap":""));
      const disc=el("span","disc",s.label);if(isCap)disc.append(el("i","cbadge","C"));b.append(disc);
      if(s.pl){b.append(el("span","nm2",short(s.pl)));if(!o.noR)b.append(el("span","rt2",s.pl.youth?64:s.pl.r));
        if(!s.pl.youth&&!o.noChem){const pts=(chemOf(T).get(s.pl)||{pts:0}).pts,ch=el("span","chm");for(let k=0;k<3;k++)ch.append(el("b",pts>=k+1?"on":pts>=k+.5?"half":""));b.append(ch)}}
      if(o.onTap){if(s.pl)b.disabled=true;else b.onclick=()=>o.onTap(i)}
      if(o.capTap){if(!s.pl)b.disabled=true;else b.onclick=()=>o.capTap(i)}
      row.append(b)});
    pitch.append(row);
  });
  box.append(pitch);
  const bs=T.slots.map((s,i)=>[s,i]).filter(([s])=>s.pos==="SUP");
  if(bs.length&&!o.noBench){box.classList.add("hasBench");const bw=el("div","bench");bw.style.setProperty("--c",COL[t]);bw.append(el("span","lbl","Banco"));
    bs.forEach(([s,i])=>{const b=el(o.onTap?"button":"div","slot bslot "+(s.pl?"full":"empty")+(s.pl&&s.pl.youth?" youth":"")+(G.sel===i&&o.onTap?" sel":""));
      b.append(el("span","disc","SUP"));if(s.pl){b.append(el("span","nm2",short(s.pl)));if(!o.noR)b.append(el("span","rt2",s.pl.youth?64:s.pl.r))}
      if(o.onTap){if(s.pl)b.disabled=true;else b.onclick=()=>o.onTap(i)}bw.append(b)});
    box.append(bw)}
}
function turnStart(){const now=Date.now();if(G.mode!=="online")return now;
  const pv=G.picks[G.cur.i-1],at=pv&&+pv.at;if(!at)return now;
  /* relógios dos telemóveis podem diferir uns segundos: nunca no futuro, nunca mais do que o tempo todo atrás */
  return Math.max(Math.min(at,now),now-G.tm*1000-9000)}
function draftScreen(){
  if($("sDraft").hidden)document.body.classList.remove("picking");
  if(G.lastI!==G.cur.i){G.lastI=G.cur.i;G.turnT=turnStart();G.sel=null;G.pick=null;G.tries=3;G.peekT=null;G.claimReq=null;claimHide();$("dMsg").textContent="";$("dWhich").innerHTML="";$("dInput").value=""}
  drawDraft();show("sDraft");
  if(G.mode!=="online"&&isBot(G.cur.picker))setTimeout(botPick,0);
}
function drawDraft(){
  const pk=picker(),act=canAct(),mine=G.mode==="online"?G.me:isBot(pk)?humanSeat():pk;
  const t=G.peekT==null?mine:G.peekT;
  $("dRound").textContent=`Ronda ${G.cur.round+1}/${RD}`+(G.n>2?` · escolha ${G.cur.k+1}/${G.n}`:"");
  const w=$("dWho");w.innerHTML="";w.style.setProperty("--c",COL[pk]);
  w.append(el("span","dot"),el("span",null,act&&G.mode==="online"?"É a tua vez":"Vez de "+G.names[pk]));if(!act&&G.mode==="online")w.append(el("span","wait","a escolher…"));
  $("dRule").textContent=G.cur.rule.l;$("dRuleLbl").textContent=G.theme&&THEMES[G.theme]?`Regra desta ronda · ${THEMES[G.theme].n.replace(/ \(.*\)$/,"")}`:"Regra desta ronda";
  const ts=$("dToast");
  if(G.lastEv){const e=G.lastEv,ce=!e.p.youth&&G.teams[e.t]?chemInfo(G.teams[e.t]).per.get(e.p):null;
    const ctx=ce&&ce.club.length?` · ⚡ química com ${dn(ce.club[0].q.n)} (${ce.club[0].c})${ce.club.length>1?` e mais ${ce.club.length-1}`:""}`:ce&&ce.nat.length?` · ⚡ química com ${dn(ce.nat[0].n)} (mesmo país)`:"";
    ts.textContent=`${G.names[e.t]}: ${e.p.youth?"entrou um júnior da formação":e.p.n.replace(/ \([^)]*\)$/,"")} para ${e.label}${ctx}.`;ts.hidden=false}else ts.hidden=true;
  $("dWait").hidden=act;$("dWait").textContent=`À espera que ${G.names[pk]} escolha…`;
  const viewing=G.peekT!=null;
  if(viewing){const h=el("div","lbl",`Onze de ${G.names[t]}`);$("dPitch").innerHTML="";drawPitch($("dPitch"),t,{});$("dPitch").prepend(h)}
  else drawPitch($("dPitch"),t,act?{onTap:selectSlot}:{});
  $("askPage").hidden=viewing||!act||G.sel==null;$("dHint").hidden=viewing||!act||G.sel!=null;$("dAsk").hidden=false;
  const tp=teamPower(t),ds=$("dStr");ds.innerHTML="";
  if(tp){ds.append((()=>{const b=el("button","chemBtn");b.type="button";
    const bar=el("span","chemBar");const f=el("i");f.style.width=Math.round(tp.chemPct*100)+"%";bar.append(f);
    b.append(el("span",null,"Química "),bar,el("b",null,`${Math.round(tp.chemSum)}/33`),el("span","chemQ","?"));b.onclick=()=>openSheet("shChem");return b})(),el("span","dsep","·"),el("span",null,`${G.teams[t].picks.length}/11`));
    /* rating médio do próprio onze (só dos titulares escolhidos); ao espreitar o adversário não aparece */
    if(!viewing){const xi=G.teams[t].slots.filter(x=>x.pl&&x.pos!=="SUP").map(x=>x.pl.youth?64:x.pl.r);if(xi.length)ds.append(el("span","dsep","·"),el("span",null,"Média "),el("b",null,String(Math.round(xi.reduce((a,b)=>a+b,0)/xi.length))))}}
  const others=[...Array(G.n).keys()].filter(x=>x!==mine);
  $("dPeek").textContent=!viewing?(G.n===2?`Espreitar o onze de ${G.names[others[0]]}`:"Espreitar os outros onzes"):
    (others.indexOf(G.peekT)<others.length-1?`Ver o onze seguinte`:"Voltar ao meu onze");
  drawAsk();claimSync();if(!$("tmPill").hidden)placePill();
}
function drawAsk(){
  const has=G.sel!=null,s=has?G.teams[picker()].slots[G.sel]:null;
  $("dSlotLbl").textContent=has?`${s.label} · Escolhe um ${POSL[s.pos]}${s.pos==="MED"&&WIDE.has(s.label)?" ou extremo":""}`:"";$("askRule").textContent=G.cur&&G.cur.rule?G.cur.rule.l:"";
  $("dRow").hidden=!has||G.listMode;$("dTries").hidden=!has;$("dGiveUp").hidden=!has;
  const tr=$("dTries");tr.innerHTML="";tr.append(el("span","lbl","Tentativas "));for(let i=0;i<3;i++)tr.append(el("i",i<G.tries?"":"off"));
  const L=$("dList");L.hidden=!(has&&G.listMode);L.innerHTML="";
  if(has&&G.listMode){
    const opts=eligible(picker(),G.cur.rule,s.pos,s.label).sort((a,b)=>a.n.localeCompare(b.n,"pt")).slice(0,150);
    if(!opts.length)L.append(el("div","empty","Nenhum jogador desta posição cumpre a regra. Experimenta outra posição."));
    opts.forEach(p=>L.append(plRow(p)));
  }
  drawSug();drawPick();
}
function plRow(p){
  const tk=G.taken.has(p.n),b=el("button","pl"+(tk?" taken":"")+(G.pick===p?" on":""));b.append(el("span","pos "+p.p+(p.p2?" dual":""),p.w?"E"+p.w:p.p+(p.p2?"/"+p.p2[0]:"")));
  const nm=el("span","nm",p.n.replace(/ \([^)]*\)$/,""));nm.append(el("small",null,tk?"Já escolhido":`${p.c}${p.by?" · "+p.by:""}`));b.append(nm,el("span","rt",G.showR?p.r:""));
  if(tk)b.disabled=true;else b.onclick=()=>{G.pick=p;drawSug();drawAsk()};
  return b;
}
function suggest(q,pos,label){
  const k=key(q);if(k.length<2)return[];
  let a=[];
  if(ALIAS[k])a=DB.filter(p=>key(p.n)===key(ALIAS[k]));
  const words=k.split(" ");
  a=a.concat(KEYS.filter(x=>fitsPos(x.p,pos,label)&&words.every(w=>x.k.split(" ").some(t=>t.startsWith(w)))).map(x=>x.p));
  if(a.length<3&&k.length>=4){const tol=k.length>=7?2:1;a=a.concat(KEYS.filter(x=>fitsPos(x.p,pos,label)&&(lev(x.k,k)<=tol||x.k.split(" ").some(w=>w.length>=4&&lev(w,k)<=tol))).map(x=>x.p))}
  a=[...new Set(a)].filter(p=>fitsPos(p,pos,label)&&inTheme(p));
  return a.sort((x,y)=>(key(x.n).startsWith(k)?0:1)-(key(y.n).startsWith(k)?0:1)||y.r-x.r).slice(0,12);
}
function drawSug(){
  const box=$("dSug");box.innerHTML="";
  if(G.sel==null||G.listMode)return;
  const s=G.teams[picker()].slots[G.sel],q=$("dInput").value.trim();
  if(key(q).length<2){if(q)box.append(el("div","empty","Continua a escrever…"));return}
  const L=suggest(q,s.pos,s.label);
  if(!L.length){box.append(el("div","empty",`Nenhum ${POSL[s.pos]} com esse nome na base de dados.`));return}
  L.forEach(p=>box.append(plRow(p)));
}
function drawPick(){
  const p=G.pick,box=$("dPick");box.hidden=!p||G.sel==null;document.body.classList.toggle("picking",!box.hidden);if(!p)return;
  const i=$("dPickInfo");i.innerHTML="";i.append(el("span","lbl","Vais escolher"),el("b",null,p.n.replace(/ \([^)]*\)$/,"")),el("span","muted",`${POSL[p.p]}${p.p2?" / "+POSL[p.p2]:""} · ${p.c}${p.by?" · nasceu em "+p.by:""}`));
}
function selectSlot(i){if(G.claimReq)return;claimHide();G.sel=i;G.pick=null;$("dMsg").textContent="";$("dMsg").className="msg";$("dWhich").innerHTML="";$("dInput").value="";drawDraft();
  if(!G.listMode)setTimeout(()=>$("dInput").focus(),50)}
function say(t,c){const m=$("dMsg");m.textContent=t;m.className="msg "+(c||"")}
function submit(){if(G.pick){const p=G.pick;G.pick=null;tryPlayer(p)}}
function tryPlayer(p){
  if(!canAct()||G.sel==null)return;
  const s=G.teams[picker()].slots[G.sel];
  if(G.taken.has(p.n)){say(`${p.n} já foi escolhido. Tenta outro.`,"bad");return}
  if(!inTheme(p)){say(`Neste draft só valem jogadores do tema: ${THEMES[G.theme].n}. Tenta outro.`,"bad");return}
  if(!fitsSlot(p,s)){say(`${p.n} é ${POSL[p.p]}${p.p2?" / "+POSL[p.p2]:""}. Esta posição é para um ${POSL[s.pos]}${s.pos==="MED"&&WIDE.has(s.label)?" ou extremo":""}.`,"bad");return}
  if(!G.cur.rule.t(p)){
    G.tries--;
    say(`${p.n} não cumpre a regra "${G.cur.rule.l}". `+(G.tries<=0?"Acabaram as tentativas.":`Restam ${G.tries} tentativa${G.tries>1?"s":""}.`),"bad");$("dInput").value="";drawAsk();
    G.lastNo={n:p.n,rule:G.cur.rule.l};const rl=el("button","replink","Está errado?");rl.onclick=()=>openReport();$("dMsg").append(rl);
    claimOffer(p);return;
  }
  place(p);
}
/* reclamar: o adversário decide se a escolha conta */
const oppLabel=pk=>G.n===2?G.names[1-pk]:"os outros treinadores";
function claimShow(info,btns){const b=$("claimBox"),i=$("claimInfo"),r=$("claimBtns");i.innerHTML="";r.innerHTML="";info.forEach(x=>i.append(x));
  btns.forEach(([t,cls,f])=>{const k=el("button","btn"+(cls?" "+cls:""),t);k.onclick=f;r.append(k)});r.hidden=!btns.length;b.hidden=false;document.body.classList.add("picking")}
function claimHide(){$("claimBox").hidden=true;if(!G||!G.pick)document.body.classList.remove("picking")}
function claimOffer(p){
  const last=G.tries<=0,pk=picker(),vsBot=[...Array(G.n).keys()].filter(t=>t!==pk).every(isBot);
  if(vsBot){claimShow([el("span","lbl","Tens a certeza que cumpre?"),el("b",null,p.n),el("p","muted","Se a base de dados estiver errada, avisa: eu verifico e corrijo. Esta escolha não conta.")],
    [[last?"Entra o júnior":"Tentar outro","ghost",()=>{claimHide();if(last)place(null);else $("dInput").focus()}],["Avisar do erro","",()=>{sendReport({kind:"bot",n:p.n,rule:G.cur.rule.l});claimHide();if(last)place(null);else{say("Obrigado! Vou verificar. Tenta outro jogador.","ok");$("dInput").focus()}}]]);return}
  claimShow([el("span","lbl","Tens a certeza que cumpre?"),el("b",null,p.n),el("p","muted",`Podes reclamar: se ${oppLabel(picker())} aceitar, a escolha conta e não perdes a tentativa.`)],
    [[last?"Entra o júnior":"Tentar outro","ghost",()=>{claimHide();if(last)place(null);else $("dInput").focus()}],["Reclamar","",()=>claimAsk(p)]]);
}
function claimAsk(p){
  const pk=picker();
  const others=[...Array(G.n).keys()].filter(t=>t!==pk);
  if(others.length&&others.every(isBot)){
    /* contra bots não há reclamação (dava para meter qualquer craque): o caso vai para a lista de erros a verificar */
    sendReport({kind:"bot",n:p.n,rule:G.cur.rule.l});
    claimShow([el("span","lbl","Obrigado, vou verificar"),el("b",null,p.n),el("p","muted",`Contra o bot vale a base de dados: ${p.n} não conta para "${G.cur.rule.l}". Se estiver errado, corrijo.`)],[]);
    G.claimWait=1;setTimeout(()=>claimResolve(p,false),2200);return}
  if(G.mode==="online"){G.claimReq={o:G.cur.i,n:p.n};pushPresence();
    claimShow([el("span","lbl","Reclamação enviada"),el("b",null,p.n),el("p","muted",`À espera que ${oppLabel(G.me)} responda${G.n>2?"m":""}…`)],[]);return}
  claimShow([el("span","lbl",`Passa o telemóvel a ${oppLabel(pk)}`),el("b",null,p.n),el("p",null,`${G.names[pk]} diz que ${p.n} cumpre a regra "${G.cur.rule.l}". Aceitas?`)],
    [["Recusar","ghost",()=>claimResolve(p,false)],["Aceitar","",()=>claimResolve(p,true)]]);G.claimWait=1;
}
/* reclamações aceites: localmente ficam registadas; online contam só as aceites por outro telemóvel (lista "cok" de cada um) */
function claimOk(o,n,pk){const key=o+":"+n;if(G.mode!=="online")return !!(G.claimOk&&G.claimOk.has(key));
  if(G.me!==pk&&(G.cokMine||[]).includes(key))return true;
  return Object.entries(PEERS).some(([s,pr])=>+s!==pk&&pr&&Array.isArray(pr.cok)&&pr.cok.includes(key))}
function claimResolve(p,ok){
  claimHide();G.claimWait=0;
  if(ok&&G.mode!=="online"){(G.claimOk=G.claimOk||new Set()).add(G.cur.i+":"+p.n)}
  if(ok){G.tries++;say("");place(p);return}
  if(G.tries<=0){place(null);return}
  say(`Reclamação recusada. Restam ${G.tries} tentativa${G.tries>1?"s":""}.`,"bad");
}
function claimSync(){
  if(G.mode!=="online"||!G.cur||G.cur.done)return;const pk=G.cur.picker;
  const c=pk!==G.me&&PEERS[pk]?PEERS[pk].claim:null;
  if(c&&c.o===G.cur.i&&typeof c.n==="string"&&DBN.get(c.n)&&!(G.claimAns&&G.claimAns.o===c.o)){
    const p=DBN.get(c.n),ans=ok=>{G.claimAns={o:c.o,n:c.n,ok:ok?1:0};if(ok){G.cokMine=G.cokMine||[];const key=c.o+":"+c.n;if(!G.cokMine.includes(key))G.cokMine.push(key)}pushPresence();claimHide();drawDraft()};
    claimShow([el("span","lbl",`${G.names[pk]} reclama`),el("b",null,p.n),el("p",null,`Diz que ${p.n} cumpre a regra "${G.cur.rule.l}". Aceitas?`)],[["Recusar","ghost",()=>ans(false)],["Aceitar","",()=>ans(true)]]);
  }
  if(G.claimReq)for(const pr of Object.values(PEERS)){const a=pr&&pr.cans;
    if(a&&a.o===G.claimReq.o&&a.n===G.claimReq.n){const p=DBN.get(a.n);G.claimReq=null;pushPresence();claimResolve(p,!!a.ok);break}}
}
function place(p){
  document.body.classList.remove("picking");$("dPick").hidden=true;claimHide();
  const ev={o:G.cur.i,s:G.sel,n:p?p.n:null,y:!p,t:picker(),at:Date.now()};
  if(G.mode!=="online")G.picks[ev.o]=ev;
  else{G.mine=G.mine.filter(e=>e.o!==ev.o);G.mine.push(ev);mergePicks();pushPresence()}
  render();
}
$("dGo").onclick=submit;
$("dUnpick").onclick=()=>{G.pick=null;drawAsk();$("dInput").focus()};
$("dInput").addEventListener("input",()=>{if(!G.claimReq)claimHide();G.pick=null;$("dMsg").textContent="";drawSug();drawPick()});
$("dInput").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();if(G.pick)submit();else{const L=G.sel!=null?suggest($("dInput").value,G.teams[picker()].slots[G.sel].pos,G.teams[picker()].slots[G.sel].label):[];if(L.length===1&&!G.taken.has(L[0].n)){G.pick=L[0];drawAsk()}}}});
$("askClose").onclick=()=>{if(G.claimReq)return;G.sel=null;G.pick=null;claimHide();$("dPick").hidden=true;document.body.classList.remove("picking");drawDraft()};
$("dGiveUp").onclick=()=>{if(canAct()&&G.sel!=null)place(null)};
$("dPeek").onclick=()=>{
  const mine=G.mode==="online"?G.me:picker(),others=[...Array(G.n).keys()].filter(x=>x!==mine);
  if(G.peekT==null)G.peekT=others[0];else{const i=others.indexOf(G.peekT);G.peekT=i<others.length-1?others[i+1]:null}
  drawDraft();
};

/* ---- carta da escolha ---- */
const VERD=r=>r>=92?"Lenda!":r>=88?"Craque!":r>=84?"Excelente escolha":r>=80?"Boa escolha":r>=76?"Escolha sólida":r>=72?"Hmm… havia melhor":"Fraquinho";
/* química: cada jogador ganha 1 ponto por colega com quem partilha um clube e meio ponto por colega do mesmo país, até 3 */
function chemInfo(T){const ps=T.picks.filter(p=>!p.youth),per=new Map();let sum=0;
  T.picks.forEach(p=>{if(p.youth){per.set(p,{pts:0,club:[],nat:[]});return}
    const club=[],nat=[];ps.forEach(q=>{if(q===p)return;const c=q.cl.find(c=>p.cl.includes(c));if(c)club.push({q,c});else if(q.c===p.c)nat.push(q)});
    const pts=Math.min(3,club.length+nat.length*.5);per.set(p,{pts,club,nat});sum+=pts});
  return{per,sum,max:33,pct:sum/33}}
const chemLabel=pct=>pct>=.7?"Excelente":pct>=.45?"Boa":pct>=.2?"Razoável":"Fraca";
const chemTxt=T=>{const c=chemInfo(T);return`${Math.round(c.sum)}/33 · ${chemLabel(c.pct)}`};
function teamPower(t){const T=G.teams[t],ps=T.picks;if(!ps.length)return null;const c=chemInfo(T);
  return{avg:ps.reduce((s,p)=>s+p.r,0)/ps.length,chem:c.pct*4,chemSum:c.sum,chemPct:c.pct}}
let cardTimer=null;
function maybeCard(){
  const e=G.lastEv;if(!e||e.i===G.cardI)return;
  const first=G.cardI===-1&&G.mode==="online"&&e.i>0;G.cardI=e.i;if(first)return;
  const c=$("pickCard");c.style.setProperty("--c",COL[e.t]);c.innerHTML="";
  const top=el("div","pcTop");top.append(el("div","pcR",e.p.youth?"64":String(e.p.r)),(()=>{const d=el("div","pcN");d.append(el("b",null,e.p.youth?"Júnior da formação":e.p.n.replace(/ \([^)]*\)$/,"")));return d})());
  c.append(top);
  c.hidden=false;c.classList.remove("in");void c.offsetWidth;c.classList.add("in");
  if(!e.p.youth&&e.p.r>=88)goalSound();
  clearTimeout(cardTimer);cardTimer=setTimeout(()=>{c.hidden=true},2200);
}
$("pickCard").onclick=()=>{$("pickCard").hidden=true};

/* ---- capitão ---- */
let capSel=null;
function capScreen(t){
  if(G.capFor===t&&!$("sCap").hidden)return;
  G.capFor=t;capSel=null;
  const w=$("capWho");w.innerHTML="";w.style.setProperty("--c",COL[t]);w.append(el("span","dot"),el("span",null,G.names[t]));
  drawCapPitch();$("capOk").disabled=true;show("sCap");
}
function drawCapPitch(){
  const t=G.capFor;drawPitch($("capPitch"),t,{withR:true,capTap:i=>{capSel=i;$("capOk").disabled=false;$("capOk").textContent=`Confirmar ${G.teams[t].slots[i].pl.n} como capitão`;drawCapPitch()},capSel});
}
$("capOk").onclick=()=>{if(capSel==null)return;G.caps[G.capFor]=capSel;G.capFor=-1;if(G.mode==="online")pushPresence();render()};

/* ---- encaminhar para o ecrã certo ---- */
function render(){
  if(!G){show("sStart");return}
  if(G.mode==="online"&&(G.me==null||!G.seed||!G.online.go||!rosterFull())){lobby();return}
  if(G.mode!=="online"){for(let t=0;t<G.n;t++)if(!G.cfg[t].form){if(isBot(t)){botCoach(t);continue}return coachScreen(t)}}
  else{if(!G.cfg[G.me].form)return coachScreen(G.me);const wc=G.cfg.findIndex(c=>!c.form);if(wc>=0)return lobby(`${G.names[G.me]}, já escolheste. À espera que ${G.names[wc]} escolha o treinador…`)}
  replay();maybeCard();
  if(!G.cur.done)return draftScreen();
  if(!G.rulesSaved){G.rulesSaved=1;const L=(store("duelo_recent_rules")||[]).filter(l=>!G.rules.some(r=>r&&r.l===l));store("duelo_recent_rules",[...L,...G.rules.filter(Boolean).map(r=>r.l)].slice(-70))}
  G.teams.forEach((T,t)=>{T.cap=G.caps[t]!=null&&T.slots[G.caps[t]]?T.slots[G.caps[t]].pl:null});
  if(G.mode!=="online"){for(let t=0;t<G.n;t++)if(G.caps[t]==null){if(isBot(t)){botCap(t);G.teams[t].cap=G.teams[t].slots[G.caps[t]].pl;continue}return capScreen(t)}}
  else{if(G.caps[G.me]==null)return capScreen(G.me);const wk=G.caps.findIndex(c=>c==null);if(wk>=0)return lobby(`À espera que ${G.names[wk]} escolha o capitão…`)}
  if(G.mode==="tour")return bracket();
  if(G.mode==="online"&&G.online.sea)return seaDraftDone();
  if(isTourOnline())return bracketOnline();
  if(!G.m)return preMatch();
  if(G.shownM!==G.m||($("sMatch").hidden&&$("sResult").hidden))return startDuelMatch();
}

/* ---- modo online: cada um no seu telemóvel (2 para um duelo, 4 para um torneio) ---- */
let ROOM=null,PEERS={},ROOMAPI=null;
const OPPof=()=>PEERS[1-G.me]||null;
function genCode(){const A="ABCDEFGHJKLMNPQRSTUVWXYZ";let s="";for(let i=0;i<4;i++)s+=A[rand(A.length)];return s}
let UID=null;function myUid(){return UID||(UID=Math.random().toString(36).slice(2,12))}
const cleanName=v=>(typeof v==="string"&&v.trim().slice(0,16))||"";
const isTourOnline=()=>!!(G&&G.mode==="online"&&G.online&&G.online.n>2&&!G.online.sea);
const rosterFull=()=>!!(G.online.ro&&G.online.ro.length>=G.online.n);
function ensureN(n){
  if(G.n===n)return;
  while(G.names.length<n){G.names.push("…");G.cfg.push({coach:null,form:null});G.caps.push(null)}
  G.names.length=n;G.cfg.length=n;G.caps.length=n;G.n=n;
}
function lobby(msg){
  if(G&&G.online&&G.online.watch){if(G.online.err)$("seaMsg").textContent=G.online.err;return}
  const on=!!(G&&G.online);
  $("lbChoose").hidden=on;$("lbWait").hidden=!on;if(!on)$("lbName").value=$("n0").value;
  if(on){
    const n=G.online.n,ro=G.online.ro||[],full=ro.length>=n,host=G.me===0;
    $("lbShare").hidden=!(host&&!full&&canShareLink());
    $("lbCodeShow").textContent=G.online.code;
    const L=$("lbPlayers");L.innerHTML="";L.hidden=false;L.className="lbAvs";
    for(let i=0;i<n;i++){const r=ro[i],it=el("div","lbAv"+(r?"":" off")),c=el("div","c",r?(r.n.trim()[0]||"?").toUpperCase():"?");if(r)c.style.background=COLHEX[i%COLHEX.length];
      if(r&&!r.b)c.append(el("span","ok","✓"));if(r&&r.b)c.append(el("span","ok bt","🤖"));
      it.append(c,el("span","nm",r?r.n+(i===G.me?" (tu)":""):"À espera…"));
      if(r&&r.b){it.append(el("span","blv",LVN[r.b]));if(host&&!G.online.go){const x=el("button","bx","✕");x.type="button";x.setAttribute("aria-label","Tirar "+r.n);x.onclick=()=>removeOnlineBot(i);it.append(x)}}
      L.append(it)}
    const sea=G.online.sea,fx=G.fixed;
    $("lbBots").hidden=!(host&&n>2&&!G.online.go&&!full&&!sea);
    $("lbOpts").hidden=!(host&&!G.online.go&&!fx);document.querySelectorAll("#lbOpts .lgPick").forEach(x=>{if(sea)x.hidden=true});drawTmChips();drawThChips();
    $("lbTmInfo").hidden=host||G.me==null;$("lbTmInfo").textContent=`Draft: ${(THEMES[G.theme||""]||THEMES[""]).n} · Tempo: ${G.tm?G.tm+" s":"sem tempo"}${G.lg?` · Conta para a liga ${G.lg.n}`:""} (escolhe quem cria o jogo).`;
    $("lbBotLv").querySelectorAll(".chip").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.lv===onlineBotLv));
    $("lbStart").hidden=!(host&&(n>2||G.online.gen||sea)&&!G.online.go);$("lbStart").disabled=!full;
    $("lbStart").textContent=full?(sea?"Começar o draft da época":n>2?"Começar o torneio":"Começar o jogo"):`À espera de ${n-ro.length} jogador${n-ro.length>1?"es":""}…`;
    let st=msg||G.online.err;
    if(!st){if(host)st=full?(n>2||G.online.gen||sea?`Estão todos. Escolhe o tipo de draft e o tempo e carrega em ${sea?"Começar o draft da época":n>2?"Começar o torneio":"Começar o jogo"}.`:"A começar…"):(sea?`Draft da época de "${sea.n}": os amigos entram pela Liga (ou com este código). São ${n} treinadores.`:fx?`À espera que ${G.fixed.sn[1]} entre para o jogo da liga. Ele vê o convite na Liga.`:n>2?`Dá o código ou o link aos teus amigos. O torneio é para ${n}.`:"Dá este código ao teu adversário. À espera que ele entre…");
      else st=G.me==null?`À procura do jogo ${G.online.code}…`:(!G.online.go&&(n>2||G.online.gen||sea)?`Estás dentro! À espera que ${G.names[0]} comece ${sea?"o draft da época":n>2?"o torneio":"o jogo"}.`:"A começar…")}
    $("lbStatus").textContent=st;
  }
  show("sLobby");
}
$("onlineBtn").onclick=()=>{$("lbCreate").hidden=false;$("lbCreate4").hidden=false;store("duelo_names",[$("n0").value.trim(),$("n1").value.trim()]);G=null;PEERS={};lobby()};
$("lbName").addEventListener("input",()=>{$("n0").value=$("lbName").value;store("duelo_names",[$("n0").value.trim(),$("n1").value.trim()])});
function hostGame(n){const names=[myName()];while(names.length<n)names.push("…");newGame("online",names,newSeed());G.me=0;
  G.online={code:genCode(),n,uid:myUid(),ro:[{u:myUid(),n:myName()}],go:false};connect()}
$("lbCreate").onclick=()=>hostGame(2);
/* bots no torneio online: quem cria o jogo trata deles (treinador, escolhas, capitão e jogos bot contra bot) e publica tudo */
let onlineBotLv=2,LASTCH=null;
$("lbBotLv").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{onlineBotLv=+b.dataset.lv;lobby()});
const syncBots=()=>{G.bots={};(G.online.ro||[]).forEach((r,i)=>{if(r&&r.b)G.bots[i]=r.b})};
$("lbAddBot").onclick=()=>{if(!G||!G.online||G.me!==0||G.online.go||rosterFull())return;
  const nb=G.online.ro.filter(r=>r.b).length+1;G.online.ro.push({u:"bot-"+myUid().slice(0,4)+Math.random().toString(36).slice(2,7),n:"Bot "+nb,b:onlineBotLv});
  syncBots();pushPresence();lobby()};
function removeOnlineBot(i){if(!G||G.me!==0||G.online.go)return;const r=G.online.ro[i];if(!r||!r.b)return;G.online.ro.splice(i,1);
  G.online.ro.forEach((x,j)=>{if(j>0&&!x.b)G.names[j]=x.n});syncBots();pushPresence();lobby()}
function botChoice(t,lvIn){
  const lv=lvIn||G.bots[t],T=G.teams[t];
  return withRng(seeded(G.seed+":bp"+G.cur.i),()=>{
    const opts=[];T.slots.forEach((s,i)=>{if(s.pl)return;eligible(t,G.cur.rule,s.pos,s.label).forEach(p=>opts.push({i,p}))});
    const xi=opts.filter(o=>T.slots[o.i].pos!=="SUP");if(xi.length&&xi.some(o=>o.p.r>=70))opts.splice(0,opts.length,...xi);
    if(!opts.length||(lv===1&&Math.random()<.08)){const fr=T.slots.findIndex(s=>!s.pl&&s.pos==="SUP");return{i:fr>=0?fr:T.slots.findIndex(s=>!s.pl),p:null}}
    opts.sort((a,b)=>b.p.r-a.p.r);
    if(lv===3)return Math.random()<.85?opts[0]:opts[Math.min(opts.length-1,1+rand(3))];
    if(lv===2){const top=opts.slice(0,Math.max(1,Math.min(8,Math.ceil(opts.length*.2))));return top[rand(top.length)]}
    const mid=opts.filter(o=>o.p.r>=68&&o.p.r<=81);const l=mid.length?mid:opts.slice(Math.floor(opts.length/2));return l[rand(l.length)];
  });
}
/* tempo por escolha: quando acaba, entra um júnior da formação num lugar vago do onze (sorteado) */
let tmLast=0;
/* o relógio fica alinhado com a linha de cima do ecrã (não colado à barra de estado do iPhone) */
function placePill(){const pill=$("tmPill"),ap=$("askPage"),a=!ap.hidden?ap.querySelector(".askHead"):document.querySelector("#sDraft .topbar");if(!a)return;
  const r=a.getBoundingClientRect(),h=pill.offsetHeight||34;pill.style.top=Math.max(6,Math.round(r.top+(Math.min(r.height,52)-h)/2))+"px"}
function timeoutSlot(t,i){const T=G.teams[t],bf=T.slots.findIndex(x=>!x.pl&&x.pos==="SUP");if(bf>=0)return bf;
  const xi=T.slots.map((x,j)=>[x,j]).filter(([x])=>!x.pl&&x.pos!=="SUP").map(([,j])=>j);
  const pool=xi.length?xi:T.slots.map((x,j)=>[x,j]).filter(([x])=>!x.pl).map(([,j])=>j);if(!pool.length)return -1;
  return pool[withRng(seeded(G.seed+":to"+i),()=>rand(pool.length))]}
setInterval(()=>{
  const pill=$("tmPill");
  const on=!!(G&&G.tm>0&&G.cur&&!G.cur.done&&!$("sDraft").hidden&&G.turnT&&!isBot(G.cur.picker));
  document.documentElement.classList.toggle("tmOn",on);
  if(!on){pill.hidden=true;return}
  const pc=G.mode==="online"&&PEERS[G.cur.picker]&&PEERS[G.cur.picker].claim;
  const now=Date.now(),paused=!!G.claimReq||!!G.claimWait||!!(pc&&pc.o===G.cur.i);
  if(paused&&tmLast)G.turnT+=now-tmLast;tmLast=now;
  const left=Math.max(0,Math.ceil(G.tm-(now-G.turnT)/1000));
  pill.hidden=false;placePill();pill.textContent=paused?"⏸ "+left+" s":"⏱ "+left+" s";pill.classList.toggle("low",left<=10&&!paused);
  pill.setAttribute("aria-label",`Faltam ${left} segundos para ${G.names[G.cur.picker]} escolher`);
  if(left<=0&&!paused&&canAct()&&G.timeoutAt!==G.cur.i){G.timeoutAt=G.cur.i;
    const t=G.cur.picker,si=timeoutSlot(t,G.cur.i);if(si<0)return;
    G.pick=null;claimHide();G.sel=si;place(null);
    const ts=$("dToast");ts.textContent=`⏱ Acabou o tempo! Entrou um júnior da formação ${G.teams[t].slots[si].pos==="SUP"?"para o banco":"para "+G.teams[t].slots[si].label} na equipa de ${G.names[t]}.`;ts.hidden=false}
  /* online: se quem está na vez não responde (telemóvel bloqueado ou sem rede), quem criou o jogo mete o júnior por ele */
  if(G.tm-(now-G.turnT)/1000<=-8&&!paused&&G.mode==="online"&&G.me===0&&G.cur.picker!==G.me&&!isBot(G.cur.picker)){G.tko=G.tko||{};const i=G.cur.i;
    if(!G.tko[i]){const si=timeoutSlot(G.cur.picker,i);if(si>=0){G.tko[i]={o:i,s:si,y:1,t:G.cur.picker,at:Date.now()};pushPresence();mergePicks();render()}}}
},250);
/* jogo bot contra bot: simulado de uma vez, sem paragens */
function quickBotMatch(mt){
  const st=simStart(mt.a,mt.b);
  return withRng(seeded(G.seed+":"+mt.key+":q"),()=>{
    simHalf(st,1,90);
    makePlan(st,G.seed+":"+mt.key).filter(x=>x.kind==="mom").forEach(x=>{const n=(MOM[x.type]||MOM.ca).a.length;if(Math.random()>1/n){st.goals[x.t]++;st.ev.push({m:x.m,t:x.t,goal:true,k:"goal",s:x.sh.n,tx:"GOLO!"})}});
    simEnd(st);let p=null,w=st.w;
    if(st.needPens){const P={n:0,g:[0,0]};while(!pkDone(P)){const t=P.n%2;if(Math.random()<.74)P.g[t]++;P.n++}p=P.g;w=P.g[0]>P.g[1]?0:1}
    return{g:[...st.goals],p,w:w===0?mt.a:mt.b};
  });
}
let botBusy=false;
function hostBots(){
  if(botBusy||!G||G.mode!=="online"||G.me!==0||!G.online||!G.online.go||!rosterFull()||!G.bots||!Object.keys(G.bots).length)return;
  if(!$("sLobby").hidden&&G.cfg.every(c=>c.form)&&G.caps.every(c=>c!=null)){render();return}
  const bs=G.botSt=G.botSt||{};let ch=false;
  for(const t of Object.keys(G.bots).map(Number)){
    if(!bs[t]||!bs[t].coach){botCoach(t);bs[t]={coach:G.cfg[t].coach.n,form:G.cfg[t].form,picks:[],cap:null};G.online.ro[t].n=G.names[t];ch=true}}
  if(ch){pushPresence();if(LASTCH)onPeers(LASTCH);return}
  if(G.cfg.some(c=>!c.form))return;
  const inMatch=LIVE&&!LIVE.done&&!$("sMatch").hidden;
  if(!inMatch)replay();else if(!G.cur||!G.cur.done)return;
  if(!G.cur.done){const t=G.cur.picker;
    if(isBot(t)&&G.botAt!==G.cur.i){const i=G.botAt=G.cur.i;botBusy=true;
      setTimeout(()=>{botBusy=false;if(!G||G.mode!=="online")return;replay();if(G.cur.done||G.cur.i!==i||G.cur.picker!==t)return;
        const c=botChoice(t);bs[t].picks=bs[t].picks.filter(e=>e.o!==i);bs[t].picks.push({o:i,s:c.i,n:c.p?c.p.n:null,y:c.p?0:1,at:Date.now()});
        pushPresence();if(LASTCH)onPeers(LASTCH)},1100)}
    return}
  for(const t of Object.keys(G.bots).map(Number))if(!(Number.isInteger(bs[t].cap)&&bs[t].cap>=0&&bs[t].cap<11)){botCap(t);bs[t].cap=G.caps[t];ch=true}
  if(ch){pushPresence();if(LASTCH)onPeers(LASTCH);return}
  if(G.caps.some(c=>c==null))return;
  G.teams.forEach((T,t)=>{T.cap=G.caps[t]!=null&&T.slots[G.caps[t]]?T.slots[G.caps[t]].pl:null});
  G.botPlay=G.botPlay||{};G.res=G.res||{};
  for(const r of tourRounds())for(const mt of r){if(mt.res||!isBot(mt.a)||!isBot(mt.b))continue;
    if(!G.botPlay[mt.key]){G.botPlay[mt.key]=Date.now();continue}
    if(Date.now()-G.botPlay[mt.key]<5000)continue;
    G.res[mt.key]=quickBotMatch(mt);ch=true}
  if(ch){pushPresence();if(LASTCH)onPeers(LASTCH)}
}
setInterval(()=>{try{hostBots()}catch(e){console.error(e)}},1500);
$("lbCreate4").onclick=()=>hostGame(4);
$("lbCreate8").onclick=()=>hostGame(8);
$("lbStart").onclick=()=>{if(!G||!G.online||G.me!==0||!rosterFull())return;
  if(G.online.sea&&new Set(G.online.ro.map(r=>seaK(r.n))).size<G.online.ro.length){lobby("Há dois treinadores com o mesmo nome. Na época cada um tem de ter um nome diferente (mudem em 'O teu nome').");return}G.online.go=true;pushPresence();render();setTimeout(()=>{try{hostBots()}catch(e){}},50)};
$("lbJoin").onclick=()=>{
  const c=$("lbCode").value.trim().toUpperCase();if(!/^[A-Z]{4}$/.test(c)){$("lbErr").textContent="O código tem 4 letras.";return}
  $("lbErr").textContent="";$("lbErr").className="msg bad";newGame("online",["…",myName()],null);G.me=null;G.online={code:c,n:2,uid:myUid(),ro:null,go:false};connect();
};
$("lbCode").addEventListener("keydown",e=>{if(e.key==="Enter")$("lbJoin").click()});
function resumeOnline(auto){
  const o=store("duelo_online");if(!o)return;
  const n=o.n||2,names=Array.from({length:n},(_,i)=>o.ro&&o.ro[i]?o.ro[i].n:"…");
  newGame("online",names,o.seed);G.me=o.me;G.online={code:o.code,auto:auto||0,n,uid:o.uid||myUid(),ro:o.ro||null,go:!!o.go,gen:+o.gen||0};
  if(G.me!=null)G.cfg[G.me]={coach:COACHES.find(c=>c.n===o.coach)||null,form:o.coach?o.form:null};
  G.mine=o.mine||[];G.m=o.m||0;if(G.me!=null)G.caps[G.me]=o.cap??null;
  if(Array.isArray(o.chat))G.chat=o.chat;if(o.dec&&typeof o.dec==="object")G.dec=o.dec;if(o.decS&&typeof o.decS==="object")G.decS=o.decS;if(o.decH&&typeof o.decH==="object")G.decH=o.decH;if(Array.isArray(o.cok))G.cokMine=o.cok;if(typeof o.hu==="string")G.online.hu=o.hu;if(o.bst&&typeof o.bst==="object")G.botSt=o.bst;G.avoid=Array.isArray(o.av)?o.av:null;G.lg=o.lg||null;if(o.sea)G.online.sea=o.sea;if(o.fx){try{setFixed(o.fx)}catch(e){}}G.theme=o.th&&THEMES[o.th]?o.th:null;if(G.online.ro)syncBots();if(o.cans)G.claimAns=o.cans;if(o.res)G.res=o.res;mergePicks();connect();
}
$("resumeBtn").onclick=()=>{const o=store("duelo_online");if(o&&o.code)resumeOnline(0);else resumeLocal()};
/* conversa nos jogos online: cada telemóvel publica as suas últimas 30 mensagens na presença; juntam-se por hora */
function chatAll(){if(!G||G.mode!=="online")return[];const L=(G.chat||[]).map(m=>({t:m.t,x:m.x,me:1,s:G.me}));
  Object.entries(PEERS).forEach(([s,pr])=>{s=+s;if(!pr||!Array.isArray(pr.ch)||isBot(s))return;pr.ch.slice(-30).forEach(m=>{if(m&&typeof m.x==="string"&&Number.isFinite(+m.t))L.push({t:+m.t,x:m.x.slice(0,200),s})})});
  return L.sort((a,b)=>a.t-b.t)}
let chatToastT=0;
function chatSync(){if(!G||G.mode!=="online")return;const L=chatAll(),seen=G.chatSeen||0,open=!$("shChat").hidden;
  const news=L.filter(m=>!m.me&&m.t>seen);
  if(open){if(news.length)G.chatSeen=Math.max(...news.map(m=>m.t));chatDraw(L)}
  else if(news.length){const m=news[news.length-1];if(m.t>(G.chatToasted||0)){G.chatToasted=m.t;const tt=$("chatToast");tt.innerHTML="";tt.append(el("b",null,(G.names[m.s]||"…")+": "),document.createTextNode(m.x));tt.hidden=false;clearTimeout(chatToastT);chatToastT=setTimeout(()=>tt.hidden=true,5000)}}
  chatBadge(open?0:news.length)}
function chatBadge(n){const b=$("chatBtn");let c=b.querySelector(".cb");if(!n){if(c)c.remove();return}if(!c){c=el("span","cb");b.append(c)}c.textContent=n>9?"9+":String(n)}
function chatDraw(L){const box=$("chatList"),atEnd=box.scrollHeight-box.scrollTop-box.clientHeight<40;box.innerHTML="";
  if(!L.length)box.append(el("p","muted","Ainda não há mensagens. Diz olá!"));
  L.forEach(m=>{const d=el("div","cm"+(m.me?" me":""));if(!m.me){const n=el("small",null,G.names[m.s]||"…");n.style.setProperty("--c",COL[m.s]||"");d.append(n)}d.append(document.createTextNode(m.x));box.append(d)});
  if(atEnd||box.dataset.first!=="0"){box.scrollTop=box.scrollHeight;box.dataset.first="0"}}
function chatOpen(){$("chatToast").hidden=true;$("chatList").dataset.first="1";openSheet("shChat");const L=chatAll();G.chatSeen=Math.max(G.chatSeen||0,...L.map(m=>m.t),0);chatDraw(L);chatBadge(0);setTimeout(()=>$("chatIn").focus(),60)}
$("chatBtn").onclick=chatOpen;$("chatToast").onclick=chatOpen;
$("chatForm").onsubmit=ev=>{ev.preventDefault();const i=$("chatIn"),x=i.value.trim().slice(0,200);if(!x||!G||G.mode!=="online")return;
  (G.chat=G.chat||[]).push({t:Date.now(),x});G.chat=G.chat.slice(-30);i.value="";pushPresence();chatDraw(chatAll())};
setInterval(()=>{try{const on=!!(G&&G.mode==="online"&&ROOM&&(G.me!=null||G.online.watch)&&$("sStart").hidden);$("chatBtn").hidden=!on;if(!on){$("chatToast").hidden=true}}catch(e){}},700);
/* jogos neste telemóvel (amigo, bot, torneio): guardados a cada passo para continuar depois de recarregar ou sair */
function localSnap(){if(!G||G.mode==="online"||G.fixed)return null;
  return{v:1,mode:G.mode,names:G.names,seed:G.seed,bots:G.bots||{},theme:G.theme||null,tm:G.tm,avoid:G.avoid,easy:!!G.easy,showR:G.showR,listMode:G.listMode,
    cfg:G.cfg.map(c=>({c:c.coach?c.coach.n:null,f:c.form})),caps:G.caps,picks:G.picks,tour:G.tour||null,cok:G.claimOk?[...G.claimOk]:[]}}
let lastLocal="";
function saveLocal(){try{if(!G||G.mode==="online"||G.fixed)return;
  if(G.localDone||(G.tour&&G.tour.champ!=null)){if(lastLocal!=="x"){lastLocal="x";store("duelo_local",null)}return}
  const js=JSON.stringify(localSnap());if(js!==lastLocal){lastLocal=js;store("duelo_local",JSON.parse(js))}
  if(!(history.state&&history.state.g)){try{history.pushState({g:1},"")}catch(e){}}}catch(e){}}
setInterval(saveLocal,1500);
function resumeLocal(){const o=store("duelo_local");if(!o||!Array.isArray(o.names)){drawHome();return}
  newGame(o.mode,o.names,o.seed);G.bots=o.bots||{};G.theme=o.theme&&THEMES[o.theme]?o.theme:null;G.tm=TMOPT.includes(o.tm)?o.tm:G.tm;G.avoid=o.avoid||null;G.easy=!!o.easy;
  if(typeof o.showR==="boolean")G.showR=o.showR;if(typeof o.listMode==="boolean")G.listMode=o.listMode;
  G.cfg=o.cfg.map(x=>{const co=COACHES.find(c=>c.n===x.c)||null;return{coach:co,form:co?x.f:null}});G.caps=o.caps||G.caps;G.picks=o.picks||[];
  if(o.tour)G.tour=o.tour;G.claimOk=new Set(o.cok||[]);G.m=0;lastLocal="";render()}
/* botão "voltar" do telemóvel a meio de um jogo: volta ao início (o jogo fica guardado) em vez de sair do site */
window.addEventListener("popstate",()=>{try{if(!G||G.mode==="online"||G.fixed||!$("sStart").hidden)return;saveLocal();
  stopMatchUI();["scene","dPick","claimBox","pickCard"].forEach(id=>{const e=$(id);if(e)e.hidden=true});document.body.classList.remove("picking");
  G=null;show("sStart");drawHome()}catch(e){}});
function autoResume(){
  if(G&&G.online&&G.online.watch){const old=ROOM;ROOM=null;PEERS={};try{old&&old.leave().catch(()=>{})}catch(e){}stopMatchUI();
    setTimeout(()=>{if(G&&G.online&&G.online.watch&&!ROOM)connect()},1500);return}
  if(!G||G.mode!=="online"||!G.online||G.online.rs)return;G.online.rs=1;
  const old=ROOM;ROOM=null;PEERS={};try{old&&old.leave().catch(()=>{})}catch(e){}
  stopFeed();G.online.err="A ligação caiu. A voltar a ligar…";lobby();
  setTimeout(()=>{if(G&&G.mode==="online")resumeOnline(1)},1200);
}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&G&&G.mode==="online"&&ROOM&&ROOM.ok&&!ROOM.ok())autoResume()});
setInterval(()=>{if(document.visibilityState==="visible"&&G&&G.mode==="online"&&ROOM&&ROOM.ok&&!ROOM.ok())autoResume()},8000);
$("lbBack").onclick=leaveOnline;
/* aviso discreto quando a ligação aos outros telemóveis cai (volta sozinha) */
let netBadT=0;setInterval(()=>{const p=$("netPill");if(!p)return;const on=!!(G&&G.mode==="online"&&ROOM&&ROOM.connected&&$("sLobby").hidden);
  const bad=on&&!ROOM.connected();if(bad){if(!netBadT)netBadT=Date.now()}else netBadT=0;
  const old=!!(G&&G.mode==="online"&&G.online&&G.online.oldPeer);p.textContent=old?"Há um telemóvel com o jogo desatualizado: recarreguem a página":"A religar aos outros telemóveis…";
  p.hidden=!(old||(bad&&Date.now()-netBadT>3000))},1000);
function canShareLink(){return !!(window.Peer&&!window.claude&&/^https?:$/.test(location.protocol))}
function gameLink(code){return location.origin+location.pathname+"#sala="+code}
$("lbShare").onclick=async()=>{const code=G.online.code,url=gameLink(code),b=$("lbShare");
  try{if(navigator.share){await navigator.share({title:"Duelo de Onzes",text:`Joga comigo no Duelo de Onzes (jogo ${code})`,url});return}}catch(e){if(e&&e.name==="AbortError")return}
  try{await Promise.race([navigator.clipboard.writeText(url),new Promise((_,r)=>setTimeout(r,1200))]);b.textContent="Link copiado! Cola-o no WhatsApp"}catch(e){b.textContent=url}
  setTimeout(()=>{b.textContent="Partilhar link do jogo"},4000)};
(function(){const m=/sala=([A-Za-z]{4})/.exec(location.hash||"");if(!m)return;
  try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}
  setTimeout(()=>{G=null;PEERS={};lobby();$("lbCode").value=m[1].toUpperCase();
    $("lbErr").className="msg ok";$("lbErr").textContent=`Foste convidado para o jogo ${m[1].toUpperCase()}. Escreve o teu nome e carrega em Entrar.`;
    $("lbCreate").hidden=true;$("lbCreate4").hidden=true;if(!store("duelo_names")){$("lbName").value="";$("n0").value=""}$("lbName").focus()},0)})();
/* servidor Firebase (Realtime Database): cada telemóvel escreve a sua vaga em rooms/<sala>/p/<id>, todos ouvem a sala.
   Não há anfitrião a reencaminhar: se alguém cair, os outros continuam e quem volta encontra tudo como estava. */
const FBCFG={apiKey:"AIzaSyDr-c2mQUPcN2mhwtA8RUtHAbZMx7IOP7Q",authDomain:"duelo-de-onzes.firebaseapp.com",
  databaseURL:"https://duelo-de-onzes-default-rtdb.europe-west1.firebasedatabase.app",projectId:"duelo-de-onzes",
  storageBucket:"duelo-de-onzes.firebasestorage.app",messagingSenderId:"353061850428",appId:"1:353061850428:web:21de8abe41bddca8fda239"};
const FBV="13.1.0",FB_TTL=2*864e5;
/* App Check (reCAPTCHA Enterprise): só a app verdadeira consegue falar com a base de dados. Vazio = desligado */
const APPCHECK_KEY="6Ldl5xMuAAAAAEPrlKy2St3ovDWFfj-rbRJyj6Xb";
let FB=null;
/* versão do protocolo online: telemóveis com versões diferentes avisam para recarregar */
const APPV="2026-11-11b";
/* decisões às escondidas: cada telemóvel publica primeiro um compromisso (hash) e só revela depois de ver o do outro */
function cyrb(s){let h1=0xdeadbeef,h2=0x41c6ce57;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return(4294967296*(2097151&h2)+(h1>>>0)).toString(36)}
function rndSalt(){try{const a=new Uint32Array(2);crypto.getRandomValues(a);return a[0].toString(36)+a[1].toString(36)}catch(e){return Math.random().toString(36).slice(2,12)}}
function pubDec(dk,side,mine){const out={},op=1-side,O=((G.dec||{})[dk]||[{},{}])[op],H=(((G.decH=G.decH||{})[dk])||[{},{}])[op],S=((G.decS=G.decS||{})[dk]=G.decS[dk]||{});
  Object.entries(mine||{}).forEach(([k,v])=>{if(v==null)return;v=String(v);const s=S[k]||(S[k]=rndSalt()),b=k.replace(/^[tf]/,"");
    out[k]=(O[b]!=null||H[b]!=null)?v+"~"+s:"#"+cyrb(dk+"|"+k+"|"+v+"|"+s)});return out}
async function fbLoad(){
  if(FB)return FB;
  const u=m=>`https://www.gstatic.com/firebasejs/${FBV}/firebase-${m}.js`;
  const to=new Promise((_,r)=>setTimeout(()=>r(new Error("timeout")),12000));
  const [A,AU,D]=await Promise.race([Promise.all([import(u("app")),import(u("auth")),import(u("database"))]),to]);
  const app=A.initializeApp(FBCFG);
  if(APPCHECK_KEY&&/^https:/.test(location.protocol)){try{const AC=await Promise.race([import(u("app-check")),to]);AC.initializeAppCheck(app,{provider:new AC.ReCaptchaEnterpriseProvider(APPCHECK_KEY),isTokenAutoRefreshEnabled:true})}catch(e){console.warn("app check",e)}}
  const auth=AU.getAuth(app),db=D.getDatabase(app);
  if(!auth.currentUser)await Promise.race([AU.signInAnonymously(auth),to]);
  FB={A,AU,D,app,auth,db};return FB;
}
let fbCleaned=false;
function fbClean(D,db){if(fbCleaned)return;fbCleaned=true;
  const old=Date.now()-FB_TTL-36e5;/* margem de 1 h para relógios adiantados */
  D.get(D.query(D.ref(db,"idx"),D.orderByValue(),D.endAt(old),D.limitToFirst(25))).then(snap=>{
    snap.forEach(c=>{const k=c.key;D.remove(D.ref(db,"rooms/"+k)).then(()=>D.remove(D.ref(db,"idx/"+k))).catch(()=>{})})}).catch(()=>{})}
function fbRoomApi(){return{fb:true,join:name=>(async()=>{
  const {D,auth,db}=await fbLoad();
  const room=String(name).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,40);
  fbClean(D,db);
  const me=auth.currentUser.uid,myRef=D.ref(db,`rooms/${room}/p/${me}`),pRef=D.ref(db,`rooms/${room}/p`);
  let idxAt=0,mine={},last='',others={},fns=[],errFns=[],left=false,online=false,pend=null,unsub=[];
  const emit=()=>{const peers=[{peer:"me",isMe:true,presence:Object.freeze({...mine})}];Object.entries(others).forEach(([k,v])=>peers.push({peer:k,isMe:false,presence:v}));fns.forEach(f=>{try{f({peers,joined:[],left:[],updated:[]})}catch(e){console.error(e)}})};
  /* cada escrita também marca a sala como ativa (idx/<sala>); salas paradas há mais de 2 dias são apagadas por quem abrir um jogo */
  const write=()=>{if(left)return Promise.resolve();const js=JSON.stringify(mine);if(js===last)return Promise.resolve();last=js;
    /* a sala tem de estar marcada como ativa antes de escrevermos nela (as regras exigem-no) */
    const pre=Date.now()-idxAt>6e4?(idxAt=Date.now(),D.set(D.ref(db,`idx/${room}`),D.serverTimestamp()).catch(()=>{})):Promise.resolve();
    return pre.then(()=>D.set(myRef,{d:js,t:D.serverTimestamp()})).catch(e=>{last='';idxAt=0;console.warn("firebase: escrita recusada",e)})};
  /* ouvir a sala: a mesma pessoa (uid do jogo) pode ter vagas antigas se a conta anónima mudou — fica a mais recente */
  unsub.push(D.onValue(pRef,snap=>{const v=snap.val()||{},best={};
    Object.entries(v).forEach(([k,x])=>{if(k===me||!x||typeof x.d!=="string")return;let p;try{p=JSON.parse(x.d)}catch(e){return}
      if(!p||typeof p!=="object"||(mine.uid&&p.uid===mine.uid))return;const id=p.uid||k,t=+x.t||0;if(!best[id]||best[id].t<t)best[id]={k,t,p}});
    const o={};Object.values(best).forEach(b=>o[b.k]=Object.freeze(b.p));others=o;emit()},e=>errFns.forEach(f=>f(e))));
  unsub.push(D.onValue(D.ref(db,".info/connected"),s=>{const was=online;online=!!s.val();if(online&&!was){last='';write()}}));
  const api={presence:async patch=>{for(const k in patch){if(patch[k]===null)delete mine[k];else mine[k]=patch[k]}emit();
      clearTimeout(pend);pend=setTimeout(write,60)},
    onPeers:(f,onErr)=>{fns.push(f);if(onErr)errFns.push(onErr);setTimeout(emit,0);return()=>{}},
    leave:async()=>{left=true;clearTimeout(pend);unsub.forEach(u=>{try{u()}catch(e){}})},
    ok:()=>!left,
    connected:()=>online};
  return api;
})()}}
async function connect(){
  lobby();
  try{ROOMAPI=ROOMAPI||(window.claude&&window.claude.use?await window.claude.use("room"):null)}catch(e){ROOMAPI=null}
  if(!ROOMAPI)ROOMAPI=fbRoomApi();
  if(!ROOMAPI){G.online.err="Aqui no Claude, o modo online precisa de conta do Claude e de convite. Para jogar sem conta, usa a versão independente do jogo.";lobby();return}
  try{ROOM=await ROOMAPI.join("duelo-"+G.online.code.toLowerCase())}
  catch(e){
    if(ROOMAPI&&ROOMAPI.fb){console.warn("firebase falhou",e);FB=null;const c=(e&&(e.code||e.message))||"erro";
      G.online.err=`Sem ligação ao servidor (${String(c).slice(0,60)}). A tentar outra vez…`;lobby();
      setTimeout(()=>{if(G&&G.mode==="online"&&!ROOM)connect()},3000);return}
    if(G.online.auto&&G.online.auto<20){G.online.auto++;G.online.err=`A voltar a ligar… (tentativa ${G.online.auto})`;lobby();setTimeout(()=>{if(G&&G.mode==="online"&&!ROOM)connect()},3000);return}
    G.online.err="Não foi possível entrar no jogo ("+(e&&e.code||"erro")+"). Tenta outra vez.";lobby();return}
  G.online.auto=0;
  ROOM.onPeers(onPeers,e=>{if(G&&G.online)autoResume()});
  pushPresence();if(!G.online.watch)render();
}
/* novo jogo na mesma sala: o anfitrião sorteia tudo de novo e os outros seguem-no (sem voltar a enviar o link) */
function stopMatchUI(){stopFeed();if(SC.raf)cancelAnimationFrame(SC.raf);SC.raf=0;SC.busy=false;SC.end=null;SC.S=null;tvZones(null);LIVE=null}
function resetGame(seed,gen){
  stopMatchUI();const n=G.n;
  Object.assign(G,{seed,cfg:Array.from({length:n},()=>({coach:null,form:null})),caps:Array(n).fill(null),picks:[],mine:[],m:0,dec:{},res:{},playing:null,
    botSt:null,tko:null,cardI:-1,teams:null,cur:null,sel:null,tries:3,peekT:null,shownM:0,lastI:-1,coachFor:-1,capFor:-1,rulesSaved:0,botAt:null,botPlay:{},
    timeoutAt:null,waitStart:null,autoIn:null,confettiDone:0,lgSaved:0,claimReq:null,claimAns:null,claimWait:0,lastEv:null,decH:{},decS:{},cokMine:[],claimOk:new Set()});
  G.online.go=false;G.online.gen=gen;G.online.nx=0;
}
function newRound(){
  if(!G||G.mode!=="online")return;
  if(G.me===0){resetGame(newSeed(),(G.online.gen||0)+1);G.avoid=(store("duelo_recent_rules")||[]).slice(-70);G.theme=THEME||null;G.tm=TMSET;G.lg=null;
    if(G.online.ro)G.online.ro.forEach((r,i)=>{if(r.b){r.n="Bot "+G.online.ro.slice(0,i+1).filter(x=>x.b).length;G.names[i]=r.n}});syncBots();
    pushPresence();lobby();return}
  G.online.nx=(G.online.gen||0)+1;pushPresence();lobby(`À espera que ${G.names[0]} comece o novo jogo…`);
}
function myPresence(){
  const me=G.me,c=me!=null?G.cfg[me]:{coach:null,form:null},dk=LIVE&&LIVE.dk,side=LIVE&&LIVE.mySide,h=dk&&G.dec[dk];
  return{g:"duelo",hu:G.online.hu||null,w:G.online.watch?1:0,gen:G.online.gen||0,nx:G.online.nx||0,code:G.online.code,uid:G.online.uid,n:G.online.n,host:me===0,name:me!=null?G.names[me]:myName(),seed:me===0?G.seed:null,
    ro:me===0?G.online.ro:null,go:me===0?!!G.online.go:null,
    coach:c.coach?c.coach.n:null,form:c.coach?c.form:null,picks:G.mine.map(e=>({o:e.o,s:e.s,n:e.n,y:e.y?1:0,at:e.at||0})),m:G.m,cap:me!=null?G.caps[me]:null,
    dec:h&&side!=null?{k:dk,d:pubDec(dk,side,h[side])}:null,ch:G.chat&&G.chat.length?G.chat.slice(-30):null,v:APPV,cok:G.cokMine&&G.cokMine.length?G.cokMine.slice(-60):null,sim:LIVE&&LIVE.dk&&LIVE.simReq?{k:LIVE.dk,n:LIVE.simN||1,on:LIVE.sim?1:0}:null,simNo:LIVE&&LIVE.dk&&LIVE.simNo?{k:LIVE.dk,n:LIVE.simNo}:null,lv:LIVE&&LIVE.dk&&!LIVE.done?{k:LIVE.dk,si:LIVE.si,w:LIVE.atStop?1:0,mn:LIVE.minute}:null,claim:G.claimReq||null,cans:G.claimAns||null,res:G.res||null,play:G.playing||null,bots:me===0&&G.botSt?G.botSt:null,av:me===0&&G.avoid?G.avoid.map(l=>RULEIX.get(l)).filter(x=>x!=null):null,th:me===0?G.theme||"":null,sea:me===0&&G.online.sea?G.online.sea:null,fx:me===0&&G.fixed?G.fixed.fx:null,lg:me===0?G.lg||0:null,tko:me===0&&G.tko?Object.values(G.tko):null,tm:me===0?G.tm:null};
}
function pushPresence(){
  const me=G.me,c=me!=null?G.cfg[me]:{coach:null,form:null};
  if(G.online.watch){if(ROOM)ROOM.presence(myPresence()).catch(()=>{});return}
  store("duelo_online",{code:G.online.code,me,n:G.online.n,uid:G.online.uid,ro:G.online.ro,go:!!G.online.go,name:me!=null?G.names[me]:myName(),seed:G.seed,
    coach:c.coach?c.coach.n:null,form:c.form,mine:G.mine,m:G.m,cap:me!=null?G.caps[me]:null,chat:G.chat||null,dec:G.dec,decS:G.decS||null,decH:G.decH||null,cok:G.cokMine||null,hu:G.online.hu||null,cans:G.claimAns||null,res:G.res||null,bst:me===0?G.botSt||null:null,av:G.avoid||null,th:G.theme||null,gen:G.online.gen||0,lg:G.lg||null,fx:G.fixed?G.fixed.fx:null,sea:G.online.sea||null});
  if(ROOM)ROOM.presence(myPresence()).catch(()=>{});
}
function mergePicks(){
  const a=[],N=RD*G.n;if(G.me!=null)G.mine.forEach(e=>{a[e.o]={...e,t:G.me}});
  Object.entries(PEERS).forEach(([s,pr])=>((pr&&pr.picks)||[]).forEach(e=>{if(typeof e.o==="number"&&Number.isInteger(e.o)&&e.o>=0&&e.o<N&&!a[e.o]&&orderOf(Math.floor(e.o/G.n))[e.o%G.n]===+s)a[e.o]={o:e.o,s:+e.s,n:typeof e.n==="string"?e.n:null,y:!!e.y,t:+s,at:+e.at||0}}));
  /* júniores metidos por tempo esgotado (publicados por quem criou o jogo): só contam se a pessoa não escolheu */
  const tk=G.me===0?Object.values(G.tko||{}):((PEERS[0]&&PEERS[0].host?PEERS[0]:{}).tko||[]);
  if(Array.isArray(tk))tk.forEach(e=>{if(e&&Number.isInteger(e.o)&&e.o>=0&&e.o<N&&!a[e.o]&&Number.isInteger(e.s)&&Number.isInteger(e.t)&&e.t>=0&&e.t<G.n)a[e.o]={o:e.o,s:e.s,n:null,y:true,t:e.t,at:+e.at||0}});
  G.picks=a;
}
/* lado (0 ou 1) de um lugar num jogo identificado por chave */
function sideIn(dk,seat){if(dk[0]==="m")return seat;const mt=tourMatchByKey(dk);return !mt?null:mt.a===seat?0:mt.b===seat?1:null}
/* jogo online sincronizado: se o outro telemóvel já chegou à próxima paragem (ou mais à frente), este salta até lá */
function liveSync(){
  if(!G||G.mode!=="online"||!LIVE||!LIVE.dk||LIVE.done||$("sMatch").hidden||!timer)return;
  let p=null;
  if(LIVE.mySide==null){[0,1].forEach(x=>{const q=PEERS[LIVE.ci[x]];if(q&&q.lv&&q.lv.k===LIVE.dk&&(!p||q.lv.si>p.lv.si||(q.lv.si===p.lv.si&&(+q.lv.mn||0)>(+p.lv.mn||0))))p=q})}
  else p=PEERS[LIVE.ci[1-LIVE.mySide]];
  if(!p||!p.lv||p.lv.k!==LIVE.dk)return;
  /* o outro já está à espera no lance seguinte: damos uns segundos para este acabar a jogada que está a mostrar
     (antes saltava logo e perdia-se o lance); só salta se ficar mesmo para trás */
  if(p.lv.si>LIVE.si+1||(p.lv.si>LIVE.si&&!SC.busy)){setTimeout(()=>{if(timer&&LIVE&&!LIVE.done)$("skip").click()},0);return}
  if(p.lv.si>=LIVE.si&&p.lv.w){const now=Date.now();if(!LIVE.behind||LIVE.behind.si!==LIVE.si)LIVE.behind={si:LIVE.si,at:now};
    if(now-LIVE.behind.at>9000){setTimeout(()=>{if(timer&&LIVE&&!LIVE.done)$("skip").click()},0)}return}
  /* a meio do relato: só acelera se o outro for muito à frente (ex.: este telemóvel esteve bloqueado) */
  if(p.lv.si===LIVE.si&&+p.lv.mn>LIVE.minute+15)LIVE.catchTo=+p.lv.mn;
}
setInterval(()=>{try{liveSync();
  /* rede: se as duas decisões já cá estão mas nada as resolveu, resolve agora */
  if(G&&G.mode==="online"&&LIVE&&LIVE.waiting!=null&&!LIVE.leadRunning&&!$("sMatch").hidden){const k=LIVE.waiting,stop=LIVE.plan[k],d=decGet();
    const ok=stop.kind==="mom"?sidesFor(stop).every(x=>d[x][k])&&(!needsTaker(stop)||d[stop.t]["t"+k]!=null):[0,1].every(x=>d[x][k]);if(ok)drawDecision()}
  if(G&&G.mode==="online"&&LIVE&&LIVE.dk&&!LIVE.done&&timer&&Math.abs(LIVE.minute-(LIVE.pushMn??-9))>=3){LIVE.pushMn=LIVE.minute;pushPresence()}}catch(e){}},1000);
function onPeers(ch){
  if(!G||!G.online)return;LASTCH=ch;
  const list=ch.peers.filter(x=>!x.isMe&&x.presence&&x.presence.g==="duelo"&&x.presence.code===G.online.code&&typeof x.presence.uid==="string").map(x=>x.presence);
  G.online.err=null;
  if(G.me===0){
    let changed=false;
    list.forEach(pr=>{const i=G.online.ro.findIndex(r=>r.u===pr.uid),nm=cleanName(pr.name)||"Treinador";
      if(i<0&&!pr.w&&G.online.ro.length<G.online.n&&!G.online.go){G.online.ro.push({u:pr.uid,n:nm});changed=true}
      else if(i>0&&G.online.ro[i].n!==nm){G.online.ro[i].n=nm;changed=true}});
    if(G.online.n<=2&&rosterFull()&&!G.online.go&&!G.online.gen&&!G.online.sea){G.online.go=true;changed=true}
    /* alguém carregou em "Novo jogo": recomeça na mesma sala */
    if(list.some(pr=>(+pr.nx||0)>(G.online.gen||0)&&G.online.ro.some((r,i)=>i>0&&r.u===pr.uid))&&G.online.go){newRound();return}
    if(changed)pushPresence();
  }else{
    /* anfitrião fixo: o primeiro que vimos (ou o 1.º da lista); outros que digam ser anfitrião são ignorados */
    if(!G.online.hu){const r0=G.online.ro&&G.online.ro[0]&&G.online.ro[0].u;const h0=r0?list.find(p=>p.host&&p.uid===r0):list.find(p=>p.host);if(h0)G.online.hu=h0.uid}
    const h=list.find(p=>p.host&&p.uid===G.online.hu);
    if(h&&(+h.gen||0)>(G.online.gen||0)&&typeof h.seed==="string"){resetGame(h.seed,+h.gen);G.avoid=null;G.theme=null}
    if(h){
      if(!G.seed&&typeof h.seed==="string")G.seed=h.seed;
      if(Array.isArray(h.av))G.avoid=h.av.filter(i=>RULES[i]).map(i=>RULES[i].l);
      if(typeof h.th==="string")G.theme=THEMES[h.th]?h.th:null;
      if(h.lg&&typeof h.lg.c==="string"&&/^[A-Z0-9]{5}$/.test(h.lg.c)){G.lg={c:h.lg.c,n:cleanName(h.lg.n)||"Liga"};if(!LEAGUE)setLeague(G.lg)}else if(h.lg===0)G.lg=null;
      if(typeof h.n==="number"&&h.n>=2&&h.n<=8&&h.n!==G.online.n){G.online.n=h.n;ensureN(h.n)}
      if(h.sea&&typeof h.sea.sid==="string")G.online.sea={c:h.sea.c,sid:h.sea.sid,n:cleanName(h.sea.n)||"Liga"};
      if(h.fx&&typeof h.fx.fid==="string"&&!G.fixed)setFixed(h.fx,1);
      if(Array.isArray(h.ro)){G.online.ro=h.ro.filter(r=>r&&typeof r.u==="string").slice(0,G.online.n).map(r=>({u:r.u,n:cleanName(r.n)||"Treinador",...(r.b>=1&&r.b<=3?{b:r.b}:{})}));
        const i=G.online.ro.findIndex(r=>r.u===G.online.uid);if(i>0&&G.me!==i){G.me=i;G.names[i]=myName();pushPresence()}}
      G.online.go=!!h.go;if(TMOPT.includes(h.tm))G.tm=h.tm;
    }
  }
  if(G.online.ro)G.online.ro.forEach((r,i)=>{if(i!==G.me&&i<G.n)G.names[i]=r.n});
  const prev=PEERS;PEERS={};
  list.forEach(pr=>{const s=G.online.ro?G.online.ro.findIndex(r=>r.u===pr.uid):-1;if(s>=0&&s!==G.me&&s<G.n)PEERS[s]=(+pr.gen||0)===(G.online.gen||0)?pr:{uid:pr.uid,name:pr.name,host:pr.host,gen:pr.gen,nx:pr.nx,ch:pr.ch}});
  if(G.online.ro)syncBots();
  {const hp=G.me===0?null:list.find(p=>p.host&&p.uid===G.online.hu),bsrc=G.me===0?G.botSt:hp&&hp.bots;
    if(bsrc&&typeof bsrc==="object")Object.entries(bsrc).forEach(([s,b])=>{s=+s;if(isBot(s)&&s!==G.me&&s<G.n&&b&&typeof b==="object")PEERS[s]={coach:b.coach,form:b.form,cap:b.cap,picks:Array.isArray(b.picks)?b.picks:[]}})}
  G.res=G.res||{};let decNew=false;
  Object.entries(PEERS).forEach(([s,pr])=>{s=+s;
    const co=COACHES.find(c=>c.n===pr.coach)||null;G.cfg[s]={coach:co,form:co&&FORMS[pr.form]?pr.form:null};
    if(G.online.n<=2&&typeof pr.m==="number"&&pr.m>G.m){G.m=pr.m;pushPresence()}
    G.caps[s]=Number.isInteger(pr.cap)&&pr.cap>=0&&pr.cap<11?pr.cap:null;
    if(pr.dec&&typeof pr.dec.k==="string"&&pr.dec.k.length<12&&pr.dec.d&&typeof pr.dec.d==="object"){const side=sideIn(pr.dec.k,s);
      if(side!=null){const D=(G.dec[pr.dec.k]=G.dec[pr.dec.k]||[{},{}]);
        const HH=(((G.decH=G.decH||{})[pr.dec.k]=G.decH[pr.dec.k]||[{},{}]))[side];
        Object.entries(pr.dec.d).forEach(([k,v])=>{if(!/^[tf]?\d{1,2}$/.test(k)||typeof v!=="string"||v.length>48||D[side][k]!=null)return;
          if(v[0]==="#"){if(/^#[a-z0-9]{1,14}$/.test(v)&&HH[k]!==v.slice(1)){HH[k]=v.slice(1);decNew=true}return}
          const m=/^([A-Za-z0-9:,\-]{1,16})~([a-z0-9]{1,16})$/.exec(v);if(!m)return;
          if(HH[k]!=null&&cyrb(pr.dec.k+"|"+k+"|"+m[1]+"|"+m[2])!==HH[k]){console.warn("decisão não bate com o compromisso",k);return}
          D[side][k]=m[1];decNew=true})}}
    if(pr.res&&typeof pr.res==="object")Object.entries(pr.res).forEach(([k,v])=>{if(/^t\d\.\d$/.test(k)&&!G.res[k]&&v&&Array.isArray(v.g)&&Number.isInteger(v.w))G.res[k]={g:v.g.map(Number),p:Array.isArray(v.p)?v.p.map(Number):null,w:v.w}});
  });
  if(decNew&&G.me!=null&&!G.online.watch)pushPresence();
  try{chatSync()}catch(e){}
  G.online.oldPeer=list.some(p=>p.v!==APPV&&G.online.ro&&G.online.ro.some(r=>r.u===p.uid));
  if(G.online.watch){watchTick();simState();return}
  if(G.me==null){lobby();return}
  mergePicks();lockTakenCoach();
  liveSync();simState();
  if(LIVE&&LIVE.spect&&isTourOnline()){const mt=myTourMatch();if(mt){const o=mt.a===G.me?mt.b:mt.a;if(PEERS[o]&&PEERS[o].play===mt.key&&G.warnPlay!==mt.key){G.warnPlay=mt.key;addLine({m:LIVE.minute,info:true,tx:`⚽ ${G.names[o]} está à tua espera para o teu jogo! Carrega em "Sair e voltar ao quadro".`});feedTop(true)}}}
  if(LIVE&&LIVE.waiting!=null&&!$("sMatch").hidden){drawDecision();return}
  if(LIVE&&!LIVE.done&&!$("sMatch").hidden)return;
  if(!$("sDraft").hidden&&G.cfg.every(c=>c.form)){replay();if(!G.cur.done&&G.lastI===G.cur.i){maybeCard();drawDraft();return}}
  if(!$("sResult").hidden&&!(G.online.n<=2&&G.m&&G.shownM!==G.m))return;
  render();
}
function leaveOnline(){
  if(ROOM)ROOM.leave().catch(()=>{});ROOM=null;PEERS={};stopFeed();
  if(G&&G.mode==="online")store("duelo_online",null);
  $("resumeBtn").hidden=true;G=null;show("sStart");
}
/* torneio online: quadro calculado a partir dos resultados que cada telemóvel publica */
function tourRounds(){
  const n=G.n,order=withRng(seeded(G.seed+":draw"),()=>shuffle([...Array(n).keys()])),R=[[]];
  for(let i=0;i<order.length;i+=2)R[0].push({a:order[i],b:order[i+1],key:"t0."+(i/2)});
  for(let ri=0;ri<R.length;ri++){const r=R[ri];r.forEach(mt=>mt.res=G.res&&G.res[mt.key]||null);
    if(R.length>ri+1)continue;
    if(r.length===1||!r.every(mt=>mt.res))break;
    if(r.length===2){R.push([{a:loserOf(r[0]),b:loserOf(r[1]),key:`t${ri+1}.0`,third:true}],[{a:r[0].res.w,b:r[1].res.w,key:`t${ri+2}.0`}]);continue}
    const nr=[];for(let i=0;i<r.length;i+=2)nr.push({a:r[i].res.w,b:r[i+1].res.w,key:`t${ri+1}.${i/2}`});R.push(nr)}
  return R;
}
const loserOf=mt=>mt.res.w===mt.a?mt.b:mt.a;
const roundName=r=>r[0]&&r[0].third?"Jogo do 3.º lugar":RNAME(r.length*2);
function podium(R){const fin=R[R.length-1][0],th=R.find(r=>r[0]&&r[0].third);if(!fin||!fin.res)return"";const out=[`2.º ${G.names[loserOf(fin)]}`];if(th&&th[0].res)out.push(`3.º ${G.names[th[0].res.w]}`);return out.join(" · ")}
function tourMatchByKey(k){for(const r of tourRounds())for(const mt of r)if(mt.key===k)return mt;return null}
function myTourMatch(){for(const r of tourRounds())for(const mt of r)if(!mt.res&&(mt.a===G.me||mt.b===G.me))return mt;return null}
function startTourOnlineMatch(mt){
  const o=mt.a===G.me?mt.b:mt.a;
  if(!isBot(o)&&!(PEERS[o]&&PEERS[o].play===mt.key)){G.playing=mt.key;G.waitStart=mt.key;pushPresence();bracketOnline();return}
  G.waitStart=null;G.playing=mt.key;pushPresence();
  const ri=+mt.key[1];
  startMatch({a:mt.a,b:mt.b,key:G.seed+":"+mt.key,dk:mt.key,mySide:mt.a===G.me?0:1,onDone:R=>{
    G.res=G.res||{};G.res[mt.key]={g:R.goals,p:R.pens,w:R.w===0?mt.a:mt.b};G.playing=null;pushPresence();
    const fin=tourRounds().slice(-1)[0];if(fin.length===1&&!fin[0].third&&fin[0].key===mt.key&&fin[0].res)saveChamp(G.names[fin[0].res.w]);
  }});
}
function spectate(mt){
  G.watching=mt.key;
  startMatch({a:mt.a,b:mt.b,key:G.seed+":"+mt.key,dk:mt.key,mySide:null,spect:true,back:"Voltar ao quadro",onDone:()=>{G.watching=null}});
  $("specExit").hidden=false;addLine({m:0,info:true,tx:`👁 Estás a ver ${G.names[mt.a]} x ${G.names[mt.b]} em direto.`});
}
$("specExit").onclick=()=>{if(G&&G.online&&G.online.watch){stopMatchUI();$("specExit").hidden=true;watchLeave();return}stopMatchUI();G.watching=null;$("specExit").hidden=true;bracketOnline()};
function bracketOnline(){
  const R=tourRounds(),box=$("brBox");box.innerHTML="";$("brShare").hidden=G.me==null;
  R.forEach(r=>{
    const sec=el("div","brRound"+(r[0]&&r[0].third?" third":""));sec.append(el("span","lbl",roundName(r)));
    r.forEach(mt=>{const c=el("div","brMatch");
      const live=!mt.res&&Object.values(PEERS).some(p=>p.play===mt.key);
      [mt.a,mt.b].forEach((t,j)=>{const row=el("div","brTeam"+(mt.res&&mt.res.w===t?" win":mt.res?" lose":""));const d=el("span","dot");d.style.setProperty("--c",COL[t]);
        row.append(d,el("span","bn",G.names[t]+(t===G.me?" (tu)":"")),el("b",null,mt.res?String(mt.res.g[j])+(mt.res.p?` (${mt.res.p[j]})`:""):live?"a jogar…":""));c.append(row)});
      if(live&&mt.a!==G.me&&mt.b!==G.me){const w=el("button","btn ghost watchBtn","👁 Ver em direto");w.type="button";w.onclick=()=>spectate(mt);c.append(w)}
      sec.append(c)});
    box.append(sec);
  });
  const fin=R[R.length-1],champ=fin.length===1&&!fin[0].third&&fin[0].res?fin[0].res.w:null,mine=myTourMatch();
  $("brPod").textContent=champ!=null?podium(R):"";$("brPod").hidden=champ==null;
  $("brNew").hidden=true;
  if(champ!=null){$("brTitle").textContent=`🏆 ${G.names[champ]} ganha o torneio!`;$("brTitle").style.color=COL[champ];$("brPlay").hidden=true;$("brNew").hidden=false;if(!G.confettiDone){G.confettiDone=1;confetti()}
    if(!G.lgSaved){G.lgSaved=1;try{lgTour(R,G.names[champ],G.online.code+"-"+(G.online.gen||0)+"-t")}catch(e){}}}
  else{$("brTitle").textContent="Quadro do torneio";$("brTitle").style.color="";
    if(mine){const o=mine.a===G.me?mine.b:mine.a,oppIn=PEERS[o]&&PEERS[o].play===mine.key;$("brPlay").hidden=false;$("brPlay").disabled=false;
      $("brPlay").textContent=oppIn?`${G.names[o]} está à tua espera. Entrar!`:`Jogar: ${G.names[mine.a]} x ${G.names[mine.b]}`;
      if(G.waitStart===mine.key){if(oppIn){setTimeout(()=>{if(G&&G.waitStart===mine.key&&!$("sBracket").hidden)startTourOnlineMatch(mine)},0)}
        else{$("brPlay").disabled=true;$("brPlay").textContent=`À espera que ${G.names[o]} entre em campo…`}}
      else if(oppIn&&!G.autoIn){G.autoIn=mine.key;setTimeout(()=>{if(G&&G.autoIn===mine.key&&!$("sBracket").hidden)startTourOnlineMatch(mine)},300)}}
    else{$("brPlay").hidden=false;$("brPlay").disabled=true;$("brPlay").textContent="À espera dos outros jogos…"}}
  show("sBracket");
}

if(false)$("lbNote").textContent="Cada um abre este jogo no seu telemóvel, com internet. Quem cria recebe um código de 4 letras e pode partilhar o link do jogo; o outro abre o link ou escreve o código. Não é preciso conta.";

/* ---- torneio no mesmo telemóvel ---- */
let tourSize=4,tourBots=[],tourLv=2;
function drawTourSetup(){
  $("tSize").querySelectorAll(".chip").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.n===tourSize));
  const box=$("tNames");const old=[...box.querySelectorAll("input")].map(i=>i.value);box.innerHTML="";
  const saved=store("duelo_tour_names")||[];
  for(let i=0;i<tourSize;i++){const inp=el("input");inp.type="text";inp.id="tn"+i;inp.maxLength=14;inp.placeholder="Treinador "+(i+1);inp.value=old[i]??saved[i]??"";
    const lab=el("label","field");lab.htmlFor=inp.id;const sp=el("span","lbl");sp.style.display="flex";sp.style.alignItems="center";sp.style.gap="8px";
    const d=el("span","dot");d.style.setProperty("--c",COL[i]);sp.append(d,"Treinador "+(i+1));
    const row=el("div","tbot"),bc=el("button","botchip","Bot");bc.type="button";bc.setAttribute("aria-pressed",!!tourBots[i]);
    bc.onclick=e=>{e.preventDefault();tourBots[i]=!tourBots[i];drawTourSetup()};inp.disabled=!!tourBots[i];if(tourBots[i])inp.value="";inp.placeholder=tourBots[i]?"Bot":"Treinador "+(i+1);
    row.append(inp,bc);lab.append(sp,row);box.append(lab)}
  $("tLv").querySelectorAll(".chip").forEach(b=>{b.setAttribute("aria-pressed",+b.dataset.lv===tourLv);b.onclick=()=>{tourLv=+b.dataset.lv;drawTourSetup()}});
  $("tBotLv").hidden=!tourBots.slice(0,tourSize).some(Boolean);
}
$("tourBtn").onclick=()=>{drawTourSetup();show("sTour")};
$("tSize").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{tourSize=+b.dataset.n;drawTourSetup()});
$("tBack").onclick=()=>show("sStart");
$("tGo").onclick=()=>{
  if(tourBots.slice(0,tourSize).every(Boolean)){tourBots[0]=false}
  let bn=0;const names=[...Array(tourSize).keys()].map(i=>tourBots[i]?"Bot "+(++bn):($("tn"+i).value.trim()||"Treinador "+(i+1)));
  const seen={};names.forEach((n,i)=>{const k=n.toLowerCase();if(seen[k])names[i]=n+" "+(i+1);seen[k]=1});
  store("duelo_tour_names",names);
  newGame("tour",names,newSeed());G.bots={};tourBots.slice(0,tourSize).forEach((b,i)=>{if(b)G.bots[i]=tourLv});
  const order=withRng(seeded(G.seed+":draw"),()=>shuffle([...Array(tourSize).keys()]));
  G.tour={rounds:[[]],champ:null};for(let i=0;i<order.length;i+=2)G.tour.rounds[0].push({a:order[i],b:order[i+1],res:null});
  render();
};
const RNAME=n=>n===2?"Final":n===4?"Meias-finais":"Quartos de final";
function bracket(){
  const T=G.tour,box=$("brBox");box.innerHTML="";$("brShare").hidden=true;
  T.rounds.forEach(r=>{
    const sec=el("div","brRound"+(r[0]&&r[0].third?" third":""));sec.append(el("span","lbl",roundName(r)));
    r.forEach(mt=>{const c=el("div","brMatch");
      [mt.a,mt.b].forEach((t,j)=>{const row=el("div","brTeam"+(mt.res&&mt.res.w===t?" win":mt.res?" lose":""));const d=el("span","dot");d.style.setProperty("--c",COL[t]);
        row.append(d,el("span","bn",G.names[t]),el("b",null,mt.res?String(mt.res.g[j])+(mt.res.p?` (${mt.res.p[j]})`:""):""));c.append(row)});
      sec.append(c)});
    box.append(sec);
  });
  const next=nextTourMatch();
  $("brPod").textContent=T.champ!=null?podium(T.rounds):"";$("brPod").hidden=T.champ==null;
  if(T.champ!=null){$("brTitle").textContent=`🏆 ${G.names[T.champ]} ganha o torneio!`;$("brTitle").style.color=COL[T.champ];$("brPlay").hidden=true;$("brNew").hidden=false;confetti()}
  else{$("brTitle").textContent="Quadro do torneio";$("brTitle").style.color="";$("brPlay").hidden=false;$("brNew").hidden=true;
    $("brPlay").textContent=`Jogar: ${G.names[next.a]} x ${G.names[next.b]}`}
  show("sBracket");
}
function nextTourMatch(){for(const r of G.tour.rounds)for(const mt of r)if(!mt.res)return mt;return null}
$("brPlay").onclick=()=>{if(isTourOnline()){const mt=myTourMatch();if(mt)startTourOnlineMatch(mt);return}const mt=nextTourMatch(),ri=G.tour.rounds.findIndex(r=>r.includes(mt)),mi=G.tour.rounds[ri].indexOf(mt);
  startMatch({a:mt.a,b:mt.b,key:G.seed+":t"+ri+"."+mi,auto:isBot(mt.a)&&isBot(mt.b),onDone:R=>{
    mt.res={g:R.goals,p:R.pens,w:R.w===0?mt.a:mt.b};
    const r=G.tour.rounds[ri];
    if(r.every(x=>x.res)){if(mt.third){}
      else if(r.length===1){G.tour.champ=mt.res.w;saveChamp(G.names[mt.res.w]);try{lgTour(G.tour.rounds,G.names[mt.res.w],G.seed+"-t")}catch(e){}}
      else if(r.length===2){G.tour.rounds.push([{a:loserOf(r[0]),b:loserOf(r[1]),res:null,third:true}],[{a:r[0].res.w,b:r[1].res.w,res:null}])}
      else{const nr=[];for(let i=0;i<r.length;i+=2)nr.push({a:r[i].res.w,b:r[i+1].res.w,res:null});G.tour.rounds.push(nr)}}
  },back:"Voltar ao quadro"})};
$("dReport").onclick=()=>openReport();
$("repSend").onclick=async()=>{const t=$("repTxt").value.trim();if(!t){$("repMsg").textContent="Escreve primeiro o que está mal.";return}
  const ok=await sendReport({kind:"texto",txt:t,rule:G&&G.cur&&G.cur.rule?G.cur.rule.l:""});$("repTxt").value="";$("repMsg").textContent=ok?"Obrigado! O erro ficou registado.":"Guardado neste telemóvel. Em Definições podes copiá-lo para enviar ao Diogo."};
$("repCopy").onclick=async()=>{const L=repLocal(),tx="Erros no Duelo de Onzes:\n"+L.map(r=>r.kind==="texto"?`- ${r.txt}`:`- ${dn(r.n)} ${r.kind==="cumpre"?"CUMPRE":"NÃO cumpre"} "${r.rule}"`).join("\n");
  try{await navigator.clipboard.writeText(tx);$("repCopyMsg").textContent="Copiado. Cola na conversa com o Diogo."}catch(e){$("repCopyMsg").textContent=tx}};
setTimeout(()=>{try{drawRepLocal()}catch(e){}},0);
$("brNew").onclick=()=>{if(G&&G.mode==="online"){newRound();return}G=null;show("sStart")};

/* ---- força das equipas ---- */
const OOP=7;
/* nova formação: cada jogador do onze vai para o lugar mais parecido; quem sobra joga fora de posição */
function reform(T0,f){
  const old=T0.slots.filter(s=>s.pos!=="SUP"&&s.pl),bench=T0.slots.filter(s=>s.pos==="SUP").map(s=>({...s}));
  const ns=buildSlots(f).filter(s=>s.pos!=="SUP"),left=new Set(old.map(s=>s.pl)),put=(s,p)=>{s.pl=p;left.delete(p)};
  ns.forEach(s=>{const o=old.find(x=>left.has(x.pl)&&x.pos===s.pos&&x.label===s.label);if(o)put(s,o.pl)});
  ns.forEach(s=>{if(s.pl)return;const o=old.find(x=>left.has(x.pl)&&x.pos===s.pos&&fitsSlot(x.pl,s));if(o)put(s,o.pl)});
  ns.forEach(s=>{if(s.pl)return;const p=[...left].find(p=>fitsSlot(p,s));if(p)put(s,p)});
  ns.forEach(s=>{if(s.pl)return;const L=[...left].filter(p=>p.p!=="GR"||s.pos==="GR");const p=L[0]||[...left][0];if(p)put(s,p)});
  return{...T0,form:f,slots:[...ns,...bench]};
}
const oopList=T=>T.slots.filter(s=>s.pos!=="SUP"&&s.pl&&!fitsSlot(s.pl,s)).map(s=>`${lastName(s.pl.n)} (${s.label})`);
function strength(T){
  const tc=TACT[T.coach.t],ps=T.picks;
  const val=p=>p.r+(tc.star&&p.r>=90?tc.star:0)+(p===T.cap?4:0);
  const avg=pos=>{let a=(T.slots||[]).filter(s=>s.pl&&s.pos===pos&&!(T.off&&T.off.has(s.pl.n))).map(s=>val(s.pl)-(fitsSlot(s.pl,s)?0:OOP));if(!a.length)a=ps.filter(p=>p.p===pos).map(val);return a.reduce((s,v)=>s+v,0)/Math.max(1,a.length)};
  const F=FORMS[T.form];
  let S={gk:avg("GR"),def:avg("DEF")+(F.DEF-4)*1.5,mid:avg("MED")+(F.MED-4)*1.5,att:avg("AVA")+(F.AVA-2)*1.5};
  const ci=chemInfo(T),chem=ci.pct*4*(tc.chem||1);S.chemSum=ci.sum;
  const pref=T.form===T.coach.f?1.5:0, all=chem+pref+(tc.all||0)+(T.cap?.5:0);
  S.gk+=all+(tc.gk||0);S.def+=all+(tc.def||0);S.mid+=all+(tc.mid||0);S.att+=all+(tc.att||0);
  S.chem=chem;S.pref=pref;S.tc=tc;S.ovr=S.gk*.15+S.def*.3+S.mid*.3+S.att*.25;
  return S;
}

/* ---- antes do jogo ---- */
function teamHead(t,box){
  const T=G.teams[t],h=el("div","teamhead");h.style.setProperty("--c",COL[t]);
  h.append(el("div","t",G.names[t]),el("span","muted",`${T.coach.n} · ${T.form} · ${TACT[T.coach.t].nome}`+(T.cap?` · Capitão: ${T.cap.n}`:"")+` · Química ${chemTxt(T)}`));box.append(h);
}
let preT=0;
function preMatch(){
  const box=$("preTeams");box.innerHTML="";
  const tabs=el("div","tabs");[0,1].forEach(t=>{const b=el("button","tab");b.style.setProperty("--c",COL[t]);b.append(el("span","dot"),G.names[t]);b.setAttribute("aria-pressed",t===preT);b.onclick=()=>{preT=t;preMatch()};tabs.append(b)});
  box.append(tabs);teamHead(preT,box);const x=el("div","pitchbox");drawPitch(x,preT,{withR:false});box.append(x);
  const h=h2hText(G.names[0],G.names[1]);
  $("preNote").textContent=(h?h+". ":"")+(G.mode==="online"?"Qualquer um dos dois pode dar o apito inicial. O jogo aparece igual nos dois telemóveis.":"");
  show("sPre");
}
$("kickOff").onclick=()=>{unlockAudio();if(!G.m){G.m=1;if(G.mode==="online")pushPresence()}render()};

/* ---- simulação, em duas partes ---- */
const HTC={att:{l:"Atacar",d:"Mais ocasiões, mas deixa espaço atrás",att:3,def:-3,ev:.15},keep:{l:"Manter",d:"Tudo igual"},def:{l:"Fechar",d:"Segura o resultado, cria menos",def:4,att:-3,ev:-.15}};
const wpick=arr=>{const tot=arr.reduce((s,a)=>s+a[1],0);let r=Math.random()*tot;for(const a of arr){r-=a[1];if(r<=0)return a[0]}return arr[0][0]};
const any=a=>a[rand(a.length)];
const field=T=>T.picks.filter(p=>p.p!=="GR"&&!(T.off&&T.off.has(p.n)));
const onPitch=T=>T.picks.filter(p=>!(T.off&&T.off.has(p.n)));
function shooter(T){if(!field(T).length)return null;return wpick(field(T).map(p=>[p,(p.p==="AVA"?5:p.p==="MED"?2.2:.6)*Math.pow(p.r/80,4)]))}
function assister(T,not){return wpick(field(T).filter(p=>p!==not).map(p=>[p,(p.p==="MED"?3:p.p==="AVA"?2:1)*Math.pow(p.r/80,3)]))}
const gkOf=T=>T.picks.find(p=>p.p==="GR");
const STY={AVA:["cruz","iso","prim","drib","cruz","iso","prim","drib","cruz","iso"],MED:["longe","chega","chapeu","longe","chega","longe","chega"],DEF:["cab","recarga","cab","cab","recarga"]};
const GOALTX={
  AVA:[n=>`remate cruzado de ${n}`,n=>`${n} isola-se e não perdoa`,n=>`${n} finaliza de primeira`,n=>`jogada individual de ${n}, que deixa dois para trás e marca`,n=>`${n} aparece ao segundo poste`,
    n=>`${n} ganha nas costas da defesa e atira rasteiro`,n=>`${n} remata colocado, junto ao poste`,n=>`${n} tira o defesa do caminho e fuzila`,n=>`${n} encosta ao primeiro poste`,n=>`${n} desvia com classe, sem hipóteses para o guarda-redes`],
  MED:[n=>`bomba de fora da área de ${n}`,n=>`${n} chega de trás e finaliza`,n=>`${n} faz um chapéu ao guarda-redes`,n=>`remate em arco de ${n} ao ângulo`,
    n=>`${n} aparece na área no momento certo`,n=>`que pontapé de ${n}, a bola entra junto à barra`,n=>`${n} entra pelo meio e remata para golo`],
  DEF:[n=>`${n} de cabeça, na sequência de um canto`,n=>`${n} aproveita uma recarga na área`,n=>`${n} sobe no livre e cabeceia para golo`,n=>`${n} ganha nas alturas e cabeceia sem hipóteses`,n=>`${n} empurra para a baliza na confusão da área`]
};
function simStart(a,b){
  const T=[G.teams[a],G.teams[b]].map(x=>({...x,off:new Set()})),S=[strength(T[0]),strength(T[1])];
  let pA=.5+(S[0].mid-S[1].mid)*.02+(S[0].tc.poss||0)-(S[1].tc.poss||0);pA=Math.min(.7,Math.max(.3,pA));
  return{kit:null,T,S,N:[G.names[a],G.names[b]],ci:[a,b],share:[pA,1-pA],ev:[],goals:[0,0],shots:[0,0],on:[0,0],stats:{g:{},a:{},y:{},r:{},sh:{},sv:{}},red:[0,0],mods:[{},{}],press:false};
}
/* equipamentos: padrão por equipa (listras, riscas horizontais, faixa, metades…) e números clássicos por posição */
const PATS=["solid","stripes","hoops","sash","halves","pin","solid","stripes"];
const NUMPOOL={GR:[1],DE:[3],DD:[2],DC:[4,5,6,15],MDC:[6,8],MC:[8,6,10,14],ME:[11,7],MD:[7,11],MO:[10],PL:[9,10,19],EE:[11],ED:[7],SUP:[12,13,14,16,17,18,20,21,22,23]};
function kitFor(st){
  return [0,1].map(j=>{
    const T=st.T[j],col=COLHEX[st.ci[j]],h=strHash(st.N[j]+"|"+T.coach.n),light=lum(col)>.6;
    const c2=light?["#1b2433","#ffffff","#1b2433"][h%3]:["#ffffff","#101820","#ffffff"][h%3];
    const nums=new Map(),used=new Set(),free=n=>{if(n&&!used.has(n)){used.add(n);return n}return null};
    (T.slots||[]).forEach(sl=>{if(!sl.pl)return;const pool=NUMPOOL[sl.label]||NUMPOOL[sl.pos]||[];let n=null;for(const c of pool){n=free(c);if(n)break}
      if(!n)for(let c=14;c<40&&!n;c++)n=free(c);nums.set(sl.pl.n,n)});
    return{pat:PATS[h%PATS.length],c2,nums,cap:T.cap?T.cap.n:null};
  });
}
function kitOf(p){const st=LIVE&&LIVE.st;if(!st||!st.kit)return null;const j=[0,1].find(j=>COLHEX[st.ci[j]]===p.kit);
  if(j!=null){const K=st.kit[j];return{pat:K.pat,c2:K.c2,num:K.nums.get(p.name),cap:K.cap===p.name}}
  if(p.gk){for(const j of [0,1]){const n=st.kit[j].nums.get(p.name);if(n)return{pat:"solid",num:n}}}
  return null}
/* reportar erros: vai para a base de dados do artifact (quando existe) e fica sempre também neste telemóvel */
const VERSION="25/10";
let REPDB=null;(async()=>{try{if(window.claude&&claude.use)REPDB=await claude.use("db")}catch(e){REPDB=null}})();
const repLocal=()=>store("duelo_reports")||[];
const repSent=new Set();
async function sendReport(r){
  r={...r,at:Date.now(),v:VERSION,mode:G?G.mode:""};
  const L=repLocal();L.unshift(r);store("duelo_reports",L.slice(0,60));
  let ok=false;if(REPDB){try{await REPDB.collection("reports").add(r);ok=true}catch(e){ok=false}}
  /* no site público: vai para a base de dados do jogo (só escrita; ninguém de fora a lê) */
  else if(/^https:/.test(location.protocol)&&!window.claude){try{const {D,db}=await fbLoad(),day=new Date().toISOString().slice(0,10);
    await Promise.race([D.push(D.ref(db,"reports/"+day),{d:JSON.stringify(r).slice(0,1900),t:D.serverTimestamp()}),new Promise((_,j)=>setTimeout(()=>j(new Error("timeout")),8000))]);ok=true}catch(e){console.warn("relatório",e);ok=false}}
  drawRepLocal();return ok;
}
function openReport(){
  const box=$("repList");box.innerHTML="";$("repMsg").textContent="";
  const row=(t,sub,btn,rep)=>{const k=JSON.stringify(rep);const r=el("div","repRow"),tx=el("div","t");tx.append(t);tx.append(el("small",null,sub));
    const b=el("button",null,repSent.has(k)?"Enviado":btn);b.disabled=repSent.has(k);b.onclick=async()=>{b.disabled=true;b.textContent="A enviar…";const ok=await sendReport(rep);repSent.add(k);b.textContent=ok?"Enviado ✓":"Guardado ✓";$("repMsg").textContent=ok?"Obrigado! O erro ficou registado.":"Guardado neste telemóvel. Em Definições podes copiá-lo para enviar ao Diogo."};
    r.append(tx,b);box.append(r)};
  if(G&&G.lastNo)row(dn(G.lastNo.n),`O jogo disse que NÃO cumpre "${G.lastNo.rule}"`,"Cumpre!",{kind:"cumpre",n:G.lastNo.n,rule:G.lastNo.rule});
  ((G&&G.pickLog)||[]).slice(-10).reverse().forEach(e=>row(dn(e.n),`Aceite em "${e.rule}"${G.names&&G.names[e.t]?" · "+G.names[e.t]:""}`,"Não cumpre",{kind:"nao_cumpre",n:e.n,rule:e.rule}));
  if(!box.children.length)box.append(el("p","muted","Ainda não há escolhas neste jogo. Podes escrever o erro em baixo."));
  openSheet("shReport");
}
function drawRepLocal(){const L=repLocal();$("repLocal").hidden=!L.length;$("repLocalN").textContent=`${L.length} erro${L.length===1?"":"s"} guardado${L.length===1?"":"s"}.`}
function simHalf(st,from,to){
  const {T,S,N,ev,goals}=st;
  for(let m=from;m<=to;m++){
    for(const t of [0,1]){
      const o=1-t,tc=S[t].tc,md=st.mods[t],mo=st.mods[o];
      let e=(1+(tc.ev||0)+(md.ev||0))*Math.pow(.82,st.red[t])*Math.pow(1.15,st.red[o]);
      if(m>=80&&goals[t]<goals[o])e*=1.35;
      const p=.055*(st.share[t]/.5)*e;
      let counter=false;
      if(tc.counter&&st.share[o]>.5&&Math.random()<.02+(st.share[o]-.5)*.1)counter=true;
      if(!counter&&Math.random()>p)continue;
      st.shots[t]++;
      const att=S[t].att+(md.att||0)-st.red[t]*3,def=S[o].def+(mo.def||0)-st.red[o]*3;
      const sh=shooter(T[t]),gk=gkOf(T[o]);if(!sh)continue;st.stats.sh[sh.n]=(st.stats.sh[sh.n]||0)+1;
      if(false){
        st.on[t]++;const ok=Math.random()<.78+(sh.r-gk.r)*.005;
        if(ok){goals[t]++;st.stats.g[sh.n]=(st.stats.g[sh.n]||0)+1;ev.push({m,t,goal:true,k:"pen",s:sh.n,tx:`Penálti para ${N[t]}! ${sh.n} bate ${gk.n} e marca.`})}
        else ev.push({m,t,k:"pen",s:sh.n,tx:`Penálti para ${N[t]}… ${gk.n} adivinha o lado e defende o remate de ${sh.n}!`});
        continue;
      }
      const diff=att-(def*.65+S[o].gk*.35);
      let pg=0;
      if(Math.random()<pg){
        goals[t]++;st.on[t]++;const as=Math.random()<.75?assister(T[t],sh):null;
        st.stats.g[sh.n]=(st.stats.g[sh.n]||0)+1;if(as)st.stats.a[as.n]=(st.stats.a[as.n]||0)+1;
        const GL=GOALTX[sh.p]||GOALTX.AVA,gi=rand(GL.length),how=GL[gi](sh.n),sty=(STY[sh.p]||STY.AVA)[gi];
        const AS=[n=>`, após passe de ${n}.`,n=>`, assistido por ${n}.`,n=>`. Grande passe de ${n}.`,n=>`, servido por ${n}.`,n=>`, a passe de ${n}.`];
        const ng=st.stats.g[sh.n],ctx=ng===2?` Bis de ${sh.n}!`:ng===3?` Hat-trick de ${sh.n}!`:ng>3?` Já são ${ng} golos de ${sh.n}!`:"";
        const sit=goals[t]===goals[o]?" Está tudo empatado!":goals[t]===goals[o]+1&&goals[o]>0?(m>=88?" Golo da vitória mesmo no fim!":" Reviravolta! Passa para a frente."):goals[t]===1&&goals[o]===0?" Abre o marcador!":"";
        const GO=["GOLO!","GOLO!","GOLAÇO!","É GOLO!","GOLO!"][rand(5)];
        ev.push({m,t,goal:true,k:"goal",s:sh.n,a:as?as.n:null,how:sty,tx:`${GO} ${how[0].toUpperCase()+how.slice(1)}`+(as?AS[rand(AS.length)](as.n):".")+(counter?" Contra-ataque mortal!":"")+ctx+sit});
      }else{
        const r=Math.random();
        if(r<.4){st.on[t]++;if(gk)st.stats.sv[gk.n]=(st.stats.sv[gk.n]||0)+1;ev.push({m,t,k:"save",s:sh.n,tx:any([`Grande defesa de ${gk.n} a remate de ${sh.n}!`,`${gk.n} voa e nega o golo a ${sh.n}.`,`${sh.n} obriga ${gk.n} a defesa apertada.`,
          `${gk.n} estica-se todo e tira o golo a ${sh.n}!`,`Remate forte de ${sh.n}, ${gk.n} defende para canto.`,`${gk.n} segura sem problemas o remate de ${sh.n}.`,`Que reflexos de ${gk.n}! ${sh.n} não acredita.`,`${sh.n} remata à figura de ${gk.n}.`])})}
        else if(r<.85)ev.push({m,t,k:"miss",s:sh.n,tx:any([`${sh.n} remata ao lado.`,`${sh.n} atira por cima da barra.`,`Oportunidade para ${sh.n}, mas falha o alvo.`,`${sh.n} tenta o chapéu, mas a bola sai por cima.`,
          `${sh.n} remata torto, a bola vai para a bancada.`,`${sh.n} tenta de longe, sem perigo.`,`Cabeceamento de ${sh.n} ao lado.`,`${sh.n} demora a rematar e a defesa corta.`,`${sh.n} desperdiça uma boa ocasião.`,`Remate de ${sh.n} a rasar o poste!`])});
        else ev.push({m,t,k:"post",s:sh.n,tx:any([`Ao poste! ${sh.n} esteve tão perto…`,`Na barra! Remate de ${sh.n}.`,`${sh.n} acerta no ferro!`,`A bola de ${sh.n} bate no poste e sai!`])});
      }
    }
    for(const t of [0,1]){
      const fl=field(T[t]);if(!fl.length)continue;
      if(Math.random()<.021*(st.mods[t].def?1.25:1)){const bk=p=>st.stats.y[t+":"+p.n]?(T[t].off.size>=2?0:.22):1,ws=fl.map(p=>[p,(p.p==="DEF"?3:p.p==="MED"?2.4:1)*bk(p)]);if(!ws.some(w=>w[1]>0))continue;const pl=wpick(ws.filter(w=>w[1]>0));giveCard(st,t,pl.n,m,"y",any(["entrada dura","falta tática","protestos","travou um contra-ataque","entrada atrasada"]))}
      else if(st.red[t]<2&&Math.random()<.0007){const pl=wpick(fl.map(p=>[p,p.p==="DEF"?3:p.p==="MED"?2:1]));giveCard(st,t,pl.n,m,"r")}
    }
    if(Math.random()<.004){const t=rand(2),pl=any(field(T[t]));ev.push({m,t,tx:`${pl.n} fica no relvado com dores… levanta-se e continua.`})}
    if(m===84&&!st.press&&goals[0]!==goals[1]){st.press=true;const t=goals[0]<goals[1]?0:1;ev.push({m,t,tx:`${N[t]} empurra tudo para a frente à procura do empate.`})}
    if(m===45)ev.push({m,info:true,tx:`Intervalo: ${N[0]} ${goals[0]}–${goals[1]} ${N[1]}.`});
  }
}
/* cartões: guarda quem viu o quê; ao 2.º amarelo ou vermelho direto o jogador sai e a equipa fica com menos um */
function giveCard(st,t,name,m,kind,why){
  const T=st.T[t];if(T.off.has(name))return;
  const y=st.stats.y,k=t+":"+name;
  if(kind==="y"&&!y[k]){y[k]=1;st.ev.push({m,t,card:"y",pl:name,tx:`Cartão amarelo para ${name}${why?` (${why})`:""}.`});return}
  if(kind==="y")y[k]=2;
  st.stats.r[k]=1;T.off.add(name);st.red[t]++;
  const left=11-T.off.size;
  st.ev.push({m,t,red:true,card:"r",pl:name,tx:kind==="y"?`Segundo amarelo para ${name}! Vermelho e ${st.N[t]} fica com ${left===10?"dez":left===9?"nove":left}.`:`Vermelho direto para ${name}! ${st.N[t]} fica com ${left===10?"dez":left===9?"nove":left}.`});
  if(T.cap&&T.cap.n===name)T.cap=null;
  st.S[t]=strength(T);
}
function simEnd(st){
  const {N,goals,ev,T}=st;
  ev.push({m:90,info:true,tx:`Apito final: ${N[0]} ${goals[0]}–${goals[1]} ${N[1]}.`});
  st.pens=null;st.needPens=false;
  if(goals[0]===goals[1]&&st.noPens){st.w=null;ev.push({m:"PEN",info:true,tx:"Empate! Cada equipa leva um ponto."});return}
  if(goals[0]===goals[1]){st.needPens=true;st.w=null;ev.push({m:"PEN",info:true,tx:"Empate. Vamos para os penáltis! Cada penálti é decidido por vocês."});return}
  st.w=goals[0]>goals[1]?0:1;
}

/* ---- transmissão: câmara lateral de TV, jogadores com movimento e bola com física ---- */
const SC={busy:false,skip:false,raf:0,end:null,S:null,idleS:null};
const COLHEX=["#ff5d4f","#4fa9ff","#ffd166","#7fe0a8","#c792ea","#ff9f43","#5ad1e6","#f78fb3"];
const ease=k=>k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
const win=(t,a,b)=>t<=a?0:t>=b?1:(t-a)/(b-a);
const lerp=(a,b,k)=>a+(b-a)*k;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const hash=n=>{n=Math.imul(n^n>>>15,2246822507);n=Math.imul(n^n>>>13,3266489909);return((n^n>>>16)>>>0)/4294967296};
const strHash=s=>{let h=7;for(const c of String(s))h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0};
function shade(hex,f){const n=parseInt(hex.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const m=v=>Math.max(0,Math.min(255,Math.round(f<0?v*(1+f):v+(255-v)*f)));return`rgb(${m(r)},${m(g)},${m(b)})`}
function scCanvas(){const c=$("scCv"),R=c.getBoundingClientRect(),w=Math.max(200,Math.round(R.width||360)),h=Math.round(w*.625),r=Math.min(3,window.devicePixelRatio||1);
  if(c.width!==Math.round(w*r)||c.height!==Math.round(h*r)){c.width=Math.round(w*r);c.height=Math.round(h*r)}const x=c.getContext("2d");x.setTransform(r,0,0,r,0,0);return{x,W:w,H:h}}
function scCaption(t,big){const e=$("scCap");if(e.textContent!==t)e.textContent=t;e.className="sccap"+(big?" big":"")+(t?"":" off");const lw=$("scLower");if(lw)lw.style.opacity=big?0:1}
const DNRX=/ \((?:\d{4}|[^)]*\d{4}[^)]*)\)/g,dn=n=>String(n||"").replace(DNRX,"");
const PARTS=new Set(["di","de","da","do","dos","das","del","della","van","von","der","den","ter","la","le","du","mac","st.","el","al"]);
const lastName=n=>{const p=dn(n).split(" ");if(p.length<2)return p[0];const l=p[p.length-1],q=p[p.length-2];
  if(l.length<=3||PARTS.has(q.toLowerCase()))return(p.length>2&&PARTS.has(p[p.length-3].toLowerCase())?p.slice(-3):p.slice(-2)).join(" ");return l};

/* campo: 105 x 68 m; a equipa que ataca vai sempre para a direita (baliza em x=105) */
const PW=105,PH=68,GY0=30.34,GY1=37.66,GH=2.44,NETB=106.9;
const CAM={x:70,y:30,zoom:1,D0:30,HC:9,base:2.15};
let VIEW={W:360,H:225,F:580,yh:0};
function setView(W,H){const F=W*CAM.base*CAM.zoom;let yh=.66*H-CAM.HC*F/(CAM.y+CAM.D0);yh=Math.min(yh,.36*H-CAM.HC*F/(PH+3+CAM.D0));VIEW={W,H,F,yh}}
/* cada equipa ataca para uma baliza e trocam ao intervalo: a TV mostra a jogada espelhada quando é o caso */
let FLIP=false;
function prj(x,y,z){const d=Math.max(2,y+CAM.D0),s=VIEW.F/d;return{x:VIEW.W/2+(x-CAM.x)*(FLIP?-s:s),y:VIEW.yh+(CAM.HC-(z||0))*s,s}}
function poly(x,pts,fill){x.beginPath();pts.forEach((p,i)=>{const q=prj(p[0],p[1],p[2]||0);i?x.lineTo(q.x,q.y):x.moveTo(q.x,q.y)});x.closePath();x.fillStyle=fill;x.fill()}
function seg(x,a,b,c,d,z1,z2){const p=prj(a,b,z1||0),q=prj(c,d,z2||0);x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}
function arc(x,cx,cy,r,a0,a1,n){x.beginPath();for(let i=0;i<=n;i++){const a=lerp(a0,a1,i/n),p=prj(cx+Math.cos(a)*r,cy+Math.sin(a)*r,0);i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y)}x.stroke()}
const CROWD=["#e9e4da","#2d3540","#9aa3ad","#d8b38a","#b9442f","#3a5f8a"];
function drawStadium(x,T,S){
  const {W,H}=VIEW;
  const sky=x.createLinearGradient(0,0,0,H*.5);sky.addColorStop(0,"#03060a");sky.addColorStop(1,"#0b1219");x.fillStyle=sky;x.fillRect(0,0,W,H);
  const kits=LIVE&&LIVE.st?[COLHEX[LIVE.st.ci[0]],COLHEX[LIVE.st.ci[1]]]:["#ff5d4f","#4fa9ff"];
  const pal=[kits[0],kits[0],kits[1],"#e9e4da","#2d3540","#9aa3ad","#d8b38a","#1c232b",kits[0],kits[1]];
  /* bancada superior (mais longe) */
  const upT=prj(CAM.x,PH+44,26).y,upB=prj(CAM.x,PH+28,13).y;
  const gu=x.createLinearGradient(0,upT,0,upB);gu.addColorStop(0,"#0a1016");gu.addColorStop(1,"#141c24");x.fillStyle=gu;x.fillRect(0,upT,W,upB-upT+1);
  const crowd=(j0,j1,y0,z0,dy,dz,heads)=>{for(let j=j1-1;j>=j0;j--){const yy=y0+j*dy,zz=z0+j*dz,s=prj(CAM.x,yy,zz).s,sp=.6,sz=Math.max(1,s*.38);
    const x0=Math.floor((CAM.x-(W/2)/s)/sp)-1,x1=Math.ceil((CAM.x+(W/2)/s)/sp)+1;
    for(let i=x0;i<=x1;i++){const h1=hash(i*131+j*977+(heads?5:9));if(h1<.06)continue;const q=prj(i*sp+(j%2)*sp*.5,yy,zz);
      const jump=S&&S.goalT!=null&&S.t-S.goalT<4&&hash(i*7+j*3)<.55?Math.abs(Math.sin(T*9+i))*sz*.9:(hash(i+j*7)<.2?Math.sin(T*4+i)*sz*.3:0);
      x.fillStyle=pal[Math.floor(hash(i*17+j*31)*pal.length)];x.fillRect(q.x,q.y-sz*1.25-jump,sz,sz*1.25);
      if(heads&&sz>1.6){x.fillStyle=hash(i*3+j)<.5?"#d9a679":"#8d5a3b";x.beginPath();x.arc(q.x+sz*.5,q.y-sz*1.45-jump,sz*.38,0,7);x.fill()}}}};
  crowd(0,8,PH+30,13.5,2.2,1.45,false);
  /* cobertura e sombra */
  x.fillStyle="#05080c";x.fillRect(0,0,W,Math.max(0,upT));
  const rf=x.createLinearGradient(0,upT,0,upT+H*.06);rf.addColorStop(0,"rgba(0,0,0,.65)");rf.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=rf;x.fillRect(0,upT,W,H*.06);
  /* varanda entre bancadas */
  const midT=prj(CAM.x,PH+27,12).y,midB=prj(CAM.x,PH+25,10.5).y;x.fillStyle="#0d151d";x.fillRect(0,midT,W,midB-midT+1);
  for(let i=-3;i<14;i++){const q=prj(i*12,PH+26,11.2);x.fillStyle=i%2?"rgba(255,209,102,.55)":"rgba(238,246,239,.5)";x.fillRect(q.x,q.y-1,q.s*5,Math.max(1,q.s*.35))}
  /* bancada inferior */
  const loT=prj(CAM.x,PH+24,10).y,loB=prj(CAM.x,PH+3.2,0).y;
  const gl=x.createLinearGradient(0,loT,0,loB);gl.addColorStop(0,"#111a22");gl.addColorStop(1,"#1d2731");x.fillStyle=gl;x.fillRect(0,loT,W,loB-loT+1);
  crowd(0,14,PH+5,1.3,1.42,.62,true);
  /* torres de iluminação */
  [-8,35,72,113].forEach(tx=>{const b=prj(tx,PH+46,0),t=prj(tx,PH+46,40);if(t.x<-60||t.x>W+60)return;
    x.strokeStyle="#1a222b";x.lineWidth=Math.max(1,b.s*.5);x.beginPath();x.moveTo(b.x,Math.max(b.y,upT));x.lineTo(t.x,t.y);x.stroke();
    const lw=t.s*7,lh=t.s*3;x.fillStyle="#fffbe6";x.fillRect(t.x-lw/2,t.y-lh,lw,lh);
    const gg=x.createRadialGradient(t.x,t.y-lh/2,0,t.x,t.y-lh/2,W*.28);gg.addColorStop(0,"rgba(255,248,220,.42)");gg.addColorStop(.25,"rgba(255,248,220,.12)");gg.addColorStop(1,"rgba(255,248,220,0)");
    x.fillStyle=gg;x.fillRect(t.x-W*.3,t.y-W*.3,W*.6,W*.6)});
  /* flashes de máquinas fotográficas depois de um golo */
  if(S&&S.goalT!=null&&S.t-S.goalT<3){for(let k=0;k<14;k++){const r=hash(Math.floor(T*14)*31+k);if(r<.5)continue;const q=prj(CAM.x+(hash(k*7+Math.floor(T*14))-.5)*60,PH+6+hash(k*13)*18,2+hash(k*5)*8);
    x.fillStyle="rgba(255,255,255,.85)";x.fillRect(q.x,q.y,Math.max(1,q.s*.12),Math.max(1,q.s*.12))}}
  /* painéis LED a correr */
  poly(x,[[-40,PH+3,0],[150,PH+3,0],[150,PH+3,1],[-40,PH+3,1]],"#06090d");
  const s0=prj(CAM.x,PH+3,0).s,off=(T*6)%28;x.font=`800 ${Math.max(6,Math.round(s0*.72))}px Barlow Condensed,system-ui`;x.textBaseline="middle";
  for(let i=-3;i<9;i++){const wx=i*28-off;const a=prj(wx,PH+3,1),b=prj(wx+14,PH+3,0);
    x.fillStyle=i%2?kits[0]:kits[1];x.globalAlpha=.22;x.fillRect(a.x,a.y,b.x-a.x,b.y-a.y);x.globalAlpha=1;
    const q=prj(wx+1,PH+3,.5);x.fillStyle=i%3===0?"#ffd166":"#eef6ef";x.fillText(["DUELO DE ONZES","BALNEÁRIO","GOLO!",LIVE&&LIVE.st?`${11-LIVE.st.T[0].off.size} vs ${11-LIVE.st.T[1].off.size}`:"11 vs 11"][((i%4)+4)%4],q.x,q.y);
    const q2=prj(wx+15,PH+3,.5);x.fillStyle="#9aa3ad";x.fillText("★ ★ ★",q2.x,q2.y)}
  x.textBaseline="alphabetic";
}
function drawTurf(x){
  poly(x,[[-40,-28],[150,-28],[150,PH+3],[-40,PH+3]],"#1a5f37");
  for(let i=0;i<20;i++){const a=i*5.25;poly(x,[[a,0],[a+5.25,0],[a+5.25,PH],[a,PH]],i%2?"#2c8f54":"#27844d")}
  x.globalAlpha=.07;for(let j=0;j<10;j++){if(j%2)continue;poly(x,[[0,j*6.8],[PW,j*6.8],[PW,(j+1)*6.8],[0,(j+1)*6.8]],"#000")}x.globalAlpha=1;
  const {W,H}=VIEW,c=prj(CAM.x,30,0);
  const lg=x.createRadialGradient(c.x,c.y,0,c.x,c.y,W*.75);lg.addColorStop(0,"rgba(255,250,215,.10)");lg.addColorStop(1,"rgba(0,0,0,.18)");x.fillStyle=lg;x.fillRect(0,prj(CAM.x,PH+3,0).y,W,H);
  const lines=w=>{x.lineWidth=w;
    seg(x,0,0,PW,0);seg(x,0,PH,PW,PH);seg(x,0,0,0,PH);seg(x,PW,0,PW,PH);seg(x,52.5,0,52.5,PH);
    arc(x,52.5,34,9.15,0,Math.PI*2,56);
    [[PW,-1],[0,1]].forEach(([gx,d])=>{const bx=gx+d*16.5,sx=gx+d*5.5;
      seg(x,gx,34-20.16,bx,34-20.16);seg(x,gx,34+20.16,bx,34+20.16);seg(x,bx,34-20.16,bx,34+20.16);
      seg(x,gx,34-9.16,sx,34-9.16);seg(x,gx,34+9.16,sx,34+9.16);seg(x,sx,34-9.16,sx,34+9.16);
      const a=Math.acos(5.5/9.15);if(d<0)arc(x,gx-11,34,9.15,Math.PI-a,Math.PI+a,18);else arc(x,gx+11,34,9.15,-a,a,18)})};
  x.lineCap="round";x.strokeStyle="rgba(255,255,255,.18)";lines(Math.max(2,VIEW.W*.008));x.strokeStyle="rgba(255,255,255,.88)";lines(Math.max(1,VIEW.W*.0032));
  [[PW-11,34],[11,34],[52.5,34]].forEach(([a,b])=>{const p=prj(a,b,0);x.fillStyle="#fff";x.beginPath();x.ellipse(p.x,p.y,p.s*.13,p.s*.05,0,0,7);x.fill()});
  [[0,0],[PW,0],[0,PH],[PW,PH]].forEach(([a,b])=>{const p=prj(a,b,0),q=prj(a,b,1.5);x.strokeStyle="#e8e8e8";x.lineWidth=Math.max(1,p.s*.05);x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke();
    x.fillStyle="#ffd166";x.beginPath();x.moveTo(q.x,q.y);x.lineTo(q.x+p.s*.5,q.y+p.s*.15);x.lineTo(q.x,q.y+p.s*.3);x.fill()});
}
function drawGoalAt(x,S,gx){
  const d=gx>50?1:-1,back=gx+d*(NETB-PW),rip=S&&S.ripple&&gx>50?S.ripple:null,ra=rip?Math.sin(clamp((S.t-rip.t0)/.55,0,1)*Math.PI):0;
  const bx=(y,z)=>{if(!ra)return back;const dd=Math.hypot(y-rip.y,(z-rip.z)*1.3);return back+(dd<1.6?(1-dd/1.6)*ra*.7*d:0)};
  x.strokeStyle="rgba(235,240,236,.38)";x.lineWidth=Math.max(.6,VIEW.W*.0018);
  for(let i=0;i<=12;i++){const y=lerp(GY0,GY1,i/12);x.beginPath();for(let k=0;k<=8;k++){const z=lerp(0,2.1,k/8),p=prj(bx(y,z),y,z);k?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y)}x.stroke();seg(x,gx,y,bx(y,2.1),y,GH,2.1)}
  for(let k=0;k<=6;k++){const z=lerp(0,2.1,k/6);x.beginPath();for(let i=0;i<=12;i++){const y=lerp(GY0,GY1,i/12),p=prj(bx(y,z),y,z);i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y)}x.stroke()}
  [GY0,GY1].forEach(y=>{for(let k=0;k<=4;k++){const z=lerp(0,GH,k/4);seg(x,gx,y,back,y,z,Math.min(z,2.1))}});
  const pw=Math.max(2,prj(gx,34,0).s*.12);x.lineCap="round";
  const post=(y0,z0,y1,z1)=>{const a=prj(gx,y0,z0),b=prj(gx,y1,z1);x.strokeStyle="#c9d1cc";x.lineWidth=pw+1.2;x.beginPath();x.moveTo(a.x+.8,a.y+.8);x.lineTo(b.x+.8,b.y+.8);x.stroke();x.strokeStyle="#fbfdfb";x.lineWidth=pw;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()};
  post(GY1,0,GY1,GH);post(GY0,0,GY0,GH);post(GY0,GH,GY1,GH);
}
/* boneco articulado, visto de lado (dir=1 olha para a direita) */
const SKINS=["#f3cfb0","#e2b48c","#c68d62","#9a6542","#6e452d","#4a2e1f"],HAIRS=["#1d140f","#3b2617","#0c0c0c","#6b4a26","#a8773e","#2a2a2a","#c9a46a"];
const BOOTS=["#111111","#111111","#111111","#f4f4f4","#ff6a2b","#2bd4ff","#ffe14d","#ff3d9a"];
function lum(hex){const n=parseInt(hex.slice(1),16);return((n>>16)*.299+((n>>8)&255)*.587+(n&255)*.114)/255}
function figure(x,p){
  const g=prj(p.x,p.y,0),h=1.85*g.s*1.12,col=p.kit||"#888";
  const hs=strHash(p.name||("n"+p.id)),skin=SKINS[hs%SKINS.length],hair=HAIRS[(hs>>>3)%HAIRS.length],hstyle=(hs>>>6)%7,beard=((hs>>>9)%5)===0,boot=BOOTS[(hs>>>12)%BOOTS.length];
  const KI=kitOf(p)||{},light=lum(col)>.6,shorts=p.gk?shade(col,-.5):KI.c2&&KI.pat!=="solid"?(lum(KI.c2)>.6?"#f2f4f3":"#1b2433"):light?"#1b2433":"#f2f4f3",sock=col,trim=KI.c2||(light?"#1b2433":"#ffffff");
  const dark=shade(col,-.32),hi=shade(col,.22),skinD=shade(skin,-.2);
  const pose=p.pose||"stand",ph=p.ph||0,sp=Math.min(1,(p.sp||0)/7);
  let L1=0,L2=0,K1=.08,K2=.08,A1=.12,A2=-.12,E1=.35,E2=.35,lean=0,bob=0,lift=(p.lift||0);
  const t=performance.now()/1000+(p.id||0);
  if(pose==="stand"){const br=Math.sin(t*2.2)*.02;A1=.1+br;A2=-.1-br;lean=.02}
  if(pose==="run"){const a=.35+.65*sp;L1=Math.sin(ph)*.85*a;L2=-L1;K1=(Math.max(0,-Math.cos(ph))*1.35+.15)*a;K2=(Math.max(0,Math.cos(ph))*1.35+.15)*a;
    A1=-L1*.9;A2=-L2*.9;E1=1.25;E2=1.25;lean=.2*a;bob=Math.abs(Math.sin(ph))*.035*a}
  if(pose==="kick"){const u=1-Math.max(0,p.poseT||0)/(p.poseD||.32);
    if(u<.35){const k=u/.35;L2=-.9*k;K2=.3+1.2*k;L1=.1;A1=.9*k;A2=-.7*k;lean=-.05}
    else if(u<.6){const k=(u-.35)/.25;L2=lerp(-.9,1.45,k);K2=lerp(1.5,.05,k);L1=.12;A1=.9;A2=-.7;lean=-.15*k}
    else{L2=1.35;K2=.1;L1=.15;K1=.2;A1=.8;A2=-.6;lean=-.15}}
  if(pose==="jump"){L1=.35;L2=-.15;K1=1.2;K2=1.5;A1=2.2;A2=1.7;E1=.5;E2=.5;lean=-.08;lift+=.35}
  if(pose==="celebrate"){const v=hs%3;
    if(v===0){L1=.25;L2=-.25;K1=.4;K2=.4;A1=2.9;A2=2.6;E1=.15;E2=.25;bob=Math.abs(Math.sin(t*6))*.05}
    else if(v===1){A1=1.57;A2=-1.57;E1=0;E2=0;L1=Math.sin(ph)*.5;L2=-L1;K1=.5;K2=.5;lean=.1}
    else{L1=1.55;L2=1.55;K1=2.6;K2=2.6;A1=2.6;A2=2.9;E1=.2;E2=.1;lean=-.35;bob=-.22}}
  if(pose==="dive"){L1=.2;L2=-.15;K1=.15;K2=.3;A1=2.95;A2=2.75;E1=0;E2=.1}
  if(pose==="slide"){L1=1.45;L2=1.0;K1=.1;K2=.65;A1=-.8;A2=1.1;lean=-.38;bob=-.12}
  if(pose==="wall"){A1=.55;A2=.5;E1=2.1;E2=2.0;L1=.05;L2=-.05}
  if(pose==="card"){A2=2.75;E2=.05;A1=.15;E1=.3;lean=-.05}
  if(pose==="board"){A1=2.2;E1=.4;A2=2.25;E2=.35;lean=0}
  if(pose==="sad"){A1=.05;A2=-.05;E1=.2;E2=.2;lean=.18}
  const X=g.x,Y=g.y-(lift+bob)*g.s;
  /* sombra */
  [-.75,.75,2.4].forEach(a=>{x.save();x.translate(g.x,g.y);x.scale(1,.28);x.rotate(a);x.fillStyle="rgba(0,0,0,.09)";x.beginPath();x.ellipse(0,-h*.32,h*.09,h*.38,0,0,7);x.fill();x.restore()});
  x.fillStyle=`rgba(0,0,0,${.34-Math.min(.2,lift*.1)})`;x.beginPath();x.ellipse(g.x,g.y,h*.21,h*.055,0,0,7);x.fill();
  x.save();x.translate(X,Y);x.scale((p.dir<0)!==FLIP?-1:1,1);if(p.rot)x.rotate(p.rot);x.lineCap="round";x.lineJoin="round";
  x.rotate(lean);
  const hipY=-h*.49,th=h*.25,shn=h*.25,ua=h*.155,fa=h*.145,lw=h*.085,ol=Math.max(1,h*.018);
  const OL="#0f1f16";
  const seg2=(a,b,w,c)=>{x.strokeStyle=c;x.lineWidth=w;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()};
  const outline=(pts,w)=>{x.strokeStyle=OL;x.lineWidth=w+ol*2;x.beginPath();pts.forEach((q,i)=>i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.stroke()};
  const leg=(off,a,k,front)=>{
    const H=[off,hipY],K=[H[0]+Math.sin(a)*th,H[1]+Math.cos(a)*th],F=[K[0]+Math.sin(a-k)*shn,K[1]+Math.cos(a-k)*shn];
    const sh=front?1:.78,sk=front?skin:skinD,fx=Math.cos(a-k)*h*.085,fy=-Math.sin(a-k)*h*.085*.4;
    outline([H,K,F],lw*1.05);outline([F,[F[0]+fx,F[1]+fy+h*.004]],lw*.82);
    seg2(H,[lerp(H[0],K[0],.55),lerp(H[1],K[1],.55)],lw*1.15,front?shorts:shade(shorts,-.25));
    seg2([lerp(H[0],K[0],.5),lerp(H[1],K[1],.5)],K,lw*.92,sk);
    seg2(K,[lerp(K[0],F[0],.18),lerp(K[1],F[1],.18)],lw*.88,sk);
    seg2([lerp(K[0],F[0],.15),lerp(K[1],F[1],.15)],F,lw*.9,front?sock:shade(sock,-.3));
    x.strokeStyle=front?trim:shade(trim,-.3);x.lineWidth=lw*.9;x.beginPath();const b0=[lerp(K[0],F[0],.18),lerp(K[1],F[1],.18)],b1=[lerp(K[0],F[0],.26),lerp(K[1],F[1],.26)];x.moveTo(b0[0],b0[1]);x.lineTo(b1[0],b1[1]);x.stroke();
    seg2(F,[F[0]+fx,F[1]+fy+h*.004],lw*.82,front?boot:shade(boot,-.3));
    return sh};
  const arm=(off,a,e,front)=>{
    const S=[off,-h*.775],El=[S[0]+Math.sin(a)*ua,S[1]+Math.cos(a)*ua],W=[El[0]+Math.sin(a+e)*fa,El[1]+Math.cos(a+e)*fa];
    const c=front?col:dark,sk=front?skin:skinD;outline([S,El,W],lw*.9);
    if(p.gk){seg2(S,El,lw*.95,c);seg2(El,W,lw*.85,c);x.fillStyle=front?"#f6f6f6":"#cfcfcf";x.beginPath();x.arc(W[0],W[1],h*.05,0,7);x.fill();return}
    seg2(S,[lerp(S[0],El[0],.55),lerp(S[1],El[1],.55)],lw*1.05,c);
    seg2([lerp(S[0],El[0],.5),lerp(S[1],El[1],.5)],El,lw*.8,sk);seg2(El,W,lw*.75,sk);
    if(front&&p.cardCol){x.fillStyle="#111";x.fillRect(W[0]-h*.052,W[1]-h*.19,h*.104,h*.15);x.fillStyle=p.cardCol;x.fillRect(W[0]-h*.045,W[1]-h*.183,h*.09,h*.136)}
    if(front&&KI.cap){x.strokeStyle="#ffd23f";x.lineWidth=lw*1.12;x.lineCap="butt";x.beginPath();x.moveTo(lerp(S[0],El[0],.34),lerp(S[1],El[1],.34));x.lineTo(lerp(S[0],El[0],.5),lerp(S[1],El[1],.5));x.stroke();x.lineCap="round"}
    x.fillStyle=sk;x.beginPath();x.arc(W[0],W[1],lw*.45,0,7);x.fill()};
  /* lado de trás primeiro */
  leg(-h*.025,L1,K1,false);arm(-h*.02,A1,E1,false);
  /* tronco */
  x.fillStyle=OL;x.beginPath();x.moveTo(-h*.125,-h*.82);x.quadraticCurveTo(h*.02,-h*.86,h*.135,-h*.81);x.lineTo(h*.11,hipY+h*.02);x.lineTo(-h*.105,hipY+h*.02);x.closePath();x.fill();
  const tg=x.createLinearGradient(-h*.13,0,h*.13,0);tg.addColorStop(0,dark);tg.addColorStop(.5,col);tg.addColorStop(1,hi);x.fillStyle=tg;
  x.beginPath();x.moveTo(-h*.115,-h*.81);x.quadraticCurveTo(h*.02,-h*.85,h*.125,-h*.8);x.quadraticCurveTo(h*.13,-h*.65,h*.1,hipY+h*.01);x.lineTo(-h*.095,hipY+h*.01);x.quadraticCurveTo(-h*.12,-h*.65,-h*.115,-h*.81);x.closePath();x.fill();
  if(!p.gk&&KI.pat&&KI.pat!=="solid"){
    x.save();x.beginPath();x.moveTo(-h*.115,-h*.81);x.quadraticCurveTo(h*.02,-h*.85,h*.125,-h*.8);x.quadraticCurveTo(h*.13,-h*.65,h*.1,hipY+h*.01);x.lineTo(-h*.095,hipY+h*.01);x.quadraticCurveTo(-h*.12,-h*.65,-h*.115,-h*.81);x.closePath();x.clip();
    x.fillStyle=KI.c2;x.globalAlpha=.92;const top=-h*.86,bot=hipY+h*.02,ht=bot-top;
    if(KI.pat==="stripes"){for(let i=-3;i<=3;i+=2)x.fillRect(i*h*.034-h*.017,top,h*.034,ht)}
    else if(KI.pat==="pin"){x.globalAlpha=.55;for(let i=-6;i<=6;i++)x.fillRect(i*h*.022,top,h*.006,ht)}
    else if(KI.pat==="hoops"){for(let i=0;i<4;i++)x.fillRect(-h*.2,top+ht*(.12+i*.24),h*.4,ht*.12)}
    else if(KI.pat==="sash"){x.beginPath();x.moveTo(-h*.16,top+ht*.05);x.lineTo(-h*.06,top-ht*.05);x.lineTo(h*.18,bot-ht*.05);x.lineTo(h*.08,bot+ht*.05);x.closePath();x.fill()}
    else if(KI.pat==="halves"){x.fillRect(-h*.2,top,h*.2,ht)}
    x.globalAlpha=1;x.restore()}
  else if(!p.gk){x.strokeStyle=trim;x.globalAlpha=.75;x.lineWidth=h*.018;x.beginPath();x.moveTo(-h*.02,-h*.8);x.lineTo(-h*.035,hipY+h*.02);x.stroke();x.globalAlpha=1}
  /* número nas costas/peito: escrito sempre direito, mesmo com o boneco virado */
  if(KI.num&&h>34){const sg=(p.dir<0)!==FLIP?-1:1,fs=Math.round(h*.135);x.save();x.translate(h*.005,-h*.66);x.rotate(-lean);x.scale(sg*(KI.num>9?.72:1),1);
    x.font=`900 ${fs}px Barlow Condensed,Arial Narrow,sans-serif`;x.textAlign="center";x.textBaseline="middle";
    const nc=p.gk?"#111":(KI.pat==="solid"||KI.pat==="pin")?trim:"#ffffff";x.lineJoin="round";x.lineWidth=Math.max(1.2,fs*.24);x.strokeStyle=lum(nc)>.5?"rgba(10,16,22,.85)":"rgba(255,255,255,.8)";x.strokeText(String(KI.num),0,0);x.fillStyle=nc;x.fillText(String(KI.num),0,0);x.restore()}
  /* calções */
  x.fillStyle=shorts;x.beginPath();x.moveTo(-h*.1,hipY-h*.01);x.lineTo(h*.1,hipY-h*.01);x.lineTo(h*.115,hipY+h*.075);x.lineTo(-h*.115,hipY+h*.075);x.closePath();x.fill();
  /* pescoço e cabeça */
  x.fillStyle=skin;x.fillRect(-h*.025,-h*.865,h*.055,h*.06);
  x.fillStyle=trim;x.fillRect(-h*.04,-h*.83,h*.09,h*.018);if(!p.gk){x.beginPath();x.moveTo(h*.03,-h*.83);x.lineTo(h*.075,-h*.83);x.lineTo(h*.05,-h*.775);x.closePath();x.fill()}
  const hx=h*.012,hy=-h*.925,hr=h*.074;
  x.fillStyle=OL;x.beginPath();x.ellipse(hx,hy,hr+ol,hr*1.12+ol,0,0,7);x.fill();
  x.fillStyle=skin;x.beginPath();x.ellipse(hx,hy,hr,hr*1.12,0,0,7);x.fill();
  x.beginPath();x.moveTo(hx+hr*.85,hy-hr*.1);x.lineTo(hx+hr*1.18,hy+hr*.15);x.lineTo(hx+hr*.85,hy+hr*.3);x.fill();
  if(beard){x.fillStyle=hair;x.globalAlpha=.85;x.beginPath();x.ellipse(hx+hr*.3,hy+hr*.6,hr*.62,hr*.42,0,0,Math.PI);x.fill();x.globalAlpha=1}
  x.fillStyle="#1a1a1a";x.beginPath();x.arc(hx+hr*.55,hy-hr*.12,Math.max(.6,hr*.1),0,7);x.fill();
  x.fillStyle=hair;
  if(hstyle===0){x.beginPath();x.ellipse(hx-hr*.08,hy-hr*.32,hr*1.02,hr*.78,0,Math.PI*.95,Math.PI*2.08);x.fill()}
  else if(hstyle===1){x.globalAlpha=.7;x.beginPath();x.ellipse(hx-hr*.05,hy-hr*.4,hr*.98,hr*.66,0,Math.PI,Math.PI*2);x.fill();x.globalAlpha=1}
  else if(hstyle===2){x.beginPath();x.arc(hx-hr*.2,hy-hr*.45,hr*1.12,0,7);x.fill();x.fillStyle=skin;x.beginPath();x.ellipse(hx+hr*.25,hy+hr*.15,hr*.78,hr*.85,0,0,7);x.fill()}
  else if(hstyle===3){x.beginPath();x.ellipse(hx-hr*.1,hy-hr*.3,hr*1.05,hr*.8,0,Math.PI*.9,Math.PI*2.05);x.fill();x.beginPath();x.arc(hx-hr*1.05,hy-hr*.55,hr*.42,0,7);x.fill()}
  else if(hstyle===4){x.globalAlpha=.25;x.beginPath();x.ellipse(hx-hr*.3,hy-hr*.2,hr*.6,hr*.55,0,Math.PI*.6,Math.PI*1.4);x.fill();x.globalAlpha=1}
  else if(hstyle===5){x.beginPath();x.moveTo(hx-hr*1.0,hy-hr*.1);for(let i=0;i<=6;i++){const a=Math.PI*(1+i/6);x.lineTo(hx+Math.cos(a)*hr*1.25,hy-hr*.25+Math.sin(a)*hr*1.15*(i%2?1.25:1))}x.lineTo(hx+hr*.9,hy-hr*.2);x.closePath();x.fill()}
  else{x.beginPath();x.ellipse(hx-hr*.15,hy-hr*.15,hr*1.08,hr*.95,0,Math.PI*.7,Math.PI*2.02);x.fill();x.fillRect(hx-hr*1.15,hy-hr*.2,hr*.55,hr*1.2)}
  /* lado da frente */
  leg(h*.025,L2,K2,true);arm(h*.02,A2,E2,true);
  x.restore();
  if(p.tag){const fs=Math.max(9,Math.round(VIEW.H*.05));x.font=`700 ${fs}px Barlow Condensed,system-ui`;x.textAlign="center";const tw=x.measureText(p.tag).width+10,ly=Y-h*1.14-fs;
    x.fillStyle="rgba(5,13,9,.82)";x.beginPath();x.roundRect?x.roundRect(X-tw/2,ly,tw,fs+5,4):x.rect(X-tw/2,ly,tw,fs+5);x.fill();x.fillStyle=p.tagCol||"#fff";x.fillText(p.tag,X,ly+fs);x.textAlign="left"}
}
function drawBall(x,S){
  const B=S.ball;if(B.hide)return;const g=prj(B.x,B.y,0),q=prj(B.x,B.y,B.z),r=Math.max(2.2,q.s*.2);
  x.fillStyle=`rgba(0,0,0,${clamp(.35-B.z*.04,.08,.35)})`;x.beginPath();x.ellipse(g.x,g.y,r*1.1,r*.4,0,0,7);x.fill();
  if(S.trail.length>1){x.lineCap="round";for(let i=1;i<S.trail.length;i++){const a=prj(...S.trail[i-1]),b=prj(...S.trail[i]);x.strokeStyle=`rgba(255,255,255,${i/S.trail.length*.35})`;x.lineWidth=r*1.2*i/S.trail.length;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
  const gr=x.createRadialGradient(q.x-r*.35,q.y-r*.35,r*.1,q.x,q.y,r);gr.addColorStop(0,"#fff");gr.addColorStop(1,"#b9c0bc");x.fillStyle=gr;x.beginPath();x.arc(q.x,q.y,r,0,7);x.fill();
  const sp=S.t*Math.hypot(B.vx||0,B.vy||0)*.9;x.fillStyle="#222";x.beginPath();x.arc(q.x+Math.cos(sp)*r*.35,q.y+Math.sin(sp)*r*.35,r*.3,0,7);x.fill();
}
function drawBoard(x,S){const b=S.board;if(!b)return;const q=prj(b.x,b.y,2.25),w=q.s*1.05,h=q.s*.95;
  x.fillStyle="#0b0b0b";x.fillRect(q.x-w/2,q.y-h,w,h);x.strokeStyle="#666";x.lineWidth=Math.max(1,q.s*.05);x.strokeRect(q.x-w/2,q.y-h,w,h);
  const blink=(S.t*3|0)%2===0||S.t>1.2;x.font=`900 ${Math.round(h*.4)}px Barlow Condensed,Arial Narrow,sans-serif`;x.textAlign="center";x.textBaseline="middle";
  if(blink){x.fillStyle="#ff3b30";x.fillText(String(b.out||"?"),q.x,q.y-h*.72);x.fillStyle="#34e36b";x.fillText(String(b.inn||"?"),q.x,q.y-h*.27)}
  x.textAlign="left";x.textBaseline="alphabetic"}
function drawFlag(x,S){if(!S.flag)return;const p=prj(S.flag.x,-1.2,0),q=prj(S.flag.x,-1.2,2.2);const up=clamp((S.t-S.flag.t0)/.3,0,1);
  x.strokeStyle="#222";x.lineWidth=2;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,lerp(p.y,q.y,up));x.stroke();x.fillStyle="#ffd84d";x.fillRect(q.x,lerp(p.y,q.y,up),p.s*.6,p.s*.4)}
function puff(S,x0,y0,n,sp,col){S.parts=S.parts||[];for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=sp*(.4+Math.random()*.8);S.parts.push({x:x0,y:y0,z:.05,vx:Math.cos(a)*v,vy:Math.sin(a)*v*.6,vz:1.2+Math.random()*2.2,l:.5+Math.random()*.4,c:col||(Math.random()<.5?"#3fae68":"#7ad18f")})}}
function stepParts(S){if(!S.parts)return;S.parts=S.parts.filter(q=>{q.vz-=9.8*DT;q.x+=q.vx*DT;q.y+=q.vy*DT;q.z=Math.max(0,q.z+q.vz*DT);q.l-=DT;return q.l>0})}
function drawParts(x,S){if(!S.parts)return;S.parts.forEach(q=>{const p=prj(q.x,q.y,q.z);x.globalAlpha=Math.min(1,q.l*2);x.fillStyle=q.c;x.fillRect(p.x,p.y,Math.max(1,p.s*.08),Math.max(1,p.s*.08))});x.globalAlpha=1}
/* gráfico "vista da baliza": para onde foi a bola e para onde foi o guarda-redes */
function drawHud(x,S,W,H){
  const h=S.hud,bw=W*.36,bh=bw*.56,X0=W-bw-W*.025,Y0=H*.05,gw=bw*.78,gh=gw*(GH/(GY1-GY0)),gx=X0+(bw-gw)/2,gy=Y0+bh-gh-bh*.12;
  if(!h.ball){const fs=Math.max(9,Math.round(bh*.13));x.save();x.fillStyle="rgba(5,13,9,.82)";x.beginPath();x.roundRect?x.roundRect(X0,Y0,bw,fs*2.6,8):x.rect(X0,Y0,bw,fs*2.6);x.fill();
    x.font=`700 ${fs}px Barlow Condensed,system-ui`;x.fillStyle="#fff";x.fillText(h.la||"",X0+8,Y0+fs*1.1);x.fillStyle="#ffd166";x.fillText(h.ld||"",X0+8,Y0+fs*2.2);x.restore();return}
  const ix=y=>gx+gw/2-(y-34)/(GY1-34)*(gw/2),iy=z=>gy+gh-z/GH*gh;
  x.save();
  const fs0=Math.max(9,Math.round(bh*.12));x.fillStyle="rgba(5,13,9,.82)";x.fillRect(X0,Y0+bh-2,bw,fs0*2.5);
  x.fillStyle="rgba(5,13,9,.82)";x.beginPath();x.roundRect?x.roundRect(X0,Y0,bw,bh,8):x.rect(X0,Y0,bw,bh);x.fill();
  x.fillStyle="rgba(46,140,82,.55)";x.fillRect(X0+4,gy+gh,bw-8,bh*.1);
  x.strokeStyle="rgba(255,255,255,.18)";x.lineWidth=1;for(let i=1;i<6;i++){x.beginPath();x.moveTo(gx+gw*i/6,gy);x.lineTo(gx+gw*i/6,gy+gh);x.stroke()}
  x.strokeStyle="#fff";x.lineWidth=Math.max(2,bw*.018);x.beginPath();x.moveTo(gx,gy+gh);x.lineTo(gx,gy);x.lineTo(gx+gw,gy);x.lineTo(gx+gw,gy+gh);x.stroke();
  const fs=Math.max(9,Math.round(bh*.13));x.font=`700 ${fs}px Barlow Condensed,system-ui`;x.textAlign="center";
  x.fillStyle="#9dbda8";x.fillText("ESQ.",gx+fs*.9,Y0+fs*1.1);x.fillText("DIR.",gx+gw-fs*.9,Y0+fs*1.1);
  if(h.k){const kx=ix(h.k.y),ky=iy(Math.max(.4,h.k.z)),cx0=gx+gw/2,cy0=gy+gh*.55;x.strokeStyle="#ffd166";x.lineWidth=Math.max(2,bw*.02);x.setLineDash([4,3]);
    x.beginPath();x.moveTo(cx0,cy0);x.lineTo(kx,ky);x.stroke();x.setLineDash([]);x.fillStyle="#ffd166";x.beginPath();x.arc(kx,ky,bw*.035,0,7);x.fill()}
  if(S.t>=h.ball.t0-.05){const bxp=ix(clamp(h.ball.y,GY0-1.8,GY1+1.8)),byp=iy(clamp(h.ball.z,0,GH+.9));x.fillStyle="#fff";x.strokeStyle="#111";x.lineWidth=1.5;x.beginPath();x.arc(bxp,byp,bw*.04,0,7);x.fill();x.stroke()}
  x.font=`700 ${Math.max(9,Math.round(bh*.12))}px Barlow Condensed,system-ui`;x.textAlign="left";x.fillStyle="#fff";
  if(h.la)x.fillText(h.la,X0+6,Y0+bh+fs*1.05);x.fillStyle="#ffd166";if(h.ld)x.fillText(h.ld,X0+6,Y0+bh+fs*2.15);
  x.restore();x.textAlign="left";
}
function drawS(S,x,W,H){
  if(S.front){FLIP=false;drawFront(S,x,W,H);return}
  FLIP=S.idle?!!(LIVE&&LIVE.minute>45):!!S.flip;
  CAM.x=S.cam.x+(S.cam.sx||0);CAM.y=S.cam.y;CAM.zoom=S.cam.z;setView(W,H);
  const shake=S.shake&&S.t-S.shake<.4?Math.sin(S.t*70)*W*.004:0;
  x.save();x.translate(shake,0);
  drawStadium(x,S.t,S);drawTurf(x);drawGoalAt(x,S,PW);drawGoalAt(x,S,0);
  const ents=S.pl.map(p=>({y:p.y,f:()=>figure(x,p)}));ents.push({y:S.ball.y-.01,f:()=>drawBall(x,S)});
  ents.sort((a,b)=>b.y-a.y).forEach(e=>e.f());
  drawParts(x,S);drawFlag(x,S);drawBoard(x,S);
  x.restore();

  const vg=x.createRadialGradient(W*.5,H*.55,H*.35,W*.5,H*.55,W*.8);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(1,"rgba(0,0,0,.3)");x.fillStyle=vg;x.fillRect(0,0,W,H);
}

/* ---- motor: passos fixos de 1/60 s (igual em todos os telemóveis) ---- */
const DT=1/60,GRAV=9.81;
function newS(seedKey){
  return{key:seedKey||"",t:0,pl:[],R:{},ball:{x:60,y:34,z:0,vx:0,vy:0,vz:0,mode:"free",owner:null,fly:null},beats:[],bi:-1,bEnd:0,frozen:false,done:false,doneT:0,tail:.9,
    cap:"",capBig:false,cam:{x:70,y:30,z:1},trail:[],ripple:null,flag:null,goalOpen:false,bx0:60,lineMin:0,shake:0,rng:seeded(seedKey||"x"),onFreeze:null};
}
function addP(S,role,team,name,x,y,o={}){
  const p={id:S.pl.length,role,team,name:name||"",x,y,vx:0,vy:0,tgt:null,hold:false,sprint:false,mx:o.mx||(team===0?7.8:7.2),boost:0,ph:S.rng()*6,pose:null,poseT:0,dir:team===0?1:-1,
    lift:0,rot:0,gk:!!o.gk,kit:o.kit||"#888",home:{x,y},zone:o.zone??y,mark:null,line:o.line||null,dive:null,sp:0,tag:null};
  S.pl.push(p);S.R[role]=p;return p;
}
function giveBall(S,p){const B=S.ball;B.mode="held";B.owner=p;B.fly=null;B.z=0}
function kickPose(p,pose,T){p.pose=pose||"kick";p.poseT=T||.32;p.poseD=p.poseT}
function fly(S,from,to,T,o={}){
  const B=S.ball;B.mode="fly";B.owner=null;B.fly={p0:{x:from.x,y:from.y,z:from.z||0},p1:{x:to.x,y:to.y,z:to.z||0},t0:S.t,T,peak:o.peak||0,curve:o.curve||0,ground:!!o.ground,arrive:o.arrive||null};
}
function stepBall(S){
  const B=S.ball;
  if(B.mode==="held"&&B.owner){const o=B.owner,sp=Math.hypot(o.vx,o.vy),ux=sp>.4?o.vx/sp:o.dir,uy=sp>.4?o.vy/sp:0;
    const k=((S.t*1.7+o.id*.37)%1),off=sp>1.5?.55+.85*k:.45;
    const fx=o.x+ux*off,fy=o.y+uy*off;B.vx=(fx-B.x)/DT*.35;B.vy=(fy-B.y)/DT*.35;B.x=lerp(B.x,fx,.35);B.y=lerp(B.y,fy,.35);B.z=0;return}
  if(B.mode==="fly"&&B.fly){const f=B.fly,u=Math.min(1,(S.t-f.t0)/f.T),uu=f.ground?1-Math.pow(1-u,1.6):u;
    const nx=lerp(f.p0.x,f.p1.x,uu),ny=lerp(f.p0.y,f.p1.y,uu)+f.curve*Math.sin(Math.PI*u),nz=Math.max(0,lerp(f.p0.z,f.p1.z,uu)+4*f.peak*u*(1-u));
    B.vx=(nx-B.x)/DT;B.vy=(ny-B.y)/DT;B.vz=(nz-B.z)/DT;B.x=nx;B.y=ny;B.z=nz;
    if(u>=1){B.mode="free";B.fly=null;if(f.ground){B.vx*=.4;B.vy*=.4}const cb=f.arrive;cb&&cb(S)}
    return}
  if(B.mode==="free"){
    B.vz-=GRAV*DT;B.x+=B.vx*DT;B.y+=B.vy*DT;B.z+=B.vz*DT;
    if(B.z<=0){B.z=0;if(B.vz<-1.5)B.vz=-B.vz*.5;else B.vz=0}
    if(B.z===0){const sp=Math.hypot(B.vx,B.vy);if(sp>0){const n=Math.max(0,sp-4.5*DT)/sp;B.vx*=n;B.vy*=n}}
    if(S.goalOpen&&B.x>NETB-.25){B.x=NETB-.25;B.vx=-Math.abs(B.vx)*.08;B.vy*=.3;B.vz=Math.min(B.vz,0)}
  }
}
function aiTarget(S,p){
  const B=S.ball,car=B.mode==="held"?B.owner:null;
  if(p.gk){if(p.team===1){const dist=Math.hypot(PW-B.x,34-B.y);return{x:PW-.7-clamp((dist-8)*.1,0,2.5),y:34+clamp((B.y-34)*.28,-3.2,3.2)}}return{x:4,y:34}}
  if(p.team===1){
    if(car&&car.team===0&&S.presser===p)return{x:car.x+1.6,y:car.y+(34-car.y)*.1};
    const line=clamp(Math.max(B.x+(car?4:6),S.lineMin),62,101.5);
    if(p.line==="back"){const m=p.mark;let yy=p.zone,xx=line;if(m){yy=lerp(p.zone,m.y,.62);xx=Math.max(line,Math.min(m.x+1.4,103.2))}return{x:Math.min(xx,103.2),y:yy}}
    if(p.line==="mark"&&p.mark){const m=p.mark;return{x:Math.min(m.x+1.3,103.8),y:m.y+.35}}
    if(p.line==="wall"||p.line==="mark")return{x:p.home.x,y:p.home.y};
    return{x:line-7.5,y:lerp(p.zone,B.y,.4)};
  }
  const sh=clamp(B.x-S.bx0,-10,40)*.85;return{x:Math.min(p.home.x+sh,99.5),y:p.home.y+Math.sin(S.t*.7+p.id)*1.1};
}
function stepPlayers(S){
  const B=S.ball,car=B.mode==="held"?B.owner:null;
  if(car&&car.team===0){let best=null,bd=14;S.pl.forEach(p=>{if(p.team!==1||p.gk||p.hold||p.line==="wall")return;const d=Math.hypot(p.x-car.x,p.y-car.y);if(d<bd){bd=d;best=p}});S.presser=best}else S.presser=null;
  S.pl.forEach(p=>{
    if(p.pose&&p.pose!==p._lp){if(p.pose==="kick")puff(S,p.x+p.dir*.3,p.y,6,2);else if(p.pose==="slide")puff(S,p.x,p.y,12,3.5)}p._lp=p.pose;
    if(p.poseT>0){p.poseT-=DT;if(p.poseT<=0)p.pose=null}
    if(p.dive){const d=p.dive,u=clamp((S.t-d.t0)/d.T,0,1),e=1-Math.pow(1-u,2);
      p.x=lerp(d.fx,d.tx,e);p.y=lerp(d.fy,d.ty,e);p.lift=Math.sin(Math.min(1,u*1.15)*Math.PI*.5)*d.tz*(u<1?1:.0)+(u>=1?0:0);
      p.rot=d.side*e*(d.low?1.45:1.25);p.pose=d.jump?"jump":"dive";if(d.jump){p.rot=0;p.lift=Math.sin(u*Math.PI)*d.tz}
      if(u>=1&&!d.jump){p.lift=0;p.rot=d.side*1.5;if(!d.landed){d.landed=1;puff(S,p.x,p.y,10,2.6)}}
      p.vx=p.vy=0;p.sp=0;return}
    const t=p.tgt||aiTarget(S,p),dx=t.x-p.x,dy=t.y-p.y,dist=Math.hypot(dx,dy);
    const mx=p.boost||p.mx*(p.sprint||p.team===1&&car?1:.72);
    const want=Math.min(mx,dist*2.2),wx=dist>.01?dx/dist*want:0,wy=dist>.01?dy/dist*want:0;
    const A=9*DT;let ax=wx-p.vx,ay=wy-p.vy;const al=Math.hypot(ax,ay);if(al>A){ax*=A/al;ay*=A/al}
    p.vx+=ax;p.vy+=ay;p.x+=p.vx*DT;p.y+=p.vy*DT;p.sp=Math.hypot(p.vx,p.vy);p.ph+=p.sp*DT*2.3;
    if(Math.abs(p.vx)>.5)p.dir=Math.sign(p.vx);else if(!p.gk){p.dir=B.x>=p.x?1:-1}else p.dir=-1;
    if(!p.pose||p.poseT<=0){if(p.celeb)p.pose=p.sp<2?"celebrate":"run";else p.pose=p.sp>.5?"run":"stand"}
  });
}
function stepCam(S){
  const B=S.ball,half=(VIEW.W/2)/(VIEW.F/(Math.max(2,B.y+CAM.D0)));
  const lead=B.mode==="held"?4:2;let tx=B.x+lead;if(S.camHold){tx=S.camHold.x}tx=Math.min(tx,PW+5-half*.6);tx=Math.max(tx,half*.6-4);
  const shot=B.mode==="fly"&&B.fly&&B.fly.p1.x>=PW-1.2&&!S.goalT;
  const k=S.t<.05?1:shot?.09:.055;
  S.cam.vx=lerp(S.cam.vx||0,(tx-S.cam.x)*k,.35);S.cam.x+=S.cam.vx;
  S.cam.y=lerp(S.cam.y,S.camHold?S.camHold.y:clamp(B.y,17,52),S.t<.05?1:.04);
  let zt=B.x>86?1.28:B.x>76?1.12:1;if(shot)zt=1.42;if(S.goalT!=null&&S.t-S.goalT<1.2)zt=1.5;if(S.zoomLock)zt=S.zoomLock;
  S.cam.z=lerp(S.cam.z,zt,shot?.06:.03);
  S.cam.sx=Math.sin(S.t*.9)*.12+Math.sin(S.t*2.3)*.04;
}
function advanceBeats(S){
  while(!S.frozen&&!S.done&&S.t>=S.bEnd-1e-9){
    S.bi++;const b=S.beats[S.bi];
    if(!b){S.done=true;S.doneT=S.t;break}
    if(b.freeze){S.frozen=true;S.bEnd=S.t;const f=S.onFreeze;S.onFreeze=null;if(f)setTimeout(f,0);break}
    b.start&&b.start(S);S.bEnd=S.t+(b.dur||0);
  }
}
function snapS(S){const B=S.ball;return{t:S.t,cam:{...S.cam},b:{x:B.x,y:B.y,z:B.z,vx:B.vx,vy:B.vy,hide:B.hide},
  pl:S.pl.map(p=>({x:p.x,y:p.y,pose:p.pose,ph:p.ph,sp:p.sp,dir:p.dir,rot:p.rot,lift:p.lift,poseT:p.poseT,poseD:p.poseD,tag:p.tag,tagCol:p.tagCol,dive:!!p.dive,celeb:p.celeb}))}}
function stepS(S){
  advanceBeats(S);
  stepPlayers(S);stepBall(S);stepParts(S);
  if(S.rec&&!S.front){S.snaps=S.snaps||[];S.snaps.push(snapS(S));if(S.snaps.length>420)S.snaps.shift()}
  S.pl.forEach(p=>{if(p.tagT>0)p.tagT-=DT;p.tag=(S.ball.owner===p&&p.team===0&&S.ball.mode==="held")||p.tagT>0||p.celeb?ln(p.name):null;p.tagCol=p.team===0?"#fff":"#ffd166"});
  const B=S.ball;S.trail.push([B.x,B.y,B.z]);if(S.trail.length>7||Math.hypot(B.vx,B.vy)<9&&S.trail.length>1)S.trail.shift();
  S.t+=DT;
}
function continueS(S,beats){S.beats.push(...beats);S.frozen=false;S.bEnd=S.t}
function fastForward(S,limit){let n=0;while(!S.frozen&&!S.done&&n++<(limit||2400))stepS(S)}

/* ---- ações (beats) ---- */
const BT={
  cap:(t,big)=>({dur:0,start:S=>{S.cap=t;S.capBig=!!big}}),
  wait:T=>({dur:T}),
  run:(r,to,sprint)=>({dur:0,start:S=>{const p=S.R[r];if(!p)return;p.tgt={x:to.x,y:to.y};p.hold=true;p.sprint=sprint!==false;p.boost=0}}),
  free:r=>({dur:0,start:S=>{const p=S.R[r];if(p){p.tgt=null;p.hold=false;p.boost=0}}}),
  give:r=>({dur:0,start:S=>giveBall(S,S.R[r])}),
  place:(r,at)=>({dur:0,start:S=>{const p=S.R[r];p.x=at.x;p.y=at.y;p.tgt={...at};p.hold=true}}),
  fn:f=>({dur:0,start:f}),
  drib:(r,to,T)=>({dur:T,start:S=>{const p=S.R[r];if(S.ball.owner!==p)giveBall(S,p);p.tgt={x:to.x,y:to.y};p.hold=true;p.sprint=true;p.boost=clamp(Math.hypot(to.x-p.x,to.y-p.y)/T*1.25,2.5,9)}}),
  pass:(a,b,o)=>({dur:o.T,start:S=>{const A=S.R[a],R=S.R[b];kickPose(A);const at=o.at;R.tgt={x:at.x,y:at.y};R.hold=true;R.sprint=true;
    R.boost=clamp(Math.hypot(at.x-R.x,at.y-R.y)/o.T*1.2,2.5,9.5);A.boost=0;
    fly(S,{x:S.ball.x,y:S.ball.y,z:0},{x:at.x-(o.lead||0),y:at.y,z:o.z||0},o.T,{peak:o.peak||0,ground:!o.peak,curve:o.curve||0,arrive:S=>{if(!o.noControl)giveBall(S,R)}})}}),
  shot:(r,o)=>({dur:(o.T||.8)+(o.after??(o.kind==="goal"?2.1:1.2)),start:S=>shoot(S,S.R[r],o)}),
  pose:(r,pose,T)=>({dur:0,start:S=>{const p=S.R[r];if(p){p.pose=pose;p.poseT=T||.5}}}),
  dive:(r,to,T,o={})=>({dur:0,start:S=>keeperDive(S,S.R[r],to,T,o)}),
  freeze:()=>({freeze:true}),
};
function keeperDive(S,k,to,T,o={}){if(!k)return;if(S.hud&&k===S.R.gk&&to.x>=PW-2.2)S.hud.k={y:to.y,z:to.z||0};k.dive={t0:S.t,T,fx:k.x,fy:k.y,tx:to.x??k.x,ty:to.y,tz:to.z||0,side:to.y>k.y?-1:1,low:(to.z||0)<.6,jump:!!o.jump}}
/* remate com resultado já decidido: golo, defesa, poste, fora, cortado */
function shoot(S,p,o){
  const B=S.ball,K=S.R.gk,from={x:B.x,y:B.y,z:o.head?Math.max(1.7,B.z):B.z};
  kickPose(p,o.head?"jump":"kick",o.head?.45:.32);p.tagT=1.4;if(o.head){p.lift=0}
  S.cap=o.cap||S.cap;S.capBig=false;
  let to,kind=o.kind;const ay=o.y,az=o.z??.6;
  if(kind==="goal")to={x:PW+.15,y:ay,z:az};
  else if(kind==="save")to={x:PW-.9,y:ay,z:az};
  else if(kind==="post")to={x:PW-.05,y:ay>34?GY1-.07:GY0+.07,z:az};
  else if(kind==="bar")to={x:PW-.05,y:ay,z:GH-.05};
  else if(kind==="wide")to={x:PW+.2,y:o.wy??(ay>34?GY1+1.4:GY0-1.4),z:o.wz??az};
  else{const d=S.R[o.block];const m={x:lerp(from.x,PW,.3),y:lerp(from.y,ay,.3)};if(d){d.tgt={x:m.x+.4,y:m.y};d.hold=true;d.boost=9;d.pose="slide";d.poseT=.8}to={x:m.x,y:m.y,z:.4}}
  const dist=Math.hypot(to.x-from.x,to.y-from.y),T=o.T||clamp(dist/(o.chip?13:o.head?15:24),.32,1.3);
  if(K&&kind!=="block"&&!o.noKeeper){
    const lateT=T*(kind==="save"?.92:.85);
    if(o.chip)keeperDive(S,K,{x:Math.min(K.x,PW-1.2),y:K.y,z:1.1},T*.9,{jump:true});
    else if(kind==="save")keeperDive(S,K,{x:PW-.9,y:ay,z:az},lateT);
    else if(kind==="goal"){const wrong=o.wrong!=null?o.wrong:S.rng()<.35;const dy=wrong?(ay>34?-2.2:2.2):(ay>34?-1.3:1.3);keeperDive(S,K,{x:PW-.8,y:clamp(ay+dy,GY0-.5,GY1+.5),z:Math.max(.3,az*.7)},lateT)}
    else keeperDive(S,K,{x:PW-.8,y:clamp(lerp(K.y,ay,.75),GY0,GY1),z:.5},lateT);
  }
  if(S.hud&&kind!=="block")S.hud.ball={y:to.y,z:to.z,kind,t0:S.t+T};
  fly(S,from,to,T,{peak:o.peak||(o.chip?2.2:0),curve:o.curve||0,arrive:S=>outcome(S,o,p)});
}
function outcome(S,o,p){
  const B=S.ball,k=o.kind,side=B.y>34?1:-1,R=S.rng;
  if(k==="goal"){S.goalOpen=true;if(!o.offside)S.goalT=S.t;B.mode="free";B.vx=9;B.vy*=.15;B.vz=Math.min(1,B.vz);S.ripple={t0:S.t,y:B.y,z:B.z};S.shake=S.t;S.cap=o.goalCap||"GOLO!";S.capBig=true;
    if(!o.offside)celebrate(S,p);else{S.flag={x:o.flagX||88,t0:S.t+.5};S.beats.splice(S.bi+1,0,BT.wait(.8),BT.cap("FORA DE JOGO! Golo anulado",true))}}
  else if(k==="save"){if(o.hold){B.mode="held";B.owner=S.R.gk;S.R.gk.dive=null;S.R.gk.pose="stand"}else{B.mode="free";B.vx=-4.5;B.vy=side*(4+R()*3);B.vz=3.5;if(o.rebound){B.vx=-(o.rebound.v||7);B.vy=(o.rebound.y-B.y)*1.2;B.vz=1}}S.cap=o.saveCap||"DEFENDE!";S.capBig=true;if(S.R.gk)S.R.gk.tagT=1.5}
  else if(k==="post"){B.mode="free";B.vx=-8;B.vy=-side*3;B.vz=1.2;S.cap="AO POSTE!";S.capBig=true}
  else if(k==="bar"){B.mode="free";B.vx=-5;B.vy=0;B.vz=4;S.cap="NA BARRA!";S.capBig=true}
  else if(k==="wide"){B.mode="free";S.cap=o.wideCap||"PARA FORA!";S.capBig=true}
  else{B.mode="free";B.vx=-5;B.vy=(R()<.5?-1:1)*6;B.vz=4;S.cap=o.blockCap||"CORTADO!";S.capBig=true}
  if(k!=="goal")S.pl.forEach(q=>{if(q.team===0&&q!==p&&q.hold){q.tgt=null;q.hold=false}});
}
function celebrate(S,p){if(!p)return;p.celeb=true;p.hold=true;p.sprint=true;p.boost=6.5;p.tgt={x:clamp(p.x-6,80,99),y:p.y<34?2.5:PH-3};
  S.pl.filter(q=>q.team===0&&q!==p&&!q.gk).slice(0,3).forEach((q,i)=>{q.hold=true;q.boost=6;q.tgt={x:p.tgt.x-2-i*1.3,y:p.tgt.y+(p.tgt.y<34?1.5+i:-1.5-i)}});
  S.pl.filter(q=>q.team===1).forEach(q=>{q.hold=true;q.boost=2;q.tgt={x:q.x-1,y:q.y}})}

/* ---- jogadas: cada uma monta os jogadores e devolve a sequência de ações ---- */
const ln=n=>lastName(n);
function sceneCtx(t,fin,ast){
  const st=LIVE.st,o=1-t,A=onPitch(st.T[t]),D=onPitch(st.T[o]),used=new Set([fin,ast].filter(Boolean));
  const namer=(list,u)=>prefs=>{for(const pos of prefs){const p=list.find(x=>x.p===pos&&!u.has(x.n));if(p){u.add(p.n);return p.n}}const p=list.find(x=>x.p!=="GR"&&!u.has(x.n));if(p){u.add(p.n);return p.n}return""};
  const kA=COLHEX[st.ci[t]],kD=COLHEX[st.ci[o]];
  const gkK=["#c8f04a","#1f2630","#f2f2f2","#ff7ac8"].find(c=>c!==kA&&c!==kD&&!(c==="#c8f04a"&&(kA==="#7fe0a8"||kD==="#7fe0a8")));
  const gk=(D.find(p=>p.p==="GR")||{n:"Guarda-redes"}).n;
  return{t,kA,kD,gkK,gk,fin:fin||namer(A,used)(["AVA","MED"]),ast:ast||null,an:namer(A,used),dn:namer(D,new Set([gk]))};
}
function addA(S,c,role,name,x,y,o){return addP(S,role,0,name,x,y,{kit:c.kA,...(o||{})})}
function defense(S,c,lineX,o={}){
  const ys=o.ys||[13,26.5,41.5,55];
  ys.forEach((y,i)=>addP(S,"d"+(i+1),1,c.dn(["DEF","MED"]),lineX+S.rng()*1.2,y,{kit:c.kD,line:"back",zone:y,mx:o.mx}));
  if(!o.noMid)(o.mids||[24,44]).forEach((y,i)=>addP(S,"dm"+(i+1),1,c.dn(["MED","DEF","AVA"]),(o.midX??lineX-8),y,{kit:c.kD,line:"mid",zone:y,mx:o.mx}));
  addP(S,"gk",1,c.gk,PW-1,34,{gk:true,kit:c.gkK,mx:6.5});
}
function marks(S){const att=S.pl.filter(p=>p.team===0&&!p.gk),taken=new Set();
  S.pl.filter(p=>p.team===1&&(p.line==="back"||p.line==="mark")).sort((a,b)=>b.x-a.x).forEach(d=>{let best=null,bd=1e9;att.forEach(a=>{if(taken.has(a))return;const dd=Math.hypot(a.x-d.x,(a.y-d.y)*1.4);if(dd<bd&&a.x>d.x-22){bd=dd;best=a}});if(best&&bd<16){d.mark=best;taken.add(best)}})}
function startBall(S,x,y){Object.assign(S.ball,{x,y,z:0,vx:0,vy:0,vz:0,mode:"free",owner:null});S.bx0=x;S.cam.x=x+6;S.cam.y=y}
/* pontaria a partir do resultado */
function aimFor(S,kind,o={}){
  const r=S.rng,far=o.side!=null?o.side>0:r()<.5,y=far?GY1-.45-r()*.9:GY0+.45+r()*.9,z=o.low?.15+r()*.3:o.high?1.6+r()*.6:r()<.55?.2+r()*.5:1.2+r()*1;
  const out={kind,y,z};
  if(kind==="wide"){if(r()<.35&&!o.low){out.wy=lerp(GY0,GY1,r());out.wz=2.9+r()*1.2}else{out.wy=far?GY1+.6+r()*2:GY0-.6-r()*2;out.wz=z}}
  if(kind==="miss")out.kind="wide";
  return out;
}
const SHOTCAP=n=>[`${ln(n)} remata…`,`Remate de ${ln(n)}!`,`${ln(n)} atira à baliza!`];
function shotBeat(S,role,name,kind,o={}){const a=aimFor(S,kind,o);return BT.shot(role,{...a,...o,kind:a.kind,cap:o.cap||SHOTCAP(name)[Math.floor(S.rng()*3)]})}

const PAT={
  /* troca de bola até à área */
  build(S,c,k,o){
    defense(S,c,84);const r=S.rng,wing=r()<.5;
    const m1=addA(S,c,"m1",c.an(["MED","DEF"]),62,30),m2=addA(S,c,"m2",wing?c.an(["MED"]):(c.ast||c.an(["MED"])),70,44),f=addA(S,c,"fin",c.fin,86,37);
    addA(S,c,"s2",c.an(["AVA","MED"]),88,25);const w1=addA(S,c,"w1",wing?(c.ast||c.an(["AVA","MED"])):c.an(["AVA","MED"]),81,8);addA(S,c,"w2",c.an(["AVA","MED","DEF"]),83,61);
    startBall(S,63,30);marks(S);
    const b=[BT.give("m1"),BT.cap(`${ln(m1.name)} conduz a meio-campo…`),BT.drib("m1",{x:66.5,y:31},.9),BT.pass("m1","m2",{at:{x:73,y:41},T:.85}),BT.cap(`${ln(m2.name)} procura espaço…`),BT.drib("m2",{x:78,y:39.5},.8)];
    if(wing)b.push(BT.pass("m2","w1",{at:{x:87,y:9},T:1}),BT.cap(`${ln(w1.name)} pela ala…`),BT.drib("w1",{x:94,y:12.5},.85),BT.run("fin",{x:96.5,y:31.5}),BT.cap("Passe atrasado…"),BT.pass("w1","fin",{at:{x:96.5,y:32},T:.6}));
    else b.push(BT.run("fin",{x:94.5,y:34.5}),BT.cap("Passe para a área…"),BT.pass("m2","fin",{at:{x:95,y:34.5},T:.8}));
    b.push(shotBeat(S,"fin",f.name,k,o));return b;
  },
  /* tabelinha à entrada da área */
  onetwo(S,c,k,o){
    defense(S,c,86);const f=addA(S,c,"fin",c.fin,78,35),s2=addA(S,c,"s2",c.ast||c.an(["AVA","MED"]),86.5,29);
    addA(S,c,"m1",c.an(["MED"]),70,45);addA(S,c,"w1",c.an(["AVA","MED"]),84,60);addA(S,c,"w2",c.an(["AVA","MED","DEF"]),83,9);
    startBall(S,78.5,35);marks(S);
    return[BT.give("fin"),BT.cap(`${ln(f.name)} avança…`),BT.drib("fin",{x:81.5,y:35},.8),BT.pass("fin","s2",{at:{x:87,y:30},T:.55}),BT.run("fin",{x:93,y:34}),BT.cap("Tabelinha!"),BT.wait(.2),
      BT.pass("s2","fin",{at:{x:94,y:33.8},T:.6}),shotBeat(S,"fin",f.name,k,{...o,cap:`${ln(f.name)} de primeira!`})];
  },
  /* pela ala e cruzamento (cabeça ou de primeira) */
  wing(S,c,k,o){
    defense(S,c,84);const low=o.low??S.rng()<.4;
    const m1=addA(S,c,"m1",c.an(["MED","DEF"]),67,30),w=addA(S,c,"w",c.ast||c.an(["AVA","MED"]),78,7),f=addA(S,c,"fin",c.fin,88,34);addA(S,c,"s2",c.an(["AVA","MED"]),88.5,41);addA(S,c,"m2",c.an(["MED"]),74,48);
    startBall(S,67.5,30);marks(S);
    const spot=low?{x:98.5,y:33}:{x:99.3,y:S.rng()<.5?32:37.5};
    return[BT.give("m1"),BT.cap(`${ln(m1.name)} abre o jogo…`),BT.drib("m1",{x:70.5,y:28.5},.7),BT.pass("m1","w",{at:{x:83,y:5.5},T:1.05,peak:2.4}),BT.cap(`${ln(w.name)} pela ala…`),
      BT.drib("w",{x:96,y:5},1.5),BT.run("fin",spot),BT.run("s2",{x:97.5,y:spot.y>34?31:39}),BT.cap(low?"Cruzamento rasteiro!":"Cruzamento!"),
      BT.pass("w","fin",{at:spot,T:low?.6:.95,peak:low?0:2.3,z:low?.15:1.95,noControl:true}),
      shotBeat(S,"fin",f.name,k,{...o,head:!low,cap:low?`${ln(f.name)} de primeira!`:`${ln(f.name)} de cabeça!`,low:!low?false:undefined})];
  },
  /* passe a rasgar, isolado */
  through(S,c,k,o){
    defense(S,c,86.5);const as=addA(S,c,"as",c.ast||c.an(["MED"]),70,33),f=addA(S,c,"fin",c.fin,85.5,38);addA(S,c,"s2",c.an(["AVA","MED"]),84,24);addA(S,c,"m1",c.an(["MED"]),65,46);addA(S,c,"w",c.an(["AVA","MED"]),80,58);
    startBall(S,70.5,33);marks(S);
    const b=[BT.give("as"),BT.cap(`${ln(as.name)} levanta a cabeça…`),BT.drib("as",{x:73,y:34},.7),BT.run("fin",{x:97,y:36.5}),BT.wait(.15),BT.cap("Passe a rasgar!"),
      BT.pass("as","fin",{at:{x:96,y:36.5},T:1.1}),BT.fn(S=>{const f=S.R.fin;S.pl.filter(p=>p.team===1&&!p.gk).forEach((d,i)=>{d.hold=true;d.boost=6;d.tgt={x:Math.min(d.x+6,f.tgt?f.tgt.x-3-i*1.2:d.x+4),y:lerp(d.y,f.y,.25)}})}),BT.cap(`${ln(f.name)} isolado…`),BT.drib("fin",{x:98.8,y:35.6},.45)];
    if(o.offside)S.offsideX=86.5;
    b.push(shotBeat(S,"fin",f.name,k,{...o,chip:o.chip,cap:o.chip?`${ln(f.name)} pica a bola…`:`${ln(f.name)} remata…`}));return b;
  },
  /* drible e remate */
  dribble(S,c,k,o){
    defense(S,c,86);const f=addA(S,c,"fin",c.fin,79,30);addA(S,c,"s2",c.an(["AVA","MED"]),88,39);addA(S,c,"m1",c.an(["MED"]),70,40);addA(S,c,"w",c.an(["AVA","MED"]),83,60);
    startBall(S,79.5,30);marks(S);
    return[BT.give("fin"),BT.cap(`${ln(f.name)} parte para cima…`),BT.drib("fin",{x:84.5,y:30.5},.8),
      BT.fn(S=>{const d=S.pl.filter(p=>p.team===1&&!p.gk).sort((a,b)=>Math.hypot(a.x-85.5,a.y-31)-Math.hypot(b.x-85.5,b.y-31))[0];if(d){d.tgt={x:85.6,y:30.6};d.hold=true;d.boost=7;d.pose="slide";d.poseT=.9}}),
      BT.drib("fin",{x:88,y:34.5},.55),BT.cap("Deixa o defesa no chão!"),BT.drib("fin",{x:92,y:35.2},.5),shotBeat(S,"fin",f.name,k,o)];
  },
  /* remate de longe */
  long(S,c,k,o){
    defense(S,c,86);const m1=addA(S,c,"m1",c.ast||c.an(["MED","DEF"]),65,41),f=addA(S,c,"fin",c.fin,76,35);addA(S,c,"s2",c.an(["AVA"]),88,30);addA(S,c,"w",c.an(["AVA","MED"]),86,57);addA(S,c,"w2",c.an(["AVA","MED"]),85,10);
    startBall(S,65.5,41);marks(S);const cv=(S.rng()<.5?-1:1)*.9;
    return[BT.give("m1"),BT.cap(`${ln(m1.name)} com a bola…`),BT.drib("m1",{x:68,y:40},.6),BT.pass("m1","fin",{at:{x:78.5,y:35},T:.8}),BT.cap(`${ln(f.name)} prepara o remate…`),
      BT.drib("fin",{x:80,y:34.8},.5),shotBeat(S,"fin",f.name,k,{...o,peak:.7,curve:cv,cap:"Remate de longe!"})];
  },
  /* contra-ataque */
  counter(S,c,k,o){
    defense(S,c,57,{mx:6.6,midX:52});const cr=addA(S,c,"car",c.ast||c.an(["MED","AVA"]),44,32,{mx:8.4}),f=addA(S,c,"fin",c.fin,47,45,{mx:8.6});addA(S,c,"s2",c.an(["AVA","MED"]),46,20,{mx:8.2});
    startBall(S,44.5,32);marks(S);
    return[BT.give("car"),BT.cap("Contra-ataque!"),BT.drib("car",{x:60,y:33},1.5),BT.run("fin",{x:79,y:43}),BT.run("s2",{x:77,y:22}),BT.cap(`${ln(cr.name)} lança o ataque…`),
      BT.drib("car",{x:73,y:34},1.3),BT.pass("car","fin",{at:{x:87,y:40.5},T:.9}),BT.cap(`${ln(f.name)} na cara do golo…`),BT.drib("fin",{x:90,y:39},.35),shotBeat(S,"fin",f.name,k,o)];
  },
  /* remate defendido e recarga */
  rebound(S,c,k,o){
    defense(S,c,86);const m1=addA(S,c,"m1",c.ast||c.an(["MED"]),74,41),s2=addA(S,c,"s2",c.an(["AVA","MED"]),86,29),f=addA(S,c,"fin",c.fin,88,37);addA(S,c,"w",c.an(["AVA","MED"]),84,58);
    startBall(S,74.5,41);marks(S);const ry=33+S.rng()*2;
    return[BT.give("m1"),BT.cap(`${ln(m1.name)} serve…`),BT.drib("m1",{x:77,y:40},.6),BT.pass("m1","s2",{at:{x:89,y:30.5},T:.85}),BT.run("fin",{x:94,y:35.5}),
      BT.shot("s2",{kind:"save",y:GY0+.8,z:.4,cap:`${ln(s2.name)} remata…`,saveCap:"Defende… e há recarga!",after:.15}),BT.run("fin",{x:97.2,y:ry}),
      BT.fn(S=>{fly(S,{x:S.ball.x,y:S.ball.y,z:S.ball.z},{x:97,y:ry,z:0},.5,{peak:.4,arrive:S=>giveBall(S,S.R.fin)})}),BT.wait(.5),
      shotBeat(S,"fin",f.name,k,{...o,low:true,cap:`${ln(f.name)} na recarga!`})];
  },
  /* canto */
  corner(S,c,k,o){
    const sp=o.spot||(S.rng()<.5?{x:99.6,y:31.3}:{x:98.3,y:38.6});
    const tk=addA(S,c,"tk",c.ast||c.an(["MED","AVA"]),104.4,-.9),f=addA(S,c,"fin",c.fin,93.5,sp.y>34?37:31);
    const others=[[92.5,35],[95.5,40],[96,28]].map(([x,y],i)=>addA(S,c,"a"+i,c.an(["DEF","AVA","MED"]),x,y));addA(S,c,"m1",c.an(["MED"]),86,34);
    [[f,"df"]].concat(others.map((p,i)=>[p,"dk"+i])).forEach(([p,r])=>{const d=addP(S,r,1,c.dn(["DEF","MED"]),p.x+1.6,p.y+.3,{kit:c.kD,line:"mark"});d.mark=p});
    addP(S,"dz1",1,c.dn(["MED","DEF"]),99.5,33,{kit:c.kD,line:"wall"});addP(S,"dz2",1,c.dn(["MED","AVA"]),88,30,{kit:c.kD,line:"wall"});
    addP(S,"gk",1,c.gk,PW-.8,34.6,{gk:true,kit:c.gkK,mx:6.5});
    startBall(S,104.6,.5);S.cam.x=95;S.cam.y=28;S.camHold={x:95,y:28};
    const lead=[BT.cap(`Canto. ${ln(tk.name)} vai bater…`),BT.wait(1.1)];
    const fin=[BT.run("fin",sp),BT.fn(S=>{const d=S.R.df,q=o.dspot||sp;if(d){d.hold=true;d.tgt={x:q.x+.9,y:q.y+.3};d.boost=7}}),BT.wait(.25),BT.fn(S=>{kickPose(S.R.tk);S.camHold=null}),BT.cap("Cruzamento para a área…"),
      BT.pass("tk","fin",{at:sp,T:1.15,peak:3.3,z:1.95,noControl:true}),
      o.kind==="block"?BT.fn(S=>{const d=S.R.df;d.pose="jump";d.poseT=.6;const B=S.ball;B.mode="free";B.vx=-6;B.vy=-5;B.vz=5;S.cap=o.blockCap||"Afasta de cabeça!";S.capBig=true}):
      shotBeat(S,"fin",f.name,k,{...o,head:true,cap:`${ln(f.name)} de cabeça!`,low:o.kind==="goal"?undefined:undefined})];
    if(o.kind==="block")fin.push(BT.wait(1.1));
    return o.split?{lead,fin}:lead.concat(fin);
  },
  /* livre direto */
  fk(S,c,k,o){
    const bx=83.5,by=o.by||28.5,f=addA(S,c,"fin",c.fin,bx-2.6,by-1.4);addA(S,c,"s2",c.an(["AVA","DEF"]),93,36);addA(S,c,"a3",c.an(["DEF","AVA"]),94,40);addA(S,c,"m1",c.an(["MED"]),86,44);
    const dx=PW-bx,dy=34-by,dl=Math.hypot(dx,dy),ux=dx/dl,uy=dy/dl,wx=bx+ux*9.15,wy=by+uy*9.15;
    for(let i=0;i<4;i++)addP(S,"w"+i,1,c.dn(["DEF","MED","AVA"]),wx-uy*(i-1.5)*.62,wy+ux*(i-1.5)*.62,{kit:c.kD,line:"wall"}).pose="wall";
    addP(S,"d1",1,c.dn(["DEF"]),95,37,{kit:c.kD,line:"mark"});addP(S,"d2",1,c.dn(["DEF","MED"]),95.5,41,{kit:c.kD,line:"mark"});
    addP(S,"gk",1,c.gk,PW-.7,35.2,{gk:true,kit:c.gkK,mx:6.5});
    startBall(S,bx,by);marks(S);S.cam.x=bx+8;
    const lead=[BT.cap(`Livre perigoso. ${ln(f.name)} prepara-se…`),BT.wait(1.2)];
    const over=o.over??S.rng()<.6;
    const fin=[BT.run("fin",{x:bx-.6,y:by-.3},false),BT.wait(.55),
      BT.fn(S=>S.pl.filter(p=>p.line==="wall").forEach(p=>{if(o.dd?o.dd==="B":(over||o.kind==="block")){p.pose="jump";p.poseT=.7}}))];
    if(o.dd==="P")fin.unshift(BT.fn(S=>{const g=S.R.gk;g.hold=true;g.tgt={x:PW-.6,y:31.6};g.boost=4}));
    if(o.kind==="block")fin.push(BT.fn(S=>{kickPose(S.R.fin);S.cap="Remate à barreira…";fly(S,{x:bx,y:by,z:0},{x:wx,y:wy,z:1.6},.32,{arrive:S=>{const B=S.ball;B.mode="free";B.vx=-7;B.vy=4;B.vz=3;S.cap=o.blockCap||"A barreira trava!";S.capBig=true}})}),BT.wait(2));
    else fin.push(shotBeat(S,"fin",f.name,k,{...o,side:over?1:-1,high:over,low:!over,peak:over?1.8:.2,curve:over?-.9:.3,T:over?1.05:.8,hold:o.kind==="save"&&!over,cap:over?"Por cima da barreira…":"Ao poste do guarda-redes…"}));
    return o.split?{lead,fin}:lead.concat(fin);
  },
  /* penálti */
  pen(S,c,k,o){
    const f=addA(S,c,"fin",c.fin,91.5,33.2);
    [[87.5,24],[87.6,44],[86.8,30]].forEach(([x,y],i)=>addA(S,c,"a"+i,c.an(["AVA","MED"]),x,y));
    [[87.4,26],[87.2,41],[86.6,36.5],[87.8,20]].forEach(([x,y],i)=>addP(S,"d"+i,1,c.dn(["DEF","MED"]),x,y,{kit:c.kD,line:"wall"}));
    addP(S,"gk",1,c.gk,PW-.1,34,{gk:true,kit:c.gkK,mx:6.5});
    startBall(S,PW-11,34);S.cam.x=96;S.cam.y=30;
    S.pl.forEach(p=>{p.tgt={x:p.x,y:p.y};p.hold=true});
    const lead=[BT.cap(`Penálti! ${ln(f.name)} pega na bola…`),BT.wait(1.3)];
    const fin=[BT.run("fin",{x:93.4,y:33.7},false),BT.wait(.75),...(o.finish||[shotBeat(S,"fin",f.name,k,o)])];
    return o.split?{lead,fin}:lead.concat(fin);
  },
};
/* escolhe a jogada para um acontecimento do relato */
function patternFor(e,S){
  const tx=e.tx||"",how=e.how,r=S.rng,pick=a=>{const fresh=a.filter(x=>!LIVE.usedPat.has(x));const l=fresh.length?fresh:a;return l[Math.floor(r()*l.length)]};
  if(e.k==="pen")return"pen";
  if(e.goal){
    if(/Contra-ataque/.test(tx))return"counter";
    if(/livre direto/.test(tx))return"fk";
    if(how==="cab")return pick(["corner","wing"]);
    if(how==="recarga")return"rebound";
    if(how==="longe")return"long";
    if(how==="drib")return"dribble";
    if(how==="iso"||how==="chapeu")return"through";
    if(how==="prim")return pick(["onetwo","wing"]);
    if(how==="chega")return"build";
    if(/remate cruzado/.test(tx))return pick(["build","onetwo"]);
    return pick(["wing","build"]);
  }
  return pick(["build","onetwo","wing","through","dribble","long","counter","corner"]);
}
function eventPlay(e,idx){
  const st=LIVE.st,S=newS(LIVE.key+":ev"+idx+":"+e.m);
  if(e.k==="pen"){const c=sceneCtx(e.t,e.s,null),Z=["TE","TD","M","BE","BD"],h=hash(strHash(LIVE.key+":pz"+idx)),a=Z[Math.floor(h*5)];
    let d=Z[Math.floor(hash(strHash(LIVE.key+":pd"+idx))*5)];if(e.goal&&d===a)d=a==="M"?"BE":"M";if(!e.goal)d=a;
    Object.assign(S,{front:true,fp:{fin:c.fin,gk:c.gk,kA:c.kA,gkK:c.gkK,num:kitNum(e.t,c.fin),fk:null}});S.ball.hide=true;S.R.fin={name:c.fin};S.R.gk={name:c.gk};
    S.beats=[BT.cap(`Penálti! ${ln(c.fin)} pega na bola…`),BT.wait(.9),...frontKick(S,a,d,e.goal?"goal":"save",c.fin,kitNum(e.t,c.fin))];S.title=`${e.m}' · ${st.N[e.t]}`;return S}
  const c=sceneCtx(e.t,e.s,e.a);let pat=patternFor(e,S);LIVE.usedPat.add(pat);
  const kind=e.k==="goal"?"goal":e.k==="pen"?(e.goal?"goal":"save"):e.k==="save"?"save":e.k==="post"?(S.rng()<.3?"bar":"post"):"wide";
  const o={kind};
  if(pat==="through"&&e.how==="chapeu")o.chip=true;
  if(kind==="wide"&&(pat==="through"||pat==="build")&&S.rng()<.35){o.kind="goal";o.offside=true;o.flagX=86.5;e.tx=`${e.s} marca, mas o fiscal de linha levanta a bandeira: fora de jogo!`}
  const beats=PAT[pat](S,c,o.kind,o);
  S.beats=beats;S.title=`${e.m}' · ${st.N[e.t]}`;S.flip=(e.t===1)!==(+e.m>45);return S;
}
/* ---- penáltis vistos de frente: câmara atrás de quem bate, a olhar para a baliza ---- */
const PZXY={TE:[-2.85,1.92],TD:[2.85,1.92],M:[0,1.05],BE:[-2.7,.28],BD:[2.7,.28],E:[-2.7,.6],D:[2.7,.6]};
const FG={zGoal:22,zSpot:11,camH:1.6};
function fprj(X,Y,Z,W,H){const f=W*.74*FG.zGoal/7.32,hz=H*.36,z=Math.max(.6,Z);return{x:W/2+X*f/z,y:hz+(FG.camH-Y)*f/z,s:f/z}}
function frontPenScene(seed,o){
  /* o: {fin, gk, kA, gkK, num, t} */
  const S=newS(seed);S.front=true;S.ball.hide=true;S.fp={...o,fk:null};S.R.fin={name:o.fin};S.R.gk={name:o.gk};S.camHold={x:60,y:30};
  return S;
}
function drawFront(S,x,W,H){
  const P=S.fp,t=S.t,now=performance.now()/1000,F=(X,Y,Z)=>fprj(X,Y,Z,W,H);
  /* bancada */
  const g0=x.createLinearGradient(0,0,0,H*.5);g0.addColorStop(0,"#0e1620");g0.addColorStop(1,"#1d2a36");x.fillStyle=g0;x.fillRect(0,0,W,H);
  const cols=["#e9e4da","#2d3540","#9aa3ad","#d8b38a",COLHEX[LIVE.st.ci[0]],COLHEX[LIVE.st.ci[1]],"#b9442f","#3a5f8a"];
  const ZG=FG.zGoal,rowTop=F(0,10,ZG+12).y,rowBot=F(0,1.2,ZG+5.6).y;
  for(let r=0;r<16;r++){const yy=lerp(rowTop,rowBot,r/16),sz=lerp(2,3.6,r/16);for(let i=0;i<W/sz/1.2;i++){const h=hash(r*977+i*31);x.fillStyle=cols[Math.floor(h*cols.length)];
    const bob=S.goalT!=null&&t-S.goalT<2.5?Math.sin(now*14+i)*1.2:0;x.fillRect(i*sz*1.2+(r%2)*sz*.6,yy+bob,sz,sz*1.15)}}
  /* placards de publicidade */
  const b1=F(-30,.9,ZG+5.2),b2=F(30,0,ZG+5.2);x.fillStyle="#0b1830";x.fillRect(0,b1.y,W,b2.y-b1.y);
  x.font=`800 ${Math.max(6,Math.round((b2.y-b1.y)*.5))}px Barlow Condensed,system-ui`;x.textBaseline="middle";
  const ads=["DUELO DE ONZES","BALNEÁRIO","GOLO!","PENÁLTI"];x.globalAlpha=.32;for(let i=0;i<8;i++){x.fillStyle=i%2?"#ffd166":"#eef6ef";x.fillText(ads[i%4],i*W/4-((now*12)%(W/4)),(b1.y+b2.y)/2)}
  x.globalAlpha=1;x.textBaseline="alphabetic";
  /* relvado com faixas */
  const gTop=b2.y;for(let i=0;i<22;i++){const za=ZG+5.2-i*1.5,zb=za-1.5,ya=F(0,0,za).y,yb=F(0,0,Math.max(.6,zb)).y;x.fillStyle=i%2?"#2f8a4a":"#34964f";x.fillRect(0,ya,W,yb-ya+1)}
  x.fillStyle="#34964f";x.fillRect(0,F(0,0,.6).y,W,H);
  /* linhas */
  x.strokeStyle="rgba(255,255,255,.85)";x.lineWidth=Math.max(1,F(0,0,14).s*.06);
  const ln2=(a,b,c,d)=>{const p=F(a[0],0,a[1]),q=F(b[0],0,b[1]);x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()};
  ln2([-30,ZG],[30,ZG]);ln2([-9.16,ZG],[-9.16,ZG-5.5]);ln2([9.16,ZG],[9.16,ZG-5.5]);ln2([-9.16,ZG-5.5],[9.16,ZG-5.5]);
  ln2([-20.16,ZG],[-20.16,ZG-16.5]);ln2([20.16,ZG],[20.16,ZG-16.5]);ln2([-20.16,ZG-16.5],[20.16,ZG-16.5]);
  {x.beginPath();for(let i=0;i<=20;i++){const a=-.93+1.86*i/20,p=F(Math.sin(a)*9.15,0,FG.zSpot-Math.cos(a)*9.15);if(p.y<F(0,0,ZG-16.5).y)continue;i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y)}x.stroke()}
  const sp=F(0,0,FG.zSpot);x.fillStyle="#fff";x.beginPath();x.ellipse(sp.x,sp.y,sp.s*.12,sp.s*.05,0,0,7);x.fill();
  /* rede e baliza */
  const G=(X,Y,Z)=>F(X,Y,Z),zb=FG.zGoal+2;
  const bulge=S.netHit&&t-S.netHit.t<.6?Math.sin((t-S.netHit.t)/.6*Math.PI)*.9:0;
  x.strokeStyle="rgba(240,244,240,.38)";x.lineWidth=1;
  for(let i=0;i<=18;i++){const X=-3.66+7.32*i/18,a=G(X,2.44,FG.zGoal),b=G(X,1.2,zb+(S.netHit&&Math.abs(X-S.netHit.X)<1.5?bulge:0)),c=G(X,0,zb);x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.lineTo(c.x,c.y);x.stroke()}
  for(let j=0;j<=8;j++){const Y=2.44*j/8;x.beginPath();for(let i=0;i<=18;i++){const X=-3.66+7.32*i/18,bz=zb-(Y>1.2?(Y-1.2)/1.24*2:0)+(S.netHit&&Math.abs(X-S.netHit.X)<1.5?bulge*(1-Math.abs(Y-S.netHit.Y)/2.4):0),p=G(X,Y,bz);i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y)}x.stroke()}
  const post=(X)=>{const a=G(X,0,FG.zGoal),b=G(X,2.44,FG.zGoal);x.strokeStyle="#fbfdfb";x.lineWidth=Math.max(2,a.s*.12);x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()};
  post(-3.66);post(3.66);{const a=G(-3.66,2.44,FG.zGoal),b=G(3.66,2.44,FG.zGoal);x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}
  /* alvos (só enquanto se escolhe) */
  if(S.frozen&&S.showZones){Object.entries(PZXY).forEach(([k,[X,Y]])=>{if(k.length<2&&k!=="M")return;const p=G(X,Y,FG.zGoal),r=p.s*.48;x.fillStyle="rgba(255,255,255,.14)";x.strokeStyle="rgba(255,255,255,.75)";x.lineWidth=2;x.beginPath();x.arc(p.x,p.y,r,0,7);x.fill();x.stroke()})}
  /* tempos */
  const fk=P.fk,tk=fk?t-fk.t0:-1,KICK=.6,FLY=.42;
  /* guarda-redes */
  let gx=Math.sin(now*1.7)*.25,gy=0,ang=0,lift=0,arms=0;
  if(fk&&tk>KICK-.12){const u=clamp((tk-KICK+.12)/.42,0,1),e=1-Math.pow(1-u,2),[DX,DY]=fk.kp;
    gx=lerp(gx,DX*.82,e);lift=DY>1.4?e*.95:DY<.6?e*.05:e*.35;ang=(DX===0?0:Math.sign(DX)*(DY>1.4?1.05:1.35))*e;arms=e;if(fk.k==="save"&&fk.a===fk.d)arms=1}
  else if(S.frozen||!fk){arms=.15+Math.sin(now*3)*.05}
  drawGKFront(x,G(gx,0,FG.zGoal-.4),ang,lift,arms,P.gkK);
  /* bola */
  let bx=0,by=.11,bz=FG.zSpot;
  if(fk&&tk>=KICK){const u=clamp((tk-KICK)/FLY,0,1),[TX,TY]=fk.bp,TZ=fk.bz;bx=lerp(0,TX,u);bz=lerp(FG.zSpot,TZ,u);by=lerp(.11,TY,u)+Math.sin(u*Math.PI)*(TY>1.4?.6:.25);
    if(u>=1){const v=tk-KICK-FLY;
      if(fk.k==="goal"){if(!S.netHit)S.netHit={t,X:TX,Y:TY};bz=TZ+Math.min(1.6,v*4);by=Math.max(.11,TY-v*3)}
      else if(fk.k==="save"){if(fk.a===fk.d){bx=TX;by=TY;bz=TZ}else{bx=TX+Math.sign(TX||1)*v*6;by=Math.max(.11,TY+v*2-v*v*9);bz=TZ-v*3}}
      else if(fk.k==="post"||fk.k==="bar"){bx=TX-Math.sign(TX||.1)*v*4;by=Math.max(.11,TY+(fk.k==="bar"?v*3:0)-v*v*8);bz=TZ-v*6}
      else{bz=TZ+v*8;by=TY+v*2}}}
  if(!(fk&&fk.k==="save"&&fk.a===fk.d&&tk>KICK+FLY)){const pb=F(bx,by,bz),pg=F(bx,0,bz),r=Math.max(2,pb.s*.12);
    x.fillStyle="rgba(0,0,0,.3)";x.beginPath();x.ellipse(pg.x,pg.y,r*1.1,r*.35,0,0,7);x.fill();
    const gr=x.createRadialGradient(pb.x-r*.35,pb.y-r*.35,r*.1,pb.x,pb.y,r);gr.addColorStop(0,"#fff");gr.addColorStop(1,"#b9c0bc");x.fillStyle=gr;x.beginPath();x.arc(pb.x,pb.y,r,0,7);x.fill();
    x.fillStyle="#222";x.beginPath();x.arc(pb.x+r*.2,pb.y-r*.1,r*.32,0,7);x.fill()}
  /* quem bate, de costas */
  let tx=-2.5,tz=FG.zSpot-1.5,kick=0;
  if(fk){const u=clamp(tk/KICK,0,1);tx=lerp(-2.5,-.38,u);tz=lerp(FG.zSpot-1.5,FG.zSpot-.4,u);kick=tk<KICK?Math.sin(u*Math.PI*3)*.3:clamp((tk-KICK)/.25,0,1)}
  drawTakerBack(x,F(tx,0,tz),P,kick,fk&&tk<KICK);
  if(S.goalT!=null&&t-S.goalT<1.2){x.fillStyle=`rgba(255,255,255,${.25*(1-(t-S.goalT)/1.2)})`;x.fillRect(0,0,W,H)}
  const vg=x.createRadialGradient(W*.5,H*.55,H*.35,W*.5,H*.55,W*.8);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(1,"rgba(0,0,0,.28)");x.fillStyle=vg;x.fillRect(0,0,W,H);
}
function drawGKFront(x,p,ang,lift,arms,col){
  const s=p.s,X=p.x,Y=p.y-lift*s,OL="#0f1f16";
  x.save();x.translate(X,Y-s*.95);x.rotate(ang);
  const limb=(a,b,w,c)=>{x.strokeStyle=OL;x.lineWidth=w+2;x.lineCap="round";x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke();x.strokeStyle=c;x.lineWidth=w;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()};
  const sk="#e2b48c",sh=shade(col,-.45);
  /* pernas */
  limb([-s*.12,0],[-s*.2-arms*s*.1,s*.92],s*.14,sh);limb([s*.12,0],[s*.2+arms*s*.1,s*.92],s*.14,sh);
  x.fillStyle="#111";[-1,1].forEach(k=>{x.beginPath();x.ellipse(k*(s*.2+arms*s*.1),s*.95,s*.09,s*.05,0,0,7);x.fill()});
  /* braços: abertos em espera, esticados no mergulho */
  const ua=lerp(.5,1.45,arms);[-1,1].forEach(k=>{const sx=k*s*.2,sy=-s*.55,ex=sx+k*Math.sin(ua)*s*.58,ey=sy-Math.cos(ua)*s*.58;limb([sx,sy],[ex,ey],s*.11,col);
    x.fillStyle="#f4f4f4";x.strokeStyle=OL;x.lineWidth=1.5;x.beginPath();x.arc(ex,ey,s*.085,0,7);x.fill();x.stroke()});
  /* tronco */
  x.fillStyle=OL;x.beginPath();x.roundRect?x.roundRect(-s*.24,-s*.62,s*.48,s*.66,s*.08):x.rect(-s*.24,-s*.62,s*.48,s*.66);x.fill();
  x.fillStyle=col;x.beginPath();x.roundRect?x.roundRect(-s*.22,-s*.6,s*.44,s*.62,s*.07):x.rect(-s*.22,-s*.6,s*.44,s*.62);x.fill();
  x.fillStyle=shade(col,-.2);x.fillRect(-s*.22,-s*.08,s*.44,s*.1);
  /* cabeça */
  x.fillStyle=sk;x.strokeStyle=OL;x.lineWidth=1.5;x.beginPath();x.arc(0,-s*.76,s*.13,0,7);x.fill();x.stroke();
  x.fillStyle="#2a1d14";x.beginPath();x.arc(0,-s*.8,s*.13,Math.PI*1.05,Math.PI*1.95);x.fill();
  x.restore();
}
function drawTakerBack(x,p,P,kick,running){
  const s=p.s,X=p.x,Y=p.y,col=P.kA,OL="#0f1f16",light=lum(col)>.6,shorts=light?"#1b2433":"#f2f4f3";
  const limb=(a,b,w,c)=>{x.strokeStyle=OL;x.lineWidth=w+2;x.lineCap="round";x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke();x.strokeStyle=c;x.lineWidth=w;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()};
  x.save();x.translate(X,Y);
  const hip=-s*.95,sk="#c68d62";
  /* pernas: a direita faz o remate */
  const kl=running?kick:0,kr=running?-kick:kick;
  limb([-s*.12,hip],[-s*.16,-s*.02+Math.max(0,kl)*-s*.25],s*.15,sk);
  limb([s*.12,hip],[s*.2,-s*.02-kr*s*.45],s*.15,sk);
  x.fillStyle=col;x.fillRect(-s*.24,-s*.3+Math.max(0,kl)*-s*.25,s*.16,s*.18);x.fillRect(s*.1,-s*.3-kr*s*.45,s*.16,s*.18);
  /* calções */
  x.fillStyle=OL;x.fillRect(-s*.27,hip-s*.04,s*.54,s*.32);x.fillStyle=shorts;x.fillRect(-s*.25,hip-s*.02,s*.5,s*.28);
  /* camisola de costas com número e nome */
  x.fillStyle=OL;x.beginPath();x.roundRect?x.roundRect(-s*.3,-s*1.62,s*.6,s*.72,s*.1):x.rect(-s*.3,-s*1.62,s*.6,s*.72);x.fill();
  const tg=x.createLinearGradient(-s*.3,0,s*.3,0);tg.addColorStop(0,shade(col,-.3));tg.addColorStop(.5,col);tg.addColorStop(1,shade(col,-.15));x.fillStyle=tg;
  x.beginPath();x.roundRect?x.roundRect(-s*.28,-s*1.6,s*.56,s*.68,s*.09):x.rect(-s*.28,-s*1.6,s*.56,s*.68);x.fill();
  const tc=light?"#1b2433":"#ffffff";x.fillStyle=tc;x.textAlign="center";x.textBaseline="middle";
  x.font=`800 ${Math.round(s*.1)}px Barlow Condensed,system-ui`;x.fillText(ln(P.fin).toUpperCase(),0,-s*1.47);
  if(P.num){x.font=`900 ${Math.round(s*.34)}px Barlow Condensed,system-ui`;x.fillText(String(P.num),0,-s*1.2)}
  x.textAlign="left";x.textBaseline="alphabetic";
  /* braços */
  const sw=running?Math.sin(kick*6)*.4:kick*.6;limb([-s*.28,-s*1.5],[-s*.42-sw*s*.2,-s*1.05],s*.12,col);limb([s*.28,-s*1.5],[s*.42+sw*s*.2,-s*1.05],s*.12,col);
  /* cabeça de trás */
  x.fillStyle=sk;x.strokeStyle=OL;x.lineWidth=2;x.beginPath();x.arc(0,-s*1.78,s*.16,0,7);x.fill();x.stroke();
  const hc=HAIRS[strHash(P.fin)%HAIRS.length];x.fillStyle=hc;x.beginPath();x.arc(0,-s*1.8,s*.155,Math.PI*.95,Math.PI*2.05);x.fill();x.fillRect(-s*.15,-s*1.8,s*.3,s*.1);
  x.restore();
}
/* alvos tocáveis por cima da TV */
function tvZones(onPick){
  const box=$("tvZones");box.innerHTML="";if(!onPick){box.hidden=true;if(SC.S&&SC.S.front){SC.S.showZones=false;drawNow(SC.S)}return}
  const c=$("scCv"),W=c.clientWidth||360,H=c.clientHeight||225;
  [["TE","Alto"],["TD","Alto"],["M","Meio"],["BE","Baixo"],["BD","Baixo"]].forEach(([k,l])=>{const [X,Y]=PZXY[k],p=fprj(X,Y,FG.zGoal,W,H),r=p.s*.5;
    const b=el("button","tvz",l);b.style.left=(p.x-r)+"px";b.style.top=(p.y-r)+"px";b.style.width=b.style.height=(2*r)+"px";b.onclick=e=>{e.stopPropagation();onPick(k)};box.append(b)});
  box.hidden=false;if(SC.S&&SC.S.front){SC.S.showZones=true;drawNow(SC.S)}
}

const kitNum=(t,n)=>{const st=LIVE.st;return st.kit&&st.kit[t]?st.kit[t].nums.get(n):null};
/* remate e mergulho na câmara de frente */
function frontKick(S,a,d,k,fin,num){
  const [AX,AY]=PZXY[a]||PZXY.M;let bp=[AX,AY];
  if(k==="post")bp=[AX===0?3.66:Math.sign(AX)*3.66,AY>1.4?1.9:.7];
  if(k==="bar")bp=[AX*.9,2.44];
  if(k==="wide")bp=AY>1.4?[AX*1.05,3.1]:[Math.sign(AX||1)*4.5,.5];
  let kp=PZXY[d]||PZXY.M;if(k==="save"&&a!==d)kp=[bp[0]*.95,bp[1]];
  const CAP={goal:"GOLO!",save:a===d?"DEFENDE!":"QUE DEFESA!",post:"AO POSTE!",bar:"NA BARRA!",wide:"PARA FORA!"};
  return[BT.fn(S=>{S.fp.fin=fin;if(num)S.fp.num=num;S.fp.fk={t0:S.t,a,d,k,bp,bz:FG.zGoal,kp};S.cap=`${ln(fin)} corre para a bola…`;S.capBig=false}),BT.wait(1.02),
    BT.fn(S=>{S.cap=CAP[k]||"";S.capBig=true;if(k==="goal")S.goalT=S.t}),BT.wait(1.7)];
}
/* cartões e substituições também aparecem na TV */
function cardPlay(e){
  const st=LIVE.st,S=newS(LIVE.key+":card"+e.m+":"+e.pl),t=e.t,col=COLHEX[st.ci[t]],oc=COLHEX[st.ci[1-t]];
  const yy=24+hash(strHash(e.pl))*16,xx=40+hash(strHash(e.pl+"x"))*25;
  const off=addP(S,"off",0,e.pl,xx,yy,{kit:col});off.dir=1;off.pose="stand";off.tagT=99;off.hold=true;off.tgt={x:xx,y:yy};
  const ref=addP(S,"ref",1,"",xx+1.6,yy+.4,{kit:"#1a1a1a"});ref.dir=-1;ref.hold=true;ref.tgt={x:xx+1.6,y:yy+.4};
  const fo=addP(S,"vit",1,"",xx+3.6,yy+1.6,{kit:oc});fo.dir=-1;fo.pose="sad";fo.poseT=99;fo.hold=true;fo.tgt={x:xx+3.6,y:yy+1.6};
  [[xx-5,yy-6,0],[xx+7,yy-4,1],[xx-3,yy+7,1]].forEach(([a,b,j],i)=>{const q=addP(S,"o"+i,j,"",a,b,{kit:j?oc:col});q.dir=j?-1:1;q.hold=true;q.tgt={x:a+(j?-2:2),y:b}});
  S.ball.hide=true;S.cam={x:xx+1.6,y:yy-2,z:2.7};S.camHold={x:xx+1.6,y:yy-2};S.zoomLock=2.7;
  const red=e.card==="r",second=red&&/Segundo amarelo/.test(e.tx);
  const lbl=red?(second?`Segundo amarelo para ${ln(e.pl)}… e vermelho!`:`Vermelho direto para ${ln(e.pl)}!`):any([`Amarelo para ${ln(e.pl)}.`,`O árbitro mostra o amarelo a ${ln(e.pl)}.`,`${ln(e.pl)} vê o cartão amarelo.`]);
  S.beats=[BT.wait(.35),BT.fn(S=>{ref.pose="card";ref.poseT=99;ref.cardCol=second?"#ffd23f":red?"#e5251b":"#ffd23f";S.cap=lbl;S.capBig=red&&!second})];
  if(second)S.beats.push(BT.wait(.9),BT.fn(S=>{ref.cardCol="#e5251b";S.cap=`Vermelho! ${st.N[t]} fica com menos um.`;S.capBig=true}));
  S.beats.push(BT.wait(red?.6:1.3));
  if(red)S.beats.push(BT.fn(S=>{off.pose=null;off.poseT=0;off.hold=true;off.tgt={x:xx-6,y:-1};off.boost=2.2;ref.pose=null;ref.poseT=0;ref.cardCol=null}),BT.wait(1.6));
  else S.beats.push(BT.fn(S=>{ref.pose=null;ref.poseT=0;ref.cardCol=null}),BT.wait(.4));
  S.title=`${e.m}' · ${st.N[t]}`;return S;
}
function subPlay(e){
  const st=LIVE.st,S=newS(LIVE.key+":sub"+e.m+":"+e.o),t=e.t,col=COLHEX[st.ci[t]],K=st.kit&&st.kit[t];
  const bx=52.5,by=-1.6;
  const of=addP(S,"of4",1,"",bx,by,{kit:"#1a1a1a"});of.dir=1;of.pose="board";of.poseT=99;of.hold=true;of.tgt={x:bx,y:by};
  const inn=addP(S,"in",0,e.i,bx-1.6,by+.4,{kit:col});inn.dir=1;inn.hold=true;inn.tgt={x:bx-1.6,y:by+.4};inn.tagT=99;
  const out=addP(S,"out",0,e.o,bx+9,by+9,{kit:col});out.dir=-1;out.hold=true;out.tgt={x:bx+1.4,y:by+.8};out.boost=2.4;out.tagT=0;
  S.board={x:bx+.25,y:by-.05,out:K&&K.nums.get(e.o)||"",inn:K&&K.nums.get(e.i)||""};
  S.ball.hide=true;S.cam={x:bx+1.5,y:by+4,z:2};S.camHold={x:bx+1.5,y:by+4};S.zoomLock=2;
  S.beats=[BT.cap(`Substituição em ${st.N[t]}`),BT.wait(1.3),BT.fn(S=>{out.tagT=99;inn.tagT=0;S.cap=`Sai ${ln(e.o)}…`}),BT.wait(1),
    BT.fn(S=>{inn.tgt={x:bx+4,y:by+6};inn.boost=3;inn.sprint=true;inn.tagT=99;S.cap=`…entra ${ln(e.i)}.`}),BT.wait(1.3)];
  S.title=`${e.m}' · ${st.N[t]}`;return S;
}
/* momentos com decisão: a jogada pára no instante decisivo */
function momentPlay(stop,k){
  const st=LIVE.st,S=newS(LIVE.key+":mom"+k),t=stop.t;S.flip=stop.so?false:(t===1)!==(+stop.m>45);
  const fin=stop.type==="ca"?stop.fw.n:stop.type==="fk"?stop.tk.n:stop.sh.n,ast=stop.type==="ca"?stop.sh.n:stop.type==="co"?stop.tk.n:null;
  const c=sceneCtx(t,fin,ast!==fin?ast:null);S.ctx=c;
  if(stop.type==="pen"){Object.assign(S,{front:true,fp:{fin:c.fin,gk:c.gk,kA:c.kA,gkK:c.gkK,num:kitNum(t,c.fin),fk:null}});S.ball.hide=true;S.R.fin={name:c.fin};S.R.gk={name:c.gk};
    S.beats=[BT.cap(stop.so?`${ln(c.fin)} pousa a bola na marca…`:`Penálti! ${ln(c.fin)} pega na bola…`),BT.wait(1.1)]}
  else if(stop.type==="fk"){S.beats=PAT.fk(S,c,"goal",{split:true}).lead}
  else if(stop.type==="co"){S.beats=PAT.corner(S,c,"goal",{split:true}).lead}
  else if(stop.type==="uu"){
    defense(S,c,86.5);const as=addA(S,c,"as",c.an(["MED"]),70,33),f=addA(S,c,"fin",c.fin,85.5,38);addA(S,c,"s2",c.an(["AVA","MED"]),84,24);addA(S,c,"m1",c.an(["MED"]),65,46);
    startBall(S,70.5,33);marks(S);
    S.beats=[BT.give("as"),BT.cap(`${ln(as.name)} procura a desmarcação…`),BT.drib("as",{x:73,y:34},.7),BT.run("fin",{x:94,y:36}),BT.wait(.15),BT.cap("Passe a rasgar!"),
      BT.pass("as","fin",{at:{x:93,y:36},T:1.1}),BT.fn(S=>{const f=S.R.fin;S.pl.filter(p=>p.team===1&&!p.gk).forEach((d,i)=>{d.hold=true;d.boost=6;d.tgt={x:Math.min(d.x+6,f.tgt?f.tgt.x-3-i*1.2:d.x+4),y:lerp(d.y,f.y,.25)}})}),BT.cap(`${ln(f.name)} fica sozinho com o guarda-redes!`),BT.drib("fin",{x:95.5,y:35.5},.55),BT.fn(S=>{S.R.fin.boost=1.2;S.R.fin.tgt={x:96,y:35.4}})];
  }else{
    defense(S,c,58,{mx:6.4,midX:50,ys:[30,44,20,54]});const cr=addA(S,c,"car",ast,44,32,{mx:8.4}),f=addA(S,c,"fin",fin,47,45,{mx:8.6});
    startBall(S,44.5,32);marks(S);
    S.beats=[BT.give("car"),BT.cap("Contra-ataque!"),BT.drib("car",{x:62,y:33},1.6),BT.run("fin",{x:81,y:42.5}),BT.cap(`${ln(cr.name)} arranca com espaço…`),BT.drib("car",{x:78,y:33},1.6),
      BT.fn(S=>{const d=S.R.d1;if(d){d.hold=true;d.tgt={x:86,y:37.5};d.boost=7}S.R.car.boost=1.5;S.R.car.tgt={x:79,y:33};S.R.fin.boost=1.5;S.R.fin.tgt={x:81.5,y:42}})];
  }
  S.beats.push(BT.cap("Decide!"),BT.freeze());S.title=stop.so?`Penáltis · ${st.N[t]}`:`${stop.m}' · ${st.N[t]}`;return S;
}
const SIDEW={E:"à esquerda",M:"ao meio",D:"à direita"};
/* zona do penálti: TE/TD ângulos, BE/BD rasteiros, M meio (valores antigos E/M/D também servem) */
const PZ=v=>({s:v==="M"?"M":v.slice(-1),h:v==="M"?"M":v.length>1?v[0]:"B"});
const PZW={TE:"para o ângulo esquerdo",TD:"para o ângulo direito",M:"ao meio",BE:"rasteiro à esquerda",BD:"rasteiro à direita",E:"à esquerda",D:"à direita"};
function momentFinish(S,stop,res,a,d){
  const c=S.ctx,k=res.kind,f="fin",fn=(S.R.fin||{}).name||"",same=a===d,r=S.rng,gkn=ln((S.R.gk||{}).name||"");
  const hud=(la,ld)=>BT.fn(S=>{S.hud={la,ld}});
  if(stop.type==="pen"&&S.front)return frontKick(S,a,d,k,fn||stop.sh.n,kitNum(stop.t,fn||stop.sh.n));
  if(stop.type==="pen"){
    const za=PZ(a),zd=PZ(d),Y={E:36.75,D:31.25,M:34},Zh={T:1.95,B:.3,M:1.05};
    let ay=Y[za.s],az=Zh[za.h];
    if(k==="post"){ay=za.s==="E"?37.62:za.s==="D"?30.38:34;az=za.h==="T"?2.1:.6}
    if(k==="bar"){az=2.44;ay=za.s==="M"?34:ay}
    if(k==="wide"){ay=za.s==="E"?38.4:za.s==="D"?29.6:34;az=za.h==="T"?2.9:.4}
    const ky=Y[zd.s],kz=zd.h==="T"?1.75:zd.h==="B"?.3:1;
    return[hud(`Bate ${PZW[a]||""}`,`GR defende ${(PZW[d]||"").replace("rasteiro","em baixo")}`),BT.dive("gk",{x:PW-.4,y:ky,z:kz},.5,{jump:zd.s==="M"}),
      BT.shot(f,{kind:k,noKeeper:true,y:ay,z:az,T:za.h==="T"?.46:.4,cap:`${ln(fn)} bate ${PZW[a]||""}…`,hold:k==="save"&&a===d,after:2.2})];
  }
  if(stop.type==="uu"){
    const LA={C:"Pica a bola",R:"Remate rasteiro",F:"Finta o GR"}[a],LD={C:"GR fica em pé",R:"GR atira-se ao chão",F:"GR sai aos pés"}[d];
    /* o que o guarda-redes escolheu acontece sempre antes do remate */
    const keeper=d==="F"?[BT.fn(S=>{const g=S.R.gk;g.hold=true;g.tgt={x:100,y:35.4};g.boost=6.5}),BT.wait(.35)]:
                 d==="R"?[BT.dive("gk",{x:PW-1.6,y:a==="R"&&k==="save"?32.4:34.6,z:.15},.35),BT.wait(.2)]:
                 [BT.fn(S=>{const g=S.R.gk;g.hold=true;g.tgt={x:g.x,y:g.y};g.boost=1})];
    if(a==="F"){
      if(k==="save")return[hud(LA,LD),...(d==="F"?[]:keeper),BT.drib(f,{x:99,y:38},.5),BT.dive("gk",{x:99.2,y:37.6,z:.2},.4),BT.wait(.35),BT.fn(S=>{giveBall(S,S.R.gk);S.cap="O guarda-redes fica com a bola!";S.capBig=true}),BT.wait(1.8)];
      return[hud(LA,LD),...keeper,BT.drib(f,{x:98.5,y:35.6},.3),BT.cap(`${ln(fn)} finta ${gkn}…`),
        ...(d==="F"?[BT.dive("gk",{x:98.8,y:35.3,z:.2},.35)]:[]),BT.drib(f,{x:100.8,y:39},.6),shotBeat(S,f,fn,k,{low:true,T:.55,cap:"Baliza aberta…",y:34.5,noKeeper:true})];
    }
    if(a==="C"){const save=k==="save";
      return[hud(LA,LD),...keeper,...(save&&d!=="R"?[BT.fn(S=>{const g=S.R.gk;keeperDive(S,g,{x:g.x,y:34.8,z:1.9},.7,{jump:true})})]:[]),
        shotBeat(S,f,fn,k,{chip:true,noKeeper:true,y:34.5+r(),z:k==="goal"?1:1.6,T:.9,hold:save,saveCap:"Agarra a bola!",cap:`${ln(fn)} pica a bola…`})];
    }
    const save=k==="save",ly=save&&d==="R"?32.4:r()<.5?31.2:36.8;
    return[hud(LA,LD),...keeper,...(d==="C"?[BT.fn(S=>{const g=S.R.gk;g.hold=true;g.boost=3;g.tgt={x:g.x,y:lerp(g.y,ly,.3)}})]:[]),
      shotBeat(S,f,fn,k,{low:true,noKeeper:true,y:ly,z:.2,T:.45,hold:false,cap:`${ln(fn)} remata rasteiro…`})];
  }
  if(stop.type==="ca"){
    const LA=a==="P"?"Passa":"Remata",LD=d==="P"?"Corta a linha de passe":"Fecha o remate";
    const def=BT.fn(S=>{const dd=S.R.d1;if(!dd)return;dd.hold=true;dd.boost=7;dd.tgt=d==="P"?{x:84.6,y:38.2}:{x:83.6,y:33.4}});
    if(a==="P"){
      if(k==="block")return[hud(LA,LD),def,BT.wait(.25),BT.fn(S=>{const dd=S.R.d1;dd.pose="slide";dd.poseT=.9}),BT.cap("Passe para o lado…"),
        BT.fn(S=>{kickPose(S.R.car);fly(S,{x:S.ball.x,y:S.ball.y,z:0},{x:84.4,y:38.4},.4,{ground:true,arrive:S=>{const B=S.ball;B.mode="free";B.vx=-5;B.vy=-6;S.cap="Cortado!";S.capBig=true}})}),BT.wait(2)];
      return[hud(LA,LD),def,BT.run(f,{x:89.5,y:40.5}),BT.cap(`Passe para ${ln(fn)}…`),BT.pass("car",f,{at:{x:89.5,y:40.5},T:.6}),shotBeat(S,f,fn,k,{T:.5})];
    }
    const sh=S.R.car;sh.name=res.sc?res.sc.n:sh.name;
    return[hud(LA,LD),def,BT.drib("car",{x:82,y:33.2},.3),shotBeat(S,"car",sh.name,k==="block"?"block":k,{block:"d1",blockCap:"Bloqueado!",cap:"Remata já!"})];
  }
  if(stop.type==="fk")return[hud(a==="B"?"Por cima da barreira":"Ao poste do GR",d==="B"?"A barreira salta":"GR cobre o poste"),...PAT_FIN(S,"fk",k,{over:a==="B",dd:d})];
  if(stop.type==="co"){const P1={x:99.6,y:31.3},P2={x:98.3,y:38.6};
    return[hud(a==="P"?"Ao 1.º poste":"Ao 2.º poste",d==="P"?"Marca o 1.º poste":"Marca o 2.º poste"),...PAT_FIN(S,"corner",k,{spot:a==="P"?P1:P2,dspot:d==="P"?P1:P2})]}
  return[];
}
/* reconstrói só a parte final de uma bola parada com o resultado certo */
function PAT_FIN(S,type,k,o){const T=newS("tmp");T.rng=S.rng;const res=PAT[type](T,S.ctx,k,{...o,kind:k,split:true});
  return res.fin.map(b=>b);}

/* ---- reprodução das jogadas na TV ---- */
const teamCols=j=>COLHEX[LIVE.st.ci[j]];
const reduceMo=()=>window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
const CAPV=[
 [/^GOLO!$/,["GOLO!","GOLOOO!","GOLAÇO!","É GOLO!","LÁ DENTRO!","GOLO, GOLO, GOLO!"]],
 [/^AO POSTE!$/,["AO POSTE!","NO FERRO!","BATE NO POSTE!","O POSTE SALVA!"]],
 [/^NA BARRA!$/,["NA BARRA!","À BARRA!","NA TRAVE!","A BARRA ESTREMECE!"]],
 [/^PARA FORA!$/,["PARA FORA!","AO LADO!","FALHOU!","QUE PERDIDA!","LONGE DO ALVO!"]],
 [/^CORTADO!$/,["CORTADO!","BLOQUEADO!","CORTE DECISIVO!","TRAVADO!"]],
 [/^Passe a rasgar!$/,["Passe a rasgar!","Que passe!","Passe de rutura!","Bola em profundidade!","Passe teleguiado!"]],
 [/^Contra-ataque!$/,["Contra-ataque!","Saída rápida!","Transição a toda a velocidade!","Contra-golpe!"]],
 [/^Tabelinha!$/,["Tabelinha!","Um-dois!","Tabela perfeita!","Combinação rápida!"]],
 [/^Deixa o defesa no chão!$/,["Deixa o defesa no chão!","Que finta!","Sentou o defesa!","Drible de mestre!","Passa por ele como quer!"]],
 [/^Decide!$/,["Decide!","E agora?","Momento decisivo…","Tudo em aberto…"]],
 [/^Cruzamento para a área…$/,["Cruzamento para a área…","Bola para a área…","Centro tenso…","Cruzamento venenoso…"]],
 [/^Remate de longe!$/,["Remate de longe!","Bomba de fora da área!","Tenta de longe!","Que pontapé!"]],
 [/^Remata já!$/,["Remata já!","Remate de primeira!","Arrisca!","Sem pensar duas vezes!"]],
 [/^Baliza aberta…$/,["Baliza aberta…","Só tem de encostar…","Baliza escancarada…"]],
 [/^Passe para a área…$/,["Passe para a área…","Bola na área…","Passe para o meio…"]],
 [/^(.+) pela ala…$/,["$1 pela ala…","$1 acelera pelo flanco…","$1 desce pela linha…","$1 cola-se à linha…"]],
 [/^(.+) com a bola…$/,["$1 com a bola…","$1 pede a bola…","$1 recebe…","$1 tem a bola…"]],
 [/^(.+) conduz a meio-campo…$/,["$1 conduz a meio-campo…","$1 avança com a bola…","$1 transporta o jogo…","$1 sobe com a bola…"]],
 [/^(.+) abre o jogo…$/,["$1 abre o jogo…","$1 muda o flanco…","$1 lança na ala…","$1 vira o jogo…"]],
 [/^(.+) isolado…$/,["$1 isolado…","$1 sozinho!","$1 escapa-se…","$1 fica na cara do golo…"]],
 [/^(.+) de cabeça!$/,["$1 de cabeça!","Cabeceamento de $1!","$1 sobe mais alto!","$1 ganha nas alturas!"]],
 [/^(.+) de primeira!$/,["$1 de primeira!","Remate de primeira de $1!","$1 nem deixa cair!"]],
 [/^(.+) na recarga!$/,["$1 na recarga!","$1 aparece na recarga!","Recarga de $1!"]],
 [/^(.+) prepara o remate…$/,["$1 prepara o remate…","$1 arma o pé…","$1 procura o ângulo…","$1 ajeita para o remate…"]],
 [/^(.+) avança…$/,["$1 avança…","$1 parte para a baliza…","$1 ganha metros…","$1 vai embora…"]],
 [/^(.+) serve…$/,["$1 serve…","$1 passa…","$1 encontra um colega…","$1 solta a bola…"]],
 [/^(.+) remata…$/,["$1 remata…","$1 dispara…","$1 tenta a sorte…","$1 atira…"]],
 [/^(.+) procura espaço…$/,["$1 procura espaço…","$1 procura uma linha de passe…","$1 olha para a frente…"]],
 [/^(.+) parte para cima…$/,["$1 parte para cima…","$1 enfrenta o defesa…","$1 vai para o um contra um…"]],
];
function capVary(t,S){if(!t)return t;S._cv=S._cv||{};if(S._cv[t]!=null)return S._cv[t];let out=t;
  for(const [rx,L] of CAPV){const m=t.match(rx);if(m){const k=Math.floor(hash(strHash((S.key||"")+"|"+t))*L.length);out=L[k].replace("$1",m[1]||"");break}}
  return S._cv[t]=out}
function drawNow(S){const {x,W,H}=scCanvas();drawS(S,x,W,H);scCaption(capVary(S.cap,S),S.capBig)}
function drawSnap(S,sn,x,W,H){
  const F={flip:S.flip,t:sn.t,cam:{x:lerp(sn.cam.x,sn.b.x+1.5,.55),y:lerp(sn.cam.y,sn.b.y,.4),z:sn.cam.z*1.3,sx:0},ripple:S.ripple,goalT:S.goalT,flag:S.flag&&sn.t>=S.flag.t0?S.flag:null,shake:0,parts:null,
    ball:{...sn.b},trail:[],pl:S.pl.map((p,i)=>({...p,...sn.pl[i]}))};
  const i=S.snaps.indexOf(sn);for(let k=Math.max(0,i-6);k<=i;k++){const b=S.snaps[k].b;F.trail.push([b.x,b.y,b.z])}
  drawS(F,x,W,H);
  const bh=H*.07;x.fillStyle="#000";x.fillRect(0,0,W,bh);x.fillRect(0,H-bh,W,bh);
  x.font=`800 ${Math.round(H*.06)}px Barlow Condensed,system-ui`;x.fillStyle="#ffd166";x.textBaseline="middle";x.fillText("● REPETIÇÃO",W*.03,bh*.55);x.textBaseline="alphabetic";
}
function runS(S,done){
  if(SC.S===S&&SC.raf){SC.end=done;return}
  if(SC.raf)cancelAnimationFrame(SC.raf);SC.raf=0;
  SC.busy=true;SC.S=S;SC.end=done;S.last=performance.now();S.acc=S.acc||0;$("tv").hidden=false;S.rec=true;
  $("scTitle").textContent=S.title||"";$("scLower").hidden=!S.title;$("tv").classList.add("live");
  if($("sMatch").hidden)$("tv").scrollIntoView({block:"nearest"});else window.scrollTo(0,0);
  if(SC.skip||reduceMo()){S.rec=false;fastForward(S,9000);if(!S.frozen&&!S.done)fastForward(S,9000);for(let i=0;i<20;i++)stepCam(S);drawNow(S);if(S.frozen)return;scStop();return}
  if(!S.t)for(let i=0;i<3;i++)stepCam(S);
  const tick=now=>{const dt=Math.min(.1,(now-S.last)/1000);S.last=now;
    if(S.rep){S.rep.f+=dt*60*.5;const i=Math.floor(S.rep.f);
      if(i>=S.rep.i1){S.rep=null;SC.raf=0;scStop();return}
      const {x,W,H}=scCanvas();drawSnap(S,S.snaps[i],x,W,H);scCaption("");SC.raf=requestAnimationFrame(tick);return}
    S.acc+=dt;let n=0;
    while(S.acc>=DT&&n++<8){stepS(S);stepCam(S);S.acc-=DT}
    drawNow(S);
    if(S.done&&S.t-S.doneT>=S.tail){
      if(S.goalT!=null&&!S.replayed&&S.snaps&&S.snaps.length>60){S.replayed=true;
        let i0=S.snaps.findIndex(z=>z.t>=S.goalT-2.0);if(i0<0)i0=0;let i1=S.snaps.findIndex(z=>z.t>=S.goalT+.6);if(i1<0)i1=S.snaps.length-1;
        S.rep={f:i0,i1};$("scLower").hidden=true;SC.raf=requestAnimationFrame(tick);return}
      SC.raf=0;scStop();return}
    SC.raf=requestAnimationFrame(tick)};
  SC.raf=requestAnimationFrame(tick);
}
function scStop(){
  if(SC.raf)cancelAnimationFrame(SC.raf);SC.raf=0;SC.busy=false;$("tv").classList.remove("live");$("scLower").hidden=true;$("tv").hidden=true;
  if(SC.S)SC.lastS=SC.S;SC.S=null;const f=SC.end;SC.end=null;scCaption(LIVE&&LIVE.lastTx||"");tvIdle();f&&f();
}
const freezeAhead=S=>S.beats.slice(S.bi+1).some(b=>b.freeze);
$("tv").onclick=()=>{const S=SC.S;if(!SC.busy||!S||S.frozen)return;if(S.rep){S.rep.f=S.rep.i1;return}if(freezeAhead(S)){fastForward(S,9000);for(let i=0;i<30;i++)stepCam(S);drawNow(S)}else scStop()};
function idleS(){
  if(SC.idleS)return SC.idleS;const S=newS("idle");
  const f442=[[30,34,1],[40,12],[39,27],[39,41],[40,56],[49,14],[48,29],[48,39],[49,54],[51,30],[51,38]];
  if(LIVE){f442.forEach(([x,y,g],i)=>addP(S,"h"+i,0,"",x,y,{kit:g?"#c8f04a":teamCols(0),gk:!!g}));f442.forEach(([x,y,g],i)=>addP(S,"a"+i,1,"",PW-x,PH-y,{kit:g?"#1f2630":teamCols(1),gk:!!g}))}
  S.ball.x=52.5;S.ball.y=34;S.cam={x:52.5,y:30,z:.82};S.pl.forEach(p=>{p.tgt={x:p.x,y:p.y};p.hold=true;p.dir=p.team===0?1:-1});
  S.idle=true;SC.idleS=S;return S;
}
function tvIdle(){
  if(SC.busy||$("sMatch").hidden||!LIVE||$("tv").hidden)return;
  const S=SC.lastS||idleS();const {x,W,H}=scCanvas();S.t+=.0;drawS(S,x,W,H);
}
setInterval(()=>{if(!SC.busy)tvIdle()},700);
window.addEventListener("resize",()=>{if(!SC.busy)tvIdle()});
/* que acontecimentos do relato viram jogada na TV (igual nos dois telemóveis) */
function wantScene(e){
  if(e.mom||e.info||e.m==="PEN")return false;
  if(e.card||e.sub)return true;
  if(e.k==="goal"||e.k==="pen"){LIVE.lastSc=e.m;return true}
  if(e.k!=="save"&&e.k!=="post"&&e.k!=="miss")return false;
  const h=e.m<=45?0:1;if(LIVE.ch[h]>=2||e.m-LIVE.lastSc<9)return false;
  if(hash(strHash(LIVE.key+":c"+e.m+":"+e.t))>.5)return false;
  LIVE.ch[h]++;LIVE.lastSc=e.m;return true;
}

/* ---- relato ao vivo, com paragens: intervalo e momentos decisivos ---- */
let LIVE=null,timer=null;
function stopFeed(){if(timer){clearInterval(timer);timer=null}}
const MOM={
  pen:{a:[["TE","Ângulo esquerdo"],["TD","Ângulo direito"],["M","Ao meio"],["BE","Rasteiro à esquerda"],["BD","Rasteiro à direita"]],d:[["TE","Ângulo esquerdo"],["TD","Ângulo direito"],["M","Fica ao meio"],["BE","Em baixo à esquerda"],["BD","Em baixo à direita"]],qa:"Onde metes a bola?",qd:"Que zona defendes?"},
  uu:{a:[["C","Picar a bola"],["R","Rematar rasteiro"],["F","Fintar o guarda-redes"]],d:[["C","Ficar em pé"],["R","Atirar-se ao chão"],["F","Sair aos pés"]],qa:"Como finalizas?",qd:"Como defende o teu guarda-redes?"},
  ca:{a:[["P","Passar"],["R","Rematar já"]],d:[["P","Cortar a linha de passe"],["R","Fechar o remate"]],qa:"O que fazes?",qd:"Como defendes?"},
  fk:{a:[["B","Por cima da barreira"],["P","Ao poste do guarda-redes"]],d:[["B","A barreira salta"],["P","O guarda-redes cobre o poste"]],qa:"Como bates o livre?",qd:"Como defendes o livre?"},
  co:{a:[["P","Ao primeiro poste"],["S","Ao segundo poste"]],d:[["P","Marcar o primeiro poste"],["S","Marcar o segundo poste"]],qa:"Para onde vai o canto?",qd:"Onde fazes a marcação?"}
};
function makePlan(st,key){
  return withRng(seeded(key+":plan"),()=>{
    const pickMins=(a,b,n)=>{const out=[];let g=0;while(out.length<n&&g++<200){const m=a+rand(b-a+1);if(out.every(x=>Math.abs(x-m)>=6))out.push(m)}return out.sort((x,y)=>x-y)};
    const mins=[...pickMins(6,42,3),...pickMins(50,88,4)];
    /* 7 lances decisivos. Força = rating médio (por posição, capitão, fora de posição) + química (0 a +4) + extras.
       A mais forte fica com 50% + 4% por ponto de diferença (entre 4 e 5 dos 7). Forças iguais: desempata a química, depois o rating médio. Sem sorte. */
    const d=st.S[0].ovr-st.S[1].ovr,avgR=T=>T.picks.reduce((s,p)=>s+(p.youth?64:p.r),0)/Math.max(1,T.picks.length);
    const strong=Math.abs(d)>1e-9?(d>0?0:1):st.S[0].chemSum!==st.S[1].chemSum?(st.S[0].chemSum>st.S[1].chemSum?0:1):avgR(st.T[0])>=avgR(st.T[1])?0:1;
    const nS=Math.min(5,Math.max(4,Math.round(7*Math.min(.8,.5+.04*Math.abs(d))))),nA=Math.min(mins.length-1,strong===0?nS:7-nS);
    const who=shuffle(mins.map((_,i)=>i<nA?0:1));st.planShare=[nA,mins.length-nA];
    /* justiça: os tipos de lance são sorteados aos pares, para as duas equipas terem a mesma mistura
       (um penálti para uma equipa = um penálti para a outra); só os lances a mais da equipa mais forte são livres */
    const TW=[["pen",.18],["uu",.26],["ca",.2],["fk",.16],["co",.2]],nB=mins.length-nA,shared=[...Array(Math.min(nA,nB))].map(()=>wpick(TW));
    const tl=[nA,nB].map(n=>shuffle([...shared,...[...Array(n-shared.length)].map(()=>wpick(TW))]));
    const stops=[];
    mins.forEach((m,mi)=>{
      const t=who[mi],o=1-t,T=st.T[t],O=st.T[o];
      const type=tl[t].pop();
      const fieldT=field(T),sh=shooter(T),gk=gkOf(O)||{n:"Guarda-redes"};
      const fw=[...fieldT].filter(p=>p!==sh&&p.p==="AVA").sort((a,b)=>b.r-a.r)[0]||[...fieldT].filter(p=>p!==sh).sort((a,b)=>b.r-a.r)[0];
      const tk=[...fieldT].filter(p=>p.p!=="DEF").sort((a,b)=>b.r-a.r)[0]||sh;
      const hd=type==="co"?wpick(fieldT.map(p=>[p,(p.p==="DEF"?2.5:p.p==="AVA"?2:1)*(p.h>=185?2:1)])):sh;
      const df=[...field(O)].filter(p=>p.p==="DEF").sort((a,b)=>b.r-a.r)[0]||field(O)[0];
      stops.push({m,kind:"mom",type,t,sh:type==="co"?hd:sh,gk,fw,tk,df});
    });
    stops.push({m:45,kind:"ht"},{m:45,kind:"sub",ht:true},{m:60,kind:"sub"},{m:90,kind:"end"});
    return stops.sort((a,b)=>a.m-b.m||((a.kind==="sub")-(b.kind==="sub"))||(a.kind==="mom"?-1:1));
  });
}
function decGet(){if(!G||!LIVE)return [{},{}];return G.mode==="online"&&LIVE.dk?(G.dec[LIVE.dk]=G.dec[LIVE.dk]||[{},{}]):LIVE.dec}
function decStr(k){const d=decGet();return[...Array(k).keys()].map(j=>(d[0][j]||"-")+(d[1][j]||"-")).join(",")}
function startMatch(o){
  stopFeed();$("specExit").hidden=true;
  if(SC.raf)cancelAnimationFrame(SC.raf);SC.raf=0;SC.busy=false;SC.end=null;SC.S=null;SC.lastS=null;SC.idleS=null;$("tv").hidden=true;
  LIVE={...o,ci:[o.a,o.b],minute:0,i:0,si:0,pos:1,score:[0,0],pen:[0,0],dec:[{},{}],waiting:null,done:false,recorded:false,usedPat:new Set(),ch:[0,0],lastSc:-20,momS:null,leadRunning:false};
  LIVE.st=simStart(o.a,o.b);LIVE.st.noPens=!!o.noPens;LIVE.st.kit=kitFor(LIVE.st);LIVE.plan=makePlan(LIVE.st,o.key);
  /* voltar a meio do jogo: os lances já decididos pelos dois passam a correr, até ao ponto onde se estava */
  if(G.mode==="online"&&o.dk){const d=decGet();let mx=0;Object.keys(d[0]).concat(Object.keys(d[1])).forEach(k=>{if(/^\d+$/.test(k)&&d[0][k]&&d[1][k])mx=Math.max(mx,+k+1)});LIVE.ffTo=mx}
  const st=LIVE.st;
  $("bH").textContent=st.N[0];$("bA").textContent=st.N[1];["bH","bA"].forEach(i=>{$(i).classList.remove("rc","rc2");$(i).dataset.rc=0});$("bH").style.color=COL[st.ci[0]];$("bA").style.color=COL[st.ci[1]];
  $("bS").textContent="0–0";$("clock").textContent="0'";$("feed").innerHTML="";$("skip").hidden=false;$("toResult").hidden=true;$("momBox").hidden=true;
  show("sMatch");whistle(1);SC.skip=false;requestAnimationFrame(tvIdle);
  addLine({m:0,info:true,tx:`Começa o jogo! ${st.T[0].coach.n} contra ${st.T[1].coach.n}.`});
  /* a repartição dos lances (quem é mais forte) não é anunciada: descobre-se a jogar */
  proceed();
}
function startDuelMatch(){G.shownM=G.m;startMatch({a:0,b:1,key:G.seed+":m"+G.m,dk:G.mode==="online"?"m"+G.m:null,mySide:G.mode==="online"?G.me:null,noPens:!!G.fixed,onDone:recordDuel})}
const ffOn=()=>!!(LIVE&&LIVE.si<(LIVE.ffTo||0));
const ffMs=ms=>LIVE&&(LIVE.sim||(LIVE.si<=(LIVE.ffTo||0)&&LIVE.ffTo))?40:ms;
function proceed(){
  if(!G||!LIVE)return;
  LIVE.atStop=false;
  const k=LIVE.si,stop=LIVE.plan[k],to=stop.kind==="mom"?stop.m-1:stop.m;
  if(to>=LIVE.pos)withRng(seeded(LIVE.key+":s"+k+":"+decStr(k)),()=>simHalf(LIVE.st,LIVE.pos,to));
  LIVE.pos=stop.kind==="mom"?stop.m:stop.m+1;
  if(stop.kind==="end")withRng(seeded(LIVE.key+":end:"+decStr(k)),()=>simEnd(LIVE.st));
  SC.skip=!!LIVE.auto||ffOn();$("skip").hidden=false;runFeed(to,stop.kind==="end");
  if(LIVE.auto||ffOn())setTimeout(()=>{if(LIVE&&!LIVE.done&&timer)$("skip").click()},30);
}
function runFeed(until,final){
  stopFeed();
  timer=setInterval(()=>{
    if(LIVE.catchTo){if(LIVE.catchTo>LIVE.minute&&LIVE.minute<until){if(SC.busy)scStop();SC.skip=true;
        const to=Math.min(until,LIVE.catchTo,LIVE.minute+4);while(LIVE.minute<to){LIVE.minute++;flushTo(LIVE.minute,false)}$("clock").textContent=LIVE.minute+"'";return}
      LIVE.catchTo=0;SC.skip=!!LIVE.auto}
    if(SC.busy)return;
    if(LIVE.minute<until){LIVE.minute++;$("clock").textContent=LIVE.minute+"'";flushTo(LIVE.minute,false);return}
    if(final){if(LIVE.i<LIVE.st.ev.length)flushTo(90,true);if(LIVE.i>=LIVE.st.ev.length)endOrPens();return}
    stopFeed();reachStop();
  },110);
}
function flushTo(min,pens){
  const ev=LIVE.st.ev;
  while(LIVE.i<ev.length){const e=ev[LIVE.i];if(e.m==="PEN"){if(!pens)break;addLine(e);LIVE.i++;break}if(e.m>min)break;
    if(!e._sc&&!SC.skip&&wantScene(e)){e._sc=1;runS(e.card?cardPlay(e):e.sub?subPlay(e):eventPlay(e,LIVE.i),()=>{});return}
    addLine(e);LIVE.i++}
}

function addLine(e){
  const st=LIVE.st;
  if(e.goal&&e.m!=="PEN"){LIVE.score[e.t]++;$("bS").textContent=LIVE.score.join("–");goalSound()}
  if(e.red&&e.t!=null){const b=$(e.t?"bA":"bH");b.classList.add("rc");if(LIVE.st.red[e.t]>1||(+b.dataset.rc||0)>=1)b.classList.add("rc2");b.dataset.rc=(+b.dataset.rc||0)+1}
  if(e.goal&&e.m==="PEN"){LIVE.pen[e.t]++;$("clock").textContent=`Penáltis ${LIVE.pen.join("–")}`}
  const li=el("li",(e.goal?"goal ":"")+(e.red?"red ":e.card==="y"?"yel ":"")+(e.mom?"mom ":"")+(e.info?"info":""));if(e.t!=null&&!e.info)li.style.setProperty("--c",COL[st.ci[e.t]]);
  const etx=String(e.tx).replace(/ \((?:\d{4}|[^)]*\d{4}[^)]*)\)/g,"");
  li.append(el("span","m",e.m==="PEN"?"PEN":e.m+"'"),el("span","tx",etx));$("feed").prepend(li);
  LIVE.lastTx=(e.m==="PEN"?"":e.m+"' ")+etx;if(!SC.busy)scCaption(LIVE.lastTx);
  if($("feed").scrollTop>0&&Date.now()-feedTouch>5000)feedTop(false);
}
$("skip").onclick=()=>{
  if(!timer)return;stopFeed();SC.skip=true;if(SC.busy)scStop();
  const stop=LIVE.plan[LIVE.si],to=stop.kind==="mom"?stop.m-1:stop.m;
  LIVE.minute=to;flushTo(to,false);$("clock").textContent=to+"'";
  if(stop.kind==="end"){while(LIVE.i<LIVE.st.ev.length){addLine(LIVE.st.ev[LIVE.i]);LIVE.i++}endOrPens()}else reachStop();
};
$("toResult").onclick=result;
/* quem desce na lista de lances volta ao jogo com um toque; decisões e golos puxam a vista para cima sozinhos */
const feedTop=(smooth)=>{const f=$("feed");f.scrollTo({top:0,behavior:smooth&&!reduceMo()?"smooth":"auto"});$("backTop").hidden=true};
let feedTouch=0;["touchstart","wheel","pointerdown"].forEach(ev=>$("feed").addEventListener(ev,()=>{feedTouch=Date.now()},{passive:true}));
$("feed").addEventListener("scroll",()=>{$("backTop").hidden=$("feed").scrollTop<140},{passive:true});
$("backTop").onclick=()=>{feedTop(true);const sc=$("sMatch");sc.scrollTo&&sc.scrollTo({top:0});$("momBox").hidden||$("momBox").scrollIntoView({block:"nearest"})};

/* decisões: intervalo e momentos */
/* se o jogador previsto para o momento foi expulso, entra outro da mesma equipa */
function fixStop(k){
  const stop=LIVE.plan[k];if(!stop||stop.kind!=="mom"||stop.so)return;const st=LIVE.st,A=st.T[stop.t],D=st.T[1-stop.t];
  /* expulso OU substituído: entra quem está agora em campo, na mesma posição */
  const inPitch=(T,p)=>onPitch(T).some(x=>x.n===p.n);
  const sub=(T,p,not)=>{if(!p||inPitch(T,p))return p;const L=(p.p==="GR"?onPitch(T).filter(x=>x.p==="GR"):field(T)).filter(x=>!not.includes(x.n));return L.find(x=>x.p===p.p)||L.sort((a,b)=>b.r-a.r)[0]||p};
  const n={...stop};n.sh=sub(A,stop.sh,[]);n.fw=sub(A,stop.fw,[n.sh&&n.sh.n]);n.tk=sub(A,stop.tk,[]);n.df=sub(D,stop.df,[]);n.gk=sub(D,stop.gk,[])||stop.gk;LIVE.plan[k]=n;
  /* livre perigoso: muitas vezes vem de uma falta que dá amarelo */
  if(n.type==="fk"&&!n.cardDone){n.cardDone=1;const h=hash(strHash(LIVE.key+":fkcard"+k));if(h<.55){const L=field(D);if(L.length){const pl=L[Math.floor(hash(strHash(LIVE.key+":fkpl"+k))*L.length)];giveCard(st,1-n.t,pl.n,n.m,"y","falta à entrada da área")}}}
}
function reachStop(){
  LIVE.atStop=true;fixStop(LIVE.si);if(G&&G.mode==="online"&&LIVE.dk)pushPresence();
  /* depois de saltar o relato, o lance decisivo volta a ver-se (só não se vê ao retomar lances já decididos) */
  SC.skip=!!LIVE.auto||LIVE.si<(LIVE.ffTo||0);
  const stop=LIVE.plan[LIVE.si];$("skip").hidden=true;
  if(stop.kind==="ht"){whistle(2);$("clock").textContent="Intervalo"}
  else if(stop.kind==="sub"&&stop.ht){$("clock").textContent="Intervalo"}
  else{$("clock").textContent=stop.so?`Penáltis ${LIVE.pk.g.join("–")}`:stop.m+"'";whistle(1)}
  LIVE.waiting=LIVE.si;LIVE.localStep=0;
  if(stop.kind==="mom"){const S=momentPlay(stop,LIVE.si);LIVE.momS=S;LIVE.leadRunning=true;S.onFreeze=()=>{if(!LIVE)return;LIVE.leadRunning=false;drawDecision()};runS(S,null);if(S.frozen&&LIVE.leadRunning){LIVE.leadRunning=false;drawDecision()}return}
  drawDecision();
}
function sidesFor(stop){return stop.kind==="ht"||stop.kind==="sub"?[0,1]:[stop.t,1-stop.t]}
/* substituições: valor guardado como "b:s,b:s" (lugar no banco : lugar no campo) ou "-" */
function subPairs(v){if(!v||v==="-")return[];return v.split(",").map(x=>x.split(":").map(Number)).filter(a=>a.length===2&&a.every(Number.isInteger))}
function liveTeam(j){return LIVE.st.T[j]}
function benchOf(j){const T=liveTeam(j);return T.slots.filter(s=>s.pos==="SUP").map(s=>s.pl)}
const MAXSUB=3;
const subsLeft=j=>MAXSUB-(liveTeam(j).nsub||0);
const benchFree=j=>liveTeam(j).slots.filter(s=>s.pos==="SUP"&&s.pl&&!s.out).length;
const canSub=j=>subsLeft(j)>0&&benchFree(j)>0;
function botSubs(j){const T=liveTeam(j),B=T.slots.map((s,i)=>[s,i]).filter(([s])=>s.pos==="SUP"&&s.pl),XI=T.slots.map((s,i)=>[s,i]).filter(([s])=>s.pos!=="SUP"&&s.pl&&!T.off.has(s.pl.n));const out=[],usedX=new Set();
  const lim=subsLeft(j);B.forEach(([b,bi],k)=>{if(b.out||out.length>=lim)return;let best=null;XI.forEach(([s,si])=>{if(usedX.has(si)||(s.pos==="GR")!==(b.pl.p==="GR"))return;const fit=fitsSlot(b.pl,s)?0:6,gain=b.pl.r-fit-s.pl.r;if(gain>1&&(!best||gain>best.g))best={si,g:gain}});
    if(best&&(LIVE.plan[LIVE.waiting]||{}).ht&&best.g<4)best=null;if(best){usedX.add(best.si);out.push(k+":"+best.si)}});return out.join(",")||"-"}
function drawSubs(k){
  if($("feed").scrollTop>0)feedTop(false);
  const stop=LIVE.plan[k],st=LIVE.st,d=decGet(),box=$("momRows");box.innerHTML="";
  $("momTitle").textContent=stop.ht?"Intervalo · Substituições":`${stop.m}' · Substituições`;$("momSub").textContent="Até 3 trocas no jogo todo (intervalo e 60'). Quem sai já não volta. Toca num suplente e depois no jogador que sai.";$("momKeep").hidden=true;$("momResult").hidden=true;
  [0,1].forEach(x=>{if(!d[x][k]&&!canSub(x))d[x][k]="-"});
  if([0,1].every(x=>d[x][k]==="-")&&!(LIVE.subShown===k)){LIVE.subShown=k;resolveStop(k);return}
  let visible;
  if(G.mode==="online"){[0,1].forEach(x=>{if(autoSide(x)&&!d[x][k])d[x][k]=botSubs(x)});visible=LIVE.mySide!=null&&!LIVE.simReq?[LIVE.mySide]:[]}
  else{[0,1].forEach(x=>{if(autoSide(x)&&!d[x][k])d[x][k]=botSubs(x)});const s=[0,1].find(x=>!d[x][k]);visible=s==null?[]:[s];
    const solo=[0,1].filter(x=>!isBot(LIVE.ci[x])).length<=1;
    if(s!=null&&!LIVE.passOk&&!solo){const row=el("div","htRow");row.append(el("p",null,`Passa o telemóvel a ${st.N[s]}.`));
      const b=el("button","btn");b.textContent=`Sou ${st.N[s]}, mostrar`;b.onclick=()=>{LIVE.passOk=true;drawSubs(k)};row.append(b);box.append(row);$("momBox").hidden=false;return}}
  [0,1].forEach(side=>{
    const row=el("div","htRow"),mine=visible.includes(side);
    const nm=el("div","who");nm.style.setProperty("--c",COL[st.ci[side]]);nm.style.fontSize="1.15rem";nm.append(el("span","dot"),el("span",null,st.N[side]));row.append(nm);
    if(!mine||d[side][k]){row.append(el("span","muted",d[side][k]?(mine?(subPairs(d[side][k]).length?`Fazes ${subPairs(d[side][k]).length} substituição(ões).`:canSub(side)?"Sem substituições.":"Já não tens trocas."):"Já decidiu."):"A decidir…"));box.append(row);return}
    const left=subsLeft(side);row.append(el("span","lbl",`Trocas disponíveis: ${left}`));
    const T=liveTeam(side),sel=LIVE.subSel=LIVE.subSel||{b:null,pairs:[]};
    const bench=el("div","chips subchips");T.slots.forEach((s,i)=>{if(s.pos!=="SUP"||!s.pl||s.out)return;const bi=T.slots.filter((x,j)=>x.pos==="SUP"&&j<i).length,used=sel.pairs.some(p=>p[0]===bi)||sel.pairs.length>=left&&sel.b!==bi;
      const b=el("button","chip");b.append(`⬆ ${lastName(s.pl.n)} `,el("small",null,s.pl.p+" "+s.pl.r));b.setAttribute("aria-pressed",sel.b===bi);b.disabled=used;b.onclick=()=>{sel.b=bi;drawSubs(k)};bench.append(b)});
    row.append(el("span","lbl","Banco"),bench);
    if(sel.b!=null){const xi=el("div","chips subchips"),bIsGK=(benchOf(side)[sel.b]||{}).p==="GR";T.slots.forEach((s,i)=>{if(s.pos==="SUP"||!s.pl||T.off.has(s.pl.n)||(s.pos==="GR")!==bIsGK)return;const used=sel.pairs.some(p=>p[1]===i);
      const b=el("button","chip");b.append(`⬇ ${lastName(s.pl.n)} `,el("small",null,s.label+" "+s.pl.r));b.disabled=used;b.onclick=()=>{sel.pairs.push([sel.b,i]);sel.b=null;drawSubs(k)};xi.append(b)});
      row.append(el("span","lbl","Quem sai?"),xi)}
    if(sel.pairs.length){const L=el("div","muted");L.textContent="Trocas: "+sel.pairs.map(([b,i])=>`${lastName(benchOf(side)[b].n)} por ${lastName(T.slots[i].pl.n)}`).join(" · ");row.append(L);
      const u=el("button","linkbtn","Desfazer");u.onclick=()=>{sel.pairs.pop();drawSubs(k)};row.append(u)}
    const ok=el("button","btn");ok.textContent=sel.pairs.length?`Confirmar ${sel.pairs.length} troca${sel.pairs.length>1?"s":""}`:"Sem trocas";
    ok.onclick=()=>{d[side][k]=sel.pairs.map(p=>p.join(":")).join(",")||"-";LIVE.subSel=null;LIVE.passOk=false;if(G.mode==="online")pushPresence();drawSubs(k)};row.append(ok);
    box.append(row)});
  $("momBox").hidden=false;
  if([0,1].every(x=>d[x][k]))resolveStop(k);
}
function optsFor(stop,side){
  if(stop.kind==="ht")return Object.entries(HTC).map(([k,v])=>[k,v.l]);
  const M=MOM[stop.type],att=side===stop.t;let o=att?M.a:M.d;
  if(stop.type==="ca"&&att)o=[["P",`Passar a ${stop.fw.n}`],["R","Rematar já"]];
  return o;
}
/* penáltis e livres: quem ataca escolhe quem bate */
const needsTaker=stop=>stop.kind==="mom"&&(stop.type==="pen"||stop.type==="fk");
function takerOpts(stop){const st=LIVE.st,L=[...field(st.T[stop.t])].sort((a,b)=>b.r-a.r||a.n.localeCompare(b.n));
  if(stop.so&&LIVE.pk){const used=LIVE.pk.used[stop.t],fresh=L.filter(p=>!used.has(p.n));return fresh.length?fresh:L}return L}
function takerOf(stop,d,k){const v=d[stop.t]["t"+k];if(v==null)return null;const L=takerOpts(stop);return L[+v]||null}
function drawDecision(){
  if(!G||!LIVE)return;const k=LIVE.waiting;if(k==null||LIVE.leadRunning)return;tvZones(null);
  if($("feed").scrollTop>0)feedTop(false);
  if(LIVE.plan[k].kind==="sub")return drawSubs(k);
  const stop=LIVE.plan[k],st=LIVE.st,d=decGet(),box=$("momRows");box.innerHTML="";
  const ttl=$("momTitle"),sub=$("momSub");$("momResult").textContent="";$("momResult").hidden=true;
  if(stop.kind==="ht"){ttl.textContent="Intervalo · o que muda para a 2.ª parte?";sub.textContent="Cada um escolhe às escondidas. Podes mudar a formação e a atitude. Atacar: mais ocasiões, mas deixa espaço atrás. Fechar: segura o resultado, mas cria menos.";$("momKeep").hidden=true}
  else{
    const N=st.N[stop.t];$("momKeep").hidden=true;
    if(stop.so){const P=LIVE.pk;ttl.textContent=`Penáltis · ${P.g[0]}–${P.g[1]} · ${Math.floor(P.n/2)+1}.º de ${N}`;sub.textContent=`${N} escolhe quem bate. ${stop.gk.n} está na baliza. Cada um escolhe às escondidas.`}
    else ttl.textContent=`${stop.m}' · `+({pen:`Penálti para ${N}!`,uu:`${N} isolado frente ao guarda-redes!`,ca:`Contra-ataque de ${N}!`,fk:`Livre perigoso para ${N}!`,co:`Canto para ${N}!`})[stop.type];
    if(!stop.so)sub.textContent=({pen:`${N} escolhe quem bate. ${stop.gk.n} está na baliza.`,uu:`${stop.sh.n} fica sozinho com ${stop.gk.n}.`,ca:`${stop.sh.n} arranca com espaço, com ${stop.fw.n} ao lado.`,
      fk:`${N} escolhe quem bate o livre.`,co:`${stop.sh.n} sobe à área. ${stop.df.n} está na marcação.`})[stop.type]+" Cada um escolhe às escondidas.";
  }
  const sides=sidesFor(stop);
  let visible;
  if(G.mode==="online"){sides.forEach(x=>{if(autoSide(x)&&!d[x][k])d[x][k]=botDecide(stop,x,k);if(autoSide(x)&&x===stop.t&&needsTaker(stop)&&d[x]["t"+k]==null)d[x]["t"+k]="0"});visible=LIVE.mySide!=null&&!LIVE.simReq?[LIVE.mySide]:[]}
  else{sides.forEach(x=>{if(autoSide(x)&&!d[x][k])d[x][k]=botDecide(stop,x,k);if(autoSide(x)&&x===stop.t&&needsTaker(stop)&&d[x]["t"+k]==null)d[x]["t"+k]="0"});
    const s=sides.find(x=>!d[x][k]);visible=s==null?[]:[s];
    const solo=sides.filter(x=>!isBot(LIVE.ci[x])).length<=1;
    if(s!=null&&!LIVE.passOk&&!solo){const row=el("div","htRow");row.append(el("p",null,`Passa o telemóvel a ${st.N[s]}. ${st.N[1-s]} não pode ver.`));
      const b=el("button","btn");b.textContent=`Sou ${st.N[s]}, mostrar`;b.onclick=()=>{LIVE.passOk=true;drawDecision()};row.append(b);box.append(row);$("momBox").hidden=false;$("momBox").scrollIntoView({block:"nearest"});return}}
  sides.forEach(side=>{
    const row=el("div","htRow"),mine=visible.includes(side);
    const nm=el("div","who");nm.style.setProperty("--c",COL[st.ci[side]]);nm.style.fontSize="1.15rem";nm.append(el("span","dot"),el("span",null,st.N[side]));row.append(nm);
    if(mine)row.append(el("span","lbl",stop.kind==="ht"?"O que muda na tua equipa?":side===stop.t?MOM[stop.type].qa:MOM[stop.type].qd));
    const ch=el("div","chips");
    if(mine&&side===stop.t&&needsTaker(stop)&&d[side]["t"+k]==null){
      row.lastChild.textContent="Quem bate?";
      takerOpts(stop).forEach((p,i)=>{const b=el("button","chip");b.append(lastName(p.n)+" ",el("small",null,String(p.r)));b.onclick=()=>{d[side]["t"+k]=String(i);if(G.mode==="online")pushPresence();drawDecision()};ch.append(b)});
      row.append(ch);box.append(row);$("momBox").hidden=false;return}
    if(mine&&side===stop.t&&needsTaker(stop)&&!d[side][k]){const tk=takerOf(stop,d,k);if(tk)row.lastChild.textContent=`${lastName(tk.n)} vai bater. ${MOM[stop.type].qa}`}
    if(mine&&!d[side][k]&&stop.kind==="ht"){const T=st.T[side],cur=LIVE.formSel&&LIVE.formSel[side]||T.form;
      const fc=el("div","chips fchips");Object.keys(FORMS).forEach(f=>{const b=el("button","chip");b.append(f+(f===T.coach.f?" ★":""));b.setAttribute("aria-pressed",f===cur);
        b.onclick=()=>{LIVE.formSel=LIVE.formSel||{};LIVE.formSel[side]=f;drawDecision()};fc.append(b)});
      row.append(el("span","lbl","Formação"+(cur!==T.form?` · muda de ${T.form} para ${cur}`:"")),fc);
      if(cur!==T.form){const oo=oopList(reform(T,cur));row.append(el("span","muted",oo.length?`Fora de posição (rendem menos): ${oo.join(", ")}`:"Todos ficam nas suas posições."))}
      row.append(el("span","lbl","Atitude"))}
    if(mine&&!d[side][k]&&stop.type==="pen"){ch.classList.add("goalpick");const att=side===stop.t;
      tvZones(v=>{d[side][k]=v;LIVE.passOk=false;tvZones(null);if(G.mode==="online")pushPresence();drawDecision()});
      const g=el("div","gpGoal");optsFor(stop,side).forEach(([v,l])=>{const b=el("button","chip gp gp"+v);b.setAttribute("aria-label",l);b.title=l;
        b.append(el("span","gpl",{TE:"Alto",TD:"Alto",M:"Meio",BE:"Baixo",BD:"Baixo"}[v]));
        b.onclick=()=>{d[side][k]=v;LIVE.passOk=false;if(G.mode==="online")pushPresence();drawDecision()};g.append(b)});
      ch.append(g,el("p","muted gphint",att?"Em cima (ângulos): quase impossível de defender, mas podes falhar. Em baixo: mais seguro. Meio: só resulta se o guarda-redes se atirar.":"Escolhe a zona que vais cobrir. Se fores para o lado certo, ainda podes chegar à bola."));
    }
    else if(mine&&!d[side][k])optsFor(stop,side).forEach(([v,l])=>{const b=el("button","chip");b.append(l);b.setAttribute("aria-pressed",d[side][k]===v);
      b.onclick=()=>{if(stop.kind==="ht"){const f=LIVE.formSel&&LIVE.formSel[side];if(f&&f!==st.T[side].form)d[side]["f"+k]=f}d[side][k]=v;LIVE.passOk=false;if(G.mode==="online")pushPresence();drawDecision()};ch.append(b)});
    else ch.append(el("span","muted",(d[side][k]||(!mine&&G.mode==="online"&&LIVE.dk&&((G.decH||{})[LIVE.dk]||[{},{}])[side][k]!=null))?(mine?"Escolheste: "+(optsFor(stop,side).find(o=>o[0]===d[side][k])||["",""])[1]:"Já decidiu (em segredo)."):"A decidir…"));
    row.append(ch);box.append(row);
  });
  $("momBox").hidden=false;
  if(sides.every(s=>d[s][k])&&(!needsTaker(stop)||d[stop.t]["t"+k]!=null))resolveStop(k);
}
$("momKeep").onclick=()=>{const k=LIVE.waiting;if(k==null)return;const d=decGet();(G.mode==="online"?[LIVE.mySide]:[0,1].filter(x=>!isBot(LIVE.ci[x]))).forEach(s=>{if(s!=null&&!d[s][k])d[s][k]="keep"});if(G.mode==="online")pushPresence();drawDecision()};
function resolveStop(k){
  tvZones(null);
  if(LIVE.waiting!==k)return;LIVE.waiting=null;
  const stop=LIVE.plan[k],st=LIVE.st,d=decGet();
  if(stop.kind==="sub"){
    const rr=$("momResult");rr.innerHTML="";$("momRows").innerHTML="";
    [0,1].forEach(j=>{const P=subPairs(d[j][k]);if(!P.length){rr.append(el("div","rv",`${st.N[j]}: sem trocas`));return}
      const T0=st.T[j],T={...T0,slots:T0.slots.map(x=>({...x})),picks:[...T0.picks]};const B=T.slots.filter(x=>x.pos==="SUP");let n=T0.nsub||0;
      const em=stop.ht?46:stop.m;
      P.forEach(([b,i])=>{const inn=B[b]&&B[b].pl,sl=T.slots[i];if(n>=MAXSUB||!inn||B[b].out||!sl||!sl.pl||sl.pos==="SUP"||T.off.has(sl.pl.n))return;const out=sl.pl;
        sl.pl=inn;B[b].pl=out;B[b].out=true;n++;(st.subLog=st.subLog||[]).push({t:j,i:inn.n,o:out.n,m:em});T.picks=T.picks.map(x=>x===out?inn:x);if(T.cap===out)T.cap=null;
        st.ev.push({m:em,t:j,sub:1,i:inn.n,o:out.n,tx:`Substituição em ${st.N[j]}${stop.ht?" ao intervalo":""}: entra ${inn.n}, sai ${out.n}.`});rr.append(el("div","rv",`${st.N[j]}: ⬆ ${dn(inn.n)} · ⬇ ${dn(out.n)}`))});
      T.nsub=n;st.T[j]=T;st.S[j]=strength(T)});
    const none=[0,1].every(j=>!subPairs(d[j][k]).length);
    rr.hidden=none;LIVE.si++;if(!stop.ht)flushTo(stop.m,false);
    setTimeout(()=>{if(LIVE&&!LIVE.done&&LIVE.si===k+1&&LIVE.waiting==null){$("momBox").hidden=true;if(stop.ht)whistle(1);proceed()}},none?60:ffMs(2200));return;
  }
  if(stop.kind==="ht"){
    st.mods=[HTC[d[0][k]]||{},HTC[d[1][k]]||{}];
    [0,1].forEach(t=>{const f=d[t]["f"+k];if(f&&FORMS[f]&&f!==st.T[t].form){const old=st.T[t].form;st.T[t]=reform(st.T[t],f);st.S[t]=strength(st.T[t]);st.ev.push({m:46,t,tx:`${st.T[t].coach.n} muda ${st.N[t]} de ${old} para ${f}.`})}});
    LIVE.formSel=null;
    [0,1].forEach(t=>{const c=d[t][k];if(c&&c!=="keep")st.ev.push({m:46,t,tx:c==="att"?`${st.T[t].coach.n} manda ${st.N[t]} para a frente ao intervalo.`:`${st.T[t].coach.n} fecha ${st.N[t]} lá atrás.`})});
    $("momRows").innerHTML="";const rr=$("momResult");rr.innerHTML="";
    [0,1].forEach(t=>rr.append(el("div","rt3",`${st.N[t]}: ${HTC[d[t][k]]?HTC[d[t][k]].l:"Manter"}${d[t]["f"+k]?" · "+st.T[t].form:""}`)));rr.hidden=false;
    LIVE.si++;setTimeout(()=>{if(LIVE&&!LIVE.done&&LIVE.si===k+1&&LIVE.waiting==null){$("momBox").hidden=true;proceed()}},ffMs(2400));return;
  }
  if(needsTaker(stop)){const tk=takerOf(stop,d,k);if(tk){LIVE.plan[k]=stop.type==="fk"?{...stop,tk,sh:tk}:{...stop,sh:tk}}}
  return resolveStop2(k);
}
function resolveStop2(k){
  const stop=LIVE.plan[k],st=LIVE.st,d=decGet();
  if(stop.so&&LIVE.pk)LIVE.pk.used[stop.t].add(stop.sh.n);
  const a=d[stop.t][k],df=d[1-stop.t][k],t=stop.t,o=1-t,same=a===df,S=st.S;
  const res=withRng(seeded(LIVE.key+":mom"+k+":"+a+df),()=>{
    const r=Math.random(),r2=Math.random(),cl=(v,lo,hi)=>Math.min(hi,Math.max(lo,v));
    let kind="wide",sc=stop.sh,as=null,tx="";
    if(stop.type==="pen"){const sh=stop.sh,gk=stop.gk,za=PZ(a),zd=PZ(df),sameSide=za.s===zd.s&&za.s!=="M";
      /* ângulos: difícil de defender mas fácil de falhar; rasteiros mais seguros; meio arriscado */
      const acc=cl(({T:.84,B:.94,M:.97})[za.h]+(sh.r-82)*.004,.7,.99);
      if(false){tx=kind==="bar"?`${sh.n} tenta o ângulo… e acerta na barra!`:kind==="wide"?`${sh.n} tenta o ângulo e a bola sai por cima!`:`${sh.n} bate colocado… e manda ao poste!`}
      else if(same){kind="save";tx=kind==="goal"?`${gk.n} estava lá, mas o remate de ${sh.n} é forte demais. GOLO!`:`${gk.n} adivinha a zona e defende o penálti de ${sh.n}!`}
      else if(false){kind=r<cl((za.h==="T"?.72:.5)+(sh.r-gk.r)*.01,.3,.85)?"goal":"save";tx=kind==="goal"?`GOLO! ${gk.n} foi para o lado certo, mas ${sh.n} meteu ${za.h==="T"?"no ângulo":"rasteiro"}.`:`${gk.n} foi para o lado certo e chega à bola de ${sh.n}!`}
      else{kind="goal";tx=za.s==="M"?`GOLO! ${sh.n} bate ao meio e ${gk.n} já tinha saído para o lado.`:`GOLO! ${sh.n} engana ${gk.n} e marca de penálti.`}}
    else if(stop.type==="uu"){const sh=stop.sh,gk=stop.gk;
      if(same){kind="save";tx=kind==="goal"?`${gk.n} leu a intenção, mas ${sh.n} marca na mesma!`:`${gk.n} leu tudo e fica com a bola!`}
      else{kind="goal";
        tx=kind==="goal"?(a==="C"?`GOLO! ${sh.n} pica a bola por cima de ${gk.n}.`:a==="R"?`GOLO! Remate rasteiro e colocado de ${sh.n}.`:`GOLO! ${sh.n} finta ${gk.n} e marca de baliza aberta.`):kind==="post"?`${sh.n} acerta no poste!`:`${sh.n} tinha tudo para marcar… e atira para fora!`}}
    else if(stop.type==="ca"){const pass=a==="P";sc=pass?stop.fw:stop.sh;as=pass?stop.sh:null;
      const q=cl(.42+(S[t].att-S[o].def)*.012,.25,.65);
      if(same){kind="block";tx=kind==="goal"?`A defesa leu a jogada, mas ${sc.n} marca na mesma!`:(pass?`O passe para ${stop.fw.n} é cortado. A defesa leu tudo.`:`O remate de ${stop.sh.n} é bloqueado.`)}
      else{kind="goal";tx=kind==="goal"?(pass?`GOLO! ${stop.sh.n} serve ${stop.fw.n}, que só tem de encostar.`:`GOLO! ${stop.sh.n} remata cruzado e não dá hipótese.`):kind==="save"?`${sc.n} remata, mas ${stop.gk.n} defende.`:`${sc.n} atira ao lado!`}}
    else if(stop.type==="fk"){const tk=stop.tk;sc=tk;const q=cl(.32+(tk.r-78)*.015,.15,.6);
      if(same){kind=a==="B"?"block":"save";tx=kind==="goal"?`Não chegou para parar ${tk.n}: golaço de livre!`:a==="B"?`A barreira salta e trava o livre de ${tk.n}.`:`${stop.gk.n} estava no poste e defende o livre de ${tk.n}.`}
      else{kind="goal";tx=kind==="goal"?`GOLO de livre! ${tk.n} ${a==="B"?"põe a bola por cima da barreira, no ângulo":"surpreende o guarda-redes ao poste"}.`:`O livre de ${tk.n} passa a rasar o poste.`}}
    else{const hd=stop.sh;const q=cl(.4+(S[t].att-S[o].def)*.012,.25,.6);
      as=stop.tk!==hd?stop.tk:null;
      if(same){kind="block";tx=kind==="goal"?`${stop.df.n} chegou primeiro, mas a bola sobra para ${hd.n}, que marca!`:`${stop.df.n} antecipa-se e afasta de cabeça.`}
      else{kind="goal";tx=kind==="goal"?`GOLO! ${hd.n} cabeceia sozinho ao ${a==="P"?"primeiro":"segundo"} poste.`:kind==="save"?`Cabeceamento de ${hd.n}, grande defesa de ${stop.gk.n}!`:`${hd.n} cabeceia por cima.`}}
    return{goal:kind==="goal",kind,tx,sc,as};
  });
  $("momBox").hidden=true;
  const opts={title:stop.so?`Penáltis · ${st.N[t]}`:`${stop.m}' · ${({pen:"Penálti",uu:"Um contra um",ca:"Contra-ataque",fk:"Livre direto",co:"Canto"})[stop.type]} · ${st.N[t]}`};
  let MS=LIVE.momS;if(!MS||MS.done){MS=momentPlay(stop,k);fastForward(MS,9000)}if(!MS.frozen)fastForward(MS,9000);
  LIVE.momS=null;LIVE.leadRunning=false;if(needsTaker(stop)&&MS.R.fin){MS.R.fin.name=(stop.type==="fk"?stop.tk:stop.sh).n}continueS(MS,momentFinish(MS,stop,res,a,df));MS.title=opts.title;
  runS(MS,()=>{
    if(!LIVE||LIVE.waiting!=null)return;
    if(stop.so){const P=LIVE.pk;if(res.goal)P.g[t]++;P.n++;
      st.ev.push({m:"PEN",t,goal:res.goal,_sc:1,tx:res.tx});while(LIVE.i<st.ev.length){addLine(st.ev[LIVE.i]);LIVE.i++}
      const lbl=(side,v)=>(optsFor(stop,side).find(x=>x[0]===v)||["",v])[1];
      $("momRows").innerHTML="";$("momTitle").textContent=`Penáltis · ${P.g[0]}–${P.g[1]}`;$("momSub").textContent="";
      const r=$("momResult");r.innerHTML="";r.append(el("div","rv",`${st.N[t]}: ${lbl(t,a)} · ${st.N[o]}: ${lbl(o,df)}`),el("div","rt3"+(res.goal?" g":""),res.tx));r.hidden=false;$("momBox").hidden=false;
      LIVE.si++;const end=pkDone(P);
      setTimeout(()=>{if(!LIVE||LIVE.waiting!=null||LIVE.done||LIVE.si!==k+1)return;$("momBox").hidden=true;if(end)endShootout();else{pushPk();reachStop()}},ffMs(1900));
      return}
    st.shots[t]++;if(res.kind!=="wide"&&res.kind!=="post")st.on[t]++;
    if(res.sc)st.stats.sh[res.sc.n]=(st.stats.sh[res.sc.n]||0)+1;if(res.kind==="save"&&stop.gk)st.stats.sv[stop.gk.n]=(st.stats.sv[stop.gk.n]||0)+1;
    if(res.goal){st.goals[t]++;st.stats.g[res.sc.n]=(st.stats.g[res.sc.n]||0)+1;if(res.as)st.stats.a[res.as.n]=(st.stats.a[res.as.n]||0)+1}
    st.ev.push({m:stop.m,t,goal:res.goal,mom:true,k:"mom",type:stop.type,s:res.sc.n,_sc:1,tx:res.tx});
    const lbl=(side,v)=>(optsFor(stop,side).find(x=>x[0]===v)||["",v])[1];
    $("momRows").innerHTML="";$("momTitle").textContent=opts.title;$("momSub").textContent="";
    const r=$("momResult");r.innerHTML="";r.append(el("div","rv",`${st.N[t]}: ${lbl(t,a)} · ${st.N[o]}: ${lbl(o,df)}`),el("div","rt3"+(res.goal?" g":""),res.tx));r.hidden=false;$("momBox").hidden=false;
    flushTo(stop.m,false);
    LIVE.si++;
    setTimeout(()=>{if(LIVE&&LIVE.waiting==null&&!LIVE.done&&LIVE.si===k+1){$("momBox").hidden=true;proceed()}},ffMs(2400));
  });
}
/* ---- simular o resto do jogo: decide como um treinador (igual ao bot) por quem aceitou. Online, só arranca quando os dois aceitam ---- */
const autoSide=x=>isBot(LIVE.ci[x])||!!LIVE.sim;
function simOppSide(){return LIVE&&LIVE.mySide!=null?1-LIVE.mySide:null}
function simPeer(side){return PEERS[LIVE.ci[side]]}
function simReqOf(side){if(isBot(LIVE.ci[side]))return{n:0};const p=simPeer(side);return p&&p.sim&&p.sim.k===LIVE.dk?p.sim:null}
function simGo(){
  if(!LIVE||LIVE.sim||LIVE.done)return;LIVE.sim=true;LIVE.auto=true;LIVE.simReq=true;SC.skip=true;
  addLine({m:LIVE.minute,info:true,tx:"⚡ O resto do jogo é simulado: as decisões são tomadas como um treinador as tomaria."});
  if(G.mode==="online"&&LIVE.mySide!=null)pushPresence();
  if(SC.busy&&!LIVE.leadRunning)scStop();
  if(LIVE.waiting!=null){if(!LIVE.leadRunning)drawDecision()}else if(timer)$("skip").click();
  drawSim();
}
function simState(){
  if(!LIVE||LIVE.done||!LIVE.dk||G.mode!=="online"){drawSim();return}
  if(LIVE.mySide==null){const a=simReqOf(0),b=simReqOf(1);if(!LIVE.sim&&a&&b)simGo();drawSim();return}
  const o=simOppSide(),r=simReqOf(o),p=simPeer(o);
  if(!LIVE.sim&&r&&r.on)LIVE.simReq=true;
  if(LIVE.simReq&&!LIVE.sim&&p&&p.simNo&&p.simNo.k===LIVE.dk&&p.simNo.n===(LIVE.simN||1)){LIVE.simReq=false;LIVE.simRefused=true;pushPresence();if(LIVE.waiting!=null)drawDecision()}
  if(!LIVE.sim&&LIVE.simReq&&r)simGo();
  drawSim();
}
function drawSim(){
  const b=$("simBtn"),ask=$("simAsk");if(!G||!LIVE){b.hidden=true;ask.hidden=true;return}
  const on=!!(LIVE&&!LIVE.done&&!LIVE.sim&&!$("sMatch").hidden&&!LIVE.spect&&!(G&&G.online&&G.online.watch)&&(G.mode!=="online"||LIVE.mySide!=null)&&!(LIVE.auto));
  if(!on){b.hidden=true;ask.hidden=true;return}
  if(G.mode!=="online"){b.hidden=false;ask.hidden=true;b.disabled=false;b.textContent="⚡ Simulação";return}
  const o=simOppSide(),r=simReqOf(o),nm=LIVE.st.N[o];
  if(LIVE.simReq){ask.hidden=true;b.hidden=false;b.disabled=true;b.textContent=`À espera que ${nm} aceite simular…`;return}
  if(r&&!(LIVE.simNoSeen===r.n)){b.hidden=true;ask.hidden=false;$("simAskTx").textContent=`⚡ ${nm} quer simular o resto do jogo. Aceitas?`;return}
  ask.hidden=true;b.hidden=false;b.disabled=false;b.textContent=LIVE.simRefused?"⚡ Simulação (recusada, podes pedir outra vez)":"⚡ Simulação";
}
$("simBtn").onclick=()=>{if(!LIVE||LIVE.done||LIVE.sim)return;
  if(G.mode!=="online"){const hum=[0,1].filter(x=>!isBot(LIVE.ci[x])).length;if(hum>1&&!confirm(`Os dois treinadores (${LIVE.st.N[0]} e ${LIVE.st.N[1]}) aceitam simular o resto do jogo?`))return;simGo();return}
  LIVE.simReq=true;LIVE.simRefused=false;LIVE.simN=(LIVE.simN||0)+1;pushPresence();if(LIVE.waiting!=null)drawDecision();simState()};
$("simYes").onclick=()=>{if(!LIVE||LIVE.done)return;LIVE.simReq=true;LIVE.simN=(LIVE.simN||0)+1;pushPresence();simState()};
$("simNo").onclick=()=>{if(!LIVE)return;const r=simReqOf(simOppSide());if(r){LIVE.simNo=r.n;LIVE.simNoSeen=r.n;pushPresence()}drawSim()};
setInterval(()=>{try{if(LIVE&&!$("sMatch").hidden)drawSim()}catch(e){}},1000);

/* desempate: série de penáltis, cada um decidido às escondidas */
function endOrPens(){if(LIVE.st.needPens&&!LIVE.st.pens&&!LIVE.pk)startShootout();else if(!LIVE.pk||LIVE.st.pens)finish()}
function pkDone(P){const a=Math.ceil(P.n/2),b=Math.floor(P.n/2);
  if(P.n<=10){if(P.g[0]>P.g[1]+(5-b)||P.g[1]>P.g[0]+(5-a))return true}
  if(P.n>=10&&P.n%2===0&&P.g[0]!==P.g[1])return true;return P.n>=40}
function pushPk(){const P=LIVE.pk,st=LIVE.st,t=P.n%2,L=P.order[t];
  LIVE.plan.push({kind:"mom",type:"pen",so:true,m:"PEN",t,sh:L[Math.floor(P.n/2)%L.length],gk:gkOf(st.T[1-t])||{n:"Guarda-redes"},n:P.n})}
function startShootout(){
  stopFeed();const st=LIVE.st;
  LIVE.pk={n:0,g:[0,0],used:[new Set(),new Set()],order:[0,1].map(t=>[...field(st.T[t])].sort((a,b)=>b.r-a.r||a.n.localeCompare(b.n)))};
  LIVE.si=LIVE.plan.length;pushPk();$("clock").textContent="Penáltis 0–0";
  setTimeout(()=>{if(LIVE&&!LIVE.done)reachStop()},900);
}
function endShootout(){
  const st=LIVE.st,P=LIVE.pk;st.pens=[...P.g];st.w=P.g[0]>P.g[1]?0:1;
  st.ev.push({m:"PEN",info:true,tx:`${st.N[st.w]} ganha nos penáltis por ${Math.max(...P.g)}–${Math.min(...P.g)}!`});
  while(LIVE.i<st.ev.length){addLine(st.ev[LIVE.i]);LIVE.i++}
  $("clock").textContent=`Penáltis ${P.g.join("–")}`;finish();
}
/* estatísticas anónimas: só contagens por dia (visitas e jogos por modo), sem nomes nem identificadores */
/* ---- pôr o jogo no ecrã principal (instalar a app) ---- */
const LE=(pt,en)=>LANG==="en"?en:pt;
const INST={dp:window.__dp||null,ua:navigator.userAgent,site:location.protocol==="https:"&&/github\.io$/.test(location.hostname)};
INST.standalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
INST.inapp=/Instagram|FBAN|FBAV|FB_IAB|FBIOS|TikTok|musical_ly|Bytedance|Snapchat|Twitter|\bLine\//i.test(INST.ua);
INST.app=/Instagram/i.test(INST.ua)?"Instagram":/TikTok|musical_ly|Bytedance/i.test(INST.ua)?"TikTok":/FBAN|FBAV|FB_IAB|FBIOS/i.test(INST.ua)?"Facebook":"";
INST.ios=/iPhone|iPad|iPod/i.test(INST.ua)||(/Macintosh/.test(INST.ua)&&navigator.maxTouchPoints>1);
INST.android=/Android/i.test(INST.ua);
addEventListener("beforeinstallprompt",e=>{e.preventDefault();INST.dp=e;instRefresh()});
addEventListener("appinstalled",()=>{INST.dp=null;store("duelo_inst",{done:1});try{statAdd("v_ins")}catch(e){}instRefresh()});
function instCan(){return INST.site&&!INST.standalone()&&(INST.inapp||INST.ios||INST.android||!!INST.dp)}
function instWant(){if(!instCan())return false;const s=store("duelo_inst")||{};if(s.done)return false;if(s.snooze&&Date.now()<s.snooze)return false;
  return INST.inapp||(H().games||[]).length>0}
function instRefresh(){if(!$("instBar"))return;$("meInstall").hidden=!instCan();$("instBar").hidden=!instWant();$("goInst").hidden=!instCan()||!$("instBar").hidden;
  $("instBarTx").textContent=INST.inapp?(INST.app?LE(`Estás a jogar dentro do ${INST.app}. Abre no navegador para guardar o jogo.`,`You're playing inside ${INST.app}. Open it in your browser to keep the game.`):LE("Abre no navegador para guardar o jogo no telemóvel.","Open it in your browser to keep the game on your phone.")):LE("Põe o jogo no ecrã principal: abre como uma app, em ecrã inteiro.","Add the game to your home screen: it opens like an app, full screen.");
  $("instBarGo").textContent=INST.inapp?LE("Como?","How?"):LE("Instalar","Install");$("instBarNo").setAttribute("aria-label",LE("Agora não","Not now"))}
const I_SHARE='<span class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg></span>';
const I_ADD='<span class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/></svg></span>';
const I_DOTS='<span class="ico">⋯</span>',I_VDOTS='<span class="ico">⋮</span>';
function instSheet(){let h;const keep=LE("Abre em ecrã inteiro, sem barra de endereço, e lembra-se do teu nome e dos teus jogos.","It opens full screen, with no address bar, and remembers your name and your games.");
  if(INST.inapp){const where=INST.app?LE(`Dentro do ${INST.app}`,`Inside ${INST.app}`):LE("Dentro desta app","Inside this app"),br=INST.ios?"Safari":"Chrome";
    $("instTitle").textContent=LE("Abrir no navegador","Open in your browser");
    h=`<p>${where} ${LE("não dá para guardar o jogo no ecrã. Abre-o no navegador do telemóvel:","you can't keep the game on your home screen. Open it in your phone's browser:")}</p><ol class="iSteps">
      <li><span>${LE("Toca no menu","Tap the menu")} ${INST.ios?I_DOTS:I_VDOTS} ${LE("no canto de cima.","in the top corner.")}</span></li>
      <li><span>${LE("Escolhe","Choose")} <b>${INST.ios?LE("Abrir no navegador externo","Open in external browser"):LE("Abrir no Chrome","Open in Chrome")}</b> ${LE("(ou","(or")} <b>${LE("Abrir no navegador","Open in browser")}</b>).</span></li>
      <li><span>${LE("No navegador, carrega outra vez em","In the browser, tap")} <b>${LE("Instalar","Install")}</b> ${LE("para pôr o jogo no ecrã principal.","again to add the game to your home screen.")}</span></li></ol>
      <p class="iNote">${LE(`Se não encontrares a opção, copia a ligação e cola-a no ${br}.`,`Can't find it? Copy the link and paste it into ${br}.`)}</p>
      <div class="iBtns"><button type="button" class="btn" id="instCopy">${LE("Copiar ligação","Copy link")}</button></div>`}
  else if(INST.ios){$("instTitle").textContent=LE("Pôr no ecrã principal","Add to home screen");const other=/CriOS|FxiOS|EdgiOS/.test(INST.ua);
    h=`<p>${LE("No iPhone","On iPhone")}${other?"":LE(" (no <b>Safari</b>)"," (in <b>Safari</b>)")}:</p><ol class="iSteps">
      <li><span>${LE("Toca nos","Tap the")} ${I_DOTS} ${LE("ao lado do endereço e depois em","next to the address, then")} <b>${LE("Partilhar","Share")}</b> ${I_SHARE}.<br><small class="muted">${LE("Em iPhones mais antigos, o botão Partilhar está logo na barra de baixo.","On older iPhones, the Share button is right in the bottom bar.")}</small></span></li>
      <li><span>${LE("Desliza e escolhe","Scroll and choose")} <b>${LE("Adicionar ao ecrã principal","Add to Home Screen")}</b> ${I_ADD}.</span></li>
      <li><span>${LE("Deixa","Keep")} <b>${LE("Abrir como app Web","Open as Web App")}</b> ${LE("ligado e toca em","on and tap")} <b>${LE("Adicionar","Add")}</b>.</span></li></ol>
      <p class="iNote">${keep}</p>`}
  else{$("instTitle").textContent=LE("Pôr no ecrã principal","Add to home screen");
    h=`<ol class="iSteps"><li><span>${LE("Toca no menu","Tap the browser menu")} ${I_VDOTS} ${LE("do navegador, no canto de cima.","in the top corner.")}</span></li>
      <li><span>${LE("Escolhe","Choose")} <b>${LE("Instalar app","Install app")}</b> ${LE("ou","or")} <b>${LE("Adicionar ao ecrã principal","Add to Home screen")}</b>.</span></li>
      <li><span>${LE("Confirma. O Duelo de Onzes fica com ícone, como uma app.","Confirm. XI Duel gets an icon, like an app.")}</span></li></ol>
      <p class="iNote">${keep}</p>`}
  $("instBody").innerHTML=h;
  const c=$("instCopy");if(c)c.onclick=()=>{const u=location.origin+location.pathname;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>{c.textContent=LE("Ligação copiada ✓","Link copied ✓")}).catch(()=>{prompt(LE("Copia esta ligação:","Copy this link:"),u)})}}
function instGo(){if(INST.dp&&!INST.inapp){const d=INST.dp;d.prompt();d.userChoice.then(c=>{INST.dp=null;if(c.outcome==="accepted")store("duelo_inst",{done:1});instRefresh()}).catch(()=>{});return}
  instSheet();openSheet("shInstall")}
$("instBarGo").onclick=instGo;$("goInst").onclick=()=>{instSheet();openSheet("shInstall")};$("instBarRGo").onclick=instGo;$("meInstall").onclick=instGo;
$("instBarNo").onclick=()=>{store("duelo_inst",{snooze:Date.now()+3*864e5});instRefresh()};
setTimeout(instRefresh,0);
const STAT_ON=location.protocol==="https:"&&location.hostname==="duelodeonzes.github.io";
function statAdd(k){if(!STAT_ON||!/^(v|g)_[a-z]{1,3}$/.test(k))return;const d=new Date().toISOString().slice(0,10);
  fbLoad().then(({D,db})=>D.set(D.ref(db,`stats/d/${d}/${k}`),D.increment(1))).catch(()=>{})}
/* telemóveis diferentes, sem identificar ninguém: cada aparelho soma 1 no dia em que aparece pela primeira vez (v_new; os que já cá estavam antes desta contagem somam v_old uma vez),
   1 na primeira visita de cada semana (v_wk) e de cada mês (v_mo). Só ficam totais por dia. */
setTimeout(()=>{try{if(!STAT_ON)return;const now=new Date(),d=now.toISOString().slice(0,10);
  const first=store("duelo_seen");if(!first){store("duelo_seen",d);statAdd(store("duelo_statday")||store("duelo_names")?"v_old":"v_new")}
  if(store("duelo_statday")!==d){store("duelo_statday",d);statAdd("v_"+LANG)}
  const t=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()));const dn=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-dn);const wk=t.toISOString().slice(0,10);
  if(store("duelo_statwk")!==wk){store("duelo_statwk",wk);statAdd("v_wk")}
  const mo=d.slice(0,7);if(store("duelo_statmo")!==mo){store("duelo_statmo",mo);statAdd("v_mo")}}catch(e){}},4000);
function statGame(){try{
  if(!G||(G.online&&G.online.watch))return;
  if(G.mode==="online"&&G.me!==0)return;   /* online conta uma vez por jogo (quem criou a sala) */
  const k=G.fixed?"g_s":G.mode==="tour"||(G.mode==="online"&&G.n>2)?"g_t":G.mode==="online"?"g_o":Object.keys(G.bots||{}).length?"g_b":"g_l";
  statAdd(k);if(LIVE&&LIVE.sim)statAdd("g_sim")}catch(e){}}
function finish(){
  stopFeed();LIVE.done=true;$("skip").hidden=true;$("momBox").hidden=true;$("toResult").hidden=!!(G&&G.online&&G.online.watch);if(!LIVE.st.pens)$("clock").textContent="Final";
  whistle(3);
  if(!LIVE.recorded){LIVE.recorded=true;statGame();LIVE.onDone&&LIVE.onDone(LIVE.st)}
}

/* ---- análise ---- */
/* nota de 1 a 10 para cada jogador que entrou em campo */
function playerNotes(st){
  const out=[[],[]],g=st.goals,sub=st.subLog||[];
  [0,1].forEach(j=>{
    const T0=G.teams[st.ci[j]],start=T0.picks,inn=sub.filter(x=>x.t===j).map(x=>x.i);
    const all=[...start,...inn.map(n=>st.T[j].picks.find(p=>p.n===n)||(st.T[j].slots||[]).map(s=>s.pl).find(p=>p&&p.n===n)).filter(Boolean)];
    const conc=g[1-j],won=g[j]>g[1-j]||(g[j]===g[1-j]&&st.pens&&st.pens[j]>st.pens[1-j]),lost=g[j]<g[1-j]||(g[j]===g[1-j]&&st.pens&&st.pens[j]<st.pens[1-j]);
    all.forEach(p=>{
      const k=j+":"+p.n,so=sub.find(x=>x.t===j&&x.o===p.n),si=sub.find(x=>x.t===j&&x.i===p.n),red=st.stats.r[k],yel=st.stats.y[k];
      const redM=red?((st.ev.find(e=>e.card==="r"&&e.t===j&&e.pl===p.n)||{}).m||90):null;
      const from=si?si.m:0,to=so?so.m:red?redM:90,mins=Math.max(1,to-from);
      const G1=st.stats.g[p.n]||0,A1=st.stats.a[p.n]||0,SH=Math.max(0,(st.stats.sh[p.n]||0)-G1),SV=st.stats.sv[p.n]||0;
      let v=6+(p.r-80)*.025+G1*1.1+A1*.65+Math.min(SH,5)*.08+(won?.35:lost?-.3:0)+Math.max(-.4,Math.min(.4,(g[j]-g[1-j])*.1));
      if(p.p==="GR")v+=SV*.18+(conc===0?.8:-.35*Math.min(conc,5));
      else if(p.p==="DEF")v+=conc===0?.5:-.2*Math.min(conc,5);
      else if(p.p==="MED"&&conc===0)v+=.2;
      if(yel)v-=.3;if(red)v-=1.6;
      v+=hash(strHash(LIVE.key+":nota:"+p.n))*.6-.3;
      if(mins<90)v=6+(v-6)*Math.max(.45,mins/90);
      v=Math.round(Math.min(10,Math.max(3,v))*10)/10;
      out[j].push({p,v,g:G1,a:A1,sh:SH+G1,sv:SV,yel:!!yel&&!(red&&yel===2)?1:0,y2:yel===2,red:!!red,si:si?si.m:null,so:so?so.m:null,start:!si});
    });
    const ord={GR:0,DEF:1,MED:2,AVA:3};out[j].sort((a,b)=>(b.start-a.start)||ord[a.p.p]-ord[b.p.p]||b.v-a.v);
  });
  return out;
}
let notesT=0;
function drawNotes(){
  const st=LIVE.st,N=LIVE.notes,box=$("notes");box.innerHTML="";
  const tabs=el("div","tabs");[0,1].forEach(t=>{const b=el("button","tab");b.style.setProperty("--c",COL[st.ci[t]]);b.append(el("span","dot"),st.N[t]);b.setAttribute("aria-pressed",t===notesT);b.onclick=()=>{notesT=t;drawNotes()};tabs.append(b)});
  box.append(tabs);
  const list=el("div","nlist");
  N[notesT].forEach(x=>{
    const r=el("div","nrow"+(x.start?"":" sub"));
    const nt=el("b","nota "+(x.v>=8?"n8":x.v>=7?"n7":x.v>=6?"n6":"n5"),x.v.toFixed(1));
    const who=el("div","nwho");who.append(el("span","npos",x.p.p),el("span","nn",dn(x.p.n)));
    const ic=el("div","nic");
    for(let i=0;i<x.g;i++)ic.append(el("i","ig","⚽"));
    if(x.a)ic.append(el("i","ia",x.a>1?`A×${x.a}`:"A"));
    if(x.yel)ic.append(el("i","cy"));if(x.red)ic.append(el("i","cr"+(x.y2?" y2":"")));
    if(x.si!=null)ic.append(el("i","nsub",`⬆${x.si}'`));if(x.so!=null)ic.append(el("i","nsub o",`⬇${x.so}'`));
    const det=[x.sh?`${x.sh} remate${x.sh>1?"s":""}`:"",x.p.p==="GR"&&x.sv?`${x.sv} defesa${x.sv>1?"s":""}`:""].filter(Boolean).join(" · ");
    if(det)who.append(el("span","ndet",det));
    r.append(nt,who,ic);list.append(r);
  });
  box.append(list);
}
function result(){$("specExit").hidden=true;
  const st=LIVE.st,g=st.goals,ci=st.ci,w=st.w;
  [[0,"H"],[1,"A"]].forEach(([j,k])=>{const t=ci[j],T=st.T[j];$("r"+k).textContent=st.N[j];$("r"+k).style.color=COL[t];
    const c=$("rC"+k);c.style.setProperty("--c",COL[t]);c.textContent=(st.N[j].replace(/^Bot\s+/,"").trim()[0]||"?").toUpperCase();
    $("r"+k+"c").textContent=`${T.coach.n} · ${T.form}`;$("rT"+k).className="rteam "+(w==null?"":w===j?"win":"lose")});
  $("rS").textContent=`${g[0]} – ${g[1]}`;
  $("rP").hidden=!st.pens;if(st.pens)$("rP").textContent=`${st.pens[0]}–${st.pens[1]} nos penáltis`;
  if(w==null){$("rTitle").textContent="Empate";$("rTitle").style.color=""}else{$("rTitle").textContent=`🏆 ${st.N[w]} ganha${st.pens?" nos penáltis":""}!`;$("rTitle").style.color=COL[ci[w]]}
  LIVE.notes=playerNotes(st);notesT=w??0;drawNotes();
  const all=[0,1].flatMap(t=>LIVE.notes[t].map(x=>({p:x.p,t,s:x.v+(t===w?.05:0),v:x.v})));
  all.sort((a,b)=>b.s-a.s);const m=all[0];LIVE.mvp=m;
  $("mvp").textContent=dn(m.p.n);$("mvpR").textContent=m.v.toFixed(1);const gg=st.stats.g[m.p.n]||0,aa=st.stats.a[m.p.n]||0;
  $("mvpWhy").textContent=(gg||aa)?[gg?`${gg} golo${gg>1?"s":""}`:"",aa?`${aa} assistência${aa>1?"s":""}`:""].filter(Boolean).join(" e ")+` · ${st.N[m.t]}`:`Exibição de grande nível · ${st.N[m.t]}`;
  const S=st.S;
  const fill=(box,rows)=>{box.innerHTML="";rows.forEach(([k,a,b,u,dec])=>{
    const r=el("div","srow"),fa=dec?a.toFixed(1):a,fb=dec?b.toFixed(1):b;
    const va=el("div","v"+(a>=b?" hi":""),fa+(u||"")),vb=el("div","v"+(b>=a?" hi":""),fb+(u||""));if(a>=b)va.style.color=COL[ci[0]];if(b>=a)vb.style.color=COL[ci[1]];
    const mid=el("div");mid.append(el("span","k",k));const bar=el("div","sbarx"),mx=Math.max(.01,Math.abs(a),Math.abs(b));
    const L=el("div"),Rr=el("div"),ia=el("i"),ib=el("i");ia.style.width=(Math.abs(a)/mx*100)+"%";ia.style.background=COL[ci[0]];ib.style.width=(Math.abs(b)/mx*100)+"%";ib.style.background=COL[ci[1]];
    L.append(ia);Rr.append(ib);bar.append(L,Rr);mid.append(bar);r.append(va,mid,vb);box.append(r)})};
  fill($("stats"),[["Posse de bola",Math.round(st.share[0]*100),Math.round(st.share[1]*100),"%"],["Remates",st.shots[0],st.shots[1]],["Remates à baliza",st.on[0],st.on[1]]]);
  fill($("stats2"),[["Ataque",S[0].att,S[1].att,"",1],["Meio-campo",S[0].mid,S[1].mid,"",1],["Defesa",S[0].def,S[1].def,"",1],["Guarda-redes",S[0].gk,S[1].gk,"",1],["Química (de 33)",Math.round(S[0].chemSum),Math.round(S[1].chemSum)],["Força total",S[0].ovr,S[1].ovr,"",1]]);
  const pt=$("postTeams");pt.innerHTML="";
  [0,1].forEach(j=>{const t=ci[j],p=el("div","panel");p.style.display="flex";p.style.flexDirection="column";p.style.gap="12px";teamHead(t,p);
    const T=st.T[j];p.append(el("span","muted",`Tática: ${TACT[T.coach.t].desc}`+(S[j].pref?" Bónus: formação preferida do treinador.":"")));
    const x=el("div");drawPitch(x,t,{small:true,withR:true});p.append(x);pt.append(p)});
  const tour=G.mode==="tour"||isTourOnline();
  $("rematch").hidden=tour||!!G.fixed;$("newGame").hidden=tour||!!G.fixed;$("backBracket").hidden=!tour;$("toSeason").hidden=!G.fixed;
  const h=tour?"":h2hText(st.N[0],st.N[1]);$("h2h").textContent=h;$("h2h").hidden=!h;
  $("shareMsg").textContent="";$("shareTxt").hidden=true;
  show("sResult");confetti(COL[ci[w]]);
  try{const iw=instCan()&&!(store("duelo_inst")||{}).done;$("instBarR").hidden=!iw;if(iw){$("instBarRTx").textContent=INST.inapp?LE("Abre o jogo no navegador para o guardar no telemóvel.","Open the game in your browser to keep it on your phone."):LE("Gostaste? Põe o jogo no ecrã principal, como uma app.","Enjoyed it? Add the game to your home screen, like an app.");$("instBarRGo").textContent=INST.inapp?LE("Como?","How?"):LE("Instalar","Install")}}catch(e){}
  if(G&&G.mode==="local"){G.localDone=true;store("duelo_local",null)}
}
$("rematch").onclick=()=>{unlockAudio();G.localDone=false;G.m++;if(G.mode==="online")pushPresence();render()};
$("newGame").onclick=()=>{if(G&&G.mode==="online")newRound();else{G=null;show("sStart");drawHistory()}};
$("backBracket").onclick=()=>isTourOnline()?bracketOnline():bracket();

/* ---- histórico ---- */
function H(){return store("duelo_hist")||{pairs:{},games:[],champs:[]}}
const pairKey=(a,b)=>[a,b].map(s=>s.trim().toLowerCase()).sort().join("|");
function recordDuel(st){
  if(G.fixed){try{seaRecord(st)}catch(e){console.error(e)}return}
  try{lgDuel(st)}catch(e){}
  if(G.bots&&G.mode==="local"){const lv=G.bots[1],r=store("duelo_bot")||{},k=G.seed+":"+G.m;if(!r._last||r._last!==k){r[lv]=r[lv]||{v:0,e:0,d:0};
    const w=st.goals[0]>st.goals[1]||st.pens&&st.pens[0]>st.pens[1],lo=st.goals[0]<st.goals[1]||st.pens&&st.pens[0]<st.pens[1];
    if(st.goals[0]===st.goals[1]&&!st.pens)r[lv].e++;else if(w)r[lv].v++;else if(lo)r[lv].d++;r._last=k;store("duelo_bot",r)}}
  const id=(G.online?G.online.code:G.seed)+":"+G.m,h=H();
  if(h.games.some(x=>x.id===id))return;
  const k=pairKey(st.N[0],st.N[1]);h.pairs[k]=h.pairs[k]||{};const wn=st.N[st.w].trim().toLowerCase();h.pairs[k][wn]=(h.pairs[k][wn]||0)+1;
  h.games.unshift({id,d:Date.now(),n:st.N,g:st.goals,p:st.pens,w:st.w});h.games=h.games.slice(0,30);store("duelo_hist",h);
}
function saveChamp(name){const h=H();h.champs.unshift({n:name,d:Date.now()});h.champs=h.champs.slice(0,20);store("duelo_hist",h)}
function h2hText(a,b){
  const r=H().pairs[pairKey(a,b)];if(!r)return"";
  const wa=r[a.trim().toLowerCase()]||0,wb=r[b.trim().toLowerCase()]||0;if(!wa&&!wb)return"";
  return`Confronto direto: ${a} ${wa} – ${wb} ${b}`;
}
function drawHistory(){
  const h=H(),box=$("histList");box.innerHTML="";
  const has=h.games.length||h.champs.length;$("histBtn").hidden=!has;if(!has){$("shHist").hidden=true;return}
  Object.entries(h.pairs).slice(0,6).forEach(([k,v])=>{const [a,b]=k.split("|");const row=el("div","hrow");
    row.append(el("span",null,`${cap(a)} ${v[a]||0} – ${v[b]||0} ${cap(b)}`));box.append(row)});
  if(h.games.length){box.append(el("span","lbl","Últimos jogos"));h.games.slice(0,5).forEach(x=>{const row=el("div","hrow");
    row.append(el("span",null,`${x.n[0]} ${x.g[0]}–${x.g[1]}${x.p?` (${x.p[0]}–${x.p[1]} g.p.)`:""} ${x.n[1]}`),el("small","muted",new Date(x.d).toLocaleDateString("pt-PT")));box.append(row)})}
  if(h.champs.length){box.append(el("span","lbl","Campeões de torneios"));h.champs.slice(0,5).forEach(x=>{const row=el("div","hrow");
    row.append(el("span",null,"🏆 "+x.n),el("small","muted",new Date(x.d).toLocaleDateString("pt-PT")));box.append(row)})}
}
const cap=s=>s.replace(/(^|\s)\S/g,c=>c.toUpperCase());
$("histClear").onclick=()=>{if($("histClear").dataset.sure){store("duelo_hist",null);$("histClear").dataset.sure="";$("histClear").textContent="Apagar histórico";drawHistory()}
  else{$("histClear").dataset.sure="1";$("histClear").textContent="Tens a certeza? Toca outra vez para apagar"}};

/* ---- partilhar o resumo ---- */
function summary(){
  const st=LIVE.st,lines=[`⚽ Duelo de Onzes`,`${st.N[0]} ${st.goals[0]}–${st.goals[1]} ${st.N[1]}`+(st.pens?` (${st.pens[0]}–${st.pens[1]} nos penáltis)`:"")];
  const gl=st.ev.filter(e=>e.goal&&e.m!=="PEN").map(e=>{const nm=Object.keys(st.stats.g).find(n=>e.tx.includes(n))||"";return`${e.m}' ${nm} (${st.N[e.t]})`});
  if(gl.length)lines.push("Golos: "+gl.join(", "));
  if(LIVE.mvp)lines.push(`Homem do jogo: ${LIVE.mvp.p.n} (nota ${LIVE.mvp.v.toFixed(1)})`);
  [0,1].forEach(j=>{const T=st.T[j];lines.push("",`${st.N[j]} (${T.coach.n}, ${T.form}):`,T.slots.map(s=>s.pl?(s.pl.youth?"Júnior":s.pl.n):"—").reverse().join(", "))});
  return lines.join("\n");
}
$("shareBtn").onclick=()=>{
  const t=summary(),ta=$("shareTxt");
  const fallback=()=>{ta.value=t;ta.hidden=false;ta.focus();ta.select();$("shareMsg").textContent="Seleciona o texto e copia-o."};
  let settled=false;const to=setTimeout(()=>{if(!settled){settled=true;fallback()}},1200);
  try{navigator.clipboard.writeText(t).then(()=>{if(settled)return;settled=true;clearTimeout(to);$("shareMsg").textContent="Resumo copiado. Cola-o no WhatsApp.";ta.hidden=true}).catch(()=>{if(!settled){settled=true;clearTimeout(to);fallback()}})}catch(e){settled=true;clearTimeout(to);fallback()}
};

/* ---- partilhar como imagem (onze ou resultado), para o WhatsApp ---- */
const SHW=1080,SHH=1350,FD='"Big Shoulders Display","Arial Narrow",Impact,sans-serif',FC='"Barlow Condensed","Arial Narrow",sans-serif';
const colHex=t=>COLHEX[t]||"#ffd166";
function shCanvas(){const c=document.createElement("canvas");c.width=SHW;c.height=SHH;const x=c.getContext("2d");
  const g=x.createLinearGradient(0,0,0,SHH);g.addColorStop(0,"#0f2a1d");g.addColorStop(1,"#081610");x.fillStyle=g;x.fillRect(0,0,SHW,SHH);
  x.fillStyle="rgba(255,255,255,.035)";for(let i=0;i<SHH;i+=90)if((i/90)%2)x.fillRect(0,i,SHW,90);return[c,x]}
function shText(x,t,X,Y,o={}){x.save();x.font=`${o.w||800} ${o.s||40}px ${o.f||FC}`;x.fillStyle=o.c||"#eef6ef";x.textAlign=o.a||"left";x.textBaseline=o.b||"alphabetic";
  let s=String(t);if(o.max){while(x.measureText(s).width>o.max&&s.length>2)s=s.slice(0,-2)+"…"}x.fillText(s,X,Y);x.restore()}
function shFoot(x){shText(x,"DUELO DE ONZES",SHW/2,SHH-42,{f:FD,s:44,w:900,c:"#ffd166",a:"center"})}
function shPitch(x,T,t,X,Y,W,H){
  x.save();x.fillStyle="#2f7a46";x.strokeStyle="rgba(255,255,255,.55)";x.lineWidth=4;
  x.beginPath();x.roundRect(X,Y,W,H,26);x.fill();x.stroke();
  x.beginPath();x.moveTo(X,Y+H/2);x.lineTo(X+W,Y+H/2);x.stroke();x.beginPath();x.arc(X+W/2,Y+H/2,H*.11,0,7);x.stroke();
  x.strokeRect(X+W*.25,Y,W*.5,H*.13);x.strokeRect(X+W*.25,Y+H*.87,W*.5,H*.13);
  const rows=ROWS[T.form]||[],xi=T.slots.filter(s=>s.pos!=="SUP");
  rows.forEach((r,ri)=>{const sl=xi.filter(s=>s.row===ri),n=sl.length,yy=Y+H*(.09+.77*ri/Math.max(1,rows.length-1));
    sl.forEach((s,j)=>{const xx=X+W*(j+1)/(n+1),p=s.pl;
      x.fillStyle=colHex(t);x.beginPath();x.arc(xx,yy,34,0,7);x.fill();x.strokeStyle="#fff";x.lineWidth=4;x.stroke();
      shText(x,s.label,xx,yy+1,{s:24,w:800,a:"center",b:"middle",c:"#0b1a12"});
      if(p){const nm=p.youth?"Júnior":lastName(p.n);
        x.fillStyle="rgba(5,13,9,.85)";const tw=Math.min(190,Math.max(80,nm.length*15+24));x.beginPath();x.roundRect(xx-tw/2,yy+40,tw,36,10);x.fill();
        shText(x,nm,xx,yy+66,{s:26,w:800,a:"center",max:180});shText(x,p.youth?64:p.r,xx,yy+100,{s:26,w:900,a:"center",c:"#ffd166"});
        if(T.cap===p){x.fillStyle="#ffd166";x.beginPath();x.arc(xx+30,yy-26,16,0,7);x.fill();shText(x,"C",xx+30,yy-25,{s:22,w:900,a:"center",b:"middle",c:"#1a1405"})}}})});
  x.restore();
}
function onzeImage(t){
  const [c,x]=shCanvas(),T=G.teams[t],S=strength(T);
  shText(x,G.names[t],60,110,{f:FD,s:84,w:900,c:colHex(t),max:960});
  shText(x,`${T.coach?T.coach.n:""} · ${T.form}`,60,165,{s:40,w:700,c:"#cfe0d4",max:960});
  shText(x,`Química ${S.chemSum}/33`+(G.theme&&THEMES[G.theme]?`   ·   ${THEMES[G.theme].n.replace(/ \(.*\)$/,"")}`:""),60,215,{s:36,w:700,c:"#ffd166",max:960});
  shPitch(x,T,t,60,250,SHW-120,880);
  const bench=T.slots.filter(s=>s.pos==="SUP"&&s.pl).map(s=>s.pl.youth?"Júnior":dn(s.pl.n));
  shText(x,"Banco: "+(bench.join(" · ")||"—"),60,1190,{s:34,w:700,c:"#cfe0d4",max:960});
  shFoot(x);return c;
}
function resultImage(){
  const st=LIVE.st,[c,x]=shCanvas(),pk=LIVE.pk&&LIVE.pk.g;
  shText(x,"RESULTADO FINAL",SHW/2,110,{f:FD,s:52,w:900,c:"#cfe0d4",a:"center"});
  shText(x,st.N[0],SHW/2-60,250,{f:FD,s:70,w:900,c:colHex(st.ci[0]),a:"right",max:430});
  shText(x,st.N[1],SHW/2+60,250,{f:FD,s:70,w:900,c:colHex(st.ci[1]),a:"left",max:430});
  shText(x,`${st.goals[0]}–${st.goals[1]}`,SHW/2,440,{f:FD,s:200,w:900,a:"center"});
  if(pk)shText(x,`Penáltis ${pk[0]}–${pk[1]}`,SHW/2,510,{s:46,w:800,c:"#ffd166",a:"center"});
  const gl=[[],[]];st.ev.filter(e=>e.goal&&e.s).forEach(e=>{if(e.m!=="PEN")gl[e.t].push(`${lastName(e.s)} ${e.m}'`)});
  [0,1].forEach(j=>gl[j].slice(0,7).forEach((l,i)=>shText(x,"⚽ "+l,j?SHW/2+60:SHW/2-60,600+i*52,{s:38,w:700,a:j?"left":"right",max:440})));
  const mv=$("mvp").textContent;if(mv)shText(x,`Homem do jogo: ${mv}`,SHW/2,1040,{s:44,w:800,c:"#ffd166",a:"center",max:960});
  [0,1].forEach(j=>{const T=st.T[j];shText(x,`${T.coach.n} · ${T.form}`,j?SHW-60:60,1130,{s:32,w:700,c:"#cfe0d4",a:j?"right":"left",max:470})});
  shText(x,new Date().toLocaleDateString("pt-PT"),SHW/2,1200,{s:32,w:600,c:"#8fb39c",a:"center"});
  shFoot(x);return c;
}
async function shareCanvas(c,name,text,msgEl){
  const blob=await new Promise(r=>c.toBlob(r,"image/png"));if(!blob){if(msgEl)msgEl.textContent="Não foi possível criar a imagem.";return}
  const file=new File([blob],name,{type:"image/png"});
  try{if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],text});if(msgEl)msgEl.textContent="";return}}catch(e){if(e&&e.name==="AbortError")return}
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.append(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},2000);
  if(msgEl)msgEl.textContent="Imagem guardada. Envia-a pelo WhatsApp a partir das tuas fotos/transferências.";
}
$("shareImg").onclick=()=>shareCanvas(resultImage(),"duelo-resultado.png",`${LIVE.st.N[0]} ${LIVE.st.goals[0]}–${LIVE.st.goals[1]} ${LIVE.st.N[1]}`,$("shareMsg"));
$("preShare").onclick=()=>{const t=G.mode==="online"?G.me:preT;shareCanvas(onzeImage(t),"duelo-onze.png",`O onze de ${G.names[t]}`,$("preNote"))};
$("brShare").onclick=()=>{const t=G.mode==="online"?G.me:(G.tourShareT||0);shareCanvas(onzeImage(t),"duelo-onze.png",`O onze de ${G.names[t]}`,null)};
/* ---- liga entre amigos: resultados guardados no servidor, por código de liga ---- */
let LEAGUE=null,LGON=false;try{store("duelo_league",null)}catch(e){}
const lgKey=n=>String(n||"").trim().toLowerCase();
const lgCode=()=>{const A="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let s="";for(let i=0;i<5;i++)s+=A[rand(A.length)];return s};
async function lgDB(){const {D,db}=await fbLoad();return {D,db}}
async function lgSave(lg,id,rec){
  if(!lg||!lg.c)return;try{const {D,db}=await lgDB();await D.set(D.ref(db,`leagues/${lg.c}/g/${id.replace(/[^A-Za-z0-9-]/g,"")}`),{d:JSON.stringify(rec),t:D.serverTimestamp()})}
  catch(e){console.warn("liga: não gravou",e&&e.code||e)}}
const curLg=()=>G&&G.lg&&G.lg.c?G.lg:null;
/* um jogo de duelo (sem bots) */
function lgDuel(st){
  const lg=curLg();if(!lg||[0,1].some(j=>isBot(st.ci[j])))return;if(G.mode==="online"&&G.me!==0)return;
  const id=(G.mode==="online"?G.online.code+"-"+(G.online.gen||0):G.seed)+"-m"+G.m;
  lgSave(lg,id,{k:"d",n:st.N,m:[{a:st.N[0],b:st.N[1],g:st.goals,p:st.pens||null,w:st.w}]});
}
/* um torneio inteiro: todos os jogos entre humanos + campeão */
function lgTour(rounds,champName,id){
  const lg=curLg();if(!lg)return;if(G.mode==="online"&&G.me!==0)return;
  const m=[];rounds.forEach(r=>r.forEach(mt=>{if(!mt.res||isBot(mt.a)||isBot(mt.b))return;m.push({a:G.names[mt.a],b:G.names[mt.b],g:mt.res.g,p:mt.res.p||null,w:mt.res.w===mt.a?0:1})}));
  lgSave(lg,id,{k:"t",n:G.names.filter((_,i)=>!isBot(i)),m,champ:champName&&!/^Bot /.test(champName)?champName:null});
}
async function lgLoad(c){const {D,db}=await lgDB();const snap=await D.get(D.ref(db,`leagues/${c}/g`));const v=snap.val()||{};
  return Object.values(v).map(x=>{try{const r=JSON.parse(x.d);r.t=+x.t||0;return r}catch(e){return null}}).filter(Boolean).sort((a,b)=>b.t-a.t)}
function lgStats(games){
  const P={},H={},nm=n=>{const k=lgKey(n);P[k]=P[k]||{n,j:0,v:0,vp:0,dp:0,d:0,gm:0,gs:0,pts:0,tit:0};P[k].n=n;return P[k]};
  games.slice().reverse().forEach(g=>{(g.m||[]).forEach(x=>{const a=nm(x.a),b=nm(x.b),w=x.w===0?a:b,l=x.w===0?b:a;
      a.j++;b.j++;a.gm+=x.g[0];a.gs+=x.g[1];b.gm+=x.g[1];b.gs+=x.g[0];
      if(x.p){w.vp++;l.dp++;w.pts+=2;l.pts+=1}else{w.v++;l.d++;w.pts+=3}
      const pk=[lgKey(x.a),lgKey(x.b)].sort().join("|");H[pk]=H[pk]||{};H[pk][lgKey(w.n)]=(H[pk][lgKey(w.n)]||0)+1});
    if(g.k==="t"&&g.champ)nm(g.champ).tit++});
  const T=Object.values(P).sort((a,b)=>b.pts-a.pts||(b.gm-b.gs)-(a.gm-a.gs)||b.gm-a.gm);
  return {T,H,P};
}
let lgTab="tab";
async function drawLeague(){
  const box=$("lgBody");box.innerHTML="";
  $("lgNone").hidden=!!LEAGUE;$("lgHas").hidden=!LEAGUE;if(!LEAGUE)return;
  $("lgName").textContent=LEAGUE.n;$("lgCodeShow").textContent=LEAGUE.c;$("lgOnChk").checked=LGON;
  document.querySelectorAll("#lgTabs .chip").forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===lgTab));
  box.append(el("p","muted","A carregar…"));
  let games;try{games=await lgLoad(LEAGUE.c)}catch(e){box.innerHTML="";box.append(el("p","msg bad","Não foi possível ler a liga. A liga só funciona no site do jogo, com internet."));return}
  box.innerHTML="";if(!games.length){box.append(el("p","muted","Ainda não há jogos nesta liga. Os jogos contam quando a liga está ligada ao criar o jogo."));return}
  const {T,H,P}=lgStats(games);
  if(lgTab==="tab"){const tb=el("table","lgTable");const hd=el("tr");["","Treinador","J","V","D","Golos","Pts","🏆"].forEach(h=>hd.append(el("th",null,HDR(h))));tb.append(hd);
    T.forEach((p,i)=>{const r=el("tr");[String(i+1),p.n,String(p.j),String(p.v+p.vp),String(p.d+p.dp),`${p.gm}–${p.gs}`,String(p.pts),p.tit?String(p.tit):""].forEach((v,j)=>r.append(el("td",j===1?"n":null,v)));tb.append(r)});
    box.append(tb,el("p","muted","Vitória 3 pontos · nos penáltis 2 (quem perde nos penáltis leva 1)."))}
  else if(lgTab==="h2h"){Object.entries(H).sort((a,b)=>Object.values(b[1]).reduce((s,v)=>s+v,0)-Object.values(a[1]).reduce((s,v)=>s+v,0)).forEach(([k,v])=>{const [a,b]=k.split("|");
      const row=el("div","hrow");row.append(el("span",null,`${P[a].n} ${v[a]||0} – ${v[b]||0} ${P[b].n}`));box.append(row)})}
  else{games.slice(0,20).forEach(g=>{const d=new Date(g.t).toLocaleDateString("pt-PT",{day:"2-digit",month:"2-digit"});
      const tx=g.k==="t"?`🏆 Torneio${g.champ?" ganho por "+g.champ:""} (${(g.n||[]).length} treinadores, ${(g.m||[]).length} jogos)`:g.m&&g.m[0]?`${g.m[0].a} ${g.m[0].g[0]}–${g.m[0].g[1]} ${g.m[0].b}${g.m[0].p?` (pen. ${g.m[0].p[0]}–${g.m[0].p[1]})`:""}`:"";
      const row=el("div","hrow");row.append(el("span","muted",d+" · "),el("span",null,tx));box.append(row)})}
}
function setLeague(lg){LEAGUE=lg;store("duelo_league",lg);drawLgPicks();drawLeague()}
function drawLgPicks(){document.querySelectorAll(".lgPick").forEach(w=>{w.hidden=!LEAGUE;const c=w.querySelector("input");if(c)c.checked=LGON;const s=w.querySelector(".lgN");if(s)s.textContent=LEAGUE?LEAGUE.n:""})}
document.querySelectorAll(".lgPick input").forEach(c=>c.onchange=()=>{LGON=c.checked;store("duelo_league_on",LGON);drawLgPicks();
  if(G&&G.mode==="online"&&G.me===0&&!G.online.go){G.lg=LEAGUE&&LGON?LEAGUE:null;pushPresence()}});
$("lgCreate").onclick=()=>{const n=$("lgNewName").value.trim().slice(0,30)||"Liga dos amigos";setLeague({c:lgCode(),n});LGON=true;store("duelo_league_on",true);drawLgPicks()};
$("lgJoin").onclick=async()=>{const c=$("lgJoinCode").value.trim().toUpperCase();if(!/^[A-Z0-9]{5}$/.test(c)){$("lgMsg").textContent="O código da liga tem 5 letras/números.";return}
  $("lgMsg").textContent="";setLeague({c,n:"Liga "+c});LGON=true;store("duelo_league_on",true);drawLgPicks()};
$("lgLeave").onclick=()=>{setLeague(null)};
$("lgOnChk").onchange=()=>{LGON=$("lgOnChk").checked;store("duelo_league_on",LGON);drawLgPicks()};
$("lgCopy").onclick=async()=>{const t=`Junta-te à minha liga do Duelo de Onzes: "${LEAGUE.n}". Abre o jogo, carrega em Liga → Entrar numa liga e escreve o código ${LEAGUE.c}.`;
  try{if(navigator.share){await navigator.share({text:t});return}}catch(e){if(e&&e.name==="AbortError")return}
  try{await navigator.clipboard.writeText(t);$("lgMsg").textContent="Convite copiado. Cola-o no WhatsApp."}catch(e){$("lgMsg").textContent=t}};
document.querySelectorAll("#lgTabs .chip").forEach(b=>b.onclick=()=>{lgTab=b.dataset.t;drawLeague()});
$("lgBtn").addEventListener("click",()=>drawLeague());
drawLgPicks();

/* ---- época da liga: draft único, calendário a duas voltas, mercado a meio, suspensões ---- */
let SEA=null,SEAC=null,SEACUR=null,seaUnsub=[],seaTab="home",seaMk=null,seaBusy=false,seaN=4;
const seaK=n=>String(n||"").trim().toLowerCase().replace(/[.#$\[\]\/]/g,"_")||"x";
const plK=n=>String(n||"").replace(/[.#$\[\]\/]/g,"_");
const seaBase=(c,sid)=>`leagues/${c}/s/${sid}`;
const pj=x=>{try{return x&&typeof x.d==="string"?JSON.parse(x.d):null}catch(e){return null}};
async function seaPut(path,obj){const {D,db}=await lgDB();return D.set(D.ref(db,path),obj==null?null:{d:JSON.stringify(obj)})}
function seaParse(raw){
  raw=raw||{};const o={m:pj(raw.m),sq:{},r:{},mk:{},live:{},tk:{}};
  ["sq","r","mk","live","tk"].forEach(k=>Object.entries(raw[k]||{}).forEach(([a,b])=>{const v=pj(b);if(v)o[k][a]=v}));
  return o;
}
async function seaSubscribe(c){
  if(SEAC===c&&seaUnsub.length)return;seaUnsub.forEach(u=>{try{u()}catch(e){}});seaUnsub=[];SEAC=c;SEA=null;SEACUR=null;
  let D,db;try{({D,db}=await lgDB())}catch(e){SEAC=null;drawSeason("A época só funciona no site do jogo, com internet.");return}
  let subSid=null,u2=null;
  seaUnsub.push(D.onValue(D.ref(db,`leagues/${c}/cur`),snap=>{SEACUR=pj(snap.val());const sid=SEACUR&&SEACUR.sid;
    if(sid!==subSid){subSid=sid;if(u2){try{u2()}catch(e){}}SEA=null;
      if(sid){u2=D.onValue(D.ref(db,seaBase(c,sid)),s2=>{SEA=seaParse(s2.val());SEA.sid=sid;seaTick();drawSeason();if(!$("sStart").hidden)drawHome()});seaUnsub.push(()=>u2&&u2())}}
    drawSeason()}));
}
/* calendário: todos contra todos (método do círculo), duas voltas com casa/fora trocados */
function seaFixtures(mem){
  const L=[...mem];if(L.length%2)L.push(null);const n=L.length,out=[];
  for(let r=0;r<n-1;r++){for(let i=0;i<n/2;i++){let h=L[i],a=L[n-1-i];if(i===0&&r%2)[h,a]=[a,h];if(h&&a)out.push({fid:`1-${r+1}-${i}`,leg:1,rd:r+1,h,a})}L.splice(1,0,L.pop())}
  const first=out.slice();first.forEach(f=>out.push({fid:`2-${f.rd}-${f.fid.split("-")[2]}`,leg:2,rd:f.rd+n-1,h:f.a,a:f.h}));
  return out;
}
function seaTable(){
  const m=SEA.m,P={};m.mem.forEach(n=>P[seaK(n)]={n,j:0,v:0,e:0,d:0,gm:0,gs:0,pts:0});
  const H={};
  Object.values(SEA.r).forEach(x=>{const h=P[seaK(x.h)],a=P[seaK(x.a)];if(!h||!a)return;h.j++;a.j++;h.gm+=x.g[0];h.gs+=x.g[1];a.gm+=x.g[1];a.gs+=x.g[0];
    if(x.g[0]>x.g[1]){h.v++;a.d++;h.pts+=3}else if(x.g[0]<x.g[1]){a.v++;h.d++;a.pts+=3}else{h.e++;a.e++;h.pts++;a.pts++}
    const k=[seaK(x.h),seaK(x.a)].sort().join("|");H[k]=H[k]||{};H[k][seaK(x.h)]=(H[k][seaK(x.h)]||0)+(x.g[0]>x.g[1]?3:x.g[0]===x.g[1]?1:0);H[k][seaK(x.a)]=(H[k][seaK(x.a)]||0)+(x.g[1]>x.g[0]?3:x.g[0]===x.g[1]?1:0)});
  return Object.values(P).sort((a,b)=>b.pts-a.pts||(b.gm-b.gs)-(a.gm-a.gs)||b.gm-a.gm||((H[[seaK(a.n),seaK(b.n)].sort().join("|")]||{})[seaK(b.n)]||0)-((H[[seaK(a.n),seaK(b.n)].sort().join("|")]||{})[seaK(a.n)]||0)||a.n.localeCompare(b.n));
}
const seaMe=()=>SEA&&SEA.m&&SEA.m.mem.find(n=>seaK(n)===seaK(myName()));
const seaThemeOk=p=>!SEA||!SEA.m||!SEA.m.th||!THEMES[SEA.m.th]||THEMES[SEA.m.th].f(p);
function seaOwned(){const s=new Set();Object.values(SEA.sq).forEach(q=>(q.sl||[]).forEach(x=>{if(x&&x.p)s.add(x.p)}));return s}
/* regras do mercado: 3 regras com jogadores livres suficientes, sorteadas uma vez e guardadas */
function seaMarketRules(){
  const own=seaOwned(),need=Math.max(6,SEA.m.mem.length*3);
  return withRng(seeded(SEA.sid+":mercado"),()=>{const out=[],cats=new Set();
    for(const r of shuffle(RULES.slice())){if(out.length>=3)break;if(cats.has(r.cat)&&out.length<2)continue;
      const n=DB.filter(p=>!own.has(p.n)&&seaThemeOk(p)&&r.t(p)&&p.r>=70).length;if(n>=need){out.push(r.l);cats.add(r.cat)}}
    return out});
}
/* passagens de estado: qualquer telemóvel que veja a condição cumprida faz a mudança */
function seaTick(){
  if(!SEA||!SEA.m||seaBusy)return;const m=SEA.m,F=seaFixtures(m.mem),done=f=>!!SEA.r[f.fid];
  const w=nm=>{seaBusy=true;seaPut(seaBase(SEAC,SEA.sid)+"/m",nm).catch(()=>{}).finally(()=>{seaBusy=false})};
  if(m.st==="leg1"&&F.filter(f=>f.leg===1).every(done)&&m.mem.every(n=>SEA.sq[seaK(n)]))w({...m,st:"market",mr:seaMarketRules()});
  else if(m.st==="market"&&m.mem.every(n=>(SEA.mk[seaK(n)]||{}).done))w({...m,st:"leg2"});
  else if(m.st==="leg2"&&F.every(done))w({...m,st:"done",ch:seaTable()[0].n});
}
/* ---- plantéis ---- */
const seaYouth=pos=>({n:"Júnior da formação",p:pos==="SUP"?"MED":pos,c:"Portugal",r:64,cl:[],tg:[],by:0,youth:true});
function seaSerialize(T,capIdx,name){return{n:name,co:T.coach.n,f:T.form,cap:capIdx,sl:T.slots.map(x=>x.pl?(x.pl.youth?{y:1}:{p:x.pl.n}):null)}}
function seaTeam(sq,susp){
  const coach=COACHES.find(c=>c.n===sq.co)||COACHES[0],T={coach,form:FORMS[sq.f]?sq.f:coach.f,picks:[],bench:[]};T.slots=buildSlots(T.form);
  (sq.sl||[]).forEach((x,i)=>{const sl=T.slots[i];if(!sl)return;let p=x&&(x.y?seaYouth(sl.pos):DBN.get(x.p));if(!p)p=seaYouth(sl.pos);sl.pl=p});
  let cap=T.slots[sq.cap]&&T.slots[sq.cap].pos!=="SUP"?T.slots[sq.cap].pl:null;
  /* suspensos: trocam com um suplente e não podem entrar */
  (susp||[]).forEach(nm=>{const i=T.slots.findIndex(x=>x.pos!=="SUP"&&x.pl&&x.pl.n===nm);if(i<0)return;
    const j=T.slots.findIndex(x=>x.pos==="SUP"&&x.pl&&!x.out&&!(susp||[]).includes(x.pl.n));if(j<0)return;
    const out=T.slots[i].pl;T.slots[i].pl=T.slots[j].pl;T.slots[j].pl=out;T.slots[j].out=true;if(cap===out)cap=null});
  T.slots.forEach(x=>{if(x.pl)(x.pos==="SUP"?T.bench:T.picks).push(x.pl)});
  if(!cap){let br=-1;T.slots.forEach(x=>{if(x.pos!=="SUP"&&x.pl&&!x.pl.youth&&x.pl.r>br){br=x.pl.r;cap=x.pl}})}
  T.cap=cap;return T;
}
function seaSusp(name,exceptFid){
  const L=Object.entries(SEA.r).filter(([f,x])=>f!==exceptFid&&(seaK(x.h)===seaK(name)||seaK(x.a)===seaK(name))).sort((a,b)=>(b[1].at||0)-(a[1].at||0));
  if(!L.length)return[];const x=L[0][1];return((x.red||{})[seaK(name)])||[];
}
function setFixed(fx){
  const teams=[seaTeam(fx.sq[0],fx.su[0]),seaTeam(fx.sq[1],fx.su[1])];
  G.fixed={fx,sn:fx.sn,teams};G.cfg=teams.map(T=>({coach:T.coach,form:T.form}));G.caps=teams.map(T=>T.slots.findIndex(x=>x.pl&&x.pl===T.cap));
  G.names=[...fx.sn];G.lg=null;
}
function seaFx(f,meFirst){
  const me=seaMe(),opp=f.h===me?f.a:f.h,sn=meFirst?[me,opp]:[f.h,f.a];
  return{c:SEAC,sid:SEA.sid,fid:f.fid,h:f.h,a:f.a,sn,sq:sn.map(n=>SEA.sq[seaK(n)]),su:sn.map(n=>seaSusp(n,f.fid))};
}
function seaPlayOnline(f){
  const fx=seaFx(f,true),me=fx.sn[0];
  newGame("online",[me,fx.sn[1]],newSeed());G.me=0;G.online={code:genCode(),n:2,uid:myUid(),ro:[{u:myUid(),n:me}],go:false};
  setFixed(fx);seaPut(seaBase(SEAC,SEA.sid)+"/live/"+f.fid,{code:G.online.code,by:me,t:Date.now()}).catch(()=>{});connect();
}
function seaPlayHere(f){newGame("local",[f.h,f.a],newSeed());G.bots={};setFixed(seaFx(f,false));render()}
/* liga: quem não joga pode ver em direto um jogo que esteja a decorrer (entra na sala só a ver, sem ocupar lugar) */
function seaWatch(f,v){
  const fx=seaFx(f,false);newGame("online",[...fx.sn],null);G.me=null;G.online={code:v.code,n:2,uid:myUid(),ro:null,go:false,watch:true};
  G.watchFid=f.fid;$("seaMsg").textContent=`👁 A ligar ao jogo ${f.h} x ${f.a}…`;connect();
  setTimeout(()=>{if(G&&G.online&&G.online.watch&&!LIVE&&!$("sSeason").hidden)$("seaMsg").textContent="O jogo ainda não começou (estão no balneário). Fica aqui que entra sozinho quando começar."},6000);
}
function watchTick(){
  if(LIVE&&!LIVE.done&&!$("sMatch").hidden){liveSync();if(LIVE.waiting!=null)drawDecision();return}
  if(LIVE)return;
  const p=[0,1].map(s=>PEERS[s]).find(q=>q&&q.lv&&typeof q.lv.k==="string");
  if(!p||!G.fixed||!G.seed)return;
  const m=+p.lv.k.slice(1);if(Number.isInteger(m)&&m>G.m)G.m=m;
  replay();$("seaMsg").textContent="";
  startMatch({a:0,b:1,key:G.seed+":m"+G.m,dk:"m"+G.m,mySide:null,spect:true,noPens:true,onDone:()=>{}});
  $("specExit").textContent="Sair e voltar à liga";$("specExit").hidden=false;
  addLine({m:0,info:true,tx:`👁 Estás a ver ${G.names[0]} x ${G.names[1]} em direto.`});
}
function watchLeave(){if(ROOM)ROOM.leave().catch(()=>{});ROOM=null;PEERS={};stopFeed();G=null;LIVE=null;$("specExit").textContent="Sair e voltar ao quadro";openSeason()}
function joinOnline(c){newGame("online",["…",myName()],null);G.me=null;G.online={code:c,n:2,uid:myUid(),ro:null,go:false};connect()}
function seaRecord(st){
  if(G.mode==="online"&&G.me!==0)return;if(G.seaRec)return;G.seaRec=1;
  const fx=G.fixed.fx,sn=G.fixed.sn,ih=sn.indexOf(fx.h),ia=sn.indexOf(fx.a),red={};
  [0,1].forEach(j=>{red[seaK(sn[j])]=Object.keys(st.stats.r||{}).filter(k=>k.startsWith(j+":")).map(k=>k.slice(2))});
  const res={h:fx.h,a:fx.a,g:[st.goals[ih],st.goals[ia]],red,at:Date.now()};
  seaPut(seaBase(fx.c,fx.sid)+"/r/"+fx.fid,res).catch(e=>console.warn("época: resultado não gravado",e));
  seaPut(seaBase(fx.c,fx.sid)+"/live/"+fx.fid,null).catch(()=>{});
}
/* fim do draft da época: cada um grava o seu plantel; quem criou grava a época */
function seaDraftDone(){
  const sea=G.online.sea;
  if(!G.seaSaved){G.seaSaved=1;const t=G.me,name=G.names[t];
    const ps=[seaPut(seaBase(sea.c,sea.sid)+"/sq/"+seaK(name),seaSerialize(G.teams[t],G.caps[t],name))];
    if(G.me===0){ps.push(seaPut(seaBase(sea.c,sea.sid)+"/m",{sid:sea.sid,st:"leg1",mem:[...G.names],ow:G.names[0],th:G.theme||"",at:Date.now()}));
      ps.push(seaPut(`leagues/${sea.c}/cur`,{sid:sea.sid}))}
    Promise.all(ps).catch(e=>console.warn("época: não gravou",e)).finally(()=>{setTimeout(()=>{if(G&&G.online&&G.online.sea){if(ROOM)ROOM.leave().catch(()=>{});ROOM=null;PEERS={};store("duelo_online",null);G=null;openSeason()}},1500)})}
  lobby("Plantéis prontos! A preparar a época…");
}
function seaNewDraft(){
  if(!LEAGUE)return;const sid=newSeed(),me=myName();
  const names=[me];while(names.length<seaN)names.push("…");newGame("online",names,newSeed());G.me=0;G.lg=null;
  G.online={code:genCode(),n:seaN,uid:myUid(),ro:[{u:myUid(),n:me}],go:false,sea:{c:LEAGUE.c,sid,n:LEAGUE.n}};
  seaPut(`leagues/${LEAGUE.c}/cur`,{sid:SEACUR&&SEACUR.sid&&SEA&&SEA.m&&SEA.m.st!=="done"?SEACUR.sid:null,draft:{sid,code:G.online.code,by:me,t:Date.now()}}).catch(()=>{});
  connect();
}
function openSeason(){document.querySelectorAll(".sheet").forEach(x=>x.hidden=true);G=null;show("sSeason");if(LEAGUE)seaSubscribe(LEAGUE.c);drawSeason()}
/* ---- ecrã da época ---- */
function seaRow(cls,...kids){const r=el("div",cls);kids.forEach(k=>r.append(k));return r}
function seaBtn(t,cls,f){const b=el("button","btn "+(cls||""),t);b.type="button";b.onclick=f;return b}
function seaForm(name){return Object.values(SEA.r).filter(x=>seaK(x.h)===seaK(name)||seaK(x.a)===seaK(name)).sort((a,b)=>(a.at||0)-(b.at||0)).slice(-4).map(x=>{const h=seaK(x.h)===seaK(name),gf=h?x.g[0]:x.g[1],ga=h?x.g[1]:x.g[0];return gf>ga?"V":gf<ga?"D":"E"})}
function drawSeason(err){
  if($("sSeason").hidden)return;
  $("seaTitle").textContent=LEAGUE?LEAGUE.n:"Liga";const body=$("seaBody"),top=$("seaTop");body.innerHTML="";top.innerHTML="";$("seaTabs").hidden=true;
  if(!LEAGUE){$("seaStatus").textContent="";
    const p=el("div","panel");p.style.cssText="display:flex;flex-direction:column;gap:10px";
    p.append(el("p","muted","Uma liga junta os teus amigos: classificação, títulos, confrontos e épocas com draft, calendário e mercado de transferências."));
    const nm=document.createElement("input");nm.type="text";nm.maxLength=30;nm.placeholder="Nome da liga (ex.: Liga do Balneário)";
    const cd=document.createElement("input");cd.type="text";cd.maxLength=5;cd.placeholder="CÓDIGO";cd.style.cssText="text-transform:uppercase;letter-spacing:.3em;font-weight:700";
    const row=el("div","askrow");row.append(cd,seaBtn("Entrar","go",()=>{$("lgJoinCode").value=cd.value;$("lgJoin").click();openSeason()}));
    p.append(nm,seaBtn("Criar liga","",()=>{$("lgNewName").value=nm.value;$("lgCreate").click();openSeason()}),el("span","lbl","ou entra na liga de um amigo"),row,el("span","msg",""));top.append(p);return}
  if(err){top.append(el("p","msg bad",err));return}
  const m=SEA&&SEA.m,me=seaMe(),dr=SEACUR&&SEACUR.draft&&Date.now()-SEACUR.draft.t<6*36e5?SEACUR.draft:null;
  const F=m?seaFixtures(m.mem):[],nDone=F.filter(f=>SEA.r[f.fid]).length;
  const ST={leg1:"1.ª volta",market:"Mercado de transferências",leg2:"2.ª volta",done:"Época terminada"};
  $("seaStatus").textContent=!SEACUR&&!m?"A carregar…":m?"":"Ainda não há época a decorrer.";
  if(m){const pr=el("div","seaProg");pr.append(seaRow("sm",el("span",null,ST[m.st]+(m.th&&THEMES[m.th]?` · ${THEMES[m.th].n.replace(/ \(.*\)$/,"")}`:"")),el("span",null,`${nDone} de ${F.length} jogos`)));
    const bar=el("div","bar"),fill=el("i");fill.style.width=(F.length?Math.round(100*nDone/F.length):0)+"%";bar.append(fill);pr.append(bar);top.append(pr)}
  if(dr&&!(m&&m.st!=="done"&&SEA.sid===dr.sid)){
    const c=el("div","seaInv");c.append(el("span",null,`📋 Draft da época a decorrer (${dr.by})`));if(seaK(dr.by)!==seaK(myName()))c.append(seaBtn("Entrar","",()=>joinOnline(dr.code)));top.append(c)}
  if(m)Object.entries(SEA.live).forEach(([fid,v])=>{const f=F.find(x=>x.fid===fid);if(!f||SEA.r[fid]||Date.now()-v.t>2*36e5)return;
    if((f.h===me||f.a===me)&&seaK(v.by)!==seaK(me))top.append(seaRow("seaInv",el("span",null,`⚽ ${v.by} está à tua espera: ${f.h} x ${f.a}`),seaBtn("Entrar","",()=>joinOnline(v.code))));
    else if(f.h!==me&&f.a!==me)top.append(seaRow("seaInv seaLive",el("span",null,`🔴 A decorrer: ${f.h} x ${f.a}`),seaBtn("Ver","",()=>seaWatch(f,v))))});
  const newSeason=()=>{const p=el("div","panel");p.style.cssText="display:flex;flex-direction:column;gap:10px";
    p.append(el("b",null,m?"Nova época":"Começar a primeira época"),el("span","lbl","Quantos treinadores?"));const ch=el("div","chips");
    for(let n=2;n<=8;n++){const b=el("button","chip",String(n));b.type="button";b.setAttribute("aria-pressed",n===seaN);b.onclick=()=>{seaN=n;drawSeason()};ch.append(b)}
    const j=seaN-1+(seaN%2);p.append(ch,el("p","muted",`Draft com todos ao mesmo tempo, ${j} jornadas na 1.ª volta, mercado (até 3 trocas) e mais ${j} na 2.ª volta. Vitória 3, empate 1.`),seaBtn("Começar a época (draft)","",seaNewDraft));return p};
  const back=()=>{const b=el("button","li seaBack","‹ Voltar à liga");b.type="button";b.onclick=()=>{seaTab="home";seaMk=null;drawSeason()};body.append(b)};
  if(!m){body.append(newSeason());seaHomeRows(body,null);return}
  if(!["home","tab","jor","sq","mk"].includes(seaTab))seaTab="home";if(seaTab==="mk"&&m.st!=="market")seaTab="home";
  const T=seaTable(),pos=n=>T.findIndex(x=>x.n===n);
  if(seaTab==="home"){
    if(m.st==="done"){const c=el("div","seaHero");c.append(el("span","sm","Campeão da época"),el("div","seaChamp",`🏆 ${m.ch}`));body.append(c)}
    else if(m.st==="market"){const c=el("div","seaHero");const mk=me&&SEA.mk[seaK(me)];c.append(el("span","sm","Mercado de transferências aberto"),el("b",null,mk&&mk.done?"Já terminaste o teu mercado. À espera dos outros…":"Faz até 3 trocas antes da 2.ª volta."),seaBtn(mk&&mk.done?"Ver mercado":"Ir ao mercado","",()=>{seaTab="mk";drawSeason()}));body.append(c)}
    else if(me){const open=m.st==="leg1"?1:2,f=F.find(x=>x.leg===open&&!SEA.r[x.fid]&&(x.h===me||x.a===me));
      if(f){const opp=f.h===me?f.a:f.h,c=el("div","seaHero");c.append(el("span","sm",`O teu próximo jogo · Jornada ${f.rd}`));
        const vs=el("div","seaVs"),side=n=>{const d=el("div","t");d.innerHTML=shieldSVG(n[0],avCol(n),52);d.append(el("b",null,n),el("span","sm",`${pos(n)+1}.º · ${T[pos(n)].pts} pts`));return d};
        vs.append(side(f.h),el("span","x","VS"),side(f.a));c.append(vs);
        if(SEA.sq[seaK(opp)]&&SEA.sq[seaK(me)]){const r=el("div","row2");r.append(seaBtn("Jogar online","",()=>seaPlayOnline(f)),seaBtn("Aqui","ghost",()=>seaPlayHere(f)));c.append(r)}
        else c.append(el("span","muted","À espera dos plantéis…"));body.append(c)}
      else body.append(el("div","seaHero",`Já fizeste todos os teus jogos desta volta. 👏`))}
    const tl=el("div","list seaTbl"),tb=el("table","lgTable");const hd=el("tr");["","Classificação","Forma","Pts"].forEach(h=>hd.append(el("th",null,h)));tb.append(hd);
    T.forEach((p,i)=>{const r=el("tr",p.n===me?"me":null);const nm=el("td","n");nm.innerHTML=shieldSVG(p.n[0],avCol(p.n),18);nm.append(" "+p.n);
      const fm=el("td");const fs=el("span","form");seaForm(p.n).forEach(x=>{const d=el("i","f"+x);fs.append(d)});fm.append(fs);
      r.append(el("td","p",String(i+1)),nm,fm,el("td","pts",String(p.pts)));tb.append(r)});tl.append(tb);body.append(tl);
    seaHomeRows(body,m);if(m.st==="done")body.append(newSeason());return}
  back();
  if(seaTab==="tab"){const tb=el("table","lgTable");const hd=el("tr");["","Treinador","J","V","E","D","Golos","Pts"].forEach(h=>hd.append(el("th",null,HDR(h))));tb.append(hd);
    T.forEach((p,i)=>{const r=el("tr",p.n===me?"me":null);[String(i+1),p.n,p.j,p.v,p.e,p.d,`${p.gm}–${p.gs}`,p.pts].forEach((v,j)=>r.append(el("td",j===1?"n":null,String(v))));tb.append(r)});
    const l=el("div","list seaTbl");l.append(tb);body.append(l,el("p","muted","Vitória 3 pontos · empate 1 · desempate: diferença de golos, golos marcados, confronto direto."))}
  if(seaTab==="jor"){const open=m.st==="leg1"?1:m.st==="leg2"?2:0;let rd=0;
    F.forEach(f=>{if(f.rd!==rd){rd=f.rd;body.append(el("span","lbl seaRd",`Jornada ${rd}${rd===1?" · 1.ª volta":f.leg===2&&F.find(x=>x.leg===2).rd===rd?" · 2.ª volta (depois do mercado)":""}`))}
      const r=SEA.r[f.fid],mine=me&&(f.h===me||f.a===me),row=el("div","seaFx"+(mine?" mine":""));
      row.append(el("span","t",`${f.h} ${r?r.g[0]+"–"+r.g[1]:"x"} ${f.a}`));
      if(!r&&mine&&open===f.leg){const opp=f.h===me?f.a:f.h;
        if(!SEA.sq[seaK(opp)]||!SEA.sq[seaK(me)])row.append(el("span","muted","plantel em falta"));
        else{const bx=el("div","seaBtns");bx.append(seaBtn("Online","",()=>seaPlayOnline(f)),seaBtn("Aqui","ghost",()=>seaPlayHere(f)));row.append(bx)}}
      else if(!r&&f.leg===2&&m.st!=="leg2")row.append(el("span","muted","🔒"));
      else if(!r&&!mine&&SEA.live[f.fid]&&Date.now()-SEA.live[f.fid].t<2*36e5){const bx=el("div","seaBtns");bx.append(seaBtn("👁 Ver","",()=>seaWatch(f,SEA.live[f.fid])));row.append(bx)}
      body.append(row)})}
  if(seaTab==="sq")seaDrawSquad(body,me,m.st==="market");
  if(seaTab==="mk")seaDrawMarket(body,me);
}
function seaHomeRows(body,m){
  const L=el("div","list"),row=(t,v,f)=>{const b=el("button","li");b.type="button";b.append(el("span",null,t),el("span","v",v||"›"));b.onclick=f;L.append(b)};
  if(m){if(m.st==="market")row("🔁 Mercado de transferências","aberto",()=>{seaTab="mk";drawSeason()});
    else if(m.st==="leg1")row("🔁 Mercado de transferências","depois da 1.ª volta",()=>{});
    row("📅 Todas as jornadas","",()=>{seaTab="jor";drawSeason()});row("📊 Classificação completa","",()=>{seaTab="tab";drawSeason()});row("👕 Plantéis","",()=>{seaTab="sq";drawSeason()})}
  row("✉️ Convidar amigos",LEAGUE.c,()=>$("lgCopy").click());
  row("🚪 Sair da liga","",()=>{if(confirm("Sair desta liga neste telemóvel? Os resultados ficam guardados.")){setLeague(null);seaUnsub.forEach(u=>{try{u()}catch(e){}});seaUnsub=[];SEAC=null;SEA=null;drawSeason()}});
  body.append(L);
}
function seaDrawSquad(body,me,edit){
  const names=SEA.m.mem;const pick=el("div","chips");let who=SEA.showSq&&names.includes(SEA.showSq)?SEA.showSq:me||names[0];
  names.forEach(n=>{const b=el("button","chip",n);b.type="button";b.setAttribute("aria-pressed",n===who);b.onclick=()=>{SEA.showSq=n;drawSeason()};pick.append(b)});body.append(pick);
  const sq=SEA.sq[seaK(who)];if(!sq){body.append(el("p","muted","Plantel ainda não gravado."));return}
  const T=seaTeam(sq,[]),S=strength(T),su=seaSusp(who,"");
  body.append(el("p","muted",`${T.coach.n} · ${T.form} · Química ${S.chemSum}/33`+(su.length?` · 🟥 suspenso no próximo jogo: ${su.map(lastName).join(", ")}`:"")));
  T.slots.forEach((x,i)=>{const p=x.pl;const row=el("div","seaPl");row.append(el("span","pos",x.label),el("span","n",(p?p.youth?"Júnior da formação":dn(p.n):"—")+(p&&p===T.cap?" (C)":"")),el("span","r",p?String(p.youth?64:p.r):""));body.append(row)});
  if(edit&&who===me){const c=el("div","panel");c.style.cssText="display:flex;flex-direction:column;gap:8px;margin-top:8px";
    c.append(el("span","lbl","Capitão"));const cc=el("div","chips");T.slots.forEach((x,i)=>{if(x.pos==="SUP"||!x.pl||x.pl.youth)return;const b=el("button","chip",lastName(x.pl.n));b.type="button";b.setAttribute("aria-pressed",x.pl===T.cap);
      b.onclick=()=>seaSaveSq({...sq,cap:i});cc.append(b)});c.append(cc);
    c.append(el("span","lbl","Formação"));const fc=el("div","chips");Object.keys(FORMS).forEach(f=>{const b=el("button","chip",f);b.type="button";b.setAttribute("aria-pressed",f===T.form);
      b.onclick=()=>{const R=reform(T,f),capP=T.cap;seaSaveSq(seaSerialize(R,R.slots.findIndex(x=>x.pl===capP),sq.n))};fc.append(b)});c.append(fc);body.append(c)}
}
function seaSaveSq(sq){return seaPut(seaBase(SEAC,SEA.sid)+"/sq/"+seaK(sq.n),sq).catch(()=>{$("seaMsg").textContent="Não foi possível gravar."})}
function seaDrawMarket(body,me){
  const m=SEA.m,mk=SEA.mk[seaK(me)]||{sw:[null,null,null],done:false},sq=SEA.sq[seaK(me)];
  if(!me||!sq){body.append(el("p","muted","Não tens equipa nesta época."));return}
  body.append(el("p","muted","Até 3 trocas: sai um jogador do teu plantel e entra um jogador livre que cumpra a regra dessa troca, para a mesma posição (ou para o banco). Quem confirmar primeiro fica com o jogador. A 2.ª volta começa quando todos terminarem (ou quando "+m.ow+" fechar o mercado)."));
  (m.mr||[]).forEach((rl,k)=>{const sw=(mk.sw||[])[k],card=el("div","panel seaMk");card.append(el("span","lbl",`Troca ${k+1} · regra`),el("b",null,rl));
    if(sw)card.append(el("p",null,`⬇ ${dn(sw.o)}   ⬆ ${dn(sw.i)}`));
    else if(mk.done)card.append(el("p","muted","Sem troca."));
    else if(seaMk&&seaMk.k===k)seaMkForm(card,k,rl,sq,mk);
    else card.append(seaBtn("Fazer esta troca","ghost",()=>{seaMk={k,out:null};drawSeason()}));
    body.append(card)});
  if(!mk.done)body.append(seaBtn("Terminei o mercado","",()=>seaPut(seaBase(SEAC,SEA.sid)+"/mk/"+seaK(me),{...mk,sw:mk.sw||[null,null,null],done:true})));
  else body.append(el("p","msg ok","Terminaste o mercado. À espera dos outros…"));
  const st=m.mem.map(n=>`${n}: ${(SEA.mk[seaK(n)]||{}).done?"✓":"a decidir…"}`).join(" · ");body.append(el("p","muted",st));
  m.mem.forEach(n=>{const x=SEA.mk[seaK(n)];if(!x||n===me)return;(x.sw||[]).forEach(w=>{if(w)body.append(el("p","muted",`${n}: ⬇ ${dn(w.o)} ⬆ ${dn(w.i)}`))})});
  if(seaK(m.ow)===seaK(me))body.append(seaBtn("Fechar o mercado para todos","ghost",()=>seaPut(seaBase(SEAC,SEA.sid)+"/m",{...m,st:"leg2"})));
}
function seaMkForm(card,k,rl,sq,mk){
  const rule=RULES.find(r=>r.l===rl),T=seaTeam(sq,[]);
  if(seaMk.out==null){card.append(el("span","lbl","Quem sai?"));const c=el("div","chips");
    T.slots.forEach((x,i)=>{if(!x.pl)return;const b=el("button","chip",`${x.label} ${x.pl.youth?"Júnior":lastName(x.pl.n)}`);b.type="button";b.onclick=()=>{seaMk={k,out:i};drawSeason()};c.append(b)});
    card.append(c,seaBtn("Cancelar","ghost",()=>{seaMk=null;drawSeason()}));return}
  const sl=T.slots[seaMk.out],own=seaOwned();
  card.append(el("p",null,`Sai: ${sl.pl.youth?"Júnior da formação":dn(sl.pl.n)} (${sl.label}). Quem entra?`));
  const inp=document.createElement("input");inp.type="text";inp.placeholder="Escreve o nome";inp.autocomplete="off";const L=el("div","list");
  const draw=()=>{L.innerHTML="";const q=inp.value.trim();if(key(q).length<2){L.append(el("div","empty","Continua a escrever…"));return}
    const c=suggest(q,sl.pos,sl.label).filter(p=>!own.has(p.n)&&!SEA.tk[plK(p.n)]&&seaThemeOk(p));
    if(!c.length){L.append(el("div","empty","Nenhum jogador livre com esse nome para esta posição."));return}
    c.forEach(p=>{const ok=rule&&rule.t(p),b=el("button","pl"+(ok?"":" taken"));b.append(el("span","pos "+p.p,p.p),(()=>{const nm=el("span","nm",dn(p.n));nm.append(el("small",null,ok?`${p.c}`:"não cumpre a regra"));return nm})(),el("span","rt",""));
      b.type="button";if(!ok)b.disabled=true;else b.onclick=()=>seaSign(k,p,sq,mk);L.append(b)})};
  inp.oninput=draw;card.append(inp,L,seaBtn("Cancelar","ghost",()=>{seaMk=null;drawSeason()}));draw();setTimeout(()=>inp.focus(),50);
}
async function seaSign(k,p,sq,mk){
  const me=sq.n,i=seaMk.out,out=sq.sl[i];$("seaMsg").textContent="A contratar…";
  try{await seaPut(seaBase(SEAC,SEA.sid)+"/tk/"+plK(p.n),{by:me,t:Date.now()})}catch(e){$("seaMsg").textContent=`${dn(p.n)} acabou de ser contratado por outro treinador.`;return}
  const nsq={...sq,sl:sq.sl.map((x,j)=>j===i?{p:p.n}:x)},sw=[...(mk.sw||[null,null,null])];sw[k]={o:out&&out.p?out.p:"Júnior da formação",i:p.n};
  await seaSaveSq(nsq);await seaPut(seaBase(SEAC,SEA.sid)+"/mk/"+seaK(me),{sw,done:false});seaMk=null;$("seaMsg").textContent=`✅ ${dn(p.n)} contratado!`;
}

$("lgSeason").onclick=()=>openSeason();
$("toSeason").onclick=()=>{if(G&&G.mode==="online"){if(ROOM)ROOM.leave().catch(()=>{});ROOM=null;PEERS={};store("duelo_online",null)}stopMatchUI();G=null;openSeason()};

/* ---- página principal, jogo rápido e perfil ---- */
let VS=(()=>{const v=store("duelo_vs");return v==="bot"?"bot":"amigo"})();
const avCol=n=>COLHEX[[...String(n||"?")].reduce((a,c)=>a+c.charCodeAt(0),0)%COLHEX.length];
function shieldSVG(l,c,s){return`<svg width="${s}" height="${Math.round(s*1.15)}" viewBox="0 0 40 46" aria-hidden="true"><path d="M20 2 L37 8 V22 C37 34 29 41 20 44 C11 41 3 34 3 22 V8 Z" fill="${c}" stroke="rgba(255,255,255,.85)" stroke-width="2"/><text x="20" y="30" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="19" fill="#0a0d12">${String(l||"?").toUpperCase()}</text></svg>`}
function drawHome(){
  const nm=myName(),o=store("duelo_online");
  const lo=store("duelo_local");
  if(o&&o.code){$("resumeBtn").hidden=false;$("resumeTxt").textContent=`Continuar o jogo ${o.code}`;$("resumeBtn").querySelector("small").textContent="Jogo online a meio";$("contCrest").innerHTML=shieldSVG((o.name||nm||"?")[0],avCol(o.name||nm),30)}
  else if(lo&&Array.isArray(lo.names)){$("resumeBtn").hidden=false;$("resumeTxt").textContent="Continuar o jogo";
    $("resumeBtn").querySelector("small").textContent=lo.mode==="tour"?"Torneio a meio":(lo.bots&&Object.keys(lo.bots).length?`Contra o ${lo.names[1]||"bot"}, a meio`:`${lo.names[0]} x ${lo.names[1]}, a meio`);
    $("contCrest").innerHTML=shieldSVG((lo.names[0]||"?")[0],avCol(lo.names[0]),30)}
  else $("resumeBtn").hidden=true;
  let tx="Épocas com draft e mercado";
  if(LEAGUE){tx=LEAGUE.n;if(SEA&&SEA.m&&SEAC===LEAGUE.c){const m=SEA.m,me=seaMe();
    if(m.st==="market")tx="Mercado aberto";else if(m.st==="done")tx=`Campeão: ${m.ch}`;
    else if(me){const F=seaFixtures(m.mem),f=F.find(x=>x.leg===(m.st==="leg1"?1:2)&&!SEA.r[x.fid]&&(x.h===me||x.a===me));if(f)tx=`Jornada ${f.rd} · tu x ${f.h===me?f.a:f.h}`}}
    else seaSubscribe(LEAGUE.c)}
  $("cardLigaTx").textContent=tx;
}
function drawQuick(){
  document.querySelectorAll("#qVs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===VS));$("qAmigo").hidden=VS!=="amigo";$("qBot").hidden=VS!=="bot";
  document.querySelectorAll("#qLv .chip").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.lv===botLv));drawThChips();drawTmChips();
}
$("cardQuick").onclick=()=>{unlockAudio();$("q0").value=$("n0").value;$("q1").value=$("n1").value;$("qb").value=$("n0").value;drawQuick();show("sQuick")};
document.querySelectorAll("#qVs button").forEach(b=>b.onclick=()=>{VS=b.dataset.v;store("duelo_vs",VS);drawQuick()});
document.querySelectorAll("#qLv .chip").forEach(b=>b.onclick=()=>{botLv=+b.dataset.lv;store("duelo_botlv",botLv);drawQuick()});
$("qGo").onclick=()=>{unlockAudio();
  if(VS==="amigo"){$("n0").value=$("q0").value;$("n1").value=$("q1").value;$("goBtn").click()}
  else{$("bName").value=$("qb").value;$("bGo").click()}};
$("cardOnline").onclick=()=>{unlockAudio();$("onlineBtn").click()};
$("cardTour").onclick=()=>{unlockAudio();$("tourBtn").click()};
$("cardLiga").onclick=()=>openSeason();
$("goMe").onclick=()=>{drawMe();show("sMe")};
/* as definições passam a viver no ecrã do perfil */
(()=>{const src=document.querySelector("#shOpts .sheetIn"),dst=$("meOpts");[...src.children].forEach(c=>{if(!c.classList.contains("shHead"))dst.append(c)})})();
function drawMe(){const nm=myName();$("meName").value=$("n0").value;$("meAv").textContent=(nm.trim()[0]||"?").toUpperCase();$("meAv").style.background=avCol(nm);$("meVer").textContent=$("verTag").textContent}
$("meName").addEventListener("input",()=>{$("n0").value=$("meName").value;store("duelo_names",[$("n0").value.trim(),$("n1").value.trim()]);drawMe()});
$("meHist").onclick=()=>{drawHistory();openSheet("shHist")};
function goTab(id){if(id==="sSeason")return openSeason();if(id==="sMe"){drawMe();show("sMe");return}G=null;show("sStart")}
document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>$(b.dataset.back).click());
document.querySelectorAll("[data-home]").forEach(b=>b.onclick=()=>{G=null;show("sStart")});
drawHome();
/* primeira vez: boas-vindas com o nome */
$("wGo").onclick=()=>{const v=$("wName").value.trim();if(!v){$("wMsg").textContent="Escreve o teu nome.";return}$("n0").value=v;store("duelo_names",[v,$("n1").value.trim()]);store("duelo_welcome",1);G=null;show("sStart")};
$("wName").addEventListener("keydown",e=>{if(e.key==="Enter")$("wGo").click()});
if(!store("duelo_welcome")&&!$("sStart").hidden){if(store("duelo_names")&&(store("duelo_names")[0]||"").trim()){store("duelo_welcome",1)}else{show("sWelcome")}}


/* ---- som e festa ---- */
let AC=null;
const soundOn=()=>$("sndOn").checked;
$("sndOn").checked=store("duelo_snd")!==false;$("sndOn").onchange=()=>store("duelo_snd",$("sndOn").checked);
function unlockAudio(){if(!soundOn())return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume()}catch(e){AC=null}}
function goalSound(){
  if(!soundOn()||!AC||AC.state!=="running")return;
  try{const len=AC.sampleRate*1.6,buf=AC.createBuffer(1,len,AC.sampleRate),d=buf.getChannelData(0);
    for(let i=0;i<len;i++){const x=i/len;d[i]=(Math.random()*2-1)*Math.min(1,x*6)*Math.pow(1-x,1.5)}
    const src=AC.createBufferSource(),bp=AC.createBiquadFilter(),g=AC.createGain();bp.type="bandpass";bp.frequency.value=900;bp.Q.value=.7;g.gain.value=.5;
    src.buffer=buf;src.connect(bp).connect(g).connect(AC.destination);src.start()}catch(e){}
}
function whistle(n){
  if(!soundOn()||!AC||AC.state!=="running")return;
  try{for(let k=0;k<n;k++){const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+k*.42;o.type="sine";o.frequency.setValueAtTime(2900,t);
    const lfo=AC.createOscillator(),lg=AC.createGain();lfo.frequency.value=28;lg.gain.value=90;lfo.connect(lg).connect(o.frequency);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.12,t+.02);g.gain.setValueAtTime(.12,t+(k===n-1&&n>1?.55:.28));g.gain.linearRampToValueAtTime(0,t+(k===n-1&&n>1?.6:.32));
    o.connect(g).connect(AC.destination);o.start(t);lfo.start(t);o.stop(t+.7);lfo.stop(t+.7)}}catch(e){}
}
function confetti(color){
  if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const c=$("fx"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;c.hidden=false;
  const cols=[color||"#ffd166","#ffd166","#eef6ef","#7fe0a8"],P=Array.from({length:120},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.5,v:2+Math.random()*3,s:4+Math.random()*5,a:Math.random()*6,c:any(cols)}));
  let t0=performance.now();
  (function f(t){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.y+=p.v;p.a+=.1;x.fillStyle=p.c;x.save();x.translate(p.x+Math.sin(p.a)*8,p.y);x.rotate(p.a);x.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);x.restore()});
    if(t-t0<2800)requestAnimationFrame(f);else{x.clearRect(0,0,c.width,c.height);c.hidden=true}})(t0);
}
drawHistory();

$("langBtn").textContent=LANG==="en"?"🌐 Português":"🌐 English";$("langBtn").onclick=()=>setLang(LANG==="en"?"pt":"en");
$("meLangV").textContent=LANG==="en"?"English":"Português";$("meLang").onclick=()=>setLang(LANG==="en"?"pt":"en");
