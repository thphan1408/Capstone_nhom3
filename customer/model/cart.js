function CartArr(){
    this.productsCart = [];

    // Thêm sản phẩm
    this.addProduct = function(products){
        this.productsCart.push(products);
    }

    // Tìm vị trí sản phẩm
    this.findProduct = function(id){
        let index = -1;
        for(let i = 0; i < this.productsCart.length; i++){
            if(this.productsCart[i].id === id){
                index = i;
                break;
            }
        }
        return index;
    }

    // Xóa sản phẩm
    this.deleteProduct = function(id){
        let index = this.findProduct(id);
        if(index !== -1){
            this.productsCart.splice(index, 1);
        }
    }
}