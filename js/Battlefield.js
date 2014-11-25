var Battlefield = function (first_faction, second_faction) {
    this.battlefield = [];
    this.faction1 = first_faction;
    this.faction2 = second_faction;
    this.faction1Base = "";
    this.faction2Base = "";
    this.faction1Tanks = [];
    this.faction2Tanks = [];
    this.faction1Orders = "";
    this.faction2Orders = "";
    this.faction1Reports = "";
    this.faction2Reports = "";

};

Battlefield.prototype.generateBattlefield = function () {
    var boardSize = 250;

    this.battlefield = Array(boardSize);
    for(y = 0 ; y < boardSize ; y++ ) {
        this.battlefield[y] = Array(boardSize);
        for(x = 0 ; x < boardSize ; x++ ) {
            var rand = Math.floor(Math.random() * 1000);
            this.battlefield[y][x] = 0;
        }
    }

    console.log(this.battlefield);
};

Battlefield.prototype.setupTeam = function (faction, json) {
};

Battlefield.prototype.tankReport = function (faction) {

};

Battlefield.prototype.objectReport = function (faction) {

};

Battlefield.prototype.generateReports = function () {
    var tankReport = this.tankReport(this.faction1);
    var objectReport = this.objectReport(this.faction1);
    this.faction1Reports = tankReport + objectReport;
    tankReport = this.tankReport(this.faction2);
    objectReport = this.objectReport(this.faction2);
    this.faction2Reports = tankReport + objectReport;
};

Battlefield.prototype.executeOrders = function () {

};

Battlefield.prototype.clearOrders = function () {
    this.faction1Orders = "";
    this.faction2Orders = "";
};

Battlefield.prototype.updateBattlefield = function () {

};

Battlefield.prototype.checkVictory = function () {
    return null;
};

Battlefield.prototype.sendReports = function () {

};

Battlefield.prototype.tick = function () {
    this.executeOrders();
    this.clearOrders();
    this.updateBattlefield();
    var victory = this.checkVictory();
    if (victory !== null) {
        return victory;
    }
    this.generateReports();
    this.sendReports();
    return null;
};