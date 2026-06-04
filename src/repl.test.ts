import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";


describe.each([
    { input: "  Hello World  ", expected: ["hello", "world"] },
    { input: "   TypeScript is Great!   ", expected: ["typescript", "is", "great!"] },
    { input: "   Multiple   Spaces   ", expected: ["multiple", "", "", "spaces"] },
    { input: "NoExtraSpaces", expected: ["noextraspaces"] },
    { input: "   Leading and trailing spaces   ", expected: ["leading", "and", "trailing", "spaces"] },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);

        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});