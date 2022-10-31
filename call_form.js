Feature("form");

Scenario("test call form", ({ I }) => {
  const url = "https://www.henleyglobal.com/ru/";
  I.amOnPage(url);
  I.click("Принимаю");

  I.click("body > div.cbf-button");

  const title = "call";
  const numID = String(Math.floor(Math.random() * 1000000));

  const testID = title + " " + numID;

  // //  const email = numID + "SOL-TEST-HENLEY@mail7.io";
  I.click("#salutation-button");
  I.click("#ui-id-3");

  I.fillField("Имя", "SOL-TEST-HENLEY");
  I.fillField("Фамилия", testID);
  I.click("#contactInfo_country-button");
  I.click("#ui-id-13");
  I.click("#user_interest-button");
  I.click("#ui-id-290");

  I.fillField("E-mail", "sol.testing.henley@gmail.com");
  I.fillField("Телефон", numID);

  I.click("#cbf_lead_source_code-button");
  I.click(
    locate(".ui-menu-item-wrapper").withText(
      "Прочитали в телеграм-канале «Гражданин мира»"
    )
  );
  I.checkOption("Да");
  I.click("Отправить");
  I.see("Спасибо, ваша заявка была отправлена.");
});
