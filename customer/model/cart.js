function CartArr(){
    this.productsCart = [];

    // Thêm sản phẩm
    this.addProduct = function(products){
        this.productsCart.push(products);
    }

}