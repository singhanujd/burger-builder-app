import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxilliary>
        <div>ToolBar, SideBar, BackDrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilliary>
)

export default layout;