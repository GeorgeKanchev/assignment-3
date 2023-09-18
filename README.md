# Endless assignment projects

## Notes, Decisions, Setup, Features

### Notes

- A good practice for API calling is to abstract the logic. This will help with API URL and standardize error handling. Not done here to not overengineer.
- @TODO notes are relevant for what I thought could be improved.
- TypeScript is not requested but added. I think it's necessary in modern applications.
- Comments are added in places where a description could help.
- No external libraries like Bootstrap or Lodash are used.
- Some packages should be updated, but this machine had older `react-scripts` and some other global ones. As a compromise, I've resolved the `critical` vulnerability packages and left the `high` vulnerability ones.

### Decisions

- Folder structure is organized by purpose
- Favicon is not provided and default is removed
- CSS files are included with each main component and child components do not have separate CSS files, this is intentional

### Setup

1. `npm install`
2. `npm start`
3. `npm test`
4. (not required) `.ENV` file can be created with `REACT_APP_API` variable that points to a different API

### Features

- A lower res callout image is display under a specific breakpoint
- 2 tests are added, one of them verifies if 4 steps are displayed and they're in specific order
- Font sizes, spacing, padding, layout is adjusted at specific breakpoints to utilize available space
- Steps are sorted by order, the most recent content version is used and previous content is removed
- A leading zero is added for each step number
- Specific font is downloaded and included with the application
- TypeScript is added
- Prettier is added

## Prettier

`.prettierc.json` - contains rules to be overriden
`.prettierignore` - Prettier won't format this content

For VS Code, create this file for autoformatting

```
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
