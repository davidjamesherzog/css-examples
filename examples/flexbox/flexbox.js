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

function alignItems(id, container) {
  $(id).addEventListener('click', (value) => {
    container.style.alignItems = $(id).value;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const flexbox = $('flexbox');
  const flexbox2 = $('flexbox2');

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

  // align-items
  alignItems('align-items-center', flexbox2);
  alignItems('align-items-flex-start', flexbox2);
  alignItems('align-items-flex-end', flexbox2);
  alignItems('align-items-stretch', flexbox2);
  alignItems('align-items-baseline', flexbox2);
});
