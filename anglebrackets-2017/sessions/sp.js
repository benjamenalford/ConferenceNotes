const SparkPost = require('sparkpost')
const sparky = new SparkPost('256cf3f997c3fa5ebe78a8f27311966a31dbfdcb')

sparky.transmissions.send({
  options: {
    sandbox: false
  },
  content: {
    from: 'benjamen@cycleproject.org',
    subject: 'AngleBrackets API Test Email 2',
    html: '<html><body><p>see i am not a total dolt. </p></body></html>'
  },
  recipients: [
    {address: 'nick.zimmerman@sparkpost.com'}
  ]
})
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!')
    console.log(data)
  })
  .catch(err => {
    console.log('Whoops! Something went wrong')
    console.log(err)
  })
