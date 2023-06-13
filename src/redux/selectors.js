import { statusFilters } from './constants';

export const selectTasks = state => {
  // console.log('selectTasks :>>', state);
  return state.tasks.items;
};

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = state => {
  const statusFilter = selectStatusFilter(state);
  const tasks = selectTasks(state);

  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const selectTasksCounter = state => {
  const tasks = selectTasks(state);

  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
};
