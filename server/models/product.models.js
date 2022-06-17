module.exports=(sequelize, DataTypes)=>{
    const Products = sequelize.define("Products", {
        id_product:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        product_name:{
            type: DataTypes.STRING,
            allowNull: false
        },

        product_descri:{
            type: DataTypes.STRING,
            allowNull: false
        },

        product_price: {
            type:DataTypes.INTEGER,
            allowNull: false
        },

        product_stock:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps:false},
    );

    Products.associate = (models)=>{
        Products.hasMany(models.Charts,{foreignKey:'id_product'});
    }

    return Products;
};