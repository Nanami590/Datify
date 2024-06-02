const getItem = (key: string): string => {
  if (typeof window === 'undefined') return '';

  return localStorage?.getItem(key) || '';
};

const removeItem = (key: string) => {
  if (typeof window === 'undefined') return;

  localStorage?.removeItem(key);
};

const setItem = (key: string, value: string) => {
  if (typeof window === 'undefined') return;

  localStorage?.setItem(key, value);
};

export default { getItem, setItem, removeItem };
