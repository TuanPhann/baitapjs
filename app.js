// exercise 1
//Tạo một chương trình cho phép người dùng nhập vào 2 số và cho phép người dùng chọn phép tính cộng, trừ, nhân, chia. Rồi thực hiện cộng trừ nhân chia 2 số người dùng vừa nhập rồi trả về kết quả.


// var input1 = prompt(`
//   số a là
// `)

// var num1 = +input1

// var input2 = prompt(`
//   số b là
// `)

// var num2 = +input2

// var calculation = prompt(`
//   chọn phép tính
//   1.cộng
//   2.trừ 
//   3.nhân
//   4.chia
// `)
// var isCalculation = +calculation

// function count(a, b, c) {
//     if (c === 1) {
//         const result = a + b
//         return alert(`kết quả là ${result}`)
//     } else if (c === 2) {
//         const result = a - b
//         return alert(` kết quả là ${result}`)
//     } else if (c === 3) {
//         const result = a * b
//         return alert(`kết quả là ${result}`)
//     } else if (c === 4) {
//         const result = a / b
//         return alert(`kết quả là ${result}`)
//     }

// }

// count(num1, num2, isCalculation)

// exercise 2 

// var shop = [
//     {
//         id: '1',
//         name: 'pants',
//         remain: 10,
//         price: 50
//     },
//     {
//         id: '2',
//         name: 'shirt',
//         remain: 30,
//         price: 40
//     },
//     {
//         id: '3',
//         name: 'sneaker',
//         remain: 20,
//         price: 500
//     }
// ]

// var input = prompt(`
//   vui lòng chọn sản phẩm
//   1. pants
//   2. shirt
//   3. sneaker
// `)

// var num = input.split('')


// function search(num) {
//     return shop.filter((item) => {
//         return num.includes(item.id)
//     })
// }
// var drawItem = search(num)

// var card = []
// for (var item of drawItem) {
//     var amount = prompt(`vui  lòng nhập số lượng ${item.name}`)
//     if (+amount > item.remain) {
//         alert(`lỗi: số lượng hàng không đủ vui lòng chọn lại`)
//         break;
//     }
//     card.push({ info: item, amount: +amount })
// }

// if (card.length > 0) {
//     var total = 0
//     for (var item of card) {
//         var isAmount = item.amount
//         var isPrice = item.info.price
//         total += isAmount * isPrice
//     }
//     alert(`tổng tiền cần thanh toán là ${total}`)
// }


// exercise  3

// var input = prompt(`nhập số  bất kỳ từ 1->10 vào đây để kiểm tra`)

// var isNum = +input
// var isArray = [isNum]


// var numRandom = Math.ceil(Math.random() * 10)

// function test(isNum, random) {

//     for (var num of isNum) {
//         if (+num === random) {
//             alert(`cảm ơn bạn hai số đã trùng nhau`)
//         } else if (+num > random) {
//             var result = prompt(`vui lòng nhập số nhỏ hơn`)
//             isArray.push(result)

//         } else if (+num < random) {
//             var result2 = prompt(`vui lòng nhập số lớn hơn`)
//             isArray.push(result2)

//         }

//     }
// }

// test(isArray, numRandom)