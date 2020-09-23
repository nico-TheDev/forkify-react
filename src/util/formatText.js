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
        "kilogram",
        "kilograms",
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
        "kg",
        "kg",
    ];
    //remove all parenthesis
    text = text.replace(/ *\([^)]*\) */g, " ");
    text = text.replace("-", " ");
    //lowercase then split
    const splitText = text.toLowerCase().split(" ");
    if (splitText.some((word) => origUnit.includes(word))) {
        const unitLabel = origUnit.filter((word) => splitText.includes(word));
        const unitIndex = splitText.indexOf(...unitLabel);
        const unitOrigIndex = origUnit.indexOf(...unitLabel);
        splitText[unitIndex] = units[unitOrigIndex];
        const combined = splitText.join(" ");

        if (combined.includes("/")) {
            if (splitText[0].includes("/")) {
                return {
                    value: Number(eval(splitText[0])),
                    unit: splitText[1],
                    ingredients: splitText.slice(2).join(" "),
                    total: Number(eval(splitText[0])),
                };
            } else {
                return {
                    value: Number(splitText[0]) + Number(eval(splitText[1])),
                    unit: splitText[2],
                    ingredients: splitText.slice(3).join(" "),
                    total: Number(splitText[0]) + Number(eval(splitText[1])),
                };
            }
        } else {
            return {
                value: splitText[0],
                unit: splitText[1],
                ingredients: splitText.slice(2).join(" "),
                total: Number(splitText[0]),
            };
        }
    } else if (/[0-9]/.test(splitText.join(" "))) {
        return {
            value: splitText[0],
            unit: splitText[1],
            ingredients: splitText.slice(2).join(" "),
            total: Number(splitText[0]),
        };
    } else {
        return {
            value: 1,
            unit: "",
            ingredients: text.toLowerCase(),
            total:""
        };
    }
}
