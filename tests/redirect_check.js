Feature("form");

// urls to check:
urls = [
  "http://hgond.web.henley.ch/ru/citizenship-antigua",
  "http://hgond.web.henley.ch/ru/citizenship-antigua/",
  // "http://hgond.web.henley.ch/ru/citizenship-austria",
  // "http://hgond.web.henley.ch/ru/citizenship-austria/",
  "http://hgond.web.henley.ch/ru/citizenship-dominica",
  "http://hgond.web.henley.ch/ru/citizenship-dominica/",
  "http://hgond.web.henley.ch/ru/citizenship-grenada",
  "http://hgond.web.henley.ch/ru/citizenship-grenada/",
  "http://hgond.web.henley.ch/ru/citizenship-investment/",
  "http://hgond.web.henley.ch/ru/citizenship-investment/dual-citizenship-benefits/",
  "http://hgond.web.henley.ch/ru/citizenship-investment/dual-citizenship/",
  "http://hgond.web.henley.ch/ru/citizenship-investment/important-points/",
  "http://hgond.web.henley.ch/ru/citizenship-investment/planning/",
  "http://hgond.web.henley.ch/ru/citizenship-jordan",
  "http://hgond.web.henley.ch/ru/citizenship-jordan/",
  "http://hgond.web.henley.ch/ru/citizenship-malta",
  "http://hgond.web.henley.ch/ru/citizenship-malta/",
  "http://hgond.web.henley.ch/ru/citizenship-montenegro",
  "http://hgond.web.henley.ch/ru/citizenship-montenegro/",
  "http://hgond.web.henley.ch/ru/citizenship-north-macedonia",
  "http://hgond.web.henley.ch/ru/citizenship-north-macedonia/",
  "http://hgond.web.henley.ch/ru/citizenship-skn",
  "http://hgond.web.henley.ch/ru/citizenship-skn/",
  "http://hgond.web.henley.ch/ru/citizenship-stlucia",
  "http://hgond.web.henley.ch/ru/citizenship-stlucia/",
  "http://hgond.web.henley.ch/ru/citizenship-turkey",
  "http://hgond.web.henley.ch/ru/citizenship-turkey/",
];

Scenario("test redirect", async ({ I }) => {
  for (i = 0; i < urls1.length; i++) {
    I.amOnPage(urls[i]);
    const iwantTosee = "/residence-investment";

    I.seeInCurrentUrl(iwantTosee);
  }
});
