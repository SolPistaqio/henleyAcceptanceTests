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
    function isOdd(num) {
      return num % 2 === 1;
    }
    //const site = "http://rudev.web.henley.ch/";
    const site = "http://rudev.web.henley.ru/";
    const url = site + "download/hpi/";
    const testID = String(Math.floor(Math.random() * 1000000));
    const email = testID + "@gmail.com";
    I.amOnPage(url);

    I.click(".ui-selectmenu-text");
    if (isOdd(i)) {
      I.click(locate(".ui-menu-item-wrapper").at(2));
    } else {
      I.click(locate(".ui-menu-item-wrapper").at(3));
    }
    I.fillField("Имя*", "СОЛ_ТЕСТ индекс");
    I.fillField("Фамилия*", faOptions[i]);

    I.click(locate(".ui-selectmenu-text").at(2));
    for (let a = 0; a < i; a++) {
      I.pressKey("ArrowDown");
    }

    I.pressKey("Enter");

    if (isOdd(i)) {
      I.click(locate(".ui-selectmenu-text").at(3));
      for (let a = -1; a < i; a++) {
        I.pressKey("ArrowDown");
      }
      I.pressKey("Enter");
    } else {
      I.checkOption("Та же, что и гражданство");
    }

    I.fillField("Ссылка на файл придет на ваш email*", email);
    //"sol.testing.henley@gmail.com");

    I.click(locate(".ui-selectmenu-text").at(4));
    for (let a = 0; a < i; a++) {
      I.pressKey("ArrowDown");
    }
    I.pressKey("Enter");
    if (isOdd(i)) {
      I.click("Да");
    } else {
      I.click("Нет");
    }
    I.click("Скачать");
    I.wait(10);

    I.see("Back to Henley Passport Index page");
  }
});
