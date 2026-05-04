exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page;

    // Locators
    this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
    this.addToCartbtn = '//a[normalize-space()="Add to cart"]';
    this.cart = '#cartur';
  }

  // ============================================================
  // 🔹 Add product to cart
  // ============================================================

  async addProductToCart(productName) {

    const productList = await this.page.$$(this.productList);

    for (const product of productList) {
      if (productName === await product.textContent()) {
        await product.click();
        break;
      }
    }

    // Handle alert popup
    this.page.on('dialog', async dialog => {
      if (dialog.message().includes('added')) {
        await dialog.accept();
      }
    });

    await this.page.locator(this.addToCartbtn).click();
  }

  // ============================================================
  // 🔹 Go to Cart
  // ============================================================

  async gotoCart() {
    await this.page.locator(this.cart).click();
  }

};