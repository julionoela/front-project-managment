interface TaskProps {
    wording:string,
    date: string
}

const Task = ({wording, date}: TaskProps) => {
    return (
        <div className="task-card">
            <div className="task-card-progressbar"></div>
            <div className="task-card-wording">{wording}</div>
            <div className="task-card-date">{date}</div>
        </div>
    )
}

export default Task;