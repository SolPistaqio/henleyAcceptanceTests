Feature("form");

Scenario("test form", async ({ I }) => {
  const url = "https://www.henleyglobal.com/ru/citizenship-investment";
  // const url = "https://ru.henleyglobal.com/citizenship-investment";
  I.amOnPage(url);
  I.click("Принимаю");
  const allUrls = await I.grabAttributeFromAll(
    ".text-link-wrapper > a",
    "href"
  );

  for (i = 6; i < allUrls.length; i += 2) {
    I.amOnPage(allUrls[i]);
    I.click(
      "#section-about-citizenship > div > div > div > div.col-md-12.col-lg-6.blue-col.section-pb.section-pt > a:nth-child(5)"
    );

    const title = allUrls[i];
    const numID = String(Math.floor(Math.random() * 1000000));

    const testID = title + " " + numID;

    // I.fillField("У меня есть вопрос*", testID);

    // I.click("#consent_cost");

    // //  const email = numID + "SOL-TEST-HENLEY@mail7.io";
    I.click("#salutation-button");
    I.click("#ui-id-3");

    I.fillField("Имя*", "SOL-TEST-HENLEY");
    I.fillField("Фамилия*", testID);
    I.click("#nationality-button");
    // I.click("#ui-id-13");
    I.click(locate(".ui-menu-item-wrapper").withText("Россия"));

    I.click("#country_of_residence-button");
    //I.click("#ui-id-277");
    I.click(locate(".ui-menu-item-wrapper").withText("Россия"));

    I.fillField("Email*", `sol${numID}.testing.henley@gmail.com`);
    I.click("#lead_source_code-button");
    I.click(
      locate(".ui-menu-item-wrapper").withText(
        "Прочитали в телеграм-канале «Гражданин мира»"
      )
    );
    I.checkOption("Да");
    I.click("Отправить");

    I.see("Спасибо");
  }
});
