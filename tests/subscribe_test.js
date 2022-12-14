Feature("form");

Scenario("test subscribe form", async ({ I }) => {
  const site = "https://www.henleyglobal.com/ru/";
  const url = site + "subscribe?utm_redirect=test";
  const testID = String(Math.floor(Math.random() * 1000000));
  const email = testID + "@gmail.com";
  I.amOnPage(url);

  I.click("Принимаю");

  I.click("#salutation-button");
  I.click("#ui-id-3");

  I.fillField("Имя", "СОЛ_ТЕСТ");
  I.fillField("Фамилия", "ФАМИЛИЯ");

  I.fillField("E-mail", email);
  //"sol.testing.henley@gmail.com");
  I.fillField("Телефон", "1234567890");

  I.click("#contactInfo_country-button");
  I.click("#ui-id-5");

  I.click(".custom-checkbox");

  I.click("Подписаться");
  I.wait(10);
  I.see("Спасибо, Ваша заявка отправлена.");
});
