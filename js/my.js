$(document).ready(function(){

	// go Top
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			$('#goTop').fadeIn();
		}else{
			$('#goTop').fadeOut(0);
		}
	});

	$('#goTop').click(function(){
		$('html,body').animate({
			scrollTop:0
		},800);
		return false;
	});


    // 月曆顏色
	$('.canch').click(function(){
		$(this).css({
			'backgroundColor':'#df97b4',
			'color':'#fff'
		});
		$('.canch').not(this).css({
			'backgroundColor':'#efefee',
			'color':'#333'
		});
	});
	

	// 選擇設計師
	$('#naildesign').click(function(){
		$('.re-lightbox-bg').fadeIn(500);
		$('.item1').click(function(){
			$('.re-lightbox-bg').hide();
			$('#inndes').text('Lacie');
		});
		$('.item2').click(function(){
			$('.re-lightbox-bg').hide();
			$('#inndes').text('Momo');
		});
		$('.item3').click(function(){
			$('.re-lightbox-bg').hide();
			$('#inndes').text('Alley');
		});
		$('.item4').click(function(){
			$('.re-lightbox-bg').hide();
			$('#inndes').text('Su');
		});
		$('.item5').click(function(){
			$('.re-lightbox-bg').hide();
			$('#inndes').text('Yumi');
		});
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>400){
			$('.reserve_content').css({
				opacity:'1',
				transition: '1.3s'
			});
		}
		if($(window).scrollTop()>1500){
			$('.lesson_content').css({
				opacity:'1',
				transition: '1.3s',
			});
		}
		
	});



	 var x = 0;
   	 $(window).scroll(function(){
            x = $(window).scrollTop();
            console.log(x);
        });

 });


