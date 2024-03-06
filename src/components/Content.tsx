import ContentTask from "./contenttasks/ContentTask";
import Menu from "./Menu";
import NewTask from "./NewTask";

const Content = () => {
    return (
        <div className="d-flex content-with-menu">
           <Menu />
           <ContentTask />
           <NewTask />
        </div>
    );
}

export default Content;