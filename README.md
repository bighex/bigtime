# Challenge #3

## App Modernization

*From:* engineering.manager@travel0.com
As we are moving through our modernization project, we’re now looking at Cruise0
which as you know has been live with Auth0 for some time. 
We have a number of elements we want to look at:
	- We are rebuilding Cruise0 as a modern web application (SPA) in ReactJS.
	- During that rebuild, we want to drive growth in the app by enabling social
		login and ensure we validate Customer emails.
	- Customer insights - the marketing team wants to introduce targeted demographic content in-app.
We think these things can be achieved with Auth0, but we aren’t sure how Auth0 can support ReactJS, social, and marketing requirements.
We are looking for guidance, a solution walkthrough, and a demonstration showing how Auth0 can help solve the above.



## Deliverable
As their TAM, you will need to design a solution and build a **PoC** (Proof of Concept) that
shows how we can help solve the above use case leveraging the Auth0 identity platform.

Your solution will, therefore, need to demonstrate the following:
```code
	1. Show how Auth0 can support the Cruise0 app modernization on ReactJS (you are free to build 
✔		the **PoC single page application** in your preferred language for demonstration purposes).
	
✔	2. Show **how a new customer can sign up**, 
✔		and **how an existing customer can sign in with email/password**, 
✔		and **Google**.

✔	3. Ensure that **customers who login with username/password** 
✔		and **Google**, 
✔		with the same email address, **will be treated as the same user.**
✔		Also known as **Account Linking**.
		
✔	4. The application should **display an error if the customer’s email address is not verified.**
	
	5. Use Auth0 features to **customize the profile page** so both 
✔		the **photo**
✔		and **country flag** are displayed 
✔		**without prompting users to input directly**.

✔	6. If the **photo and country** of the customer are known, 
✔		make sure this **information is passed back to the application** 
✔		and **shown after the user authenticates**.
```

If you aren't able to implement every item in your PoC, that's okay, but be prepared to
explain to the Travel0 team how they'd implement it based on what you demonstrate.

## Credentials
```code
Type: Single Page Application
Name: bigtime
Domain: lukmar.au.auth0.com
Client ID: *****
Client Secret: *****
```


## Auth0 - Application Settings
```code
Allowed Callback URLs: http://127.0.0.1:5500
Allowed Logout URLs: http://127.0.0.1:5500
Allowed Web Origins: http://127.0.0.1:5500
```


## Auth0 - Rules
```code
Additional Country/timezone info
"https://example.com/country": "Australia",
"https://example.com/timezone": "Australia/Brisbane",
"https://example.com/country_code": "AU",
```


## Local - Setup
```code
IDE: VS-Code
Server: VS-Code Live Server Extension = ritwickdey.liveserver
Run:
  1. Open the "bigtime" folder in VS-Code
	2. Rund Server ("Go-Live" bottom right)
```
		




# Sample 01 - Login

The purpose of this article is to demonstrate how simple it is to set up and use the new Single Page Application SDK, and authenticate a user in your application using Auth0's Universal Login Page.

## Running the Sample Application

The sample can be run locally, by cloning the repository to your machine and then following the steps below.

### Specifying Auth0 Credentials

To specify the application client ID and domain, make a copy of `auth_config.json.example` and rename it to `auth_config.json`. Then open it in a text editor and supply the values for your application:

```json
{
  "domain": "lukmar.au.auth0.com",
  "clientId": "66ITxyp0maYDsJo4PzI2TlunPjAodHTz"
}
```

### Installation

After cloning the repository, run:

```bash
$ npm install
```

This will install all of the necessary packages in order for the sample to run.

### Running the Application

This version of the application uses an [Express](https://expressjs.com) server that can serve the site from a single page. To start the app from the terminal, run:

```bash
$ npm run dev
```

## Frequently Asked Questions

We are compiling a list of questions and answers regarding the new JavaScript SDK - if you're having issues running the sample applications, [check the FAQ](https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md)!

## What is Auth0?

Auth0 helps you to:

- Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
- Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
- Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
- Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
- Analytics of how, when and where users are logging in.
- Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
