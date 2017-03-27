$(document).ready(function() {
   	$('.tab-list').each(function(){
		var $this = $(this);
		var $tab = $this.find('li.active');
		var $link = $tab.find('a');
		var $panel = $($ link.attr('href');
			$this.on('click','.tab-control',function(e){
				e.preventDefault();
				var $link = $(this);
				var id = this.hash;
					if (id && !$link.is('.active')){
						$panel.removeClass('active');
						$tab.removeClass('active');
						$panel = $(id).addClass('active');
						$tab = $link.parent().addClass('active');
				}
		});

	});
});

$(document).ready(function() {
   	 $(function(){
            $(".tab-list li").on("click", function(){
                $(".tab-list li.active").removeClass("active");
                $(this).addClass("active");
                var panelToShow = $(this).attr("rel");
                $(".tab-panel.active").slideUp(300, function(){
                    $(this).removeClass("active");
                    $("#"+panelToShow).slideDown(300, function(){
                        $(this).addClass("active");
                    });
                });
            });
        });
 });