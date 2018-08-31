function myFunction() {
  var a = document.getElementById("cA").value;
 
  var b = document.getElementById("cB").value;
  
  var c = document.getElementById("cC").value;

  var quadForm = (b*b)-(4*a*c);
  if (quadForm >= 0) {
    var quadSqrt = Math.sqrt(quadForm);
    document.getElementById("output").innerHTML = "The square root of your discriminant is " + quadSqrt;
  }else{
    document.getElementById("output").innerHTML = "Sorry, but your equation, " + a + "x<sup>2</sup> + " + b + "x + "+ c + " yields a negative number, which will give an imaginary number. However, your discriminant, before the square root, is " + quadForm + "."
  };
}