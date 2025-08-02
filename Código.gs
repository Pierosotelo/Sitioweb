function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
  .setTitle('¿Que es CSS?')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
