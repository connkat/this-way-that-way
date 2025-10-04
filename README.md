# This Way That Way

## Tech Stack
This is a basic NextJS project using Tailwind and built with Typescript. There is a basic Luna API integration and small google sheets integration as well. 

It is hosted on Netlify, with all DNS/Domain management directed to Netlify as well.

For local development, this project has ESLint configured to help with code quality and formatting. You can run `npm run lint` to check for any linting errors. 

This project is mobile, tablet, and desktop friendly, so keep that in mind when you are making design changes. To test mobile view in chrome, I recommend (this extension)[https://chrome.google.com/webstore/detail/simulateur-mobile/ckejmhbmlajgoklhgbapkiccekfoccmk?hl=en-US]

## Getting Started

This is a public project on github, and can be found here: (https://github.com/connkat/this-way-that-way)[https://github.com/connkat/this-way-that-way]. When adding secrets, make sure you are using the .env file and not committing them to the repository. 

### Local Development 

1. Clone the repository to your local machine using the following command:
```
git clone git@github.com:connkat/this-way-that-way.git
```

2. To have the secrets locally, you will need a .env file. Copy the example file using the following command:
```
cp .env.example .env
```
In your new .env file, add the variables found in Netlify's environment variables. Note that there are not separate variables for development and production, as the variables are the same. 

. Install dependencies using the following command:
```
npm install
```

4. Run the development server using the following command:
```
npm run dev
```

5. Open (http://localhost:3000)[http://localhost:3000] in your browser to view the project.

### Production Deployment

To deploy to production, simply merge any changes you make to `main`. This will automatically trigger a new build and deploy to Netlify.

Please note that if you would like to make changes locally and commit them without affecting the live site, you should create a new branch and merge it into `main` when you are ready to deploy: 
```
git checkout -b your-branch-name
git add .
git commit -m "your commit message"
git push origin your-branch-name
```

### AI Advice
If you are giving prompts to an AI, make sure you mention that the styling is handled with Tailwind, otherwise it might default to Bootstrap or other styling frameworks. THere are also 3 hooks being used (useScreenSize, useScrollColor, useSplashScreen), which control some changing UI on the app, so please refer to those when you are making design changes to the interactive elements of the app.