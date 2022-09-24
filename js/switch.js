let btns = document.querySelectorAll('.btn_');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {    
        document.querySelectorAll('.items').forEach(function(el) {
            el.style.display = 'none';
        }); 
        
        document.querySelector(`.${this.dataset.menuName}`).style.display = 'block';
    });
}