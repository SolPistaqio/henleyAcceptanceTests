Feature("form");

Scenario("test form", async ({ I }) => {
  const site = "http://rudev.web.henley.ru/";
  const url = site + "";
  I.amOnPage(url);
  I.click(".hamburger-menu");
  I.click(
    locate(".header-popup-menu>li").find("a").withText("Запросить звонок")
  );
  I.click(locate(".ui-selectmenu-text").at(3));
  const faOptions = await I.grabTextFromAll(".ui-menu-item-wrapper");
  for (let i = 1; i < faOptions.length; i++) {
    //const site = "http://rudev.web.henley.ch/";
    const site = "http://rudev.web.henley.ru/";
    const url = site + "";

    // const url = site + "contact?utm_redirect=test";
    const testID = String(Math.floor(Math.random() * 1000000));
    const email = testID + "@gmail.com";
    I.amOnPage(url);
    I.click(".hamburger-menu");
    I.click(
      locate(".header-popup-menu>li").find("a").withText("Запросить звонок")
    );
    I.wait(3);
    I.fillField("Имя", "СОЛ_ТЕСТ call back");
    I.fillField("Фамилия", faOptions[i]);

    I.click(locate(".ui-selectmenu-text"));
    I.pressKey("ArrowDown");
    I.pressKey("ArrowDown");
    I.pressKey("ArrowDown");
    I.pressKey("ArrowDown");
    I.pressKey("ArrowDown");
    I.pressKey("Enter");
    I.click(locate(".ui-selectmenu-text").at(2));
    I.pressKey("ArrowDown");
    I.pressKey("ArrowDown");
    I.pressKey("ArrowDown");
    I.pressKey("Enter");

    I.fillField("E-mail", email);
    //"sol.testing.henley@gmail.com");
    I.fillField("Телефон", "1234567890" + testID);
    I.click(locate(".ui-selectmenu-text").at(3));

    for (let a = 0; a < i; a++) {
      I.pressKey("ArrowDown");
    }

    I.pressKey("Enter");
    function isOdd(num) {
      return num % 2 === 1;
    }
    if (isOdd(i)) {
      I.click("Да");
    } else {
      I.click("Нет");
    }

    I.click("Отправить");

    I.wait(10);
    I.see("Thank you for your enquiry.");
  }
});
