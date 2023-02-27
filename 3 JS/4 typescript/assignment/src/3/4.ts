// Create Class Here
class Player {
  details: () => string;

  constructor (
    public name: string,
    public type: string,
    public lv: number | string,
    public vip?: boolean) {
      this.details = function () {
        return `${this.vip? 'VIP' : ''} ${this.name}, Type Is ${this.type} Level Is ${this.lv}`;
      }
    }

  _details () {
    return `${this.vip? 'VIP' : ''} ${this.name}, Type Is ${this.type} Level Is ${this.lv}`;
  }
}

// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77