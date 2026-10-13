document.querySelector('.burger').onclick=()=>document.querySelector('nav ul').classList.toggle('open');
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const f=document.querySelector('form');if(f)f.onsubmit=e=>{e.preventDefault();document.querySelector('.notice').style.display='block';f.reset()};
