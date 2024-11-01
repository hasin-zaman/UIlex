# Contributing to UIlex

Thank you for your interest in contributing to UIlex! We appreciate your efforts to improve our community-driven project. Please follow the guidelines below to ensure a smooth contribution process.

## General Guidelines

- **Maintain high standards**: Ensure that your contributions align with the overall quality of the project.
- **Follow existing coding standards**: We have applied coding standards throughout the project; please adhere to them.
- **Add your own creative elements**: We encourage you to be innovative and bring unique ideas to the project that add value to others.
- **Ensure reusability**: Components should be designed for reuse, providing value not only to others but also to yourself in future projects.

## Specific Instructions for Adding Reusable Components

To add a new reusable component to the project, please follow these steps:

1. **Create Unique Components**:
   - Your components must be your own creation and not derived from other libraries.
   - Ensure that your components are unique and provide value.

2. **Component Structure**:
   - Think of a unique name for your component and ensure it doesn't already exist in the project.
   - Create a folder with your component's name inside `src/reusable-components/[buttons, texts, etc.]`.
   - Inside this folder, add the following files:
     - **`ComponentName.jsx`**: Your main component file. Follow the naming convention already established in the project.
     - **`code.js`**: Add the code and usage examples for your component.
     - **`YourComponentPage.jsx`**: Create a page for your component, following the examples already present in the project.

3. **Update Navigation and Routes**:
   - In `lib/navlinks.js`, add your component’s navigation link.
   - In `App.jsx`, add your component’s route, wrapped in the `Main` component.

4. **Testing**:
   - Check your page to ensure everything looks good and functions properly.

5. **Making a Pull Request**:
   - Once you are satisfied with your component, go ahead and create your Pull Request (PR).
   - Don’t forget to include a screenshot of your component's page in your PR description.
   - Please submit PRs to the `dev` branch only.
  
     
## How to Contribute

### 1. Feature Requests
We love hearing your ideas! If you have a feature request, please create a new issue and describe the feature you would like to see, including its potential benefits.
### 2. Contributing Code
If you'd like to contribute code, please follow these steps:
#### Fork the Repository
1. Click the "Fork" button in the upper right corner of the repository.
2. Clone your forked repository to your local machine:
```bash

   git clone https://github.com/yourusername/Ullex.git

```
### Create a New Branch
1. **Create a new branch for your feature or bug fix:**

```bash

git checkout -b my-feature-branch

```
**Make Your Changes**

1. **Make the necessary changes to the codebase.**

2. **Ensure your code follows the project's coding style and conventions.**

3. **Add tests for any new features or changes to existing functionality.**

### Commit Your Changes

1. **Stage your changes:**

```bash

git add .

```

2. *Commit your changes with a descriptive message:*

```bash

git commit -m "Add feature: [brief description]"

```
### Push to Your Fork

*Push your changes to your forked repository:*

```bash

git push origin my-feature-branch

```
## Create a Pull Request
### Note: Please ensure that all pull requests are made to the dev branch only, not the main branch.

1. *Go to the original repository and click on "Pull Requests."*

2. *Click "New Pull Request."*

3. *Select your branch and provide a description of your changes.*

4. *Click "Create Pull Request."*




## Waiting for Review 

*A project maintainer will review your pull request. Once approved, it will be merged.*

---

You are always welcome to raise any issues you find and Thank you again for contributing to UIlex! Your efforts help us build a better community.
