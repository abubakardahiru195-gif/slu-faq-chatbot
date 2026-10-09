const faqs = [
    {
        question: "Where is Sule Lamido University located?",
        answer: "Sule Lamido University is located in Kafin Hausa, Jigawa State, Nigeria."
    },
    {
        question: "When was Sule Lamido University established?",
        answer: "Sule Lamido University was established by the Jigawa State Government."
    },
    {
        question: "What courses does the university offer?",
        answer: "Sule Lamido University offers various undergraduate programmes across different faculties."
    },
    {
        question: "How can I apply for admission?",
        answer: "You can apply for admission through the appropriate university admission process."
    },
    {
        question: "Where can I check my admission status?",
        answer: "You can check your admission status through the official admission portal."
    }
];

function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatbox");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    chat.innerHTML += `<p><strong>You:</strong> ${question}</p>`;

    let answer = "Sorry, I don't understand your question.";

    const userQuestion = question.toLowerCase();

    for (let faq of faqs) {
        if (userQuestion.includes("where") && faq.question.toLowerCase().includes("where")) {
            answer = faq.answer;
            break;
        }

        if (userQuestion.includes("admission") && faq.question.toLowerCase().includes("admission")) {
            answer = faq.answer;
            break;
        }

        if (userQuestion.includes("course") && faq.question.toLowerCase().includes("course")) {
            answer = faq.answer;
            break;
        }
    }

    chat.innerHTML += `<p><strong>Bot:</strong> ${answer}</p>`;

    input.value = "";
}
