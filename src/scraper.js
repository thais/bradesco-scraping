const puppeteer = require('puppeteer');

// request data up-front: conta, ag, digito, 2fa token, senha...
const scraper =
    async (agencia, conta, dig, token, senha) => {
        const bradescoUrl = 'https://banco.bradesco/html/classic/index.shtm';
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.setViewport({width: 1366, height: 768})

        await page.goto(bradescoUrl, {waitUntil: 'networkidle2'});
        await page.type('#AGN', agencia, {delay: 15});
        await page.type('#CTA', conta, {delay: 15});
        await page.type('#DIGCTA', dig, {delay: 15});
        await page.click('.btn-ok');
        await page.waitFor('#radNome01');
        await page.click('#radNome01');
        // 2FA
            console.log(token);
        await page.waitFor('#Password1');
        await page.type('#Password1', token, {delay: 15});

        // Internet banking virtual keyboard
        await page.waitFor('#txtPass1');
        await page.evaluate(() => {
            // Inject jQuery to be executed inside the browser
                //senha.forEach((digito) => {
                  //      console.log()
                  //      $(`#ul_teclado_virtual li a[title=${digito}]`).click();
                //});
           $('#ul_teclado_virtual li a[title=X]').click()
           $('#ul_teclado_virtual li a[title=X]').click()
           $('#ul_teclado_virtual li a[title=X]').click()
           $('#ul_teclado_virtual li a[title=X]').click()
        });

        await page.waitFor('input[title="Avançar"]');
        await page.click('input[title="Avançar"]');


        await page.waitFor('#topmenu_S');
        await page.focus('#topmenu_S');
        await page.keyboard.type('\n');


        await page.waitFor('iframe.tabindex');
        await page.waitFor(2000);
        const frames = await page.frames();
        const frameCentral = frames.find(f => f.name() == 'paginaCentral');
        await frameCentral.click('.SEC .tabindex');

        const frameContent = frames.find(f => f.name() == 'paginaCentral');
        const html = await frameContent.evaluate(el => el.innerHTML, await frameContent.$('.conteudo'));
        return html;
        pages.close();
    };


module.exports = scraper