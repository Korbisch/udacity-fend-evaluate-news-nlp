import { getPolarity } from "../src/client/js/formHandler";

test("getPolarity should return positive", () => {
    expect(getPolarity("P+")).toEqual("positive");
});