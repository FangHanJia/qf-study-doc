
        
 window.onload = function(){
  var head = document.getElementById('head');
 window.onscroll = function(){
              var scrollTop = window.scrollY;
                      console.log(scrollTop);

                        if(scrollTop>=100){
                              head.className = 'fixed';
                                     }else{
                                            head.className =' ';
                                        }
                                    }
                                }
   