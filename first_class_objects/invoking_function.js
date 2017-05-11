function skulk(name) {}

function Ninja(name) {}

skulk('Hattori');

(function(who){ return who; })('Hattori');  //Invoked as a function

var ninja = {
  skulk: function(){}
};
   
ninja.skulk('Hattori'); //Invoked as a method of ninja

ninja = new Ninja('Hattori'); //Invoked as a constructor

skulk.call(ninja, 'Hattori'); //Invoked via the call method

skulk.apply(ninja, ['Hattori']); //Invoked via the apply method