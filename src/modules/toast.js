const popUp = () => {
  const popUp = document.querySelector('#clear-completed');
  popUp.classList.add('active');

  setTimeout(() => {
    popUp.classList.remove('active');
  }, 2500);
};

export default popUp;
