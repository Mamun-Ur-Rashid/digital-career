import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='navbar'>
                <h1 className='text-center font-bold text-2xl'>Blogs</h1>
                <img className=' w h-28 top-0 right-0' src="https://i.ibb.co/4FkDTYT/Vector.png" alt="" />
            </div>
            <div className='container'>
                <div className='border-solid border-blue-200 rounded-xl shadow-xl bg-gray-100 p-24'>
                    <h2 className='underline'> 1.a: When should you use context API? </h2> <br />
                    <p>Answer: Context API: <br /> The React Context API is way for a react app to effectively produce global variables
                        that can be passed around. This is the alternative to Prop drilling or moving props from grandparent to child to parent,
                        and so on, context is also touted an easier, lighter approach to state management using Redux.
                        The props drilling problem occurs when you pass a prop somewhere down the tree. when a project grows, data passing throught props becomes choatic,
                        making the code more vulnerable and complex. To tackle this problem, we use Context API.</p>
                    <br /><br /><br />
                    <h2 className='underline'> 1.b: What is a custom hook?</h2> <br />
                    <p> Answer: Custom hook :
                        A custom hook is a special JavaScript function whose name starts with use and can be used to call other hooks. Let's take a look at
                        some major differences between a custom React JS hook and React JS components.It allows you to reuse some piece of code in several parts of
                        of your app. <br />
                    </p>
                    <br />
                    <h2 className='underline'>1.c: What is useRef?</h2><br />
                    <p>Answer: useRef:
                        <br /> A hook is ap special function which enables one use state and other react features without writing
                        ES6 class components which are generally considered difficult to understand, use and master. <br />
                        useRef hook is part of the React Hooks API, it is a function which takes a maximum of one argument and returns
                        an Object. The returned object has a property called current whose value is the argument passed to useRef.
                        If you invoke it without an argument, the returned object's current property is set to undefined.
                        The code below illustrates how to invoke the useRef hook in functional components.
                    </p>
                    <h2 className='underline'>1.d:What is useMemo?</h2><br />
                    Answer: useMemo: <br /> The useMemo Hook can be use to keep expensive, resource intensive functions from needlessly running.
                    In this example, we have an expensive function that runs on every render. when changing the count or adding a todo, you
                    notice a delay in execution.
                </div>
            </div>
        </div>
    );
};

export default Blog;
