addEventListener("DOMContentLoaded", () => {
	const h3_toggles = document.querySelectorAll(
		".faq .faq-list .faq-accordation h3"
	)

	h3_toggles.forEach((h3) => {
		h3.addEventListener("click", () =>{
			const accordation = h3.parentElement;
			if (accordation.classList.contains("toggle"))
				accordation.classList.remove("toggle");
			else
				accordation.classList.add("toggle");
		})
	})
})
