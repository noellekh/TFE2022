module.exports=(sequelize, DataTypes)=>{
    const Admin = sequelize.define("Admin", {
        id_admin:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        admin_mail:{
            type:DataTypes.STRING,
            allowNull: false
        },

        admin_pw:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{timestamps:false}
    )

    return Admin;
}