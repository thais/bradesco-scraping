const fs = require('fs');
const cheerio = require('cheerio');

const parser = (data) => {
    //const data = fs.readFileSync('extrato.html', 'utf8');
    const $ = cheerio.load(data);
    return $('table[id*=fEx] > tbody > tr').toArray().map(item => {
        const day = $(item).find('td:nth-of-type(1)').text().trim();
        const story = $(item).find('td:nth-of-type(2)').text().trim();
        const doc = $(item).find('td:nth-of-type(3)').text().trim();
        const credit = $(item).find('td:nth-of-type(4)').text().trim();
        const debit = $(item).find('td:nth-of-type(5)').text().trim();
        const amount = $(item).find('td:nth-of-type(6)').text().trim();
        return ({
            'day': day,
            'story': story,
            'doc': doc,
            'credit': credit,
            'debit': debit,
            'amount': amount,
        });

    });
}

module.exports = parser;