Feature("form");

Scenario("test hpi form", ({ I }) => {
  const url = "https://www.henleyglobal.com/ru/download/hpi";

  I.amOnPage(url);
  I.click("Принимаю");

  const numID = String(Math.floor(Math.random() * 1000000));

  // //  const email = numID + "SOL-TEST-HENLEY@mail7.io";
  I.click("#salutation-button");
  I.click("#ui-id-3");

  I.fillField("Имя*", "SOL-TEST-HENLEY");
  I.fillField("Фамилия*", numID);
  I.click("#nationality-button");
  // I.click("#ui-id-13");
  I.click(locate(".ui-menu-item-wrapper").withText("Россия"));

  I.click("#country_of_residence-button");
  //I.click("#ui-id-277");
  I.click(locate(".ui-menu-item-wrapper").withText("Россия"));

  I.fillField(
    "Ссылка на файл придет на ваш email*",
    `sol${numID}.testing.henley@gmail.com`
  );
  I.click("#lead_source_code-button");
  I.click(
    locate(".ui-menu-item-wrapper").withText(
      "Прочитали в телеграм-канале «Гражданин мира»"
    )
  );
  I.checkOption("Да");
  I.click("Скачать");
  I.wait(5);
  I.see("Спасибо");
});
