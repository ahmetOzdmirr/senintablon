$(document).ready(function(){
	$("button.js-post").bind('click', function(e) {
   invalid( $(this).parents('form') );
	});

	$(".no-number").keydown(function (e) {
      var test = /[0-9]/;
      var value = String.fromCharCode(e.keyCode);
      if (value.match(test)) {
          return false;
      }
  });

});


//file name preview
function get_filename(obj,hidden) {
    var file = obj.value.replace(/C:\\fakepath\\/i, '');
    var attr_id = obj.getAttribute('id');
    var form_wrap = $('.extradition-message-form');
    var file_div = form_wrap.find('.file');
    var file_size = obj.files[0].size;
    //console.log(file);
    file_div.find('span').remove();
    var sonuc = ((/[.]/.exec(file)) ? /[^.]+$/.exec(file) : undefined);
    if ((sonuc == "jpg") || (sonuc == "png")) {
        if (file_size > 5000000) {
            //boyut hatasi
            file_div.append('<span class="error">' + file_div.data('file-error') + '</span>');
        } else {
            file_div.append('<span class="success">' + file_div.data('file-success') + ' - ' + file + '</span>');
        }
    }
    else {
        //uzanti hatasi
        file_div.append('<span class="error">' + file_div.data('file-extension') + '</span>');
    }
}


function invalid(el){
  $.validate({
    modules : 'security',
    form : el,
    errorElementClass:'invalid',
    scrollToTopOnError : false,
    validateHiddenInputs:true,
    onError : function(form){
      //sweetAlert("Hata", "Lütfen gerekli alanları doldurunuz!", "error");
    },
    onSuccess : function(form) {
      if (form[0]['name']=='ebulten') {
        formGonder(el);
        return false;
      }
    },
    /*errorPlacement: function(error, element) {
      error.insertBefore(element);
  }*/
  });
}

function formGonder(el){

  var action = $(el).attr("action"),
      method = $(el).attr("method"),
      name   = $(el).attr('name'),
      veri   = $(el).serialize(),
      validate = $(el);
      $.ajax({

          type: method,
          url: action,
          data: veri,
          cache:false,
          success:function(data){
              data.success = true;
              if (data.success==true) {
                if (name=='ebulten') {
                  validate.append('<span class="help-block">' + el.data('success') + '</span>');
                }
                /*else{
                  sweetAlert("Başarılı", el.data('success'), "success");
                }*/
                //sweetAlert("Başarılı", el.data('success'), "success");
                setTimeout(function(){ window.location.reload(); }, 2000);
              }else{
                if (name=='ebulten') {
                  validate.append('<span class="help-block form-error">' + el.data('error') + '</span>');
                }
                /*else{
                  sweetAlert("Hata", el.data('error'), "error");
                }*/
                //sweetAlert("Hata", el.data('error'), "error");
                //setTimeout(function(){ window.location.reload(); }, 3000);
              }
          }
      });
}