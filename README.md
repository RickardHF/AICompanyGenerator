# AICompanyGenerator

Welcome to the AICompanyGenerator repo. 

# What is this?

This is a singlepage application which uses calls to the Open AI API to generate suggestions for name of a company, its slogan and two colors that can be used in its logo or other. 

I created this project both to learn more about React, but mainly in order to learn more about promt engineering. 

# Parts to Pay Attention to

The main component, that handles user input and displays the output is in the file ```./src/components/AIForm.tsx```. If you want to learn more about how it works or want to make any changes, go here.

The API calls themselves are located in ```./src/pages/api/openaiCommunicator.tsx```. Here you can see how the AI model was instructed to handle and respond to the input.

# How to run

First clone this repo to your local machine. Open terminal/bash/powershell in the root folder and go to the ```src``` folder.

From there install all packages and run the project. 

```powershell
cd ./src
npm install
npm run dev
```

## What you need 

We use the OpenAI API. In order to use this you need to create your own subscription in order to get keys to be able to access the api. More information about the API etc. can be found [here](https://platform.openai.com/docs/api-reference/introduction).

In order to successfully run this you need to create a local environment file ```.env.local``` with the following content.

```env
NEXT_PUBLIC_OPENAI_API_KEY=<Your OpenAi API Key>
NEXT_PUBLIC_OPENAI_ORG_ID=<Your OpenAI organization Id>
```