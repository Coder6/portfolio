$(document).ready(function() {
                
                var $item = $('div.item'), //Cache your DOM selector
                    visible = 2, //Set the number of items that will be visible
                    index = 0, //Starting index
                    endIndex = ( $item.length / visible ) - 1; //End index
                
                $('div#arrowR').click(function(){
                    if(index < endIndex ){
                      index++;
                      $item.animate({'left':'-=300px'});
                    }
                });
                
                $('div#arrowL').click(function(){
                    if(index > 0){
                      index--;            
                      $item.animate({'left':'+=300px'});
                    }
                });

                $('ul.nav li.dropdown').hover(function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
                }, function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
                });
            });
