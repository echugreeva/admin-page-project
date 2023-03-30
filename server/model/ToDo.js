import {Sequelize} from 'sequelize'
import db from '../config/db.js'

const {DataTypes} = Sequelize;
export const ToDo = db.define('ad_todo', {
    user_id:{
        type:DataTypes.INTEGER
    },
    to_do_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type:DataTypes.STRING
    },
    done: {
        type:DataTypes.BOOLEAN
    },
    createdAt: {
        field: 'createdat',
        type:DataTypes.DATE
    },
    updatedAt: {
        field: 'updatedat',
        type:DataTypes.DATE
    }
    },
    {
        freezeTableName: true
    }
)