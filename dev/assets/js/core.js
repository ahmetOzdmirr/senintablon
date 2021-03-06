$(document).ready(function(){

    /*Products Slider*/
    function featuredSlide(){
        var swiper = new Swiper('.featured-products .swiper-structure', {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            speed: 550,
            observer: true,
            observeParents: true,
            nested:true,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 33,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 33,
                }
            }
        });
    }
    featuredSlide();

    /*Concept Slider*/
    var swiper = new Swiper('.concepts .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 550,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            880: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 18,
            },
        }
    });
    var concepts = $('.concepts');
    concepts.find('.swiper-container ul li a').click(function(e){
        e.preventDefault();
        concepts.find('.swiper-container ul li').removeClass('active');
        $(this).parents('li').addClass('active');
    });
    
    /*Search Result Products*/
    var swiper = new Swiper('.search-result-products .swiper-container-results', {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: false,
            speed: 550,
            touchRatio: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    touchRatio: 1,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    touchRatio: 1,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 33,
                    touchRatio: 1,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 33,
                    touchRatio: 0,
                }
            }
    });

    /*İnstagram Slider*/
    var swiper = new Swiper('.instagram-wrapper .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 550,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            880: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 35,
            },
        }
    });
    var instagramWrapper = $('.instagram-wrapper');
    instagramWrapper.find('.swiper-container ul li a').click(function(e){
        e.preventDefault();
        instagramWrapper.find('.swiper-container ul li').removeClass('active');
        $(this).parents('li').addClass('active');
    });

    /*Customer Cumments Slider*/
    var swiper = new Swiper('.customer-comments .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 550,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            880: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
    var instagramWrapper = $('.customer-comments');
    instagramWrapper.find('.swiper-container ul li a').click(function(e){
        e.preventDefault();
        instagramWrapper.find('.swiper-container ul li').removeClass('active');
        $(this).parents('li').addClass('active');
    });
    //product-detail
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        //slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            425: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        thumbs: {
            swiper: galleryThumbs
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('[data-fancybox="product-gal"]').fancybox({
        backFocus: false,
    });

    //product-detail-bottom-best-sellers
    var swiper = new Swiper('.products-interested .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 550,
        // init: false,
        /*pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },*/
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            880: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 33,
            },
        }
    });
    
    /*Main Search*/
    var search = $('header .search');
    var search_bar = $('.search-bar');
    var search_form_wrap = search_bar.find('.form-wrap');
    var search_bg = $('.search-bg');
    var menu_bg = $('.menu-bg');
    var submenu = $('header .dropdown-submenu');
    x = false;
    search.find('a').click(function(e){
        e.preventDefault();
        if (!x) {
            search_bar.fadeIn();
            search_bar.animate({'width':'100%'},1000);
            search_form_wrap.addClass('fadeIn');
            search_bg.fadeIn();
            $('.navbar-collapse').removeClass('in');
            x = true;
        }else{
            search_bar.fadeOut();
            search_bar.css('width','0');
            search_form_wrap.removeClass('fadeIn');
            search_bg.fadeOut();
            x = false;
        } 
    });
    submenu.mouseenter(function(){
        menu_bg.fadeIn();
        $('header').addClass('submenu-active');
    });
    submenu.mouseleave(function(){
        menu_bg.fadeOut();
        $('header').removeClass('submenu-active');
    });
    search_bg.click(function(){
        $(this).fadeOut();
        search_bar.fadeOut();
        search_bar.css('width','0');
        search_form_wrap.removeClass('fadeIn');
        x = false;
    }); 

    //order-mobile
    var order_status = $('.order-status-structure');
    var order_status_mobile_text = $('.mobile-order-status-text');
    order_status.find('li').each(function(){
        $(this).click(function(){
            order_status_mobile_text.find('p').html($(this).find('p').html());
        });
    });

    //var warning_bar = $('.my-discount-coupons .warning-bar');
    $('a.close-bar').click(function(e){
        e.preventDefault();
        $(this).parents('.common-bar').fadeOut();
    });
    var order_toggle = $('a.order-toggle-button');
    order_toggle.click(function(e){
        e.preventDefault();
        var this_wrap = $(this).parents('.wrap');
        var detail_panel = this_wrap.find('.order-detail-panel');
        this_wrap.toggleClass('open');
        detail_panel.slideToggle(400);
    });  

    //form-dropdown-button-text-and-input-value-change
    var tab_web_menu = $('.web-tab-menu');
    var tab_mobile_menu = $('.mobile-tab-menu');
    tab_mobile_menu.find('ul.dropdown-menu').html(tab_web_menu.html());
    tab_mobile_menu.find('li a').click(function(){
        $(this).parents('li').addClass('active');
        tab_mobile_menu.find('li').removeClass('active');
        tab_mobile_menu.find('button span').html($(this).html());
    });

    $("input[name='piece']").TouchSpin({
        min: 1,
    });
    $(".international-phone").intlTelInput({
        separateDialCode:true,
        initialCountry:"tr"
    });
    $('#pagination').twbsPagination({
        totalPages: 20,
        itemOnPage: 1,
        visiblePages: 5,
        prev:false,
        next:false,
        first:false,
        last:false,
        onPageClick: function (event, page) {
        }
        }).on('page', function (event, page) {
    });
    //help accordion
    $(".panel-group .panel-heading a").click(function(){
        $(this).parents(".panel-group").find(".panel-default").each(function(index, el) {
            $(this).removeClass('active');
        });
        $(this).parents(".panel-default").addClass('active');
    });
     //BillingAddress
    var address = $('.payment-address-information');
    address.find('input[name="AddressIsTheSame"]').change(function(){
        if ($(this).is(':checked')) {
            $('.billing-address').fadeOut();
        }else{
            $('.billing-address').fadeIn();
        }
    });
    //installment-table
    var table = $('.installment-options table');
    table.find('tr').each(function(){
        $(this).click(function(){
            table.find('input[type="radio"]').removeAttr('checked');
            $(this).find('input[type="radio"]').prop('checked',true);
            table.find('tr').removeClass('selected');
            $(this).addClass('selected');
        });
    });
    $(".common-payment-steps .tab-content-article").mCustomScrollbar();
    $(".information-form-wrapper .tab-content-article").mCustomScrollbar();
    $(".filters .list").mCustomScrollbar();
    //form-dropdown-button-text-and-input-value-change
    function selectDrop(){
        var form_dropdown = $('.form-dropdown');
        form_dropdown.each(function(){
            var button_text  = $(this).find('button span.button-text');
            var input        = $(this).find('input[type="hidden"]'); 
            $(this).find('ul li a').click(function(e){
                e.preventDefault();
                var select_url = $(this).html();
                button_text.html(select_url);
                form_dropdown.find('ul li').removeClass('active');
                $(this).parents('li').addClass('active');
                input.attr('value',select_url);
                button_text.addClass('text-bold');
                $(this).parents('.form-dropdown').removeClass('has-error');
                $(this).parents('.form-dropdown').find('span.help-block').hide();
                input.removeClass('invalid');
            });
        });
    }
    selectDrop();
    //form-dropdown-button-text-and-input-value-change
    $('a.ajaxTrigger').fancybox({
        afterShow : function( instance, current ) {
            //dropdown-selected
            selectDrop();
            //international-phone
            $(".international-phone").intlTelInput({
                separateDialCode:true,
                initialCountry:"tr"
            });
            //form-validate
            $("button.js-post").bind('click', function(e) {
               invalid( $(this).parents('form') );
            });
        }
    });
    
    $(".article-popup section").mCustomScrollbar();
    $('a.speed-look').fancybox({
        afterLoad: function(instance, current){

            //product-detail
            var galleryThumbs = new Swiper('.speed-gallery-thumbs', {
                spaceBetween: 10,
                //slidesPerView: 4,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    500: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                }
            });
            var galleryTop = new Swiper('.speed-gallery-top', {
                thumbs: {
                    swiper: galleryThumbs
                },
            });

            $("input[name='piece']").TouchSpin({
                min: 1,
            });
        }
    });
    $('[data-fancybox]').fancybox({
        backFocus : false,
      });
    var signup = $('.signup-form');
    var input_password = signup.find('input[name="password"]');
    signup.find('a.password_eye').click(function(e){
        e.preventDefault();
        $(this).toggleClass('password_active');
        if (input_password.attr('type')=='password') {
            input_password.attr('type','text');
        }else{
            input_password.attr('type','password');
        }
    });
    $('.mobile-filter-toggle').click(function(){
        $('.product-filters').slideToggle(600);
    });

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    /* Window Scroll*/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll>=1) {
            $('header').addClass('shadow');
        }else{
            $('header').removeClass('shadow');
        }
        if (scroll>=80) {
            $('header').addClass('scroll-toggle');
        }else{
            $('header').removeClass('scroll-toggle');
        }
    });
    $('.ajaxTrigger').click(function(){

		$(".international-phonex").intlTelInput({
			separateDialCode:true,
			initialCountry:"tr"
		});
		
	
		var data_order = $(this).attr("data-order");
		$(".international-phonex-"+data_order).intlTelInput({
				separateDialCode:true,
				initialCountry:"tr"
		});
	});
    $(".international-phonex").intlTelInput({
        separateDialCode:true,
        initialCountry:"tr"
    });
	$('.secimdropdown').find('.dropdown-menu li a').click(function(e){
        e.preventDefault();
        inputVal = $(this).parents('.secimdropdown').find('input').val();
        var data_id = $(this).attr("data-id");
        var data_type = $(this).attr("data-type");
        if (inputVal==0) {
            $('.'+data_type+'_vergidaire_'+data_id+',.'+data_type+'_vergino_'+data_id+',.'+data_type+'_company_'+data_id+'').addClass("hide");
        }else{
            $('.'+data_type+'_vergidaire_'+data_id+',.'+data_type+'_vergino_'+data_id+',.'+data_type+'_company_'+data_id+'').removeClass("hide");
        }
    });
	function updateCitys(){
		 var form_dropdown = $('.form-dropdown');
            form_dropdown.each(function(){
                var button_text  = $(this).find('button span.button-text');
                var input        = $(this).find('input[type="hidden"]'); 
                var activeitem = $(this).find('ul li a.active');
                    var select_url = activeitem.html();
                    var select_url2 = activeitem.attr("href");
                    button_text.html(select_url);
                    
                    form_dropdown.find('ul li').removeClass('active');
                    activeitem.parents('li').addClass('active');
                    input.attr('value',select_url2);
                    button_text.addClass('text-bold');
                    activeitem.parents('.form-dropdown').removeClass('has-error');
                    activeitem.parents('.form-dropdown').find('span.help-block').hide();
                    input.removeClass('invalid');
                
            });
		
		 $( ".secimdropdown" ).find('.dropdown-menu li a').each(function(  ) {
				inputVal = $(this).parents('.secimdropdown').find('input').val();
				var data_id = $(this).attr("data-id");
				var data_type = $(this).attr("data-type");
				if (inputVal==0) {
					$('.'+data_type+'_vergidaire_'+data_id+',.'+data_type+'_vergino_'+data_id+',.'+data_type+'_company_'+data_id+'').addClass("hide");
				}else{
					$('.'+data_type+'_vergidaire_'+data_id+',.'+data_type+'_vergino_'+data_id+',.'+data_type+'_company_'+data_id+'').removeClass("hide");
				}
		  });
	}
	updateCitys();
    var address = $('.payment-address-information');
    address.find('input[name="ship_to_different_address"]').change(function() {
        if ($(this).is(':checked')) {
            $('.billing-address').fadeOut();
        } else {
            $('.billing-address').fadeIn();
        }
    });
	$('#shippingAddressBar').on('click', '.ship-address', function() {

		$(".shipinput").removeAttr("disabled");
		$(".shipinput").attr("disabled", true);
		var sira = $(this).attr('data-id');
		$(".field_" + sira).removeAttr("disabled");
		var address_name = $('input[name="shipping_address_nickname"]').val();;
		var shipping_phone = $('input[name="shipping_phone"]').val();;
		var state_name = $(".shipping_state_"+sira+"").find(".form-dropdown ul li a.active").html();
		var shipping_email = $('input[name="shipping_email"]').val();;
		var name = $('input[name="shipping_first_name"]').val();;
		var address_1 = $('input[name="shipping_address_1"]').val();;

		var surname = $('input[name="shipping_last_name"]').val();;
		var post_code = $('input[name="shipping_postcode"]').val();
		var fulladresss = address_1+ " " +state_name + " " + post_code;
		$("#sozlesmeName").html(name + " " +surname);;
		$("#sozlesmeAddress").html(fulladresss);;
		$("#sozlesmePhone").html("+90"+shipping_phone);;
		$("#sozlesmeEmail").html(shipping_email);;
	});

	$('#billingAddressBar').on('click', '.bill-address', function() {
		$(".billinput").removeAttr("disabled");
        $(".billinput").attr("disabled", true);
        var sira = $(this).attr('data-id');
        $(".billfield_" + sira).removeAttr("disabled");
	});

	
    $(".add_ship").click(function() {
		$('input[name="DeliverySelectedAddress"]').prop('checked', false);
		$(this).html('<i class="icon-light-plus"></i> Adresi Düzenle');
        $(".shipinput").removeAttr("disabled");
        $(".shipinput").attr("disabled", true);
        $('#hidden_add_new_address_fields :input').removeAttr("disabled");
    });
	
	$(".add_bill").click(function() {
		$('input[name="BillingSelectedAddress"]').prop('checked', false);
        $(".billinput").removeAttr("disabled");
        $(".billinput").attr("disabled", true);
        $('#hidden_add_new_bill_address_fields :input').removeAttr("disabled");
		$(this).html('<i class="icon-light-plus"></i> Adresi Düzenle');	
    });

    $("#add_shipping_address").click(function() {
        var newAddressTitle = $("#newaddress_nickname").val();;
        var newAddressLine = $("#newaddress_1").val();;
        var newAddressState = $("#newstate").val();;
        var newAddressCountry = $("#newcountry").val();;
        //var data_order = $("#data-order").val();;
        var data_order = $(this).attr('data-order');
        $(".field_" + data_order).removeAttr("disabled");


        if (("#newShippingBar").length) {
            $("#newShippingBar").remove();;
        }
        var jsModalHtml = '<div id="newShippingBar" class="col-md-6 col-sm-6">\
				<input type="radio" name="DeliverySelectedAddress" id="shipping' + data_order + '" checked>\
				<label class="current-address ship-address" data-id="' + data_order + '" for="shipping' + data_order + '">\
					<h4>' + newAddressTitle + '</h4>\
					<address>' + newAddressLine + '</address>\
					<ul>\
						<li><a class="ajaxTrigger" data-fancybox data-src="#hidden_add_new_address_fields" href="javascript:;"><i class="icon-edit"></i>Düzenle</a></li>\
					</ul>\
				</label>';
        $("#shippingAddressBar").append(jsModalHtml);;
    });
	
	 $("#add_billing_address").click(function() {
        var newAddressTitle = $("#newbilladdress_nickname").val();;
        var newAddressLine = $("#newbilladdress_1").val();;
        var newAddressState = $("#newbillstate").val();;
        var newAddressCountry = $("#newbillcountry").val();;
        //var data_order = $("#data-order").val();;
        var data_order = $(this).attr('data-order');
        $(".billfield_" + data_order).removeAttr("disabled");


        if (("#newBillingBar").length) {
            $("#newBillingBar").remove();;
        }

        var jsModalHtml = '<div id="newBillingBar" class="col-md-6 col-sm-6">\
				<input type="radio" name="BillingSelectedAddress" id="billing' + data_order + '" checked>\
				<label class="current-address ship-address" data-id="' + data_order + '" for="billing' + data_order + '">\
					<h4>' + newAddressTitle + '</h4>\
					<address>' + newAddressLine + '</address>\
					<ul>\
						<li><a class="ajaxTrigger" data-fancybox data-src="#hidden_add_new_bill_address_fields" href="javascript:;"><i class="icon-edit"></i>Düzenle</a></li>\
					</ul>\
				</label>';
        $("#billingAddressBar").append(jsModalHtml);;
    });


    $('.special-select').selectpicker();
    
    $("#kvkk").click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
            $('.kvkk-check').hide();
        } else {
            $('.kvkk-check').show();
        }
    });
});

$('.quantity input').on('change', function() {
    $("[name='update_cart']").prop("disabled", false);
    $("[name='update_cart']").trigger("click");
});

$("#duyuru").submit(function(e) {
    event.preventDefault(e);
    var formdata = new FormData(this);
    var actionurl = $(this).attr("action");
    $.ajax({
        url: actionurl,
        type: 'POST',
        contentType: false,
        processData: false,
        data: formdata,
        success: function(response) {
            if (response.error == false) {
                $('.form-success').show();
                setTimeout(function() {
                    $('.form-success').hide();
                }, 2200);
            } else {
                $('.form-success').show();
                setTimeout(function() {
                    $('.form-success').hide();
                }, 2000);

            }
        }
    });
    return false;
});


/* İmage edit */
var uploadFromİnstagram;
var uploadFromFacebook;
$(document).ready(function(){
    /*Size table*/
    $('.size-table .size-table__options li a').on('click', function(){
        const $this = $(this);
        const allOption = $('.size-table li a');
    
        allOption.removeClass("active");
        $this.addClass("active");

    })
    /*frame table*/
    $('.edit-frame-content .edit-frame-item a').on('click', function(e){
        const $this = $(this);
        const allOption = $('.edit-frame-content .edit-frame-item');
        e.preventDefault();
        allOption.removeClass("active");
        $this.parent().addClass("active");
		})
    /*Add image count to modal*/
    const imageCount = $(".gallery-top").data("image-count");
    $(".modal-edit-wrapper .image-count").append(imageCount);
				
		/*Steps*/
    const MODAL_TYPES = {
        'IMAGE_UPLOAD': 'image-upload',
        'IMAGE_SELECTION': 'image-selection',
        'IMAGE_EDIT': 'image-edit',
        'IMAGE_LOADING': 'image-loading',
    }
		let openedModal;
		const imageArray = [];
		let stepCount = false;
    const openModal = (modalType = MODAL_TYPES.IMAGE_UPLOAD) => {
        $(`[data-modal-type=${ openedModal }]`).hide();
        openedModal = modalType;
        $(`[data-modal-type=${ openedModal }]`).show();
    }
		openModal();
		uploadComputer();

		/*Trigger upload computer icon*/
		$('#upload-computer').on("click", function(){
			$('#drag-files-images').trigger("click")
		})
		/*upload from computer*/
		function uploadComputer() {
			const uploadFile = $("#drag-files-images");
		
			uploadFile.on("change", async function(){
				const imageReader = image =>
					new Promise((resolve) => {
						const reader = new FileReader();
						reader.onload = (event) => resolve(event.target.result)
						reader.readAsDataURL(image);
					})

			const $this = $(this);
			imageArray.push(
				...await Promise.all(Array.from($this[0].files).map(file => imageReader(file)))
			);
			imageCountControl(imageArray,"image-upload");
			if(stepCount == true) {
				openModal(MODAL_TYPES.IMAGE_EDIT);
				$('.cancel-edit-images-btn').attr("data-from","computer")
				imageListing(imageArray)
			}
		})
		}
		/* upload from instagram*/
		uploadFromİnstagram = function(){
			var popupWidth = 700,
					popupHeight = 500,
					popupLeft = (window.screen.width - popupWidth) / 2,
					popupTop = (window.screen.height - popupHeight) / 2;
			var instaPopup = window.open("https://api.instagram.com/oauth/authorize?client_id=244488516657772&redirect_uri=https://ahmet.senintablon.com/urun-detay.html&scope=user_profile,user_media&response_type=code",'', 'width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+'');
			instaPopup.open();
			imageArray.length = 0;
			var interval = setInterval(function() {
					try {
							if(instaPopup.location.search) {
								const code = instaPopup.location.search.split("?code=")[1];
								let formData = new FormData();
								formData.append('client_id', '244488516657772');
								formData.append('client_secret', '959008d01cf361cafe4e8e6510b2cca6');
								formData.append('grant_type', 'authorization_code');
								formData.append('redirect_uri', 'https://ahmet.senintablon.com/urun-detay.html');
								formData.append('code', code);
								const getImages = (token) => {
										fetch(`https://graph.instagram.com/me/media?fields=id,caption,thumbnail_url,media_url,media_type&access_token=${token}`, {
										method: 'get',
										}).then(res => res.json())
										.then(({ data }) => {
												if (data.length > 0) {
													openModal(MODAL_TYPES.IMAGE_SELECTION);  
													$('.cancel-edit-images-btn').attr("data-from","")
													const listImageContent = $('.list-image-wrapper');
													listImageContent.html("");
													for (let index = 0; index < data.length; index++) {
															const media = data[index];
															if (media.media_type === "IMAGE") {
																listImageContent.append("<a class='list-image-wrapper__item' href='#'><div class='caption' data-url="+media.media_url+" style='background: url("+media.media_url+") no-repeat center center'></div></a>");
															}
													}
												}
										})
								}
								fetch('https://api.instagram.com/oauth/access_token', {
										method: 'post',
										body: formData
								}).then(res => res.json())
										.then(data => {
												getImages(data['access_token']);
												instaPopup.close()
								})
								clearInterval(interval);
							}
					}
					catch(evt) {
					}
			}, 100);
		}
		/* upload from facebook*/
		uploadFromFacebook = function(){
			var popupWidth = 700,
					popupHeight = 500,
					popupLeft = (window.screen.width - popupWidth) / 2,
					popupTop = (window.screen.height - popupHeight) / 2;
			var facebookPopup = window.open("https://www.facebook.com/dialog/oauth?client_id=866313223882155&redirect_uri=https://ahmet.senintablon.com/urun-detay.html&scope=user_photos",'', 'width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+'');
			facebookPopup.open();
			imageArray.length = 0;
			var interval = setInterval(function() {
					try {
							if(facebookPopup.location.search) {
								const code = facebookPopup.location.search.split("?code=")[1];
								let formData = new FormData();
								formData.append('client_id', '866313223882155');
								formData.append('client_secret', 'b896887fae1e65bca659ce1d57200c85');
								formData.append('redirect_uri', 'https://ahmet.senintablon.com/urun-detay.html');
								formData.append('code', code);
								const getImages = (token) => {
									fetch(`https://graph.facebook.com/me/photos?fields=images&type=uploaded&access_token=${token}`, {
										method: 'get',
										}).then(res => res.json())
										.then(({ data }) => {
											if (data.length > 0) {
												openModal(MODAL_TYPES.IMAGE_SELECTION);
												$('.cancel-edit-images-btn').attr("data-from","")  
												const listImageContent = $('.list-image-wrapper');
												listImageContent.html("");
												for (let index = 0; index < data.length; index++) {
														const media = data[index].images[0].source;
														listImageContent.append("<a class='list-image-wrapper__item' href='#'><div class='caption' data-url="+media+" style='background: url("+media+") no-repeat center center'></div></a>");
												}
											} 
										})
								}
								
								fetch('https://graph.facebook.com/oauth/access_token?', {
										method: 'post',
										body: formData
								}).then(res => res.json())
										.then(data => {
												getImages(data['access_token']);
												facebookPopup.close();
								})
								clearInterval(interval);
							}
					}
					catch(evt) {
					}
			}, 100);
		}
		/* upload images control*/
		function imageCountControl(images, defaultModal){
			if(images.length >= 0 && images.length < imageCount) {
				$(`[data-modal-type=${ defaultModal }]`).find(".modal-header").find(".upload-error-message").html("<b>"+images.length+"</b> adet dosya seçildi. <b>"+(imageCount - images.length)+"</b> adet daha yükleyin");
			}else if(images.length > imageCount){
				$(`[data-modal-type=${ defaultModal }]`).find(".modal-header").find(".upload-error-message").html("En fazla <b>"+imageCount+"</b> dosya yükleyebilirsiniz");
				imageArray.length= 0;
			}else {
				stepCount = true;
			}
		}
		/* images append from list wrapper*/
		function imageListing(data) {
			const images = data.map((image,index) => ({
				area: `photo${index+1}`,
				source: image
			}));
			const tableType = $('.gallery-top').data("table-type");
			const TABLE_TYPES = {
				"1" : {gridTemplateAreas: ['photo1 photo1'], width: 347, height: 232},
				"2" : {gridTemplateAreas: ['photo1','photo1'], width: 232, height: 347},
				"3" : {gridTemplateAreas: ['photo1 photo1'], width: 208, height: 208},
				"4" : {gridTemplateAreas: ['photo1 photo1 photo1'], width: 300, height: 150},
				"5" : {gridTemplateAreas: ['photo1 photo2 photo3 photo4 photo5', 'photo6 photo7 photo8 photo9 photo10','photo11 photo12 photo13 photo14 photo15', 'photo16 photo17 photo18 photo19 photo20'], width: 346, height: 236},
				"6" : {gridTemplateAreas: ['photo1 photo1', 'photo2 photo3'], width: 232, height: 347},
				"7" : {gridTemplateAreas: ['photo1 photo2 photo3 photo4','photo5 photo5 photo5 photo5','photo6 photo7 photo8 photo9'], width:280, height: 280},
				"8" : {gridTemplateAreas: ['photo1 photo2 photo3','photo1 photo4 photo3'], width: 270, height: 135},
			}
			const currentType = TABLE_TYPES[tableType]
			const $canvasTable = $("#edit-image-table").mosaicTable({
				width: currentType.width,
				height: currentType.height,
				gap: 5,
                templateAreas: currentType.gridTemplateAreas,
                strokeDash: 5,
				strokeWidth: 2,
				images, 
				onSelected(selectedArea) {
					$("#scaleRange").attr("disabled", false);
                    $("#rotateRange").attr("disabled", false);
                    $("#scaleRange").val(selectedArea.image.scale);
                    $("#rotateRange").val(selectedArea.image.rotate);
				},
			});

			$("#scaleRange").on("input", (event) => {
				$canvasTable.changeScale(event.target.value);
			});
		
			$("#rotateRange").on("input", (event) => {
				$canvasTable.changeRotate(event.target.value);
			});
		}
		/* Select images from list and add open caption*/
		$(document).on("click",".modal-edit-wrapper .list-image-wrapper a",function(e){
			e.preventDefault();
			const $this = $(this);
			$this.toggleClass("selected");
		})
		/* Control select images count and open edit modal*/
		$(document).on("click",".save-select-images-btn",function(e){
			e.preventDefault();
			var count = 0;
			imageArray.length = 0;
			$('.list-image-wrapper a').each(function(){
				if($(this).hasClass("selected")) {
					imageArray.push($(this).find(".caption").data("url"))
					count ++;
				}
			})
			imageCountControl(imageArray,"image-selection");
			if(stepCount == true) {
				openModal(MODAL_TYPES.IMAGE_EDIT);
				imageListing(imageArray)
			}
		})
		/* cancel upload images list modal  */
		$(document).on("click",".delete-select-images-btn",function(e){
			imageArray.length = 0;
			openModal(MODAL_TYPES.IMAGE_UPLOAD);
		});
		/* save all images and close modal  */
		$(document).on("click",".save-all-images",function(e){
			openModal(MODAL_TYPES.IMAGE_LOADING);
			function progress(){
				let progressBar = $('.progress-bar-wrapper .bar');
				let progressValue = $('.progress-bar-wrapper .bar .value');
				let count = 0;
				let progress = 0;
				let setId = setInterval(frame, 120);

				function frame(){
					if(progress == 100 && count == 100) {
						clearInterval(setId);
						$("#editPhotos").modal('hide');
					}else {
						progress += 1;
						count +=1;
						progressBar.css("width", progress + '%');
						progressValue.html(count + '%');
					}
				}
			}
		 progress();
		});
		/* cancel edit images modal  */
		$(document).on("click",".cancel-edit-images-btn",function(e){
			e.preventDefault();
			const dataFrom = document.querySelector('.cancel-edit-images-btn').dataset.from;
			$('.modal-edit-wrapper .upload-error-message').html("");
			$('.design-product-content__grid-container').html("");
			$('#rotateRange').val("0");
			$('#scaleRange').val("1.005");
            stepCount = false;
			if(dataFrom == "computer"){
				imageArray.length = 0;
				openModal(MODAL_TYPES.IMAGE_UPLOAD);
			}else {
				openModal(MODAL_TYPES.IMAGE_SELECTION);
            }
            document.querySelector('.cancel-edit-images-btn').dataset.from = '';
		});
		/* close modal and refresh page*/
		$('#editPhotos').on('hidden.bs.modal', function () {
			imageArray.length = 0;
			location.reload();
		});
});
