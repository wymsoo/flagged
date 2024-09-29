const stories = Array.from(document.querySelectorAll('.stories__item'));
let modalContainer = document.getElementById('modal-container');
let exit = document.getElementById('exit');
stories.map(item => {
  const button = item.querySelector('button');
  
  button.addEventListener('click', () => {
    item.classList.toggle('stories__item--active');
    modalContainer.style.display="block";
  });
});

const lectureboxes = document.querySelectorAll('.lecturebox');

lectureboxes.forEach(box => {
    const lectureToggle = box.querySelector('.lecture-toggle');
    
    lectureToggle.addEventListener('click', function() {
        box.classList.toggle('active'); // Toggle active class on the lecturebox
    });
});

// let showstories = document.querySelectorAll('.stories__item');
// let modalContainer = document.getElementById('modal-container');
// let exit = document.getElementById('exit');


// showstories.forEach(story=>{
// 	const storyPic = story.querySelector('.stories__item-picture');
	
// 	storyPic.addEventListener('click', function(){
// 		modalContainer.style.display = 'block';
// 	});
// });


exit.addEventListener('click',function(){
	modalContainer.style.display = "none";
});
