import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'auditAnswersId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      auditAnswersId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET auditAnswers = :auditAnswers, currentPage = :currentPage, complete = :complete, lastEditTime = :lastEditTime",
    ExpressionAttributeValues: {
      ":auditAnswers": data.auditAnswers || null,
      ":currentPage": data.currentPage || 0,
      ":complete": data.complete || false,
      ":lastEditTime" : Date.now()
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
