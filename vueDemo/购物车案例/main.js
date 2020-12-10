const app = new Vue({
  el: '#app',
  data: {
    books: [
        {
          'id': 1,
          'name': '《算法导论》',
          'date': '2006-9',
          'price': 85.00,
          'count': 1
        },
        {
          'id': 2,
          'name': '《UNIX编程艺术》',
          'date': '2006-2',
          'price': 59.00,
          'count': 1
        },
        {'id': 3,
          'name': '《编程珠玑》',
          'date': '2008-10',
          'price': 39.00,
          'count': 1
        },
        {
          'id': 4,
          'name': '《代码大全》',
          'date': '2006-3',
          'price': 128.00,
          'count': 1
        }]
  },
  computed: {
    totlePrice() {
      let totlePrice = 0;
      for (let item of this.books){
        totlePrice += item['price'] * item['count']
      }
      return totlePrice;
    }
  },
  methods: {
    increment(index) {
      this.books[index]['count'] += 1;
    },
    decrement(index) {
      this.books[index]['count'] -= 1;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    }
  },
  filters: {
    showPrice(price){
      // 保留两位小数
      return '￥' + price.toFixed(2)
    }
  }
})