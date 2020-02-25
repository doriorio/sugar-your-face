$(window).on('load', function(){
    $.instagramFeed({
      'username': 'sugaryourface',
      'container': "#instagram-feed",
      'display_gallery': false,
      'display_profile': true,
      'display_biography': true,
      'display_igtv': false,
      'items': 18,
      'items_per_row': 3,
      'margin': 1,
      'styling': true
    });
  });