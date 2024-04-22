let cart = []
    let total = 0

    function addToCart(itemName) {
      let price
      switch (itemName) {
        case 'Lunar Pro LTE':
          price = 998
          break
        case 'Nirvana Ion ANC':
          price = 2799
          break
        case 'Enigma Z20':
          price = 3299
          break
        case 'Airdropes 71':
          price = 989
          break
        case 'Airdropes 131':
          price = 998
          break
        case 'Airdropes 161':
          price = 2799
          break
        case 'Rockerz 235 V2':
          price = 3299
          break
        case 'Airdropes 141':
          price = 989
          break
        default:
          price = 0
      }
      cart.push({name: itemName, price})
      total += price
      updateCart();

    }

    function updateCart() {
      let cartItem = document.getElementById('cart-items')
      cartItem.innerHTML = ''
      cart.forEach(item => {
        let li = document.createElement('li')
        li.textContent = `${item.name} - ${item.price}`
        cartItem.appendChild(li)
      });
      document.getElementById('total').textContent = total
    }
