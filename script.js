var para1 = document.getElementById('para1');
para1.textContent = " Sample Para 3"

var p2=$('#para2')
p2.text('I changed a lot')

$('div').css({
    height:'100px',
    width:'100px',
    backgroundColor:'red'
})
// $('div').click(function(){
//     var elem = $(this)
//     elem.width(elem.width() + 50 + "px")
// })

$('div').toggle()

$( "#clickme" ).on( "click", function() {
    $( "#book" ).toggle( "slow", function() {
      // Animation complete.
    });
  });
