(function(){
   function setupSlide(){
       document.addEventListener('click',function(evt){
            if(evt.target && evt.target.classList.contains('slide-item')){
                activeItem(evt.target);
            }
       });
   } 

   function activeItem(slideItem){
       if(!slideItem) return;
        var parentEl = slideItem.parentElement;
        var container = parentEl.closest('.slide-container');
        var indexOfTarget = Array.prototype.indexOf.call(parentEl.children,slideItem);
        activeSelectedOne(indexOfTarget, container.querySelectorAll('.slider div'));

        resetSlideItems(container.querySelectorAll('.slide-item'),indexOfTarget);
   }

   function resetSlideItems(slideItems, newSelectedIndex){
        for(var i=0;i<slideItems.length;i++){
            if(i<=newSelectedIndex){
                slideItems[i].classList.add('active');
            }else{
                slideItems[i].classList.remove('active');
            }
        }
   }

   function activeSelectedOne(selectedIndex,items){
    for(var i=0;i<items.length;i++){
        if(i===selectedIndex){
            items[i].classList.add('visible');
        }else{
            items[i].classList.remove('visible');
        }
    }
   }

   setupSlide();
})()