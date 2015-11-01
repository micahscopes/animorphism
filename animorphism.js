export default function Animorphism(there,back){
  this.do = (f) => (source) => back(f(there(source)),source);
  this.reverse = function(){return new Animorphism(back,there)} // hypothetically
}
