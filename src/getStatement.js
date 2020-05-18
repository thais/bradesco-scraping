const express = require('express');
const router = express.Router();
const parser = require('./parser');
const scraper = require('./scraper');

/* GET home pagen. */
router.post('/statement', async function(req, res, next) {
    const params = req.body;
    console.log(params['agencia']);
    console.log(params['conta']);
    const html = await scraper(params['agencia'], params['conta'], params['dig'], params['token'], params['senha'])
    const response = parser(html)
    res.send(response);
});

module.exports = router;
