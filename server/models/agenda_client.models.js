module.exports = (sequelize, DataTypes) =>{
    const AgendaClient = sequelize.define ("AgendaClient",{

        ag_date: {
            type: DataTypes.DATE,
            allowNull:false

        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },




    },{
        freezeTableName: true,
        timestamps: false
    }
    )

    return AgendaClient
}