function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Lenguajes de desarrollo web')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
