const render = (contentFn, beforeFn, afterFn) => {
    const app = document.querySelector('#app');
    if (beforeFn) beforeFn();
    app.innerHTML = contentFn();
    if (afterFn) afterFn();
}

export default render;
  