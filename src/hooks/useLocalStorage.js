/**
 * Provide localStorage methods
 */
export function useLocalStorgae() {
  function getItem(key) {
    localStorage.getItem(key);
  }

  function setItem(key, value) {
    localStorage.setItem(key, value);
  }

  function removeItem(key) {
    localStorage.removeItem(key);
  }

  return { getItem, setItem, removeItem };
}
