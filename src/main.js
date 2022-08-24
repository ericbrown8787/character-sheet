characterInfo = document.getElementById("character-info-container");
characterInfo.innerHTML = "Hi.";
console.log("hello world");

function character() {
  //Character Basic Info
  (this.playerName = ""),
    (this.class = ""),
    (this.alignment = ""),
    (this.characterName = ""),
    (this.level = 0),
    (this.experience = 0),
    //Ability Scores
    (this.strength = 0),
    (this.dexterity = 0),
    (this.constitution = 0),
    (this.intelligence = 0),
    (this.wisdom = 0),
    (this.charisma = 0),
    //modifiers
    (this.strengthMod = () => {
      return (this.strength - (this.strength % 2) - 10) / 2;
    });
}

const testCharacter = new character();
testCharacter.strength = 9;
console.log(testCharacter.strengthMod());
