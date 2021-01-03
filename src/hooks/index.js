import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>First component --- Example</h3>
            <p>You cliked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

function AllHooks() {
    return (
        <React.Fragment>
            <Example />
        </React.Fragment>
    );
}

export {AllHooks};
