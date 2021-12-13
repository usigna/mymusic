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

function showImage() {
  const inputFile = document.querySelector('.input--file');
  const imagePreview = document.querySelector('.image-preview__image');
  const imageDefaultText = document.querySelector('.image-preview__default-text');
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;

  inputFile.addEventListener('change', function() {
    const file = this.files[0];
    const fullName = name + " " + surname;

    if(file) {
      const reader = new FileReader();
      imageDefaultText.style.display = 'none';
      imagePreview.style.display = 'block';

      reader.addEventListener('load', function() {
        imagePreview.setAttribute('src', this.result);
        imagePreview.setAttribute('alt', fullName);
      });

      reader.readAsDataURL(file);
    } else {
      imageDefaultText.style.display = null;
      imagePreview.style.display = null;
      imagePreview.setAttribute('src', '');
      imagePreview.setAttribute('alt', '');
    }
  });
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
  showBox();
  showImage();
  console.log(isValidNip('95-62-360-263'));
};

document.addEventListener('DOMContentLoaded', init);