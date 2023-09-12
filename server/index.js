const puppeteer = require('puppeteer');

const express = require('express')
const bodyParser = require('body-parser')
const port = 3001


const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// API endpoint for scraping
app.post('/scrape', async (req, res) => {
    // fetch URL and search term from request body
    const { url, searchTerm } = req.body;
    console.log(url, searchTerm)
    // create an instance of Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // if(url[0] === "h")
    // navigate to the given URL
    await page.goto(`${url}`);

    // get the source content of the page
    const content = await page.content();

    // count the number of times the search term appears in the source content
    let occurrences = 0;
    const words = content.split(' ');
    words.forEach(word => {
        if (word === `${searchTerm}`) {
            occurrences++;
        }
    });

    // close the browser
    await browser.close();
    // return the results
    const scrapeResult = {
        time: new Date(),
        url: url,
        searchTerm: searchTerm,
        occurrences: occurrences
    };
    console.log(scrapeResult)
    res.send(scrapeResult);
});


app.listen(port, () => {
    console.log(`App is whistlin and listenin on port ${port}`)
})


