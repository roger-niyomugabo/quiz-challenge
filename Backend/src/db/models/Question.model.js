import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../db';

import { Option } from './Option.model';

export const Question = sequelize.define('question', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: Sequelize.literal('gen_random_uuid()')
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
});

// Question to Option association
Question.hasMany(Option, {
  foreignKey: 'questionId',
  sourceKey: 'id',
  onDelete: 'CASCADE'
});

Option.belongsTo(Question, {
  foreignKey: 'questionId',
  targetId: 'id',
  onDelete: 'CASCADE'
});
