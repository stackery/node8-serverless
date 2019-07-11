// Load AWS SDK and create a new SQS object
const AWS = require("aws-sdk");
const sqs = new AWS.SQS();
const queueUrl = process.env.QUEUE_URL; // supplied by Function service-discovery wire
const queueName = process.env.QUEUE_NAME;
const queueArn = process.env.QUEUE_ARN;

exports.handler = async message => {
  console.log("Queue Name: ", queuename);
  console.log("Queue ARN ", queueArn);
  console.log("Queue URL", queueUrl);

  // Construct parameters for the sendMessage call
  const params = {
    MessageBody: 'New Job',
    QueueUrl: queueUrl
  };

  await sqs.sendMessage(params).promise();

  return 'Job sent to queue: ' + queueName;
}