const Product = require('../models/products');

//create product
module.exports.create = async (req,res) => {
    try{
        let product = await Product.create({name:req.body.product.name,quantity:req.body.product.quantity});
        res.status(200).json({
            data:{
                product:{
                    name:product.name,
                    quantity:product.quantity
                }
            }
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error",    
        })
    }   
}

//fetch products
module.exports.index = async (req,res) => {
    try{
        let products = await Product.find({});
        return res.status(200).json({
            data:{
                products:products
            }
        })
    }catch{
        console.log(err);
        return res.status(500).json({
            message:"internal server error",    
        })
    }
}

//delete product
module.exports.delete = async (req,res) =>{
    try {
        let product = await Product.deleteOne({_id:req.params.id});
        if(product.deletedCount == '0'){
            return res.status(404).json({
                message:"product not found",    
            })
        }
        return res.status(200).json({
            message:"product deleted",    
        })
    } catch (error) {
        console.log(err);
        return res.status(500).json({
            message:"internal server error",    
        })
    }
}

//update product quantity
module.exports.update = async (req,res) => {
    try {
        let product = await Product.findById(req.params.id);
        if(product){
            let quantity = +req.query.number;
            if(product.quantity == 0 && quantity < 0){
                return res.status(200).json({
                    data:{
                        product:product
                    },
                    message: 'quantity is already zero, you can only increment value'
                });
            }else{
                product.quantity += quantity;
                if(product.quantity < 0){
                    product.quantity = 0;
                }
            }

            product.save();
            return res.status(200).json({
                data:{
                    product:product
                },
                message: 'updated successfully'
            });
        }else{
            return res.status(404).json({
                message: 'Product Not found'
            });
        }   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"internal server error",    
        })
    }
}