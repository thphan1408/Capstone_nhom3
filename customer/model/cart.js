function CartArr(){
    this.productsCart = [];
    // Thêm sản phẩm
    this.addProduct = function(products){
        this.productsCart.push(products);
    }    
    
    // Tìm vị trí sản phẩm
    this.findProduct = function(id){
        let index = -1;
        index= this.productsCart.findIndex((pro)=>pro.id===id)
        return index;
    }

    // Xóa sản phẩm
    this.deleteProduct = function(id){
        console.log(id);

        console.log("cart",this.productsCart);
        let index = this.findProduct(id);

        console.log(index);
        if(index !== -1){
            this.productsCart.splice(index, 1);
        }
    }
}