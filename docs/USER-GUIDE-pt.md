# Livro de registo de manutenção de máquinas: guia do utilizador

O Livro de registo de manutenção de máquinas permite acompanhar a identificação dos equipamentos, as horas de funcionamento, os valores de calibração, as periodicidades de assistência, os custos de reparação e o histórico de inspeções em estúdios de tatuagem, piercers e técnicos de manutenção de material de arte corporal.

## Para que serve este registo

O Livro de registo de manutenção de máquinas faculta um inventário estruturado para cada máquina rotativa, de bobinas, tipo caneta (pen) ou fonte de alimentação existente no estúdio. Regista a proveniência dos equipamentos, os números de série originais dos fabricantes, os contactos dos distribuidores, as datas de termo de garantia, as bancadas de trabalho e os tatuadores designados.

A aplicação apoia a gestão dos trabalhos periódicos de oficina: calibração da voltagem de trabalho, higienização por ultrassons, substituição do encaixe de cartuchos de agulhas, revisão de motores e rolamentos, verificação de cabos RCA, esterilização de punhos e substituição de peças de desgaste. Calcula o acréscimo de horas de uso entre assistências consecutivas, alerta a equipa do estúdio quando expiram os prazos programados, totaliza as despesas por máquina e por ano civil, e gera ficheiros iCalendar sem necessidade de ligação à internet para organizar as intervenções de bancada.

## A quem se destina

- **Proprietários e gerentes de estúdios de tatuagem** que coordenam o equipamento comum, supervisionam os calendários de assistência entre várias bancadas e controlam as despesas anuais de manutenção.
- **Tatuadores residentes, convidados e piercers** que gerem o seu material individual, anotam os ajustes de tensão de trabalho recomendados e monitorizam o desgaste mecânico dos motores.
- **Responsáveis pelos procedimentos de higiene e segurança** encarregados de manter atualizadas as folhas de inspeção e articular as pastas físicas de faturas com as fichas informáticas.
- **Técnicos de reparação e construtores de máquinas** que realizam revisões de bancada, mudam rolamentos e documentam o tempo de funcionamento prestado aos seus estúdios clientes.

## Como utilizar

### Consultar alertas de assistência e descarregar lembretes para a agenda

1. Verifique a barra superior `Manutenções previstas e em atraso`. Os equipamentos que tenham ultrapassado os limites definidos apresentam a indicação `Em atraso há {days} dias` ou `Excesso de {hours} horas de funcionamento`.
2. Quando uma intervenção se encontrar agendada para os catorze dias seguintes, a barra apresenta `Prevista para daqui a {days} dias`.
3. Clique no botão `Descarregar ficheiro .ics` junto do equipamento em causa para obter um ficheiro de evento contendo o nome da máquina, o número de série, a bancada e o tatuador atribuído.
4. Quando todos os equipamentos ativos cumprem as metas estabelecidas, a barra apresenta a mensagem `Todos os equipamentos ativos estão em conformidade.`.

### Registar um novo equipamento no inventário

1. Aceda ao separador `Inventário de máquinas` na barra de navegação.
2. Na área de registo, insira a designação ou o código interno em `Nome da máquina / ID`. Este campo é obrigatório.
3. Preencha as caraterísticas técnicas em `Número de série`, `Modelo` e `Fornecedor / Distribuidor`.
4. Indique as datas de referência em `Data de aquisição` e `Fim da garantia`.
5. Indique a localização na oficina em `Bancada de trabalho / Sala` e o profissional responsável em `Tatuador atribuído`.
6. Defina os parâmetros de alerta em `Intervalo de manutenção (dias)` ou `Intervalo de manutenção (horas)`.
7. Clique em `Guardar equipamento` para incluir a máquina na tabela do inventário.

### Gerir o estado operacional e desativar máquinas

1. No separador `Inventário de máquinas`, localize o equipamento na tabela `Máquinas registadas`. As máquinas em funcionamento ativo apresentam o identificador verde `Em atividade`.
2. Se um aparelho for vendido, encostado ou guardado como reserva de emergência, clique em `Desativar` na coluna `Operações disponíveis`.
3. Confirme a ação na janela de diálogo. A máquina passará a figurar com o estado `Desativada`. Todo o seu histórico anterior permanece acessível para consulta documental, mas a máquina deixa de figurar nos alertas de assistência imediata.
4. Para reintegrar uma máquina guardada no ritmo de trabalho normal, clique em `Reativar`.

### Registar uma intervenção técnica

1. Aceda ao separador `Registo de intervenções` na barra de navegação.
2. Escolha o equipamento no menu pendente `Selecionar equipamento`.
3. Indique a data de realização dos trabalhos em `Data do serviço`.
4. Indique o valor acumulado em `Horas de uso acumuladas` caso a sua fonte de alimentação ou temporizador meça o tempo de funcionamento.
5. Selecione a operação efetuada sob `Tipo de intervenção`: `Calibração de voltagem`, `Higienização e desinfeção`, `Substituição do encaixe de cartuchos`, `Revisão geral (motor/rolamentos)`, `Verificação de cabo / ficha RCA`, `Esterilização do punho`, `Substituição de peças` ou `Outra intervenção`.
6. Preencha os restantes parâmetros técnicos: tensão de trabalho em `Tensão de operação (V)`, peças instaladas em `Peças substituídas`, valor faturado em `Custo total` e a cota do documento em `Referência de arquivo (pasta física / fatura)`.
7. Aponte observações práticas de oficina em `Notas de oficina`.
8. Clique em `Adicionar ao registo` para guardar o apontamento.

### Filtrar e consultar o histórico de manutenção

1. Utilize a barra de filtragem para refinar os registos: filtre por espaço através de `Todas as bancadas / salas`, por profissional através de `Todos os artistas`, por equipamento através de `Todos os equipamentos`, por tipo de assistência através de `Todas as naturezas`, ou por condição operacional através de `Situação: Todas`, `Situação: Apenas ativas` e `Situação: Apenas desativadas`.
2. Na tabela de registos, a coluna `Horas (Diferença)` calcula o tempo de funcionamento decorrido desde a assistência anterior da mesma natureza através da fórmula `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.
3. Se desejar eliminar um registo gravado por lapso, clique no botão `Apagar` (`×`) situado nessa mesma linha e confirme a anulação.

### Analisar peças substituídas e despesas da oficina

1. Abra o separador `Peças e despesas` na barra de ferramentas.
2. No painel `Despesas totais por equipamento`, analise a listagem de componentes em `Peças substituídas`, a demonstração matemática em `Cálculo discriminado` e o valor total apurado em `Despesa global`.
3. No painel `Despesas totais por ano civil`, examine a quantidade de intervenções efetuadas e as verbas anuais investidas na conservação do material.

### Criar e restaurar cópias de segurança

1. Aceda ao separador `Cópia e restauro` na barra de menus.
2. Clique em `Exportar cópia JSON` para descarregar um ficheiro autónomo com todos os equipamentos, folhas de intervenção e prazos de controlo.
3. Para transferir os dados para outro computador ou restaurar as folhas após limpar a cache do navegador, clique em `Repor cópia JSON`, selecione o ficheiro pretendido e confirme a reposição.
4. Para apagar definitivamente todos os registos guardados na memória local, clique em `Limpar todos os dados` e confirme o aviso.

## O que esta ferramenta não faz

- Não calcula amortizações contabilísticas de equipamento, prazos de recuperação do investimento inicial nem limiares de rentabilidade por hora de trabalho; essas análises económicas pertencem ao simulador [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/).
- Não compara valores de aluguer de bancada, tabelas horárias nem percentagens de partilha de receitas entre artistas; o estudo de preços do estúdio é assegurado pela ferramenta [Studio Pricing Benchmark](https://poliinternational.com/studio-pricing-benchmark/).
- Não regista ciclos de esterilização em autoclave a vapor, testes biológicos com esporos nem tiras de viragem química; a rastreabilidade das autoclaves é feita no [Autoclave & Sterilization Calculator](https://poliinternational.com/autoclave-calculator/).
- Não controla lotes de joalharia de piercing estéril, relatórios de fundição de fábrica nem ensaios de conformidade de ligas metálicas; os certificados de fundição e as normas de ligas verificam-se com o [Biocompatibility Material Checker](https://poliinternational.com/material-certification-checker/).

## Onde ficam guardados os seus dados

O inventário das suas máquinas e o historial das assistências técnicas permanecem exclusivamente armazenados na memória local do navegador web do dispositivo que estiver a utilizar. O programa tira partido da funcionalidade `localStorage` do navegador e não envia quaisquer elementos técnicos, números de série, custos ou nomes de tatuadores para a Poli International ou para qualquer servidor remoto.

Como a informação se encontra unicamente no seu dispositivo, qualquer limpeza dos dados de navegação, esvaziamento da cache ou utilização de janelas em modo privado apagará os seus registos. Recomenda-se a transferência periódica de uma cópia de salvaguarda através de `Exportar cópia JSON` antes de levar a cabo limpezas no sistema operativo ou no navegador.

Um ficheiro de cópia de segurança JSON integral reúne a versão do esquema informático, o carimbo de data e hora da exportação, as fichas descritivas das máquinas e todos os relatórios de intervenção técnica. A exportação em ficheiro CSV faculta uma folha de cálculo formatada e pronta para trabalhar em aplicações de cálculo numérico.

## Impressão e formatos de exportação

- **Folhas de cálculo em CSV**: no separador `Registo de intervenções`, clique em `Exportar ficheiro CSV` para descarregar uma tabela com datas, máquinas, salas, artistas, tipos de assistência, horas acumuladas, voltagens, componentes, despesas, cotas de arquivo e apontamentos técnicos.
- **Lembretes de agenda**: no aviso `Manutenções previstas e em atraso` ou na lista de `Inventário de máquinas`, clique em `Descarregar ficheiro .ics` para criar compromissos compatíveis com o Google Calendar, Apple Calendário ou Microsoft Outlook.
- **Cópias integrais em JSON**: no separador `Cópia e restauro`, clique em `Exportar cópia JSON` para gerar uma cópia de salvaguarda completa para mudança de computador ou manutenção de arquivo.
- **Relatórios em papel**: utilize o comando de impressão do navegador (Ctrl+P ou Cmd+P) a partir de qualquer ecrã. O modelo de impressão oculta automaticamente botões, barras de navegação e fundos coloridos, compondo tabelas limpas para arquivar nas pastas físicas de inspeção do estúdio.

## Perguntas frequentes

### Como posso saber quando uma máquina de tatuagem necessita de manutenção?
O programa compara de forma contínua as máquinas em funcionamento ativo com os intervalos configurados. Logo que o prazo em dias decorridos tenha expirado ou as horas de funcionamento acumuladas ultrapassem o valor estipulado desde a última revisão, a caixa superior assinala o aparelho como em atraso. Caso uma data limite se situe dentro dos catorze dias imediatos, o sistema emite um aviso de assistência iminente.

### É possível definir periodicidades de manutenção por horas de funcionamento em vez de dias de calendário?
Sim, cada ficha de equipamento permite estipular um intervalo medido em horas de uso, em dias de calendário, ou cumulativamente em ambas as modalidades. Ao registar as horas marcadas na fonte de alimentação em cada assistência, o programa monitoriza o total de horas cumpridas e emite o respetivo alerta quando o patamar for atingido.

### O que acontece aos relatórios técnicos de uma máquina quando esta é desativada?
A desativação de uma máquina salvaguarda todas as fichas de intervenção, despesas de oficina e calibrações de voltagem registadas no passado. O aparelho é apenas retirado do painel de revisões urgentes e dos avisos da agenda, permanecendo acessível para consulta através dos filtros de pesquisa.

### Onde ficam gravados os dados sobre as máquinas registadas?
Todas as informações são guardadas localmente na memória do navegador do computador, tablet ou telemóvel que estiver a utilizar. Não é feita nenhuma transmissão de dados de máquinas, números de série, custos ou nomes de profissionais através da internet, nem se efetuam gravações nos servidores da Poli International.

### Como transferir o livro de registo para outro computador ou tablet?
Abra o separador `Cópia e restauro` no seu computador habitual e clique em `Exportar cópia JSON` para descarregar a base de dados do estúdio. Transfira esse ficheiro para o novo aparelho, abra a aplicação nesse dispositivo, clique em `Repor cópia JSON` e selecione o ficheiro transferido para recuperar todas as máquinas e fichas de assistência.

### Para que serve o campo da referência de arquivo?
A referência de arquivo permite ligar cada registo digital aos comprovativos impressos arquivados no estúdio, tais como pastas de faturas, recibos de peças ou relatórios do fabricante. Ao anotar o número da fatura ou o identificador do dossiê, a equipa pode apresentar prontamente os originais em papel no decorrer de uma inspeção sanitária.

### Posso exportar as datas de assistência para o Google Calendar ou Apple Calendário?
Sim, ao carregar no botão `Descarregar ficheiro .ics` junto de qualquer equipamento com assistência devida, é transferido um ficheiro de evento de formato universal. Ao abrir este ficheiro, pode integrá-lo de imediato no Google Calendar, Apple Calendário ou Microsoft Outlook para dispor de notificações locais.

### De que forma o livro calcula a diferença de horas de funcionamento entre assistências?
Sempre que introduzir um valor de horas no ato do registo, o sistema procura a ficha de assistência anterior para essa mesma máquina e para essa mesma tipologia de trabalho. Em seguida, subtrai a leitura antiga da leitura atual e apresenta o número exato de horas de funcionamento executadas entre as duas assistências.

## Limites da ferramenta

O Livro de registo de manutenção de máquinas destina-se ao apoio administrativo e à gestão de custos no estúdio, não dispondo de meios para avaliar o estado mecânico real do seu material. O programa não consegue diagnosticar o desgaste do motor, a folga de rolamentos, defeitos no isolamento elétrico, a perda de tensão nas molas ou a eficácia dos métodos de esterilização.

Tatuadores, piercers e responsáveis de estúdio mantêm a responsabilidade exclusiva pelo exame físico dos seus aparelhos, pela verificação da segurança das instalações elétricas, pelo cumprimento rigoroso das orientações dos fabricantes e pela aplicação estrita das regras higiénico-sanitárias. O registo informático complementa as boas práticas do dia a dia na bancada, não dispensando uma inspeção técnica presencial levada a cabo por um técnico qualificado.
