// 修改这个文件，依赖的 vue 文件会热更新
import { ref } from 'vue';

export function useCount() {
  const count = ref(3);
  return {
    count,
  };
}
