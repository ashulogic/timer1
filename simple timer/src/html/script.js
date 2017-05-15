var startchr = 0; 
var ctmnts,cthrs,ctsecs;
ctsecs = (ctsecs < 10) ? '0'+ctsecs : ctsecs;
ctmnts = (ctmnts < 10) ? '0'+ctmnts: ctmnts;
cthrs = (cthrs < 10) ? '0'+cthrs : cthrs;
var timer = new countdownTimer();
timer.init();
var t; 
var myVar;
var timer_is_on = 0;
function countdownTimer() 
{
	if(startchr == 0  && document.getElementById('hrs') && document.getElementById('mns') && document.getElementById('scs')) 
	{
		cthrs = parseInt(document.getElementById('hrs').value) + 0;
		ctmnts = parseInt(document.getElementById('mns').value) + 0;
		ctsecs = parseInt(document.getElementById('scs').value) * 1;				
		if(isNaN(cthrs)) cthrs = 0;
		if(isNaN(ctmnts)) ctmnts = 0;
		if(isNaN(ctsecs)) ctsecs = 0;
		ctsecs = (ctsecs < 10) ? '0'+ctsecs : ctsecs;
		ctmnts = (ctmnts < 10) ? '0'+ctmnts: ctmnts;
		cthrs = (cthrs < 10) ? '0'+cthrs : cthrs;
			document.getElementById('hrs').value = cthrs;
			document.getElementById('mns').value = ctmnts;
			document.getElementById('scs').value = ctsecs;
		    startchr = 1;
	}	
	if(cthrs==0 && ctmnts==0 && ctsecs==0)
	{
		startchr = 0;
		document.getElementById('btnct').removeAttribute('disabled');    
		return false;
	}
		else
		{
			ctsecs--;
			if(ctsecs < 0)
			{
				ctmnts--;
				ctsecs = 59;								
				if(ctmnts < 0)
				{	
					cthrs--;					
					ctmnts = 59;	
					ctmnts = ctmnts < 10 ? "0" + ctmnts : ctmnts;
				}							
				if(cthrs >= 0)
				{ 
					ctsecs = 59;			
				}
			else
				{
				ctsecs = 0;
				ctmnts = 0;
				cthrs = 0;
				}
			}	
		}	
document.getElementById('showhrs').innerHTML = cthrs;
document.getElementById('showmns').innerHTML = ctmnts;
document.getElementById('showscs').innerHTML = ctsecs;
t = setTimeout(function(){countdownTimer()}, 1000);
};
function stopCount() {
    clearTimeout(t);
}
function reset1(){
        timer.reset();
} 	
	
		
 
