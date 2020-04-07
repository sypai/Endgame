$('.clicker').click(function(){
    var $btn = $(this),
        $step = $btn.parents('.card-body'),
        stepIndex = $step.index(),
        $pag = $('.card-header span').eq(stepIndex);

        console.log(stepIndex)
    if(stepIndex === 0 || stepIndex === 1 || stepIndex === 2 || stepIndex === 3) 
        { step1($step, $pag ,stepIndex); }
    // else 
    //     { step3($step, $pag); }
    
  });
  
  function step1($step, $pag, stepIndex){
  console.log('step1');
    // animate the step out
    $step.addClass('animate-out');
    
    // animate the step in
    setTimeout(function(){
        console.log('in')
      $step.removeClass('animate-out is-showing')
           .next().addClass('animate-in');

      $pag.removeClass('is-active')
            .next().addClass('is-active');

      if(stepIndex === 3)
      {
        console.log('I was here!')
        $('.card-header span').addClass('is-active');
      }
    }, 600);
    
    // after the animation, adjust the classes
    setTimeout(function(){
      $step.next().removeClass('animate-in')
            .addClass('is-showing');
      
    }, 1200);
  }
  
  
  function step3($step, $pag){
  console.log('3');
  
    // animate the step out
    $step.parents('.card').addClass('animate-up');
  }
  
//   $('.rerun-button').click(function(){
//    $('.card').removeClass('animate-up')
//                     .find('.card-body')
//                     .first().addClass('is-showing')
//                     .siblings().removeClass('is-showing');
  
//     $('.card-header span').first().addClass('is-active')
//                             .siblings().removeClass('is-active');
//    $(this).hide();
//   });
  