import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../db';

const Option = sequelize.define('option', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: Sequelize.literal('gen_random_uuid()')
  },
  option: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
});

export { Option };
