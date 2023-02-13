export const setLsitem = (state) => {
  localStorage.setItem("task-list", JSON.stringify(state));
};
