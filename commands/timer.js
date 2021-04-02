client.on("hehehe", () => {
  var content = "Tmj";
  var channel = client.guilds.cache
    .get("Sim") // Id do Servidor
    .channels.cache.get("691017619527958570"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel.send(content); 
  }, 1000 * 60 * 60 * 1); 
  channel.send(content);
  console.log("Tmj mesmo, se cuida!!");
})