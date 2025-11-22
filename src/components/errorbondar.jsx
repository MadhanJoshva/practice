import { ErrorBoundary } from "react-error-boundary";

function ErrorFallBack({error,errorResetBoundary}){
    return(
        <>
        <p>Some Thing went Wrong....</p>
        <h1>{error.message}</h1>
        <button onClick={errorResetBoundary}>Try Again</button>
        </>
    )
}

export default ErrorFallBack;
