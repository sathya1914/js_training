const stock = {
  name: "Wipro",
  lastPrice: 200,
  currPrice: 250,
  growth: function () {
    return this.currPrice - this.lastPrice;
  },
  growthPercent: function () {
    return this.growth() / this.lastPrice * 100;
  },
};

console.log(stock.growthPercent());