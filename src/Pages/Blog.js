import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog About Four Question.
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What are the different ways to manage a state in a React
                application?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  React state management is a process for managing the data that
                  React components need in order to render themselves. This data
                  is typically stored in the component's state object. When the
                  state object changes, the component will re-render itself.
                  React state management is basically half of a React app.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How does prototypical inheritance work?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object. getPrototypeOf and
                  Object.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is a unit test? Why should we write unit tests?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Unit Testing is a type of software testing where individual
                  units or components of a software are tested. They enable you
                  to catch bugs early in the development process. Automated unit
                  tests help a great deal with regression testing. They detect
                  code smells in your codebase. For example, if you're having a
                  hard time writing unit tests for a piece of code, it might be
                  a sign that your function is too complex.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                React vs. Angular vs. Vue?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  React doesn’t propose a specific structure to be followed, and
                  with only a few lines of code you can have a simple React
                  application. UI component: React UI tools <br></br><br></br>
                  Angular is built entirely in Typescript and every project on
                  Angular is structured in modules, components and services. At
                  least, each module must have a root module and a root
                  component.UI component: In-built material tech stack<br></br><br></br>
                  The structure in Vue.js is pretty simple. All pieces are meant
                  to be self-contained, reusable components. UI component:
                  Component Libraries
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
