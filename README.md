# sequelize cli 

npm install -g sequelize-cli


# for create migration 

sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyId:INTEGER

# for migrate
sequelize db:migrate