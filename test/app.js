let codes = document.getElementById('codes');
let submit = document.getElementById('submit');
let show = document.getElementById('show');

submit.onclick = ()=> {
    if(codes.value != "") {
        show.innerHTML += "<div class='comment'>"
                       +"<img id='img' src='img/testimonial-picture.png' width='30' height='30'>"
                       + "<h4 id='h4'>"+codes.value+"</h4>"
                       +"</div>";
        codes.value = "";
    }else {
        codes.style.border = "1px solid red";
    }
}