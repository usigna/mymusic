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

function formValidate() {
  const form = document.getElementById('form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const radioItems = document.querySelectorAll('.radio input');
    const idnumber = document.getElementById('idnumber');
    let formErrors = [];

    function showError(item) {
      item.nextElementSibling.style.display = 'block';
      item.classList.add('error-border');
      formErrors.push("item");
    }

    if (name.value == '') {
      showError(name);
    }

    if (surname.value == '') {
      showError(surname);
    }

    function peselValidate() {
      if (idnumber.value == '' 
      || idnumber.value.length != 11 
      || isNaN(Number(idnumber.value))
      || idnumber.value.indexOf('.') != -1
      || idnumber.value.indexOf(',') != -1) {
  
        showError(idnumber);
      }
    }

    function nipValidate() {
      if (idnumber.value == '' 
      || idnumber.value.length != 10 
      || isNaN(Number(idnumber.value))
      || idnumber.value.indexOf('.') != -1
      || idnumber.value.indexOf(',') != -1) {
  
        showError(idnumber);
      }
    }

    radioItems.forEach(radioItem => {

      if (radioItem.checked) {
        if (radioItem.value == 'person') {
          peselValidate();
        }

        if (radioItem.value == 'company') {
          nipValidate();
        }
      }

      radioItem.addEventListener('change', function() {
        if (radioItem.value == 'person') {
          peselValidate();
        }

        if (radioItem.value == 'company') {
          nipValidate();
        }
      });
    })

    function removeError(item) {
      item.addEventListener('change', function() {
        item.nextElementSibling.style.display = 'none';
        item.classList.remove('error-border');
        if(formErrors.includes(item)){
          let index = formErrors.indexOf(item);
            formErrors.splice(index, 1);
          }
      });
    }

    removeError(name);
    removeError(surname);
    removeError(idnumber);
    

    if (!formErrors.length) {
      e.target.submit();
      alert('Nie znaleziono metody zapisu');
    }
  });
}

const init = function () {
  showBtnAnimation();
  showImage();
  formValidate();
};

document.addEventListener('DOMContentLoaded', init);