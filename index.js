let total_wrapper = document.getElementById('total_wrapper');
let capsule = document.getElementById('capsule');
let laundry = document.getElementById('laundry');
let done_washing = document.getElementById('done_washing');
let laundryClosed = document.getElementById('laundry-closed');

capsule.addEventListener(
  'dragstart',
  function (event) {
    event.dataTransfer.setData('step', 'capsule');
  },
  false
);

laundry.addEventListener(
  'dragstart',
  function (event) {
    event.dataTransfer.setData('step', 'laundry');
  },
  false
);

let washing_target = document.getElementById('washing_target');
washing_target.addEventListener('dragover', onDragOver);
washing_target.addEventListener('drop', onDragEnd);

function onDragOver(e) {
  //e.dataTransfer.setData('text', 'anything');
  e.preventDefault();
}

function onDragEnd(event) {
  let step = event.dataTransfer.getData('step');

  event.preventDefault();

  if (step === 'capsule') {
    capsule.classList.remove('active');
    laundry.classList.add('active');
    total_wrapper.classList.remove('step_capsule');
    total_wrapper.classList.add('step_washing');

    capsule.setAttribute('draggable', false);
    laundry.setAttribute('draggable', true);
  } else if (step === 'laundry') {
    laundry.classList.remove('active');
    laundry.classList.add('hide');
    washing.classList.add('active');
    done_washing.classList.add('active');

    setTimeout(finish_washing, 600);
  }
}

function finish_washing() {
  washing.classList.remove('active');
  washing.classList.add('hide');
  // laundry.classList.remove('active');

  laundryClosed.classList.remove('hide');
  laundryClosed.classList.add('active');
}
