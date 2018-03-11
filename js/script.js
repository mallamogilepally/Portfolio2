

	$(window).scroll(function () {
  	if( $(document ).scrollTop()>10)
    {
    	$('nav').addClass('navbar-scrolled');
    }
    else{
    	$('nav').removeClass('navbar-scrolled');
    }
  });

var action=1;
$("input").on("click", tFunction)
function tFunction()  {
if(action==1){
    	$('nav').addClass('navbar-scrolled');
    action=2;
} else if(action==2){
        $('nav').removeClass('navbar-scrolled');
        action=1;
    }
};
   
   
