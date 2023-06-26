var coll = document.getElementsByClassName('collapsible');
var i;
var activeContentId = null;


function toggleContent(anchorId) {
  var content = document.getElementById(anchorId + "-content");
  // Hide the previously active content, if any
  if (activeContentId !== null) {
    var previousContent = document.getElementById(activeContentId);
    previousContent.style.display = "none";
  }
  if (content.style.display === "none") {
    content.style.display = "block";
    activeContentId = anchorId + "-content";

  } else {
    content.style.display = "none";
    activeContentId = null;
  }
}


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('activecol');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

// Sidebar

function openNav() {
  document.getElementById('mySidenav').style.display = 'block';
  // document.getElementById('mySidenav').style.height = '100%';
  // document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  // document.getElementById('mySidenav').style.height = '0';
  document.getElementById('mySidenav').style.display = 'none';
}

function openList() {
  document.querySelector('.openlist').style.display = 'block';
}

function closeList() {
  document.querySelector('.openlist').style.display = 'none';
}
function openList2() {
  document.querySelector('.openlist2').style.display = 'block';
}

function closeList2() {
  document.querySelector('.openlist2').style.display = 'none';
}
