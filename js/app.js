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
}

function showImage() {
  const inputFile = document.querySelector('.file');
  const imagePreview = document.querySelector('.image-preview__image');

  inputFile.addEventListener('change', function() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const file = this.files[0];
    const fullName = name + " " + surname;

    if(file) {
      const reader = new FileReader();
      imagePreview.style.display = 'block';

      reader.addEventListener('load', function() {
        imagePreview.setAttribute('src', this.result);

        if (name != '' && surname != '') {
          imagePreview.setAttribute('alt', fullName);
        } else {
          imagePreview.setAttribute('alt', '');
        }
      });

      reader.readAsDataURL(file);
    } else {
      imagePreview.style.display = null;
      imagePreview.setAttribute('src', 'img/disc.png');
      imagePreview.setAttribute('alt', 'Płyta winylowa');
    }
  });
}

function activeInput() {
  const radioItems = document.querySelectorAll('.radio input');
  const pesel = document.querySelector('.pesel');
  const nip = document.querySelector('.nip');

  radioItems.forEach(item => {
    item.addEventListener('change', function() {
      if (item.value == 'person') {
        setEnabled(pesel, nip);
      } else {
        setEnabled(nip, pesel);
      }
    });
  })
}

function setEnabled(x, y) {
  x.setAttribute('enabled', '');
  x.removeAttribute('disabled', '');
  y.setAttribute('disabled', '');
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
  activeInput();
  // console.log(isValidNip('95-62-360-263'));
};

document.addEventListener('DOMContentLoaded', init);