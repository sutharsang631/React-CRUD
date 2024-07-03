import React from 'react'

export const useEffect = () => {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    )
}
