# OnGather React Application :: Storybook <!-- omit in toc -->

## Preamble

> \_[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation
> for React, Vue, and Angular. It makes building stunning UIs organized and efficient.

**Documentation:** [Storybook Docs](https://storybook.js.org/docs/basics/introduction/)

### How to run

- Start the storybook using `npm run start:storybook`

### Adding a new story

To add a new story:

- Create the `Component.story.tsx` file in the component's folder, with all necessary stories

### Story Structure

We have broken all stories into the following structure, based on
[Atomic Design](http://atomicdesign.bradfrost.com/)
as a jumping off point, and then clarified by
[Atomic Design is messy, here's what I prefer](https://dennisreimann.de/articles/atomic-design-is-messy.html) and finally reworked a little to fit our needs.

The final result is that any story needs to be named via one of the **following 4 categories**:

#### 1. Fundamentals

These typically aren't components or modules, but a way to view the structural/stylistic decisions we have made for
the app.

_**Examples**: Default typography & colors_

e.g. Story Module/name to use with storiesOf 'Fundamentals/Default typography & colors'

#### 2. Elements

The 'basic building blocks' or smallest/simplest components in the app. _This would be akin to 'atoms' in Atomic
Design._

_**Examples**: Buttons, Headings, HeaderBackArrow_

e.g. Story name Story name to use with in title 'Elements/Buttons'

#### 3. Stacks

In this context, Stacks are everything that can contain other components. Components being defined as a collective
term for Elements and Stacks. _Essentially Modules in the article and Molecules AND Organisms from Atomic Design._

_**Examples**: ButtonGroup, AmountPreview, InputForms_

e.g. Story name Story name to use with in title'Stacks/ButtonGroup'

#### 4. Views

A View is an individual view in our app - This would typically be the root level component that is presented in a container in our app, a container that would map to a route.

_**Examples**: Home, Receive_

e.g. Story name Story name to use with in title 'Views/Home'
