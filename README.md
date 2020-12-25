# Terminal IoT para o URA
Prompt de comandos para acessar um robô do URA via mqtt
* É possível enviar comandos existentes usando botões 
* Possível visualizar a última mensagem que chegou em um canal 
* Falta implementar a caixa de texto para receber um comando com escrita livre

Nesta versão de teste apenas dois canais estão disponíveis para uso:
* "URA01/input" para enviar comandos para o robô
* "URA01/output" para receber informações do robô 

Todo:
* Encontrar ou instalar um servidor MQTT com suporte a wss (MQTT over WebSockets, encrypted) 
* Configurar este projeto para conectar a este servidor 

Esta aplicação está em desenvolvimento e pode ser acessada em: 
???
