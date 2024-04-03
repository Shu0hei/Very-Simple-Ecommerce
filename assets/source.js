document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
  const message = `Halo saya mau beli ${product_name} - ${product_price}`
  const whatsapp = `https://wa.me/6281295307241?text=${message}`
  open(whatsapp, '_blank')
}

function chat() {
  const message = `Halo saya mau nanya nih min`
  const whatsapp = `https://wa.me/6281295307241?text=${message}`
  open(whatsapp, '_blank')
}
