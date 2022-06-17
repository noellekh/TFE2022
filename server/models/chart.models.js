module.exports = (sequelize, DataTypes) =>{
    const Charts = sequelize.define("Charts", {
        id_chart:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        chart_quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        chart_date:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }

    },
    {timestamps:false}
    )

    return Charts
}