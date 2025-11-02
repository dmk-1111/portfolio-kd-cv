import $ from 'jquery';

$(() => {
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    const url = $(location).attr('href');
    const lastPart = url.substring(url.lastIndexOf('/') + 1);
    if(lastPart == '#about'){
        $('#m-home, #m-skill, #m-resume, #m-contact').removeClass('active');
        $('#m-about').addClass('active');
    }else if(lastPart == '#skills'){
        $('#m-home, #m-about, #m-resume, #m-contact').removeClass('active');
        $('#m-skill').addClass('active');
    }else if(lastPart == '#resume'){
        $('#m-home, #m-about, #m-skill, #m-contact').removeClass('active');
        $('#m-resume').addClass('active');
    }else if(lastPart == '#contact'){
        $('#m-home, #m-about, #m-skill, #m-resume').removeClass('active');
        $('#m-contact').addClass('active');
    }else{
        $('#m-contact, #m-about, #m-skill, #m-resume').removeClass('active');
        $('#m-home').addClass('active');
    }
});




// const ulLink = () => {
//     document.addEventListener('DOMContentLoaded', function() {
//         const links = document.querySelectorAll('ul li a');
        
//         links.forEach(link => {
//             link.addEventListener('click', function() {
//             links.forEach(l => l.classList.remove('active'));
//             this.classList.add('active');
//             });
//         });
//     });
// }
// export default ulLink