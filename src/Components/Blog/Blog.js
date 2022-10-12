import React from 'react';

const Blog = () => {
    return (
        <div>
            <u><h2>Blog Section.</h2></u>
            <h3>What is the purpose of react router ?</h3>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <h3>How does Context API work ?</h3>
            <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            <h3>What is Ref ?</h3>
            <p>Refs provide a way to access DOM nodes or React elements created in the render method.In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.</p>
        </div>
    );
};

export default Blog;