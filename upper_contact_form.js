Feature("form");

Scenario("test contact form", ({ I }) => {
  const url = "https://www.henleyglobal.com/ru/contact";
  const title = "contact";
  const numID = String(Math.floor(Math.random() * 1000000));

  const testID = title + " " + numID;
  I.amOnPage(url);
  I.click("Принимаю");

  I.checkOption("Интерес к получению гражданства через инвестиции");
  I.click("#ui-id-2-button");
  I.click("#ui-id-6");
  I.fillField("У меня есть вопрос*", testID);

  // //  const email = numID + "SOL-TEST-HENLEY@mail7.io";
  I.click("#salutation-button");

  I.click(locate(".ui-menu-item-wrapper").withText("Госпожа"));

  I.fillField("Имя*", "SOL-TEST-HENLEY");
  I.fillField("Фамилия*", testID);
  I.click("#nationality-button");
  I.click("#ui-id-20");
  I.checkOption("Та же, что и гражданство");

  I.fillField("E-mail*", "sol.testing.henley@gmail.com");
  I.fillField("Телефон", numID);

  I.click("#lead_source_code-button");
  I.click(
    locate(".ui-menu-item-wrapper").withText(
      "Прочитали в телеграм-канале «Гражданин мира»"
    )
  );
  I.checkOption("Да");
  I.click("Отправить");
  I.see("Спасибо, ваша заявка была успешно отправлена.");
});
