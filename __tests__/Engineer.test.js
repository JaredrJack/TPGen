const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "JaredrJack";
    const employeeInstance = new Engineer("Jared", 2, "jaredrjack93@icloud.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JaredrJack";
    const employeeInstance = new Engineer("Jared", 2, "jaredrjack93@icloud.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jared", 2, "jaredrjack93@icloud.com", "JaredrJack");
    expect(employeeInstance.getRole()).toBe(returnValue);
});