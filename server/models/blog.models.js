module.exports =(sequelize, DataTypes)=>{
    const Blog = sequelize.define("Blog",{
        id_blog:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        blog_title:{
            type:DataTypes.STRING,
            allowNull: false
        },

        blog_type:{
            type: DataTypes.STRING,
            allowNull: false
        },

        blog_content:{
            type: DataTypes.STRING,
            allowNull: false

        }

    },{timestamps: false}
    )

    return Blog;
}