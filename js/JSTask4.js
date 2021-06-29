
var person = (function(el){
    return {
      set age(v){
       el.value = v;
      },
      get age(){
        return el.value;
      }
    };
   })(document.getElementById("age"));

person.age=12;