export default function formatText(text) {
    const origUnit = [
        "tablespoons",
        "tablespoon",
        "teaspoons",
        "teaspoon",
        "cups",
        "cup",
        "ounce",
        "ounces",
    ];
    const units = [
        "tbsp",
        "tbsp",
        "tsp",
        "tsp",
        "cups",
        "cups",
        "ounces",
        "ounces",
    ];

    const splitText = text.toLowerCase().split(" ");
    if (splitText.some((word) => origUnit.includes(word))) {
        const unitLabel = origUnit.filter((word) => splitText.includes(word));
        const unitIndex = splitText.indexOf(...unitLabel);
        const unitOrigIndex = origUnit.indexOf(...unitLabel);
        splitText[unitIndex] = units[unitOrigIndex];
        return splitText.join(" ");
    } else {
        return text.toLowerCase();
    }
}
