// 스크롤 시 헤더 색상 변경
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

// box_wrap 스크롤 애니메이션
const boxes = document.querySelectorAll('.work_list li');

const revealBoxes = () => {
  const triggerBottom = window.innerHeight * 0.85;

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
		box.classList.add('show');
		}
	});
};

window.addEventListener('scroll', revealBoxes);
window.addEventListener('load', revealBoxes);