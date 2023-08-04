function Run(server){
    this._server = server
}

Run.prototype.startup = async function() {
    await this._server.start()
}

module.exports = Run