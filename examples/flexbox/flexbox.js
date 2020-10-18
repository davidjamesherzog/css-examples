function $(id) {
  return document.getElementById(id);
}

function flexDirection(id, container) {
  $(id).addEventListener('click', (value) => {
    container.style.flexDirection = $(id).value;
  });
}

function flexWrap(id, container) {
  $(id).addEventListener('click', (value) => {
    container.style.flexWrap = $(id).value;
  });
}

function justifyContent(id, container) {
  $(id).addEventListener('click', (value) => {
    container.style.justifyContent = $(id).value;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const flexbox = $('flexbox');

  // flex-direction
  flexDirection('column', flexbox);
  flexDirection('column-reverse', flexbox);
  flexDirection('row', flexbox);
  flexDirection('row-reverse', flexbox);

  // flex-wrap
  flexWrap('wrap', flexbox);
  flexWrap('nowrap', flexbox);
  flexWrap('wrap-reverse', flexbox);

  // justify-content
  justifyContent('center', flexbox);
  justifyContent('flex-start', flexbox);
  justifyContent('flex-end', flexbox);
  justifyContent('space-around', flexbox);
  justifyContent('space-between', flexbox);
});
