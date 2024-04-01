$(document).ready(function () {
   
    let button = $('<input>').attr({
        type: 'submit',
        id: 'btnSubmit',
        value: 'Submit',
      
  
    });

    $('form').append(button);

    //is it ok that the mouse over and random color generator function strictly lives inside the btn submit function?
    //if the h2 and <ul> is initialized inside then it cannot be referenced elsewhere

    $('#btnSubmit').on('click',function(event){
        event.preventDefault();
        if($('#textInput') != '' ){
            let value =  $('input[type=text]').val();

            //alert(value);
            //let h2 = $('<h2>');
            //h2.text = value;
            //$(h2).append(h2.text);
            //$('div').append(h2);

            $('h2').mouseover(function(){
                $(this).css({
                    'background-color': 'red',
                    'border-radius': '10px'
                });
            });

            let myList = $('<ul>');
            $(document.body).append(myList);
            let listItem = $('<li>');
            $(myList).append(listItem);
            listItem.text(value);

            function generateRandomNumber(){
               return Math.floor(Math.random() * 255) +1 ;
            }

            $(listItem).on('click',function(){
                $(this).css('color', 'rgb(' + generateRandomNumber() + ',' + generateRandomNumber() + ',' + generateRandomNumber() +')');
            });

            $(listItem).on('dblclick', function(){
                $(this).remove(); 
            });

        }

    });


    function checkIfEmpty(){
        if ($('#textInput').val() == '') {
            $('#btnSubmit').prop('disabled', true);
        } else {
            $('#btnSubmit').prop('disabled', false);
        }
    };

    checkIfEmpty();
    $('#textInput').keyup(checkIfEmpty);

    let div = $('<div>');
    $('body').append(div);
    
});