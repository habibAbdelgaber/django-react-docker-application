import { Alert } from "react-bootstrap";

export function Messages({variant, children}){
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}