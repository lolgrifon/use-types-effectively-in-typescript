

interface ComicBookCharacterOptionalProperties {
  secretIdentity?: string;
}

type Evil = true | false;

/* 



*/

/**
 * NOTE: I haven't implemented what is seen in the course here. Instead I have added different functionality for practice purposes.
 * Functionality added: 
 * - Differentiate between super heroes and super villain (separate interfaces that extend a common interface ComicCharacter)
 * - Create isEvil property that can only be set to true for super villains and can only be set to false for super heroes
 * - Added goodDeeds property to track super heroes goodDeeds
 * - Added badDeeds property to track super villains badDeeds
 */

interface ComicBookCharacter extends ComicBookCharacterOptionalProperties {
  alias: string;§
  health: number;
  isEvil: Evil;
  hobbies: string[];


}

interface SuperHero extends ComicBookCharacter {
  isEvil: false;
  goodDeeds: [string]; // it must have at least one good deed, hence the word string is inside the brackets

}

interface SuperVillain extends ComicBookCharacter {
  isEvil: true;
  badDeeds: [string];

}

let superHero: SuperHero = {
  alias: 'batman',
  health: 5000,
  goodDeeds: ["saved the planet from destruction"],
  isEvil: false,
  hobbies: []
};

let superVillain: SuperVillain = {
  secretIdentity: '009',
  alias: 'mightymouse',
  badDeeds: ["tried to destroy the planet"],
  health: 0,
  isEvil: true,
  hobbies: []
};

console.log("superVillain.health", superVillain.health)