$('document').ready(function(){
    $('#submit-btn').on('click', function(){
        if ( $('#story-container').css('display') != 'none') {
            $( '#story-container' ).slideUp( "normal", function() {
            });
        }
        const width = $("[name='width']").val();
        const height = $("[name='height']").val();
        let number = $("[name='number']").val();
        number = parseInt(number);
        console.log(number);
        let size = width * height;
        let i = 0;
        while(number > 1) {
            number = number/2;
            i++;
        }
        size = (size*i)/(8*1024);
        console.log(i);
        var sizeText= "File is " + Math.round(size) + "KB which is ok";
        $('#size').text(sizeText);
        $( '#story-container' ).slideDown( "normal", function() {
            // Animation complete.
          });
    })
})