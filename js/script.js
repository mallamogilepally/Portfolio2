

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
/*window.addEventListener('mouseup', function(event){
    
    var box= document.getElementById('pagenav');
    if(event.target !=box && event.target.parentNode !=box){
      $('#pagenav').hide();
    }
});*/

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});

/* $(document).click(function(e){
    e.stopPropagation();
     var container = $(".collapse");
     if (container.has(e.target).length === 0) {
        $('.navbar-nav').hide();
    }
    

});*/

   
   
