const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('CRUD Application', function () {
  let driver;

  this.timeout(10000);

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('should perform CRUD operations', async function () {
    await driver.get('http://localhost:5500');

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
