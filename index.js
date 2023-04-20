const puppeteer = require('puppeteer')
puppeteer.launch({ headless:false,
  args: ['--start-maximized']
  }).then( async browser => {
    const page = await browser.newPage()
    await page.goto('https://www.melhorcambio.com/taxa-selic')

    const selicElement = await page.waitForSelector("#selic-hoje");
    

    const selic = await selicElement.evaluate(() => {
        let selic = document.querySelector("#selic-hoje").value 
        return selic;
      })

      
    console.log(selic);

    await page.waitForSelector("#slick-slide016 > div > div > a");
    await page.click("#slick-slide016 > div > div > a");

    await page.waitForNavigation();

    const bcElement = await page.waitForSelector("#indice-acum");
    const bc = await bcElement.evaluate(() => {
        const bc = document.querySelector("#indice-acum").value;
        return bc;
    } )
    console.log(bc);

    await page.waitForSelector('body > div.carousel-header > section > div > div > div:nth-child(26) > div > div > a')
    await page.click('body > div.carousel-header > section > div > div > div:nth-child(26) > div > div > a')

    await page.waitForNavigation();

    const ipcaElement = await page.waitForSelector('#indice-acum')
    const ipca = await ipcaElement.evaluate(() => {
        const ipca = document.querySelector("#indice-acum").value;
        return ipca
   } )

   console.log(ipca)


   await page.waitForSelector("#slick-slide02 > div > div > a")
   await page.click("#slick-slide02 > div > div > a")
   
   await page.waitForNavigation();


   const cdiElement = await page.waitForSelector("#indice-acum")
   const cdi = await cdiElement.evaluate( () => {
    const cdi = document.querySelector("#indice-acum").value
    return cdi
   })

console.log(cdi)

    await browser.close()
})