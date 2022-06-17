module.exports= (sequelize, DataTypes)=>{
    const Postal = sequelize.define("Postal", {
        id_postal:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        zip:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        town:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{timestamps: false}
    )

    return Postal;
}