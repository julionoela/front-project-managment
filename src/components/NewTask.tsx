import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../app/store';
import {toogleWindowNewTask} from '../app/features/taskSlice';
import React from 'react';

const NewTask: React.FC = () => {
    const showWindowNewTask = useSelector((state:RootState) => state.task.showWindowNewTask);
    const dispatch = useDispatch();
    return (
        <div className={showWindowNewTask ? "window-create-new-task" : 'display-none '}>
            <div className="window-create-new-task-title">
                <div>Nouvelle tâche</div>
                <div>
                    <div className="action-window">
                        <div>-</div>
                        <div onClick={() => dispatch(toogleWindowNewTask())}>x</div>
                    </div>
                </div>
            </div>
            <div className="window-create-new-task-taskname">
                <input type='text' className="input-task-name" placeholder="Nom de la tâche"/>
            </div>
            <div className="window-create-new-task-attribution">
                <div className="window-create-new-task-attribution-for">Pour <span className="attribution-name">Julio RAMAMPY</span></div>  
                <div className="window-create-new-task-attribution-project"> dans <span className="attribution-project">Plan de projet</span></div> 
            </div>
            <div className="window-create-new-task-description">
                <textarea rows={17} placeholder="Description"></textarea>
            </div>
            <div className="window-create-new-task-footer">
                <div className="outils"></div>
                <span className="avatar">JR</span>
                <span className="add">+</span>
                <button className="btn-blue">Créer une tâche</button>
            </div>
        </div>
    )
}

export default NewTask;