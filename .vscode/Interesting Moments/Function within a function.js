//A Не минимум на отрезке
function a() {
    alert('A');
  }
  //alerts 'A', returns undefined
  
  function b() {
    alert('B');
    return a;
  }
  //alerts 'B', returns function a
  
  function c() {
    alert('C');
    return a();
  }
  //alerts 'C', alerts 'A', returns undefined
  
  alert("Function 'a' returns " + a());
  alert("Function 'b' returns " + b());
  alert("Function 'c' returns " + c());



//2
function a() {
    alert("A!");
  
    function b() {
      alert("B!");
    }
  
    return b();
  }
  
  var s = a();
  alert("break");
  s();
  // Output: A! - B! - break



  //3
  function a() {
  
    alert('A!');

    function b(){
        alert('B!'); 
    }

    return b;
}

var s = a();
alert('break');
s();
// Output: A! - break - B!