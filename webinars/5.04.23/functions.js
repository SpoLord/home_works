// title - назва товару
// price - ціна
// description -  опис товару
// tags - str теги

function createItem(title, price, description, tags) {
  return {
    title,
    price,
    description,
    tags,
  }
}

const shopStore = [
  createItem("butter", 15, "", "food"),
  createItem("chiken", 30, "", "food"),
  createItem("ketchup", 2, "", "food"),
  createItem("table", 50, "", "furniture"),
]

function filterByName(name, store) {
  filteredStore = []
  for (let i of store) {
    if (i.title === name) {
      filteredStore.push(i)
    }
  }
  return filteredStore
}

console.log(filterByName("butter", shopStore))
