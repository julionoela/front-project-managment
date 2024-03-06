import Task from "./Task";

interface TaskInterface {
    wording: string,
    date: string
}

interface ContentTaskByStatusProps {
    status : string,
    tasks: TaskInterface[]
};

const ContentTaskByStatus = ({status, tasks}:ContentTaskByStatusProps) => {
    return (
        <div className="content-task-by-status">
            <div className="content-task-by-status-title">
                {status}
            </div>
            <div className="content-task-by-status-data">
                {
                    tasks.map(task => <Task wording={task.wording} date={task.date} />)         
                }
            </div>
        </div>
    );
}

export default ContentTaskByStatus