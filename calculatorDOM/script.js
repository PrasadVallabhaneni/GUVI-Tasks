var div=document.createElement('div');
div.setAttribute('class','main');
var html1='<form class="calculatorForm" name="calculatorForm"><div class="screen"><input type="text" name="screen" class="screen" value="" readonly /></div><div class="btn"><input type="button" name="clear" value="clear"  onclick="Clear()" /><button type="button" id="back" ><img src="https://img.icons8.com/emoji/60/000000/back-arrow-emoji.png" onclick="back1()"/></button></div><div class="btn" id="d"><input type="button" name="num1" value="1" onclick="valueButton(this)" /><input type="button" name="num2" value="2" onclick="valueButton(this)" /><input type="button" name="num3" value="3" onclick="valueButton(this)" /><input type="button" name="plus" value="+" onclick="valueButton(this)" /></div><div class="btn"><input type="button" name="num4" value="4" onclick="valueButton(this)" /><input type="button" name="num5" value="5" onclick="valueButton(this)" /><input type="button" name="num6" value="6" onclick="valueButton(this)" />';
   var html2=   '<input type="button" name="sub" value="-" onclick="valueButton(this)" /></div><div class="btn"><input type="button" name="num7" value="7" onclick="valueButton(this)" /><input type="button" name="num8" value="8" onclick="valueButton(this)" /><input type="button" name="num9" value="9" onclick="valueButton(this)" /><input type="button" name="mul" value="*" onclick="valueButton(this)" /></div><div class="btn"><input type="button" name="num0" value="0" onclick="valueButton(this)"/><input type="button" name="div" value="/" onclick="valueButton(this)" /><input type="button" name="equal" value="=" onclick="Calculate()" /></div></form>';
   div.innerHTML=html1+html2
document.body.append(div);


function back1() {
			var value = Array.from(calculatorForm.screen.value);
			value.pop();

			calculatorForm.screen.value = value.join("");
			
		}
		function valueButton(e){
			calculatorForm.screen.value += e.value;
		}
		
		function Clear(){
			calculatorForm.screen.value = null;
		}
		function Calculate(){
			calculatorForm.screen.value = eval(calculatorForm.screen.value);
		}

		function onkeys(){
			onkeypress=function(e){
                
				if(e.key=='*' || e.key=='+'|| e.key=='/' || e.key=='-' || e.key=='.'){
					calculatorForm.screen.value += e.key;
				}else if(+e.key-0!=e.key || e.key==' '){
					
					alert('Only numbers are allowes');
			}else{
				calculatorForm.screen.value += e.key;
                var a=document.getElementsByName('name0');
                
            
			}
			}
		}
		onkeys();
		
		