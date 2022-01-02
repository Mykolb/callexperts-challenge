const {
  test1,
  test2,
  test3,
  test4,
  bonusTest,
} = require("./applicantAnswers.js");

describe("one asynchronous step", () => {
  it("test1 inserts a new color orange with an id of 5 and primary false", async () => {
    expect(await test1()).toBe(5);
  });

  it("test2 reads a color green with an id of 3 and primary false", async () => {
    const response = await test2();
    expect(response).toEqual(["green"]);
  });

  it("test3 reads all primary colors", async () => {
    const response = await test3();
    expect(response).toEqual([1, 2]);
  });
});

describe("multiple asynchronous steps", () => {
  it("test4 inserts a new color brown with an id of 8 and primary false", async () => {
    expect(await test4()).toBe("brown");
  });
});

describe("bonus", () => {
  it("can branch based on an unpredictable promise", async () => {
    const all = [...Array(5000).keys()].map(bonusTest);
    const sum = (acc, el) => acc + el;
    const total = await Promise.all(all).then((arr) => arr.reduce(sum, 0));
    expect(total).toBeGreaterThan(9500);
    expect(total).toBeLessThan(10500);
  });
});
