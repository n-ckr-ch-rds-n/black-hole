import * as AWS from "aws-sdk";
import {environment} from "../../environments/environment";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";

export class VoterService {
  client: DocumentClient;

  constructor() {
    AWS.config.region = environment.awsRegion;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.identityPoolId
    });
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  setUser(code: string) {

  }

}
