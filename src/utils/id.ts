export function generateId(dataItems: { id: number }[]): number {
  if (dataItems.length === 0) return 1;
  return dataItems[dataItems.length - 1].id + 1;
}
