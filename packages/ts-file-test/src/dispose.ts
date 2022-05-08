let count = 0;
let timer: NodeJS.Timer;

if (import.meta.hot) {
  // 调用的时候，调用的是老的模块的 accept 回调
  import.meta.hot.accept((mod) => {
    // 老的模块的 accept 回调拿到的是新的模块
    // mod.render();
  });

  import.meta.hot.dispose(() => {
    if (timer) {
      console.log('clearInterval', timer);
      clearInterval(timer);
    }
  });
}

export const render = () => {
  const el = document.querySelector<HTMLDivElement>('#dispose')!;

  timer = setInterval(() => {
    count = count + 1;
    el.innerHTML = `
    <h1>Project: ts-file-test</h1>
    <h2>File: accept.ts</h2>
    <p>count ${count}</p>
  `;
    console.log(timer);
  }, 1000);
};
