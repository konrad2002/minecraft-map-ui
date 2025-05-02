function send2Redis(msg) {
    console.log(`event:${msg}`);

    window.sendToRedis(msg);
}

function jumpFight(id) {
    send2Redis(`send to fight: ${id}`);
}
