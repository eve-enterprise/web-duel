// Fichier JavaScript principal
document.addEventListener("DOMContentLoaded", function() {
	const xEye = document.querySelector("#x_eye");
	const xEyeBg = document.querySelector("#x_eye .bg-circle");
	const yEye = document.querySelector("#y_eye");
	const yEyeBg = document.querySelector("#y_eye .bg-circle");

	document.addEventListener("mousemove", function(event) {
		const x = event.clientX;
		const y = event.clientY;

		const viewWidth = window.innerWidth;
		const viewHeight = window.innerHeight;

		const xEyeWidth = xEye.offsetWidth;
		const yEyeWidth = yEye.offsetWidth;

		const xEyeValue = (viewWidth - x) / viewWidth * 90;
		const yEyeValue = (viewHeight - y) / viewHeight * 90;

		xEyeBg.style.transform = `translate(${xEyeValue * xEyeWidth / 100}px, 0)`;
		yEyeBg.style.transform = `translate(${yEyeValue * yEyeWidth / 100}px, 0)`;
	});
});
