$(document).ready(function() {
    // definition of clock ..
    var clock;

    // forms functionality || main
    $("#setTimer").click(function(){
        // get forms data in array of objects .. 
        let myFormData = $("form").serializeArray() ;
        let hours = myFormData[0]; 
        let minutes = myFormData[1]; 
        let seconds = myFormData[2];
        // native validation
        if (hours.value === "") {
            $('#validationHours').show();
            setTimeout(function(){
                $('#validationHours').hide();
            },2000);
        }else if (minutes.value === ""){
            $('#validationMinutes').show();
            setTimeout(function(){
                $('#validationMinutes').hide();
            },2000);
        }else if (seconds.value === "") {
            $('#validationSeconds').show();
            setTimeout(function(){
                $('#validationSeconds').hide();
            },2000);
        }else{
        // calculate the time in seconds ..
        let time = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + (parseInt(seconds.value));
        // check the time in seconds for passing data to clock .. 
        if (isNaN(time) === false) {
              M.toast({html: 'Sucess Creation ^ ^' ,displayLength: 1000 ,classes: 'green'});
              // improve UI/UX ..
              $("#myForm").hide();
              $("#timer").show();
              // create the clock with FLIP-CLOCK-JQUERY-PLUG-IN and passing data .. 
              clock = $('.clock').FlipClock(time,{
                // clock params ..
                clockFace: 'HourlyCounter',
                language: 'ar',
                countdown : true,
                autoStart: false,
/*                 callbacks: {
                          stop : function() {
                                  $('.message').html('The clock has stopped!');
                          },
                          start : function () {
                                  $('.message').html('The clock has start!');
                          }
                      } */
                });
            }
        }
    });

    // put the clock active ..
    $('#start').click(function() {
        M.toast({html: 'Sucess START Clock ^ ^' ,displayLength: 1000 ,classes: 'green'});
        clock.start();
    });
    // put the clock in wait
    $('#stop').click(function() {
        M.toast({html: 'Sucess STOP Clock ^ ^' ,displayLength: 1000 ,classes: 'red'});
        clock.stop();
    }); 
    // go to the forms for passing new data
    $('#reset').click(function() {
        M.toast({html: 'Sucess RESET Clock ^ ^' ,displayLength: 500 ,classes: 'black'});
        setTimeout(function(){
            location.reload();
        },500);
    });  

 
});