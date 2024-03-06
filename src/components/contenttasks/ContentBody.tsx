import ContentTaskByStatus from "./ContentTaskByStatus";

const todoTasks = [
    {
        wording: "Planifier la réunion de placement",
        date: "26 - 30 Janv"
    },

    {
        wording: "Insérer une adresse email",
        date: "26 - 30 Janv"
    },

    {
        wording: "Gestion des utilisateurs",
        date: "26 - 30 Janv"
    },
    
];

const currentTasks = [
    {
        wording: "Gestion des bandeaux",
        date: "26 - 30 Janv"
    }
];

const toTestTasks = [
    {
        wording: "Gestion des menus",
        date: "26 - 30 Janv"
    }
];

const validatedTasks = [
    {
        wording: "Gestion des validations",
        date: "26 - 30 Janv"
    }
];

const finishedTasks = [
    {
        wording: "Gestion de l'authentification",
        date: "26 - 30 Janv"
    }
];

const ContentBody = () => {
    return (
        <div className="content-task-body">
            <ContentTaskByStatus status={"A faire"} tasks={todoTasks} />
            <ContentTaskByStatus status={"En cours"} tasks = {currentTasks} />
            <ContentTaskByStatus status={"A tester"} tasks = {toTestTasks} />
            <ContentTaskByStatus status={"Validée"} tasks = {validatedTasks}/>
            <ContentTaskByStatus status={"Terminée"} tasks={finishedTasks} />
        </div>
    )
}

export default ContentBody;