# Animorphism
This is a play on the idea of (homo)morphism and Animorphs.  I wanted something 
to quickly map some data from one library to another, transform it, then map it
back without having to worry about redundant code messes.

Setup:
```javascript
import Animorphism from './animorphism';

// we describe the morphism, an animorphism
let toCow = (person) => person.morphInto('cow');
let toHuman = (cow,oldSelf) => cow.morphBackTo(oldSelf);
let asCow = new Animorphism(toCow,toHuman);
```
Now, if you'll recall from the Animorphs books, benevolent aliens gave some youth the ability to transform into animal form.  The youth had critical missions to accomplish, as malevolent aliens were trying to take over the world and turn people into slug creatures.  The only danger was that if they stayed in animal form too long, the youth could get stuck in their animal bodies *forever*.  So it was extremely important for them to accomplish their task and morph back into human youth as soon as possible.

In our example, we will transform into a cow, chew cud, then transform back into a human ASAP:
```javascript
let bovineTask = (cow) => cow.chew(cud);
let doMission = asCow.do(bovineTask);
// NOW WE ARE READY:
let you = new Human();
doMission(you);
alert(you.isStillHuman()); // => true, (whew!)
```
