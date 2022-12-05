import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import FeedbackPage from '../pageobjects/FeedbackPage'

import Navbar from '../pageobjects/components/Navbar'

describe('Login Test', () => {
  it('Should not login with invalid username and password', async () => {
    await HomePage.visit()

    await Navbar.clickOnSignIn()

    await LoginPage.assertLoginPageIsVisible()
    await LoginPage.login('invalid-username', 'invalid-password')
    await LoginPage.assertLoginPageErrorMessage()
    await LoginPage.waitForSeconds(3)
  })
})

describe('Feedback Test', () => {
  it('Should submit the feedback form', async () => {
    await HomePage.visit()
    await HomePage.clickOnFeedbackLink()

    await FeedbackPage.submitFeedback(
      'name',
      'test@email.com',
      'subject',
      'some message'
    )

    await FeedbackPage.waitForSeconds(3)
  })
})
