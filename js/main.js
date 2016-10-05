$(document).ready(function(){

	//featured dishes slider initialisation
	$("#dishes").carouFredSel({
		circular: true,
		infinite: false,
		auto 	: false,
		prev	: {	
			key		: "left"
		},
		next	: { 
			key		: "right"
		},
		pagination	: "#slider_nav"
	});






	//gallery hover effect
	$('.gallery .media img').hover(function(){
		$('.gallery .media img').addClass('inactive');
		$(this).removeClass('inactive').addClass('active');
	}, function(){
		$('.gallery .media img').removeClass('inactive');
	});






	//menu show more items btn
	function update_btn(old_btn_id, new_btn_id, btn_content){
		$(old_btn_id).removeAttr('id');
			$('.load-more a').attr({
				id : new_btn_id
			});
			$('#' + new_btn_id).html(btn_content);
	}


	$(document).on('click', 'a#more_items', function(event) {	    
		event.preventDefault();
		$('.menu .hidden_items').slideDown({duration:800,  easing: "easeInOutQuart", complete : function(){
			update_btn('#more_items', 'hide_items', 'hide items<hr/><span class="top_arrow"></span>');
		}});
	});
	

	$(document).on('click', 'a#hide_items', function(event) {	    
		event.preventDefault();		
		$('.menu .hidden_items').slideUp({duration:800,  easing: "easeInOutQuart", complete : function(){
			update_btn('#hide_items', 'more_items', 'show more<hr/><span class="bottom_arrow"></span>');
		}});	    
	});


});


//reviews 
(function(){
  'use strict';
  
  angular
    .module('commentsApp', [])
    .controller('CommentsController', CommentsController);
  
  // Inject $scope dependency.
  CommentsController.$inject = ['$scope'];
  
  // Declare CommentsController.
  function CommentsController($scope) {
    var vm = this;
    
    // Current comment.
    vm.comment = {};

    // Array where comments will be.
    vm.comments = [];

    // Fires when form is submited.
    vm.addComment = function() {
      // Fixed img.
      vm.comment.avatarSrc = 'http://lorempixel.com/200/200/people/';

      // Add current date to the comment.
      vm.comment.date = Date.now();

      vm.comments.push( vm.comment );
      vm.comment = {};

      // Reset clases of the form after submit.
      $scope.form.$setPristine();
    }

    // Fires when the comment change the anonymous state.
    vm.anonymousChanged = function(){
      if(vm.comment.anonymous)
        vm.comment.author = "";
    }
  }

})();

