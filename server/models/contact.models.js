module.exports=(sequelize, DataTypes)=>{
    const Contact = sequelize.define("Contact",{
        id_contact:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        contact_name:{
            type:DataTypes.STRING,
            allowNull: false
        },

        contact_surname:{
            type:DataTypes.STRING,
            allowNull: false
        },

        contact_phone:{
            type: DataTypes.STRING,
            allowNull:false
        },

        contact_mail:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },
    {timstamps:false}
    )

    return Contact
}