$('document').ready(function(){
    $('#submit-btn').on('click', function(){
        if ( $('#story-container').css('display') != 'none') {
            $( '#story-container' ).slideUp( "normal", function() {
            });
        }
        const name = $("[name='name']").val();
        const char = $("[name='character']").val();
        const adv = $("[name='adverb']").val();
        const adj = $("[name='adjective']").val();
        var story= "One day, my friend " + name + " was visiting New York and ran into "+ char + ". " + name + " ran " + adv + " to meet "+ char + ". But " + name + " turned out to be very " + adj + " and " + name + " did not enjoy.";
        $('#story').text(story);
        $( '#story-container' ).slideDown( "normal", function() {
            // Animation complete.
          });
    })
})