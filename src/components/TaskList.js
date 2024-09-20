import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemove, onTaskFormSubmit }) {

  const taskElements = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onRemove={onRemove}
      onTaskFormSubmit={onTaskFormSubmit}
    // onCategoryChange={onCategoryChange}

    />
  )
  )

  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;



// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;
