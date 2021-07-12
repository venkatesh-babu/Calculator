var firstvalue,a,opreatorsymbol,secondvalue,answer;
function number(i) {
    document.getElementById("input").value+= i;
    secondvalue = document.getElementById("input").value;
    }
function opreator(i) {
    if(i=='+' || i=='-' || i=='*'|| i=='/') {
        firstvalue = document.getElementById("input").value; 
        opreatorsymbol=i;
        document.getElementById("input").value="";
        }
    else if(i == '=')  {
        if (opreatorsymbol=="+"){
            answer=parseInt(firstvalue)+parseInt(secondvalue);
            document.getElementById("input").value=answer;
            }
        else if(opreatorsymbol=="-") {
            answer=parseInt(firstvalue)-parseInt(secondvalue);
            document.getElementById("input").value=answer;
            }
        else if(opreatorsymbol=="*"){
            answer=parseInt(firstvalue)*parseInt(secondvalue);
    	    document.getElementById("input").value=answer;
            }
        else {
            answer=parseInt(firstvalue)/parseInt(secondvalue);
            document.getElementById("input").value=answer;
            }
        }
    else if (i=='%') {
         a = document.getElementById("input").value;
         answer=a/100;
        document.getElementById("input").value=answer;
    }
    else {
        document.getElementById("input").value='';   
        }
    }
