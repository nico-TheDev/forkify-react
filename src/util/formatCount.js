import { Fraction } from "fractional";

export default function formatCount(count) {

    if(/[a-z]/.test(count)) return count

    const newCount = Math.round(count * 10000) / 10000;
    const [int, dec] = newCount
        .toString()
        .split(".")
        .map((el) => parseInt(el, 10));

    if (!dec) return newCount;

    if (int === 0) {
        const fr = new Fraction(newCount);
        return `${fr.numerator}/${fr.denominator}`;
    } else {
        const fr = new Fraction(newCount - int);
        return `${int} ${fr.numerator}/${fr.denominator}`;
    }
}
