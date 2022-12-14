Feature("form");

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

urls1 = [
  "http://hgond.web.henley.ch/ru/country/latvia/residence-latvia",
  "http://hgond.web.henley.ch/ru/country/latvia/residence-latvia",
  "http://hgond.web.henley.ch/ru/country/luxembourg/residence-residence",
  "http://hgond.web.henley.ch/ru/country/luxembourg/residence-residence",
  "http://hgond.web.henley.ch/ru/country/malaysia/residence-malaysia",
  "http://hgond.web.henley.ch/ru/country/malaysia/residence-malaysia",
  "http://hgond.web.henley.ch/ru/country/malta/residence-malta",
  "http://hgond.web.henley.ch/ru/country/malta/residence-malta",
  "http://hgond.web.henley.ch/ru/country/mauritius/residence",
  "http://hgond.web.henley.ch/ru/country/mauritius/residence",
  "http://hgond.web.henley.ch/ru/country/monaco/residence-monaco",
  "http://hgond.web.henley.ch/ru/country/monaco/residence-monaco",
  "http://hgond.web.henley.ch/ru/country/newzealand/residence-new-zealand",
  "http://hgond.web.henley.ch/ru/country/newzealand/residence-new-zealand",
  "http://hgond.web.henley.ch/ru/country/panama/residence-panama",
  "http://hgond.web.henley.ch/ru/country/panama/residence-panama",
  "http://hgond.web.henley.ch/ru/country/portugal/residence-portugal-golden-residence-program",
  "http://hgond.web.henley.ch/ru/country/portugal/residence-portugal-golden-residence-program",
  "http://hgond.web.henley.ch/ru/country/singapore/residence-singapore",
  "http://hgond.web.henley.ch/ru/country/singapore/residence-singapore",
  "http://hgond.web.henley.ch/ru/country/spain/residence-spain",
  "http://hgond.web.henley.ch/ru/country/spain/residence-spain",
  "http://hgond.web.henley.ch/ru/country/thailand/residence-thailand",
  "http://hgond.web.henley.ch/ru/country/thailand/residence-thailand",
  "http://hgond.web.henley.ch/ru/country/united-kingdom/residence-uk",
  "http://hgond.web.henley.ch/ru/country/united-kingdom/residence-uk",
  "http://hgond.web.henley.ch/ru/country/united-arab-emirates/residence",
  "http://hgond.web.henley.ch/ru/country/united-arab-emirates/residence",
  "http://hgond.web.henley.ch/ru/country/united-states/residence-usa",
  "http://hgond.web.henley.ch/ru/country/united-states/residence-usa",
  "http://hgond.web.henley.ch/ru/country/switzerland/residence",
  "http://hgond.web.henley.ch/ru/country/switzerland/residence",
];

Scenario("test redirect", async ({ I }) => {
  for (i = 0; i < urls1.length; i++) {
    I.amOnPage(urls1[i]);
    // I.seeInCurrentUrl("/citizenship-investment");
    I.seeInCurrentUrl("/residence-investment");
  }
});
