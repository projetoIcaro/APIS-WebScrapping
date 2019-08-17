const {Builder, By, until} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromeDriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver.path).build())

let o = new chrome.Options();
o.addArguments('disable-infobars');
o.setUserPreferences({ credential_enable_service: false });

// o.addArguments('headless'); // Funcionou


var Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    this.getText = async function(Element) {
        let text = await this.driver.wait(async function () {
            return await Element.getText();
        }, 5000)

        return text
    }

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    this.findByXPath = async function(xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000, 'Looking for element')
        return await this.driver.findElement(By.xpath(xpath))
    }

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };
};

module.exports = Page