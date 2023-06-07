const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

async function openGoogle() {
	const driver = await new Builder().forBrowser(Browser.CHROME).build();
	try {
		await driver.get('https://www.google.com');
		await driver
			.findElement(By.name('q'))
			.sendKeys('zlatna nit festival', Key.RETURN);
		await driver.findElement(By.linkText('Kontakt')).click();
	} catch (error) {
		console.log(error.message);
	}
}

openGoogle();
