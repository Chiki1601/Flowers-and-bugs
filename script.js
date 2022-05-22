const flowers = document.querySelectorAll(".flower")

flowers.forEach(flower => {
  TweenMax.fromTo(flower, 5, {rotation: -10}, {
      rotation: 10,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      transformOrigin: '50% bottom'
    }
  )
})