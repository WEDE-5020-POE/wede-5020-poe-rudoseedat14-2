document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if(target) target.scrollIntoView({behavior: 'smooth'})
    })
  })

  const form = document.querySelector('form')
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault()
      const inputs = form.querySelectorAll('input, textarea')
      let empty = false
      inputs.forEach(input => {
        if(!input.value.trim()){
          empty = true
        }
      })
      if(empty){
        alert('Fill all fields')
      }else{
        alert('Form submitted')
      }
    })
  }

  const orderBtn = document.querySelector('#orderBtn')
  if(orderBtn){
    orderBtn.addEventListener('click', () => {
      alert('Order page coming soon')
    })
  }
})
/* Enquiry Form Styling - Part 3 */
.enquiry-page { 
  max-width: 600px; 
  margin: 40px auto; 
  padding: 20px; 
}
.enquiry-page h1 { 
  color: #d63384; 
  margin-bottom: 10px; 
}
.enquiry-page p { 
  margin-bottom: 25px; 
  color: #555; 
}
.form-group { 