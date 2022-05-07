// 任意修改文件，由于没有设置热更新，只能刷新页面
export const render = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <h1>Project: ts-file-test</h1>
    <h2>File: no-hrm.ts</h2>
    <p>666</p>
  `;
};
