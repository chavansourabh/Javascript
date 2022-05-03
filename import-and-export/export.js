
export const capitalizeString = str => str.toUpperCase();

// use export to reuse a code block

const capitalizeString = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
}

export { capitalizeString };
export const foo = "bar";
export const bar = "foo";

// create an export fallback with export default

export default function subtract(x, y) { return x - y; }