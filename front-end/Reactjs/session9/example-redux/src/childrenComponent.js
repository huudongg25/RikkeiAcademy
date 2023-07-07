import { useSelector } from "react-redux";

function ChilComponent() {
    console.log('re-render');
    const state = useSelector(state => state)
    return (
        <div>
            Component Con: {state}
        </div>
    );
}

export default ChilComponent;