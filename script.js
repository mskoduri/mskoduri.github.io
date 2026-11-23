(function(){
  const c = window.INVILYNK_CONFIG || {};
  const demo = c.demoUrl || "#demo";
  document.querySelectorAll(".js-demo").forEach(a => a.href = demo.startsWith("YOUR-") ? "#demo" : demo);
  const wa = c.whatsappNumber && !c.whatsappNumber.startsWith("YOUR") ? "https://wa.me/"+c.whatsappNumber : "#contact";
  document.querySelectorAll(".js-whatsapp").forEach(a => a.href = wa);
  const call = c.phoneDisplay && !c.phoneDisplay.startsWith("YOUR") ? "tel:"+c.phoneDisplay.replace(/[^\d+]/g,"") : "#contact";
  document.querySelectorAll(".js-call").forEach(a => a.href = call);
  const email = c.email && !c.email.startsWith("YOUR") ? "mailto:"+c.email : "#contact";
  document.querySelectorAll(".js-email").forEach(a => a.href = email);
  document.querySelectorAll(".js-instagram").forEach(a => a.href = (c.instagramUrl && !c.instagramUrl.startsWith("YOUR")) ? c.instagramUrl : "#contact");
  const menuBtn=document.querySelector(".menu-toggle"),menu=document.querySelector("#mobile-menu");
  if(menuBtn&&menu){menuBtn.addEventListener("click",()=>{const open=menu.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")))}
  document.getElementById("year").textContent=new Date().getFullYear();
})();
