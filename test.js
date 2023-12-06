const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('CRUD Application', function () {
  let driver;

  // Increase the timeout to allow for longer test execution (adjust as needed)
  this.timeout(10000);

  // Initialize the Selenium WebDriver before running tests
  before(async function () {
    try {
      // Use headless mode for Chrome
      const capabilities = {
        'goog:chromeOptions': {
          args: ['--headless', '--disable-gpu', '--no-sandbox'],
        },
      };

      driver = await new Builder()
        .forBrowser('chrome')
        .withCapabilities(capabilities)
        .build();

      console.log('Driver initialized successfully');

      await driver.get('http://localhost:5500'); // Open the application
    } catch (error) {
      console.error('Error during driver initialization:', error);
    }
  });

  // Clean up and close the WebDriver after running tests
  after(async function () {
    try {
      if (driver) {
        await driver.quit();
        console.log('Driver quit successfully');
      }
    } catch (error) {
      console.error('Error quitting the driver:', error);
    }
  });

  it('should perform CRUD operations', async function () {
    if (!driver) {
      console.error('Driver is undefined, skipping test');
      return;
    }

    // Create operation
    const contentInput = await driver.findElement(By.id('content'));
    await contentInput.sendKeys('Test data');
    await driver.findElement(By.css('button[onclick="createData()"]')).click();

    // Read operation
    await driver.findElement(By.css('button[onclick="readData()"]')).click();
    const readContent = await contentInput.getAttribute('value');
    assert.strictEqual(
      readContent,
      'Test data',
      'Read operation failed: Content did not match'
    );

    // Update operation
    await contentInput.clear();
    await contentInput.sendKeys('Updated test data');
    await driver.findElement(By.css('button[onclick="updateData()"]')).click();

    // Read operation after update
    await driver.findElement(By.css('button[onclick="readData()"]')).click();
    const updatedContent = await contentInput.getAttribute('value');
    assert.strictEqual(
      updatedContent,
      'Updated test data',
      'Read operation after update failed: Content did not match'
    );

    // Delete operation
    await driver.findElement(By.css('button[onclick="deleteData()"]')).click();

    // Ensure that the content input is empty
    const emptyContent = await contentInput.getAttribute('value');
    assert.strictEqual(
      emptyContent,
      '',
      'Delete operation failed: Content was not cleared'
    );
  });
});
