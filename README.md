# Animorphism
Setup:
```javascript
import Animorphism from './animorphism';
let you = new Human();
let toCow = (you) => you.morphInto('cow');
let toHuman = (cow,yourOldSelf) => cow.morphBackTo(yourOldSelf);
let asCow = new Animorphism(toCow,toHuman);
```
Now, if you'll recall from the Animorphs series, the benevolent aliens gave some kids one or more critical missions to accomplish when they were in animal form:
```javascript
let bovineTask = (cow) => cow.chew(cud);
let doMission = asCow.do(bovineTask);
// NOW WE ARE READY:
doMission(me);
```
