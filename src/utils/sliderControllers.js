export function nextImage(state, setState,timeOut) {
  return function () {
    clearInterval(timeOut.current)
    if (state === 2) {
      setState(0);
    } else {
      setState(state + 1);
    }
    timeOut.current= setInterval(() => {
        setState((state) => {
       return state===2?0:state+1
      })}, 3000);
  };
}
export function prevImage(state, setState,timeOut) {
  return function () {
    clearInterval(timeOut.current)
    if (state === 0) {
      setState(2);
    } else {
      setState(state - 1);
    }
    timeOut.current= setInterval(() => {
        setState((state) => {
       return state===2?0:state+1
      })}, 3000);
  };
}
