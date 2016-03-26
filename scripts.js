$(document).ready(function(){
   $('.inputs').each(function(){
       var value = "Enter "+$(this).attr('name');
       $(this).val(value);
   });
      
   $('.inputs').each(function(){
       $(this).focus(function(){
           $(this).val('');
           $(this).css('border','1px solid red');
           $(this).parent().css('border','1px solid blue');
           $(this).parent().siblings().css('border','1px solid yellowgreen');
       });
       $(this).blur(function(){
           var value = "Enter "+$(this).attr('name');
           $(this).val(value);
           $(this).parent().css('border','0');
           $(this).addClass('blur');
           $(this).css('border','1px solid #ddd');
       });
   });
   
   
});
