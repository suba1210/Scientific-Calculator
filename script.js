function forAlerting(){
  alert("You must enter a valid number at first!")
}

function calculate1()
{

  let response = calculate(document.result.output.value);
    
  if(isNaN(response))
  {        
    document.result.output.value = invalid;
  }
  else{
    document.result.output.value = response;
  }

}


const precedenceCheck = (op1, op2) => {

  if (op2 === '(' || op2 === ')') {
    return false;
  }
  if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
    return false;
  }
  return true;
};


const operation = (op, b, a) => {

  if(op=='+')
  {
    return a + b;
  }
  else if(op=='-')
  {
    return a - b;
  }
  else if(op=='*')
  {
    return a * b;
  }
  else if(op=='%')
  {
    return a%b;
  }
  else if(op=='^')
  {
    return a**b;
  }
  else if(op=='/')
  {
    if (b === 0) {
      document.result.output.value = invalid;
      alert('Division by 0 is not possible!')
    }
    return (a / b);   
  }
  else{
    return 0;
  }


};

let invalid = "invalid input";
function calculate (s){

  const values = [];
 
  const operator = [];

 for (let i = 0; i < s.length; i++) {
    
    if (s[i] === ' ') {
      continue;
    }
   
    if (s[i] >= '0' && s[i] <= '9') {
      let num = '';


      while ((i < s.length && s[i] >= '0' && s[i] <= '9') || s[i] == '.') {
        num += s[i++];
      }
      
      values.push(parseFloat(num));
      i--; 
    }

    if(s[i] === 'π'){
      values.push(3.14159265359);
    }
   
    else if (s[i] === '(') {
      operator.push(s[i]);
    }
    
    else if (s[i] === ')') {

      while (operator[operator.length - 1] !== '(') {
        values.push(operation(operator.pop(), values.pop(), values.pop()));
      }
      operator.pop();
    }   
    else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/' || s[i] === '%'|| s[i] === '^') {
      
      while (operator.length && precedenceCheck(s[i], operator[operator.length - 1])) {
        values.push(operation(operator.pop(), values.pop(), values.pop()));
      }
      
      operator.push(s[i]);
    }
  }

 
  while (operator.length) {
    values.push(operation(operator.pop(), values.pop(), values.pop()));
  }

  
  return values.pop();
};







function cut(){
  document.result.output.value= document.result.output.value.slice(0,-1);
}


function Factorial() {
    document.result.output.value = calculate(document.result.output.value);
    if(document.result.output.value == invalid || isNaN(document.result.output.value) )
    {
      document.result.output.value = '';
      alert("You must enter a valid number at first!");
      forAlerting();        
    }
    else{   
      document.result.output.value= document.result.output.value; 
    }
		let n = document.result.output.value
    var fact=1;
              
    for (let i = 2; i <= n; i++)
    {
      fact = fact * i;
    }

		document.result.output.value = fact;

}
          
       
    function exp(){
       
        document.result.output.value = calculate(document.result.output.value);
        if(document.result.output.value == invalid || isNaN(document.result.output.value) )
        {
          document.result.output.value = '';
          forAlerting();
        }
        else{  
          document.result.output.value= Math.exp(document.result.output.value); 
        }

    }
    function ln(){
        document.result.output.value = calculate(document.result.output.value);
        if(document.result.output.value == invalid || isNaN(document.result.output.value) )
        {
          document.result.output.value = '';
          forAlerting();            
        }
        else{            
          document.result.output.value= Math.log(document.result.output.value); 
        }

    }
    function log(){
      document.result.output.value = calculate(document.result.output.value);
      if(document.result.output.value == invalid || isNaN(document.result.output.value) )
      {
        document.result.output.value = '';
        forAlerting();            
      }
      else{            
        document.result.output.value= Math.log10(document.result.output.value); 
      }

  }
    function inverse(){
        document.result.output.value = calculate(document.result.output.value);
        if(document.result.output.value == invalid || isNaN(document.result.output.value) )
        {
          document.result.output.value = '';
          forAlerting();            
        }
        else{           
          document.result.output.value= 1/document.result.output.value; 
        }
        
    }
    function square (){
        document.result.output.value = calculate(document.result.output.value);
        if(document.result.output.value == invalid || isNaN(document.result.output.value) )
        {
          document.result.output.value = '';
          forAlerting();
            
        }
        else{     
          document.result.output.value= document.result.output.value*document.result.output.value; 
        }

    }
    function cube (){
        document.result.output.value = calculate(document.result.output.value);
        if(document.result.output.value == invalid || isNaN(document.result.output.value) )
        {
          document.result.output.value = '';
          forAlerting();
            
        }
        else{           
          document.result.output.value= document.result.output.value*document.result.output.value*document.result.output.value; 
        }
        
    }
    function tan(){
        document.result.output.value = calculate(document.result.output.value);
        if(document.result.output.value == invalid || isNaN(document.result.output.value) )
        {
          document.result.output.value = '';
          forAlerting();
            
        }
        else{
            
          document.result.output.value= Math.tan(document.result.output.value); 
        }
        document.result.output.value = calculate(document.result.output.value);
        document.result.output.value= Math.tan(document.result.output.value); 
    }


    function cos(){
    document.result.output.value = calculate(document.result.output.value);
      if(document.result.output.value == invalid || isNaN(document.result.output.value) )
      {
        document.result.output.value = '';
        forAlerting();               
      }
      else{                
        document.result.output.value= Math.cos(document.result.output.value); 
      }      
    }

    function sin(){
       
      document.result.output.value = calculate(document.result.output.value);
      if(document.result.output.value == invalid || isNaN(document.result.output.value) )
      {
        document.result.output.value = '';
        forAlerting();
            
      }
      else{
            
        document.result.output.value= Math.sin(document.result.output.value); 
      }
      
    }

    function sqrt(){
        
      document.result.output.value = calculate(document.result.output.value);
      if(document.result.output.value == invalid || isNaN(document.result.output.value) )
      {
        document.result.output.value = '';
        forAlerting();
            
      }
      else{           
        document.result.output.value= Math.sqrt(document.result.output.value); 
      }
        
    }

    function cosec(){
      document.result.output.value = calculate(document.result.output.value);
      if(document.result.output.value == invalid || isNaN(document.result.output.value) )
      {
        document.result.output.value = '';
        forAlerting();
            
      }
      else{
            
        document.result.output.value=1/Math.sin(document.result.output.value); 
      }
    }

    function cot(){
      document.result.output.value = calculate(document.result.output.value);
      if(document.result.output.value == invalid || isNaN(document.result.output.value) )
      {

        document.result.output.value = '';
        forAlerting();
            
      }
      else{
            
        document.result.output.value=1/Math.tan(document.result.output.value); 
      }
    }

    function sec(){
      document.result.output.value = calculate(document.result.output.value);
      if(document.result.output.value == invalid || isNaN(document.result.output.value) )
      {
        document.result.output.value = '';
        forAlerting();
            
      }
      else{
            
        document.result.output.value=1/Math.cos(document.result.output.value); 
      }
    }   
	

