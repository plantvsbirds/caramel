const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({
    width: 600,
    height: 800,
    deviceScaleFactor: 2,
  })
  await page.goto('http://localhost:10001');
  const targets = await page.evaluate(() => {
    const itemElems = Array.from(document.getElementsByClassName('_src_pages_list_index__item'))
    return itemElems
      .map(i => i.childNodes)
      .map(([sampleElem, nameNode]) => 
        [nameNode.innerText, sampleElem.getBoundingClientRect()])
      .map(([name, { x, y, top, left, width, height }]) =>
        [name, {x: x, y: y, width, height}])
  })

  Promise.all(targets.map(([name, clip]) =>
    page.screenshot({
      clip,
      type: 'jpeg',
      quality: 80,
      path: `content_generator/output_pic/cover_${name}.jpg`
    })
  )).then(() => {
    browser.close();
  })
})();
