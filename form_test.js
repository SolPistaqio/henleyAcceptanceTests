Feature("form");

Scenario("test form", async ({ I }) => {
  const url = "https://ru.henleyglobal.com/contact-download/";
  I.amOnPage(url);

  const allUrls = await I.grabAttributeFromAll(".col-sm-6 > a", "href");

  for (i = 0; i < allUrls.length; i++) {
    I.amOnPage(allUrls[i]);
    const title = allUrls[i];
    const numID = String(Math.floor(Math.random() * 1000000));

    const testID = title + " " + numID;

    //  const email = numID + "SOL-TEST-HENLEY@mail7.io";
    I.selectOption("Обращение*", "Госпожа");
    I.fillField("Имя*", "SOL-TEST-HENLEY");
    I.fillField("Фамилия*", testID);
    I.selectOption("Гражданство", "Латвия");
    I.selectOption("Страна проживания*", "Латвия");
    I.fillField("Email*", "sol.testing.henley@gmail.com");
    I.selectOption("Как вы узнали о нас?", "Прочитали новости в СМИ");
    I.checkOption("Да");
    I.click("Скачать");

    I.see("Спасибо, Ваша заявка отправлена.");
  }
});
