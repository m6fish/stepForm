$(document).ready( function(){
    $('#mutiStep').validate({
        event: "keyup",
        rules:{
            id:{
                required:true             
            },
            pass:{
                required:true,
                minlength: 5,
                maxlength:  10 
            },
            name:{
                required:true
            }
        },
        messages: {
            id: {
                required: "必填."
            },
            pass: {
                 required: "請輸入您的密碼.",
                 minlength: "密碼不能小於５位.",
                 maxlength: "密碼不能長於10位."
             },
             name: {
                required: "必填."
             }
         },
         
        // specifying a submitHandler prevents the default submit, good for the demo
        submitHandler: function() {
            alert("submitted!");
        }   
    });
});
