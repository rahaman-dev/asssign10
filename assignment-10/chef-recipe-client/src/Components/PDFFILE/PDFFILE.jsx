/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  hading: {
    display: "block",
    fontSize: "25px",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  para: {
    fontSize: 15,
  },
  section: {
    margin: 25,
    padding: 10,
    borderColor: "red",
  },
  text: {
    margin: "12px",
    fontSize: 14,
    fontFamily: "Times-Roman",
  },
  pageNumber: {
    // position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFILE = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header}></Text>
        <Text style={styles.hading}>
          1. Tell us the differences between uncontrolled and controlled
          components?
        </Text>
        <Text style={styles.para}>
          In the context of software engineering and user interfaces,
          uncontrolled and controlled components refer to different ways of
          managing the state of user interface elements. An uncontrolled
          component is a UI element whose state is managed by the DOM (Document
          Object Model) instead of being managed by the component`s code. In
          other words, the component doesn`t have any internal state of its own,
          but instead, the state is determined by the current value of the DOM
          element. An example of an uncontrolled component is an HTML input
          element of type "text", where the user can type in a value and the
          current value of the input element is reflected in the DOM. On the
          other hand, a controlled component is a UI element whose state is
          managed by the component`s code. In other words, the component has an
          internal state that determines the value of the element in the DOM.
          The component`s code controls what happens when the user interacts
          with the element. An example of a controlled component is an HTML
          input element of type "checkbox", where the value of the checkbox is
          determined by the state of a variable in the component`s code. In
          summary, the main difference between uncontrolled and controlled
          components is that uncontrolled components have their state managed by
          the DOM, while controlled components have their state managed by the
          component`s code. Controlled components are often used when you want
          more control over the behavior of the UI element, while uncontrolled
          components are often used when you want the UI element to behave in a
          more "natural" way without explicit control from the code.
        </Text>

        <Text style={styles.hading}>
          2. How to validate React props using PropTypes?
        </Text>
        <Text style={styles.para}>
          React provides a built-in library called PropTypes for validating the
          data types of props passed to a component. PropTypes helps ensure that
          the correct data types are being passed as props and can catch errors
          early on in the development process. Here are the steps to validate
          React props using PropTypes:
        </Text>

        <Text style={styles.hading}>
          3. Tell us the difference between nodejs and express js?
        </Text>
        <Text style={styles.para}>
          Node.js is a JavaScript runtime built on the Chrome V8 engine that
          allows developers to run JavaScript code outside of a web browser. It
          provides an environment for executing server-side JavaScript code,
          making it possible to build server-side applications using JavaScript.
          Express.js is a web application framework built on top of Node.js. It
          provides a set of features and tools for building web applications,
          such as routing, middleware, templating engines, and much more.
          Express.js allows developers to create robust web applications quickly
          and easily by providing a simple and flexible API. The main difference
          between Node.js and Express.js is that Node.js is a JavaScript
          runtime, whereas Express.js is a web application framework. Node.js
          provides the underlying infrastructure and environment for running
          JavaScript code on the server, while Express.js provides a set of
          features and tools for building web applications on top of Node.js. In
          summary, Node.js provides the base infrastructure for building
          server-side applications with JavaScript, while Express.js provides a
          higher-level abstraction and a set of features that make it easier to
          build web applications on top of Node.js.
        </Text>

        <Text style={styles.hading}>
          4. What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text style={styles.para}>
          In React, a custom hook is a JavaScript function that uses one or more
          of the built-in React hooks (such as useState, useEffect, useContext,
          etc.) to provide a reusable piece of stateful or effectful logic that
          can be used across multiple components. Custom hooks allow you to
          abstract away complex logic and state management into a single
          function that can be used like any other React hook. You might create
          a custom hook for a variety of reasons, such as: 1. Reusing stateful
          or effectful logic across multiple components: Custom hooks make it
          easy to share stateful or effectful logic across multiple components
          without duplicating code. 2. Encapsulating complex logic: Custom hooks
          allow you to encapsulate complex logic, such as data fetching or form
          validation, into a single function that can be used in different parts
          of your application. 3. Separating concerns: Custom hooks can help you
          separate concerns and improve the organization of your code. By moving
          complex logic out of your components and into custom hooks, you can
          make your components simpler and easier to read. 4. Improving
          testability: Custom hooks can be tested in isolation, making it easier
          to write unit tests for your application logic. In summary, custom
          hooks are a powerful tool in React that allow you to abstract away
          complex logic and state management into a reusable function. You might
          create a custom hook to improve the reusability, organization, and
          testability of your code.
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFILE;
