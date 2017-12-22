function setSlider(){
	
	$(".slider").each( function(){
		//them class .active vao vi tri dau tien
		var $slider = $(this),
			$itemscontainer = $slider.find(".slider-items-container");
			// var a = $itemscontainer.find(".slider-item").eq(2);
			// var y=a.offset().left;
			// console.log(y);
			// var a = $itemscontainer.find(".slider-item").eq(0),//xac dinh class chua slide thu nextslide
			// 		b = $itemscontainer.offset().left,//tao do ben trai dau tien cua contaier
			// 		c = a.offset().left - b //hieu so giua slide ke tiep tru - container
			// 		console.log(c);
		if ($itemscontainer.find(".slider-item.active").length == 0){
			$itemscontainer.find(".slider-item").first().addClass("active");
		}
		//cho chieu rong cua slide-item = totalwidth
		function setWidth(){
			var totalWidth = 0;
			$($itemscontainer).find(".slider-item").each( function(){
				totalWidth += $(this).outerWidth();
			});
			$itemscontainer=$itemscontainer.width(totalWidth);
			
		}
		//kiem tra class chua active dang o vi tri nao
		//den vi tri 1 thi translateX ->1x
		//so 2 ->2x
		//s ....->nx
		function setTransform(){
			var $activeItem = $itemscontainer.find(".slider-item.active"),
				activeItemOffset = $activeItem.offset().left,
				itemsContainerOffset = $itemscontainer.offset().left,
				totalOffset = activeItemOffset - itemsContainerOffset
				$itemscontainer=$itemscontainer.css({"transform": "translateX( -"+totalOffset+"px)"})
		}
		//
		function nextSlide(){
			var activeItem = $itemscontainer.find(".slider-item.active"),
					activeItemIndex = activeItem.index(),//gia tri cua thu bao nhieu
					sliderItemTotal = $itemscontainer.find(".slider-item").length,//dem bao nhieu class chu slide-item
					nextSlide = 0;
			if (activeItemIndex + 1 > sliderItemTotal - 1){
				nextSlide = 0;
			}else{
				nextSlide = activeItemIndex + 1
			}
			//
			var nextSlideSelect = $itemscontainer.find(".slider-item").eq(nextSlide),//xac dinh class chua slide thu nextslide
					itemContainerOffset = $itemscontainer.offset().left,//tao do ben trai dau tien cua contaier
					totalOffset = nextSlideSelect.offset().left - itemContainerOffset //hieu so giua slide ke tiep tru - container
			

			$itemscontainer.find(".slider-item.active").removeClass("active");
			nextSlideSelect.addClass("active");
			$slider.find(".dots").find(".dot").removeClass("active")
			$slider.find(".dots").find(".dot").eq(nextSlide).addClass("active");
			$itemscontainer.css({"transform": "translate( -"+totalOffset+"px, 0px)"})

			
		}
		function prevSlide(){
			var activeItem = $itemscontainer.find(".slider-item.active"),
					activeItemIndex = activeItem.index(),
					sliderItemTotal = $itemscontainer.find(".slider-item").length,
					nextSlide = 0;
			
			if (activeItemIndex - 1 < 0){
				nextSlide = sliderItemTotal - 1;
			}else{
				nextSlide = activeItemIndex - 1;
			}
			var nextSlideSelect = $itemscontainer.find(".slider-item").eq(nextSlide),
					itemContainerOffset = $itemscontainer.offset().left,
					totalOffset = nextSlideSelect.offset().left - itemContainerOffset
			
			$itemscontainer.find(".slider-item.active").removeClass("active");
			nextSlideSelect.addClass("active");
			$slider.find(".dots").find(".dot").removeClass("active")
			$slider.find(".dots").find(".dot").eq(nextSlide).addClass("active");
			$itemscontainer.css({"transform": "translate( -"+totalOffset+"px, 0px)"})
			
		}
		function makeDots(){
			var activeItem = $itemscontainer.find(".slider-item.active"),
					activeItemIndex = activeItem.index(),
					sliderItemTotal = $itemscontainer.find(".slider-item").length;
			
			for (i = 0; i < sliderItemTotal; i++){
				$slider.find(".dots").append("<div class='dot'></div>")
			}
			
			$slider.find(".dots").find(".dot").eq(activeItemIndex).addClass("active")
			
		}
		
		setWidth();
		setTransform();
		makeDots();
		
		$(window).resize( function(){
					setWidth();
					setTransform();
		});
		
		var nextBtn = $slider.find(".controls").find(".next-btn"),
				prevBtn = $slider.find(".controls").find(".prev-btn");
		
		nextBtn.on('click', function(e){
			e.preventDefault();
			nextSlide();
		});
		
		prevBtn.on('click', function(e){
			e.preventDefault();
			prevSlide();
		});
		
		$slider.find(".dots").find(".dot").on('click', function(e){
			
			var dotIndex = $(this).index(),
					totalOffset = $itemscontainer.find(".slider-item").eq(dotIndex).offset().left - $itemscontainer.offset().left;
					
			$itemscontainer.find(".slider-item.active").removeClass("active");
			$itemscontainer.find(".slider-item").eq(dotIndex).addClass("active");
			$slider.find(".dots").find(".dot").removeClass("active");
			$(this).addClass("active")
			
			$itemscontainer.css({"transform": "translate( -"+totalOffset+"px, 0px)"})
			
		});
		
	});
	
}

setSlider();