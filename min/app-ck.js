!function(n){n(document).ready(function(){var u,z,c="<br/>",i=function(){for(u=1;100>=u;u++)z=u%15===0?"FizzBuzz":u%3===0?"Fizz":u%5===0?"Buzz":u,z+=c,n(".result").append(z)};n("a").click(function(){i()})})}(jQuery);