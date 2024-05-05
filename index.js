import playwright from "playwright"

async function main() {
  const browser = await playwright.chromium.launch({
    headless: false,
  })

  const page = await browser.newPage()

  await page.goto("https://www.kiwi.com/en/")

  await page.locator("#cookies_accept").click()

  await page.locator('[data-test="PlacePickerInput-destination"]').click()
  await page.waitForTimeout(1000)

  await page
    .locator(
      '[data-test="PlacePickerInput-destination"] [data-test="SearchField-input"]'
    )
    .fill("milan")

  await page.getByText("Milan, Italy").click()
  await page.locator('[data-test="LandingSearchButton"]').click()
}

main()
