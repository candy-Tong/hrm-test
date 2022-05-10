export const render = () => {
  const el = document.querySelector<HTMLDivElement>('#accept')!;
  el.innerHTML = `
    <h1>Project: ts-file-test</h1>
    <h2>File: accept.ts</h2>
    <p>accept test</p>
  `;
};

if (import.meta.hot) {
  // 调用的时候，调用的是老的模块的 accept 回调
  import.meta.hot.accept((mod) => {
    // 老的模块的 accept 回调拿到的是新的模块
    console.log('mod', mod);
    console.log('mod.render', mod.render);
    mod.render();
  });
}
