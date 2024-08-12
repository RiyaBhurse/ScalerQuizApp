const correctAnswers = ['B', 'C', 'B', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Form submitted"); // Check if this is logged

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log("User Answers:", userAnswers); // Debug userAnswers array
    
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 15);
});
