import React, { useState } from "react";

const blogData = [
  {
    id: 1,
    ques: "When should use context api?",
    ans: `The Context API in React is a way to share state and functions
            between components without having to pass them down through props
            manually. You should use the Context API when you have data or state
            that needs to be accessed by multiple components at different levels
            in your application, but passing it down through props would be too
            cumbersome.`,
  },
  {
    id: 2,
    ques: "What is custom hook?",
    ans: `In React, a custom hook is a JavaScript function that starts with the word "use" and follows the rules of React hooks. Custom hooks allow you to extract reusable logic from components and share it across your application.

Custom hooks are an important tool for creating more modular and reusable code in React. By encapsulating stateful logic in custom hooks, you can create composable building blocks that can be reused across different components.`,
  },
  {
    id: 3,
    ques: "What is useRef?",
    ans: `One common use case for useRef is to access or manipulate a DOM element, for example to set focus on an input field or to measure its dimensions.`,
  },
  {
    id: 4,
    ques: "What is useMemo",
    ans: `The useMemo hook takes two arguments: a function that computes a value, and an array of dependencies that the computation depends on. The hook will re-compute the value whenever any of the dependencies change.`,
  },
];

import BlogItem from "./BlogItem";
const Blog = () => {
  return (
    <div className="grid gap-5 p-3 md:grid-cols-2">
      {blogData.map((blog) => (
        <BlogItem key={blog.id} {...blog}/>
      ))}
    </div>
  );
};

export default Blog;
