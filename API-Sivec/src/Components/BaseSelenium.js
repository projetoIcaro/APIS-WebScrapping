const {Builder, By, until} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromeDriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver.path).build())

let o = new chrome.Options();
o.addArguments('disable-infobars');
o.setUserPreferences({ credential_enable_service: false});
o.setUserPreferences({ ignoreHTTPSErrors: true});
o.setUserPreferences({ ignoreHTTPErrors: true});

//o.addArguments('headless');
/*DesiredCapabilities handlSSLErr = DesiredCapabilities.chrome ()       
handlSSLErr.setCapability (CapabilityType.ACCEPT_SSL_CERTS, true)
WebDriver driver = new ChromeDriver (handlSSLErr);*/

var Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    this.findAndCloseAlert = async function() {
        await this.driver.switchTo().alert().then(
            function() {
              console.log("alert detected");
              this.driver.switchTo().alert().accept();
            },
            function() {
              console.log("no alert detected");
            }
          );

        /* 
        console.log('Teste')
        let alert = await this.driver.switchTo().alert()
        console.log('aa')
        let teste = alert.getText()            
        console.log('aa')
        console.log(teste)
        alert.accept()
        console.log('aa')
        this.switchTo().defaultContent()        
        console.log('aa')
        */
    }

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