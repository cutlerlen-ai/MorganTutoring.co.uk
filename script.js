fetch('reviews.json')
  .then(r=>r.json())
  .then(data=>{
    const box=document.getElementById('reviews');
    data.forEach(r=>{
      const div=document.createElement('div');
      div.className='review';
      div.innerHTML = `<strong>${r.author}</strong><p>${r.text}</p>`;
      box.appendChild(div);
    });
  });
