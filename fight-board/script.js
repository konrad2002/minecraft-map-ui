function send2Redis(msg) {
    console.log(`[REDIS]: ${msg}`);

//    window.sendToRedis(msg);
}

function jumpFight(id) {
    send2Redis(`send to fight: ${id}`);
}
