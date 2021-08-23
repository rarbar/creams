export const Button = (props) => {
    console.log(props)
    return (
        <div>
            <button>{props.children}</button>
        </div>
    )
}