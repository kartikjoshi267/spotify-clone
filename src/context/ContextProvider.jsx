import context from "./Context";

const ContextProvider = (props) => {
    const sample = async () => {
        
    }
    
    return (
        <context.Provider value={{ sample }}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider;