
    var Body={
      setColor: function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
      },
      setBackcolor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
      }
    }

    var link={
      setColor: function(color){
        // var alist=document.querySelectorAll('a');
        // var i=0;
        // while(i < alist.length){
        //   alist[i].style.color = color;
        //   i = i + 1;
        // }

        //원래는 반복문으로 하나하나 바꿔줘야 했는데
        $('a').css('color',color);
        //이 웹페이지에 있는 모든 a 태그를 이걸로 제어하겠다

      }
    }


      function nigthday_handler(self){
        var target=document.querySelector('body');

        if(self.value==='night'){
          self.value='day';
          Body.setBackcolor('black');
          Body.setColor('white');
          link.setColor('yellow');
        }else{
          self.value='night';
          Body.setBackcolor('white');
          Body.setColor('black');
          link.setColor('blue');
        }
      }
