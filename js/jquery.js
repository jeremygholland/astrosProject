$(document).ready(function(){
  var hide = function(){
    $('#retiredExpand').hide();
    $('#depthExpand').hide()
    $('#playoffExpand').hide();
    $('#mascotExpand').hide();
  }
  hide();
  $('.retired').hover(function(){
    $('#retiredExpand').show(800);
    $('#depthExpand').hide( 600);
    $('#mascotExpand').hide(600);
    $('#playoffExpand').hide(600);
  })
  $('.depth').hover(function(){
    $('#depthExpand').show(800);
    $('#retiredExpand').hide(600);
    $('#mascotExpand').hide(600);
    $('#playoffExpand').hide(600);
  })
  $('.mascot').hover(function(){
    $('#mascotExpand').show(800);
    $('#depthExpand').hide(600);
    $('#retiredExpand').hide(600);
    $('#playoffExpand').hide(600);
  })
  $('.playoff').hover(function(){
    $('#playoffExpand').show(800);
    $('#depthExpand').hide(600);
    $('#retiredExpand').hide(600);
    $('#mascotExpand').hide(600);
  })

$('.content').hover(function(){
hide();
})
$('body').hover(function(){
  hide();
})

})
