(function ( $ ) {
    "use strict";
    
    $.fn.shareurl = function(param) {
        
        var url,platform,popup_ayar;
        var popup         ="window.open(this.href, '_blank', 'toolbar=0,location=0,menubar=0,{boyut}');return false";
        var url_facebook  ='https://www.facebook.com/sharer/sharer.php?u={site_url}';
        //var url_twitter   ='https://twitter.com/home?status={site_url}%20{site_title}';
        var url_twitter   ='https://twitter.com/intent/tweet?button_hashtag=OTACI&url={site_url}';
        var url_linkedin  ='https://www.linkedin.com/shareArticle?mini=true&url={site_url}&title={site_title}';
        var url_email     ='mailto:{site_email}?&subject={site_title}';
        var url_pinterest     ='http://pinterest.com/pin/create/button/?url={site_url}&media={site_image}&description={site_title}';
        var url_google        ='https://plus.google.com/share?url={site_url}';
        var url_whatsapp        ='https://wa.me/?text={site_title} - {site_url}';
        
        var meta_image = $('meta[property="og:image"]').attr("content");
        var opt = $.extend({
            site_title: document.title,
            site_url: document.URL,
            site_image: meta_image,
            //site_email : 'info@otaci.com.tr'
        }, param);

    this.find('a').each(function(){
   
url='';
popup_ayar='';
platform=$(this).attr("data-share");
switch (platform){
case 'facebook' :
url = url_facebook.replace('{site_url}',opt.site_url);
popup_ayar = popup.replace('{boyut}','width=548,height=325');
break;
case 'twitter' :
url = url_twitter.replace('{site_url}',opt.site_url);
url = url.replace('{site_title}',opt.site_title);
popup_ayar = popup.replace('{boyut}','width=548,height=325');

break;
case 'linkedin':
url = url_linkedin.replace('{site_url}',opt.site_url);
url = url.replace('{site_title}',opt.site_title);
popup_ayar = popup.replace('{boyut}','width=548,height=325');

break;
case 'pinterest':
url = url_pinterest.replace('{site_url}',opt.site_url);
url = url.replace('{site_title}',opt.site_title);
url = url.replace('{site_image}',opt.site_image);
popup_ayar = popup.replace('{boyut}','width=548,height=325');

break;
case 'google':
url = url_google.replace('{site_url}',opt.site_url);
url = url.replace('{site_title}',opt.site_title);
popup_ayar = popup.replace('{boyut}','width=548,height=325');

break;
case 'whatsapp':
url = url_whatsapp.replace('{site_url}',opt.site_url);
url = url.replace('{site_title}',opt.site_title);
popup_ayar = popup.replace('{boyut}','width=548,height=325');

break;
case 'e-mail' :
url = url_email.replace('{site_email}',opt.site_email);
url = url.replace('{site_title}',opt.site_title);
break;
}

$(this).attr('href',url);
if (popup_ayar!='')
$(this).attr('onclick',popup_ayar);

 });

};

}( jQuery ));