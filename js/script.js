!function () {
	var prenum = 1;
	setInterval(function(){
		if(prenum == 4)
			prenum = 0;
		$('#lunbo').children()[prenum].click();
	}, 5000)
	$('#lunbo').on('click',function(e){
		var temp = e.target;
		if(!temp.value)
			return;
		$('#lunbo').children('*').map(function(d,t){
			t.style.background="#fff";
		});
		temp.style.background = "#00BFFF";
		run(e.target.value);
	})
	function run(goal){
		var preTarget = getPreTarget();
		var target = $(".main-right li:nth-child("+ goal +")");
		var targetLeft = parseInt(target.css('left'));
		var p = goal - 1;
		console.log(p);
		$('.main-right > li:lt('+ p +')').css({
			'left': '-100%', 
			'transform': 'scale(0)'
		});
		$('.main-right > li:gt('+ p +')').css({
			'left': '100%', 
			'transform': 'scale(0)'
		});
		target.css({
			'transform' : 'scale(1)',
			'left' : '0',
		});
	}
	function getPreTarget(){
		var target = $(".main-right").children('*').map(function(d, t){
			if(t.style.transform == 'scale(1)'){
				prenum = d + 1;
				return t;
			}
		});
		return target;
	}
}()