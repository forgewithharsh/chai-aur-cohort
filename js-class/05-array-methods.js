const orders = [
  { dish: "Paneer Butter Masala", price: 250, spicy: false, qty: 2 },
  { dish: "Chicken Biryani", price: 180, spicy: true, qty: 1 },
  { dish: "Masala Dosa", price: 90, spicy: true, qty: 3 },
  { dish: "Veg Fried Rice", price: 120, spicy: false, qty: 2 },
  { dish: "Chole Bhature", price: 110, spicy: true, qty: 1 },
];

orders.forEach((order, index) => console.log(`#${index + 1} : ${order.dish}`));

const orderMap = orders.map((order) => {
  return `${order.dish}: ${order.price * order.qty} `;
});

console.log(orderMap);

const spicyOrders = orders.filter((order) => order.spicy);
console.log(spicyOrders);

const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.price * order.qty;
}, 0);

console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);

console.log(grouped);
