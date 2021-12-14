function showBtnAnimation() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('mouseover', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
      
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });

  // buttons.forEach(btn => {
  //   btn.addEventListener('mouseover', function(e) {
  //     let x = e.clientX - e.target.offsetLeft;
  //     let y = e.clientY - e.target.offsetTop;
    
  //     let ripples = document.createElement('span');
  //     ripples.style.left = x + 'px';
  //     ripples.style.top = y + 'px';
  //     this.appendChild(ripples);
      
  //     setTimeout(() => {
  //       ripples.remove();
  //     }, 1000);
  //   });
  // })
}

function showImage() {
  const inputFile = document.querySelector('.file');
  const imagePreview = document.querySelector('.image-preview__image');
  // const name = document.getElementById('name').value;
  // const surname = document.getElementById('surname').value;

  inputFile.addEventListener('change', function() {
    const file = this.files[0];
    // const fullName = name + " " + surname;

    if(file) {
      const reader = new FileReader();
      imagePreview.style.display = 'block';

      reader.addEventListener('load', function() {
        imagePreview.setAttribute('src', this.result);
        // imagePreview.setAttribute('alt', fullName);
      });

      reader.readAsDataURL(file);
    } else {
      imagePreview.style.display = null;
      imagePreview.setAttribute('src', '');
      // imagePreview.setAttribute('alt', '');
    }
  });
}





function show(name) {
  document.querySelector(name).classList.add('show');
  document.querySelector(name).classList.remove('hide');
}

function hide(name) {
  document.querySelector(name).classList.add('hide');
  document.querySelector(name).classList.remove('show');
}

function showBox() {
  const radioItems = document.querySelectorAll('.radio input');

  for (let i = 0; i < radioItems.length; i++) {
    radioItems[i].addEventListener('change', function() {
      if (radioItems[i].value == 'person') {
        show('.idnumber--pesel');
        hide('.idnumber--nip');
      } else {
        show('.idnumber--nip');
        hide('.idnumber--pesel');
      }
    });
  }
}

// function isValidNip(nip) {
//   if(typeof nip !== 'string')
//       return false;

//   nip = nip.replace(/[\ \-]/gi, '');

//   let weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
//   let sum = 0;
//   let controlNumber = parseInt(nip.substring(9, 10));
//   let weightCount = weight.length;
//   for (let i = 0; i < weightCount; i++) {
//       sum += (parseInt(nip.substr(i, 1)) * weight[i]);
//   }
  
//   return sum % 11 === controlNumber;
// }

const init = function () {
  showBtnAnimation();
  showImage();
  // showBox();
  // console.log(isValidNip('95-62-360-263'));
};

document.addEventListener('DOMContentLoaded', init);