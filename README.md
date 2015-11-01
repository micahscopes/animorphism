# Animorphism
This is a play on the idea of isomorphism and the Animorphs books, which I
read when I was a little kid.  I wanted something to quickly map some data
from one library to another, do some stuff, then transform it back again
without having to worry about keeping a bunch of redundant objects around.

Setup:
```javascript
import Animorphism from './animorphism';

// we describe the morphism, an animorphism
let toCow = (person) => person.morphInto('cow');
let toHuman = (cow,pastSelf) => cow.morphBackTo(pastSelf);
let asCow = new Animorphism(toCow,toHuman);
```
Now, if you'll recall from the Animorphs books, benevolent aliens gave some kids
one or more critical missions to accomplish when they were in animal form:
```javascript
let bovineTask = (cow) => cow.chew(cud);
let doMission = asCow.do(bovineTask);
// NOW WE ARE READY:
let you = new Human();
doMission(you);
alert(you.isHuman()); // => true, (whew!)
```
