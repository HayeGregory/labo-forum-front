$( document ).ready(function() {
  $(".sidenav").sidenav({
     edge: 'right', menuWidth: '90%'
   });

  $('select').select();

  $('.collapsible').collapsible();

  $('.collapsible[data-collapsible="expandable"]').collapsible({
    accordion: false
  });

  $('#callbacks').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
  });


  $('#add-li').click(function() {
    $('#first').append('<li><div class="collapsible-header"><i class="mdi-social-whatshot"></i>Third</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li>');
  });

  $('#add-li2').click(function() {
    $('#second').append('<li><div class="collapsible-header"><i class="mdi-social-whatshot"></i>Third</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li>');
  });

});
