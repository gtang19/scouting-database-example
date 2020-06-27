# Databases Proof of Concept

This repository uses easy-to-learn technologies to demonstrate basic database functionality, which could be used as supplement or alternative to Google Sheets in the future.

## Local Setup

### Basic Environment

1. Clone repository
2. Install node packages

```
npm install
```

3. Optionally install netlify-cli globally

```
npm install -g netlify-cli
```

### Netlify

1. If you don't already have one, [create a Netlify account](https://app.netlify.com/signup)
2. Authorize Netlify CLI with your account

```
netlify login
```

3. In the root directory of the repository, use Netlify CLI to initialize a project

```
netlify init
```

4. Select from the options:
   > Create & configure a new site
5. Navigate through prompts. When prompted for
   > Your build command (hugo build/yarn run build/etc):

```
npm run build
```
