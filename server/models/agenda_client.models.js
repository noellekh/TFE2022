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

        ag_client_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }



    })

    return AgendaClient
}