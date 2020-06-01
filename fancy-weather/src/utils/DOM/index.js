function addToDOM(view, elementID) {
  const container = document.querySelector(`#${elementID}`);

  container.innerHTML = view;
}

const setBackgroundImage = (url) => {
  document.body.style.backgroundImage = `url(${url})`;
};

export { addToDOM, setBackgroundImage };
