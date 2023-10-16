let [p,b,c,s] = pokeData();

// // function: I want you to make a function where 1 pokemon says hello to another pokemon in the console

//     // Pikachu says hello to Bulbsaur

 function saysHello() {
     console.log(`${p.name} says hello to ${b.name}`);
 }

 saysHello();



// I want you to make a battle function where one pokemon does one of it's attacks, and that actually affects the HP (health points) of the other pokemon


// function bigwar() {

// }


// add a method to one of the pokemon, to have it do something creative

// p.eatFish = function(fish) {
//     console.log(`${p.name} is eating ${fish.name}`);

//     if (fish.isPoisonous) {
//         p.isDead = true;
//     }
// }

// let bug = {
//     name: 'Charlie',
//     fainted: true,
// }




// bug.jumpHigh = function() {
//     if (this.fainted){
//         console.log(`${this.name} can't jump, they've fainted`);
//         this.fainted = false
//     } else {
//         console.log(`${this.name} is jumping hoops.`);
//         this.fainted = true
//     }
// }



// bug.jumpHigh()



let bug = {
    name: 'Charlie',
    fainted: true,
    jP: 500,
    jumpsHigh: function() {
        let message = "";
        if (this.jP <= 500) {
            console.log(`${this.name} can't jump, they've fainted`);
            message = `${this.name} can't jump, he's fainted`;
            document.getElementById("bugImage").src = "Dead Bug Cartoon.jpeg";
        } else {
            console.log(`${this.name} is jumping high.`);
            message =  `${this.name} is jumping high.`;
            document.getElementById("bugImage").src = "Jumping Bug Cartoon.png";
            this.jP -= 1000;
        }
        document.getElementById("jPDisplay").innerText = `Jump Power: ${this.jP}`;
        document.getElementById("message").innerText = message;
    },
    addPower: function() {
        this.jP += 500;
        document.getElementById("jPDisplay").innerText = `Jump Power: ${this.jP}`;
    }
};

document.getElementById("jumpButton").addEventListener("click", function() {
    bug.jumpsHigh();
});

document.getElementById("addPowerButton").addEventListener("click", function() {
    bug.addPower();
});




function pokeData() {
    let c = {
        name: 'Charmander',
        hp: 20,
        fainted: false,
        type: 'fire',
        moves: [
            {name: 'flamethrower', power: 35, pp: 4},
            {name: 'stomp', power: 20, pp: 10},
            {name: 'bite', power: 18, pp: 15},
            {name: 'tackle', power: 15, pp: 20},
        ],
        }
        
        let s = {
            name: 'Squirtle',
            hp: 24,
            fainted: false,
            type: 'water',
            moves: [
                { name: 'water gun', power: 30, pp: 10 },
                { name: 'withdraw', power: 0, pp: 20 },
                { name: 'bubble', power: 20, pp: 15 },
                { name: 'tackle', power: 15, pp: 20 },
            ],
        }
        
        let p = {
            name: 'Pikachu',
            hp: 25,
            fainted: false,
            type: 'electric',
            moves: [
                { name: 'thundershock', power: 30, pp: 10 },
                { name: 'quick attack', power: 20, pp: 15 },
                { name: 'double team', power: 0, pp: 20 },
                { name: 'electro ball', power: 35, pp: 5 },
            ],
        }
        
        let b = {
            name: 'Bulbasaur',
            hp: 22,
            fainted: false,
            type: 'grass/poison',
            moves: [
                { name: 'vine whip', power: 25, pp: 10 },
                { name: 'tackle', power: 15, pp: 20 },
                { name: 'leech seed', power: 0, pp: 15 },
                { name: 'poison powder', power: 0, pp: 20 },
            ],
        }
    
    return [p,b,c,s];
}
