import React, { useRef, useState } from 'react';
import Nav from './nav';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useLists } from './App';
import { motion } from 'framer-motion';
import NotFound from './NotFound';

const ListGoals = () => {
    const { lists, setLists } = useContext(useLists);
    const { listnum } = useParams();
    const listindex = listnum - 1;
    const goalls = lists[listindex]?.goals || [];
    const [goals, setgoals] = useState(goalls);
    const addGoalRif = useRef();
    if (!lists[listindex]) {
        
        return <NotFound/>;
    }

    const addGoal = () => {
        const gaolText = addGoalRif.current.value;

        if (gaolText) {
            const newGoal = {
                goaltext: gaolText,
                completed: false,
                id: goalls.length + 1,
            };
            const updatedGoals = [...goals, newGoal];
            setgoals(updatedGoals);

            const updatedLists = [...lists];
            updatedLists[listindex].goals = updatedGoals;
            setLists(updatedLists);

            addGoalRif.current.value = "";
            addGoalRif.current.placeholder = "add goal";
        } else {
            addGoalRif.current.placeholder = "please enter your goal!";
        }
    };

    const togglecheck = (index) => {
        const Goals = [...goals];
        Goals[index].completed = !Goals[index].completed;
        setgoals(Goals);

        const updatedLists = [...lists];
        updatedLists[listindex].goals = Goals;
        setLists(updatedLists);
    };

    const delGoal = (index) => {
        const Goals = [...goals];
        Goals.splice(index, 1);
        setgoals(Goals);

        const updatedLists = [...lists];
        updatedLists[listindex].goals = Goals;
        setLists(updatedLists);
    };

    return (
        <motion.div>
            <Nav />
            <motion.div className='listTop'
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 100, duration: 5 }}
            >
                <h1>{lists[listindex].listName}</h1>
                <div className='addgoal'>
                    <input type="text" placeholder='add goal' className='goalinput' ref={addGoalRif} />
                    <button className='addGoalbtn' onClick={addGoal}>add</button>
                </div>
            </motion.div>
            {
                goals.map((goal, index) => (
                    <motion.div key={index} className='goalsShow'
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100, duration: 5 }}
                    >
                        <div className='check' onClick={() => togglecheck(index)}>
                            <h1 style={goal.completed ? { opacity: "70%" } : {}}>{goal.completed ? "🗹" : "☐"}</h1>
                            <h1 id={goal.completed ? "done" : ""}>{goal.goaltext}</h1>
                        </div>
                        <button className='delBtn' onClick={() => delGoal(index)}>🗙</button>
                    </motion.div>
                ))
            }
        </motion.div>
    );
}

export default ListGoals;
