const connection = require('./connection')

module.exports = {
  addSubscription,
  getSubscriptions,
}

function addSubscription(newSubscription, db = connection) {
  const { gardenId, firstName, lastName, email } = newSubscription
  return db('subscriptions').insert({
    garden_id: gardenId,
    first_name: firstName,
    last_name: lastName,
    email,
  })
}

function getSubscriptions(id, db = connection) {
  return db('subscriptions').where('garden_id', id).select()
}
