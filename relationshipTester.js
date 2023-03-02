const models = require('./models');
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;


// Company.create({
//     name: "My super company"
//   })
//   .then((newCompany) => {
//     // The get() function allows you to recover only the DataValues of the object
//     console.log(newCompany.get())
//   })
//   .catch((err) => {
//     console.log("Error while company creation : ", err)
//   })


// User.bulkCreate([
//     {email: 'john-doe@domain.com', firstName: 'John',  lastName: 'DOE', companyId: 1},
//     {email: 'log_w@domain.com', firstName: 'Logan',  lastName: 'WOLVERINE', companyId: 1},
//     {email: 'john-connor@domain.com', firstName: 'John',  lastName: 'CONNOR', companyId: 1}
//   ])
//   .then((newUsers) => {
//     console.log(newUsers)
//   })
//   .catch((err) => {
//     console.log("Error while users creation : ", err)
//   })

// User.findOne({
//     where: {email: 'john-connor@domain.com'}, include: 'company'
//   })
//   .then((findedUser) => {
//     // Get the User with Company datas included
//     console.log(findedUser)
//     // Get the company record only
//     // console.log(findedUser.company)
//   })
//   .catch((err) => {
//     console.log("Error while find user : ", err)
//   })


// let currentDate = new Date();

// WorkingDay.bulkCreate([
//   {
//     weekDay: 'Monday',
//     workingDate: currentDate,
//     isWorking: true
//   },
//   {
//     weekDay: 'Tuesday',
//     workingDate: currentDate,
//     isWorking: true
//   },
//   {
//     weekDay: 'Wednesday',
//     workingDate: currentDate,
//     isWorking: false
//   }
// ])
// .then((workingDays) => {
//   User.findAll({where: {id: [1, 2, 3]}, include: ['days']})
//   .then((users) => {
//     // For user 1, 2 and 3 set the sames workingDays
//     users.forEach(user => {
//       user.setDays(workingDays) // workingDays is an array (one user hasMany workingDays)
//       .then((joinedUsersWorkingDays) => {
//         console.log(joinedUsersWorkingDays)
//       })
//       .catch((err) => console.log("Error while joining Users and WorkingDays : ", err))
//     });
//   })
//   .catch((err) => console.log("Error while Users search : ", err))
// })
// .catch((err) => console.log("Error while WorkingDay creation : ", err))
