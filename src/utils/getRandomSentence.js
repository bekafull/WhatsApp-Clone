const sentences = [
	"Сенімен бәрі жақсы ма!",
	"Мен күштімін",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
	"қалайсыз.",
];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export default getRandomSentence;
