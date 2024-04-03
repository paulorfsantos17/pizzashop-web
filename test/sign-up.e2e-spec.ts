import { expect, test } from '@playwright/test'

test('sign-up successfully', async ({ page }) => {
  await page.goto('sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(35)999999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign-up with error', async ({ page }) => {
  await page.goto('sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(35)999999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to login page', async ({ page }) => {
  await page.goto('sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer Login' }).click()

  expect(page.url()).toContain('sign-in')
})
