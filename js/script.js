  // This code makes the eyes of the predator fade out en let the rest of the page fade in in the beginning
  const image = document.querySelector('.fade-out-image');
  const fadeInElements = document.querySelector('.fadeInElements');
  const copyRightText = document.querySelector('.copyrightText');
  
  image.addEventListener('transitionend', () => {
      fadeInElements.classList.add('fadeIn');
      copyRightText.classList.add('fadeIn'); // add "fadeIn" class to copyRightText
      fadeInElements.classList.remove('fadeInElements');
  });
  
  setTimeout(() => {
      image.classList.add('fadeOut');
      copyRightText.classList.add('fadeIn'); // add "fadeIn" class to copyRightText
      copyRightText.style.transition = 'opacity 3.5s ease-in'; // set the transition duration to 1s
      copyRightText.style.opacity = '1'; // set the opacity to 1
  }, 1000);
  

  // This code makes sure the logo on the homepage turns into my name when you hover over it
  const BAlogo = document.querySelector('.BAlogo');
  const logoB = document.querySelector('.logoB');
  const logoA = document.querySelector('.logoA');
  const textRestFname = document.querySelector('.textRestFname');
  const textRestLname = document.querySelector('.textRestLname');
  const logoBavli = document.querySelector('.logoBavli');
  const logoArmanyous = document.querySelector('.logoArmanyous');

  function regularCSScode() {
    if (window.innerWidth >= 1280) {
      logoB.style.left = '-25%';
      logoA.style.left = '-5%';
      textRestFname.style.opacity = '1';
      textRestFname.style.left = '24%';
      textRestLname.style.opacity = '1';
      textRestLname.style.right = '11%';
    }
  }

  function maxScreenSize_1230px() {
      if (window.innerWidth <= 1230) {
          logoB.style.left = '-20%';
          logoA.style.right = '5%';
          textRestFname.style.top = '16%';
          textRestFname.style.left = '22%';
          textRestLname.style.top = '16%';
          textRestLname.style.left = '42%';
          textRestFname.style.opacity = '1';
          textRestLname.style.opacity = '1';
          textRestFname.style.fontSize = '2rem';
          textRestLname.style.fontSize = '2rem';
      }  else {
          regularCSScode();
      }
  }

  // Call the function on load and resize
  window.addEventListener('load', maxScreenSize_1230px);
  window.addEventListener('resize', maxScreenSize_1230px);

  BAlogo.addEventListener('mouseover', () => {
    maxScreenSize_1230px();
  });

  BAlogo.addEventListener('mouseout', () => {
      logoB.style.left = '0';
      logoA.style.left = '-2%';
      textRestFname.style.opacity = '0';
      textRestFname.style.left = '25%';
      textRestLname.style.opacity = '0';
      textRestLname.style.right = '11%';
  });

  //   ---