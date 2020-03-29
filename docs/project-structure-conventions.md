# OnGather React Application :: Project Structure & Conventions <!-- omit in toc -->

## Table Of Contents <!-- omit in toc -->

- [Folder Structure](#folder-structure)
- [File and Folder Naming Conventions](#file-and-folder-naming-conventions)
- [Modules](#modules)
  - [Nesting](#nesting)
- [File Extension Conventions](#file-extension-conventions)
- [Test File Naming Conventions And Structure](#test-file-naming-conventions-and-structure)
- [Redux Conventions](#redux-conventions)

## Folder Structure

The following is the folder structure used for the project and is a variation on Neil Russell's favoured setup, the summary of which is that:

1. Feature modules are kept at src/modules
2. Keep generic, common modules inside src/common/modules
3. Keep generic, common components inside src/common/components

```shell
.
├── common
│   ├── assets
│   │   └── Logo.svg
│   ├── components
│   │   ├── Banner
│   │   │   ├── Banner.story.tsx
│   │   │   ├── Banner.styles.ts
│   │   │   ├── Banner.test.tsx
│   │   │   ├── Banner.tsx
│   │   │   └── index.ts
│   │   ├── Logo
│   │   │   ├── Logo.test.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── redux
│   │   ├── epics.ts
│   │   ├── index.ts
│   │   ├── reducers.ts
│   │   ├── store.ts
│   │   └── types.ts
│   ├── routing
│   │   ├── index.ts
│   │   ├── routes.ts
│   │   ├── routing.container.ts
│   │   ├── routing.epics.test.ts
│   │   ├── routing.epics.ts
│   │   ├── routing.navigator.tsx
│   │   └── routing.reducer.ts
│   ├── styles
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   └── index.ts
│   └── utils
│       │   └── index.ts
│       ├── logging.utils.test.ts
│       ├── logging.utils.ts
├── config
│   ├── application-configuration.ts
│   ├── index.ts
│   ├── sentry-configuration.ts
│   └── types.ts
├── lib
│   ├── typings.d.ts
│   └── vendor-typings.d.ts
└── modules
    ├── App
    │   ├── App.actions.test.ts
    │   ├── App.actions.ts
    │   ├── App.epics.test.ts
    │   ├── App.epics.ts
    │   ├── App.reducer.test.ts
    │   ├── App.reducer.ts
    │   ├── App.selectors.test.ts
    │   ├── App.selectors.ts
    │   ├── index.ts
    │   └── types.ts
```

- `common` contains all functionality right the way across the application.
  - `errors` contains all error handling code
  - `components` contains all component functionality that cuts across various other application features.
  - `modules` contains all modular functionality that cuts across application features.
  - `redux` contains all common redux functionality
  - `styles` contains all styles common across the application
  - `utils` contains all utility code in the application. If a utility needs to be broken out into several files, then it itself becomes a module in the utils folder (so e.g. utils/my-util name)
- `data` contains data with items such as translations should we need them.
- `modules` contains all for the application grouped by module/feature.

**[⬆ back to top](#table-of-contents)**

## File and Folder Naming Conventions

- React components folders use Pascal Case as per React component naming conventions e.g:
  - MyComponent
    - `MyComponent.tsx`
- All other non react component files and folders should use kebab case e.g:
  - my-great-util
    - `index.ts`
    - `a-long-file.ts`
- Utility modules are given the format `module-name.utils.ts`
- Reducers are given the format `ReducerName.reducer.ts`
- Epics are given the format `EpicName.epic.ts`
- Types (enums, interfaces) are stored at the appropriate level alongside the entities that use them and stored in a `types.ts` file at that level.

## Modules

Modules are located within the modules folder or common/modules folder and contain everything pertinent to that module. For an example module this could include:

```shell
├── SomeName.actions.test.ts
├── SomeName.actions.ts
├── SomeName.epics.test.ts
├── SomeName.epics.ts
├── SomeName.reducer.ts
├── SomeName.reducers.test.ts
├── SomeName.selectors.test.ts
├── SomeName.selectors.ts
├── assets
│   └── SomeName.svg
├── components
│   └── SomeName
│       ├── SomeName.story.tsx
│       ├── SomeName.styles.ts
│       ├── SomeName.test.tsx
│       ├── SomeName.tsx
│       └── index.ts
├── index.ts
└── types.ts
```

Within a module, components are foldered under the folder name components (see above).

- index.ts should always export all the functionality for the module so that it can be imported consistently from outside. An index.ts file could look like:

```typescript
import * as actions from './SomeName.actions'
import * as epics from './SomeName.epics'
import { initialState, reducer } from './SomeName.reducer'
import * as selectors from './SomeName.selectors'

export { actions, epics, initialState, reducer, screens, selectors }
```

### Nesting

Modules are not nested. Thus, three modules alongside each other, which all might map onto a route might include:

- UserAuthentication
- UserCreateEmail
- UserCreateEmailVerify

This concept of flatness is taken from the [Zen of Python](https://www.python.org/dev/peps/pep-0020/) - Flat is better than nested.

**[⬆ back to top](#table-of-contents)**

## File Extension Conventions

- If a Typescript file uses tsx in it then the extension should be `.tsx`
- Normal Typescript files not containing tsx should use the `.ts` extension

**[⬆ back to top](#table-of-contents)**

## Test File Naming Conventions And Structure

- Tests should follow the file name that they pertain to, but have the extension `.test.extension`. e.g:
  - Name.tsx
  - Name.test.tsx
  - Name.utils.ts
  - Name.utils.test.ts
  - Name.epic.ts
  - Name.epic.test.ts

They should appear in the same directory as the file they are testing.

**[⬆ back to top](#table-of-contents)**

## Redux Conventions

We will be using the [Ducks Modular](https://github.com/erikras/ducks-modular-redux) structure for bundling our reducers and actions. For another explanation of this proposal, please see [this article](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c).

This project uses [Redux Observable](https://redux-observable.js.org/) and thus makes use of **epics**.

[This guide](https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html) should serve as a good starting point for how to structure epics.

- All epics should be imported and combined in the file /src/common/redux/epics.ts
- The store should be defined at /src/common/redux/store.ts

[⬆ back to top](#table-of-contents)
