// 任意修改文件，由于没有设置热更新，只能刷新页面
export const render = () => {
  const el = document.querySelector<HTMLDivElement>('#no-hrm')!;
  el.innerHTML = `
    <h1>Project: ts-file-test</h1>
    <h2>File: no-hrm.ts</h2>
    <p>no-hrm test</p>
  `;
};
