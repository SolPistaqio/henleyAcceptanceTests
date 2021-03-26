Feature("contact");

Scenario("test contact form", async ({ I }) => {
  const url = "https://ru.henleyglobal.com/contact/general/";
  I.amOnPage(url);

  const testID =
    "contact form test " + String(Math.floor(Math.random() * 1000000));
  I.checkOption({ name: "General[residence_permit]" });

  // I.waitForElement({ name: "General[residence_permit_country]" }, 30);
  // const allRes = await I.grabTextFromAll("#residence-permit-dropdown");
  // allRes.shift();
  // const option = allRes[1];
  // Math.floor(Math.random() * Math.floor(allRes.length))];

  // I.say(allRes);
  I.selectOption({ name: "General[residence_permit_country]" }, "Латвия");

  I.checkOption({ name: "General[citizenship_permit]" });
  I.selectOption(
    { name: "General[citizenship_permit_country]" },
    "Сент-Китс и Невис"
  );
  I.checkOption({ name: "General[real_estate]" });
  I.selectOption({ name: "General[real_estate_country]" }, "Португалия");
  I.fillField(
    "У меня есть вопрос*",
    "Общая форма обратной связи Пожалуйста, заполните краткую форму заявки, и в ближайшее время с вами свяжется специалист Henley & Partners."
  );
  I.selectOption("Обращение*", "Госпожа");
  I.fillField("Имя*", "SOL-TEST-HENLEY");
  I.fillField("Фамилия*", testID);
  I.selectOption("Гражданство", "Латвия");
  I.selectOption("Страна проживания*", "Латвия");
  I.fillField("Email*", "sol.testing.henley@gmail.com");
  I.fillField("Подтвердите e-mail*", "sol.testing.henley@gmail.com");
  I.fillField("Телефон*", String(Math.floor(Math.random() * 1000000000)));
  I.selectOption("Как вы узнали о нас?", "Прочитали новости в СМИ");
  I.checkOption("Да");
  I.click("Отправить");

  I.see("Спасибо, Ваша заявка отправлена.");
});
