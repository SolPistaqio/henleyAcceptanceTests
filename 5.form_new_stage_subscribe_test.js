Feature("form");

Scenario("test form", async ({ I }) => {
  //const site = "http://rudev.web.henley.ch/";
  const site = "http://rudev.web.henley.ru/";
  const url = site + "subscribe?utm_redirect=test";
  const testID = String(Math.floor(Math.random() * 1000000));
  const email = testID + "@gmail.com";
  I.amOnPage(url);

  I.fillField("Имя", "СОЛ_ТЕСТ");
  I.fillField("Фамилия", "ФАМИЛИЯ");
  I.click(locate(".ui-selectmenu-text"));
  I.pressKey("ArrowDown");

  I.pressKey("Enter");
  I.fillField("E-mail", email);
  //"sol.testing.henley@gmail.com");
  I.fillField("Телефон", "1234567890");

  I.click(".custom-checkbox");

  I.click("Подписаться");
  I.wait(10);
  I.see("Спасибо, Ваша заявка отправлена.");
});
