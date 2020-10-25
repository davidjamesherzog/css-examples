function $(id) {
  return document.getElementById(id);
}

function justifyContent(id, container) {
  $(id).addEventListener('click', (value) => {
    container.style.justifyContent = $(id).value;
  });
}

function alignContent(id, container) {
  $(id).addEventListener('click', (value) => {
    container.style.alignContent = $(id).value;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = $('grid');

  // justify-content
  justifyContent('center', grid);
  justifyContent('start', grid);
  justifyContent('end', grid);
  justifyContent('space-evenly', grid);
  justifyContent('space-around', grid);
  justifyContent('space-between', grid);

  // align-items
  alignContent('align-content-center', grid);
  alignContent('align-content-start', grid);
  alignContent('align-content-end', grid);
  alignContent('align-content-space-evenly', grid);
  alignContent('align-content-space-around', grid);
  alignContent('align-content-space-between', grid);
});
