let count = 0;
let timer: NodeJS.Timer;

if (import.meta.hot) {
  console.log('import.meta.hot.data.count', import.meta.hot.data.count);
  if (!import.meta.hot.data.count) {
    import.meta.hot.data.count = 0;
  }
  count = import.meta.hot.data.count;
  // 调用的时候，调用的是老的模块的 accept 回调
  import.meta.hot.accept((mod) => {
    // 老的模块的 accept 回调拿到的是新的模块
    count = import.meta.hot!.data.count;
    mod.render();
  });

  import.meta.hot.dispose(() => {
    if (timer) {
      console.log('clearInterval', timer);
      clearInterval(timer);
    }
  });
}

export const render = () => {
  const el = document.querySelector<HTMLDivElement>('#data')!;

  timer = setInterval(() => {
    count = count + 1;
    import.meta.hot!.data.count = count;
    el.innerHTML = `
    <h1>Project: ts-file-test</h1>
    <h2>File: data.ts</h2>
    <p>count ${count}</p>
  `;
  }, 1000);
};
