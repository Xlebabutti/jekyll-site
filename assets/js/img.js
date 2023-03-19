let images = document.querySelectorAll('.img-row')

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    console.log(images)

    if (this.classList.contains('enlarged')) {
      this.classList.remove('enlarged')
      document.querySelector('.img-overlay').classList.remove('active')
      document.body.style.overflow = 'auto'
    } else {
      this.classList.add('enlarged')
      document.querySelector('.img-overlay').classList.add('active')
      document.body.style.overflow = 'hidden'
    }
  })
 }