$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    var photoHTML = '<ul>';
    $.each(data.results, function(i, photo){
    	var date = photo.dob.split(" ")[0];
    	photoHTML += '<li class="item"><div id="photo">';
    	photoHTML += '<img src="'+ photo.picture.large +'">';
    	photoHTML += '</div><div class="info">';
    	photoHTML += '<p class="name">'+ photo.name.first +' '+ photo.name.last +'</p>';
    	photoHTML += '<p>' + photo.email + '</p>';
    	photoHTML += '<p class="city">' + photo.location.city + '</p></div>';
    	photoHTML += '<div class="details"><div class="details-content"><span class="close">&times;</span><div class="photo">';
	    photoHTML += '<img src="'+ photo.picture.large +'">';
	    photoHTML += '<p class="name">'+ photo.name.first +' '+ photo.name.last +'</p>';
	    photoHTML += '<p>' + photo.email + '</p>';
	    photoHTML += '<p class="city">' + photo.location.city + '</p></div><div class="more">';
	    photoHTML += '<p>'+ photo.phone+'</p>';
	    photoHTML += '<p class="address">'+ photo.location.street + ', '+ photo.location.state + ' '+ photo.location.postcode+'</p>';
	    photoHTML += '<p>Birthday: '+ date +'</p></div></div></div></li>';
    })
    photoHTML += '</ul>';
    $('.container').html(photoHTML);
    $('.item').click( function() {    	
    	$(this).children('.details').css('display', 'block');
    });
    $('.close').click(function(e){
    	$(this).parent().parent().css("display", "none"); 
    	e.stopPropagation();
    });
  }
});