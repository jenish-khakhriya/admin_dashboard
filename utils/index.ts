export function generateId() {
  return `R${Date.now()}${Math.floor(Math.random() * 1000)}`;
}