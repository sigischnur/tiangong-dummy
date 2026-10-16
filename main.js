document.querySelector('.burger').onclick=()=>document.querySelector('nav ul').classList.toggle('open');
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(new URLSearchParams(location.search).get('danke')==='1'){const n=document.getElementById('danke');if(n){n.style.display='block';n.scrollIntoView({block:'center'})}}
