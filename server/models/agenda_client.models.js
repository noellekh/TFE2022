module.exports = (sequelize, DataTypes) =>{
    const AgendaClient = sequelize.define ("AgendaClient",{

        ag_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

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
    AgendaClient.associate=(models)=>{
        AgendaClient.belongsTo(models.Users,{foreignKey:'user_id'})
    }

    return AgendaClient
}