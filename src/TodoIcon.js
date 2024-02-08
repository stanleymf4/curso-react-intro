import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';

const iconTypes = {
    "check" : <CheckSVG />,
    "delete" : <DeleteSVG />,
};

function TodoIcon( props ) {
    return (
        <span className={`Icon Icon-svg Icon-${props.type}`}>
            { iconTypes[props.type] }
        </span>
    )
}

export { TodoIcon };