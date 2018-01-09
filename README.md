# Animorphism
This is a play on the idea of (homo)morphism and Animorphs.  I wanted something 
to quickly map some data from one library to another, transform it, then map it
back without having to worry about redundant code messes.

## Example
Now, if you'll recall from the Animorphs books, benevolent aliens gave some youth the ability to transform into animal form.  The youth had critical missions to accomplish, as malevolent aliens were trying to take over the world and turn people into slug creatures.
```javascript
import Animorphism from './animorphism';

// a function that morphs a human into its cow form:
let toCow = (person) => person.morphInto('cow');

// a function that reintegrates a cow form human back into its old human self
let toHuman = (cowForm,oldSelf) => cow.morphBackTo(oldSelf);

// combine them into an Animorphism
let asCow = new Animorphism(toCow,toHuman); // 
```
In the books, the big danger was that if they stayed in their animal forms for too long, the youth could get stuck in their animal bodies *forever*.  So it was extremely important for them to accomplish their task and morph back into human youth as soon as possible.

In our example, we will transform into a cow, chew cud, then transform back into a human ASAP:
```javascript
let bovineTask = (cow) => cow.chew(cud);
let doMission = asCow.do(bovineTask);
// NOW WE ARE READY:
let you = new Human();
doMission(you);
alert(you.isStillHuman()); // => true, (whew!)
```
